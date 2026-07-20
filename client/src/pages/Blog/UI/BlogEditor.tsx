import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import InlineCode from "@editorjs/inline-code";
import { Image, Heading2 } from "lucide-react";

const BlogEditorJS: React.FC = () => {
  const [title, setTitle] = useState("");
  const editorInstanceRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    // Prevent double initialization in React StrictMode
    if (!editorInstanceRef.current) {
      const editor = new EditorJS({
        holder: "editorjs-container", // Container ID
        placeholder: "Type '/' or click to write content...",
        autofocus: true,
        tools: {
          header: {
            class: Header as any,
            inlineToolbar: true,
            config: {
              placeholder: "Enter a heading",
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List as any,
            inlineToolbar: true,
          },
          inlineCode: {
            class: InlineCode,
          },
        },
        onChange: async () => {
          // Output JSON Blocks data
          const savedData = await editor.save();
          console.log("Editor.js JSON Data:", savedData);
        },
      });

      editorInstanceRef.current = editor;
    }

    // Cleanup instance on component unmount
    return () => {
      if (editorInstanceRef.current && typeof editorInstanceRef.current.destroy === "function") {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#121417] text-[#e3e6eb] font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-32">
        
        {/* TOP META CONTROLS */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6 opacity-60">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Image size={14} />
            <span>Add Cover</span>
          </button>
          <span className="text-gray-700">•</span>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Heading2 size={14} />
            <span>Add Subheading</span>
          </button>
        </div>

        {/* TITLE FIELD */}
        <div className="mb-6">
          <textarea
            placeholder="Article Title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            rows={1}
            className="w-full bg-transparent text-4xl md:text-5xl font-black text-gray-100 placeholder-gray-700 focus:outline-none resize-none overflow-hidden leading-tight"
          />
        </div>

        {/* EDITOR.JS CONTAINER */}
        {/* Editor.js inner settings style override panna prose wrapper use panrom */}
        <div className="prose prose-invert custom-editorjs-wrapper">
          <div id="editorjs-container" className="w-full" />
        </div>

      </div>
    </div>
  );
};

export default BlogEditorJS;