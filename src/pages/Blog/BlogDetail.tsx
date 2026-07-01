import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import { ArrowLeft, Clock, Calendar, User, Tag, Loader2 } from "lucide-react";
import { blogPosts } from "../../data/Blog/blog.ts";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // State wrappers to track asynchronous markdown file reading progress
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoadingContent, setIsLoadingContent] = useState<boolean>(true);

  const post = blogPosts.find((item) => item.id === id);

  useEffect(() => {
    // If post is not found or it doesn't specify a markdown asset, skip execution
    if (!post || !post.markdownFile) {
      setIsLoadingContent(false);
      return;
    }

    const fetchMarkdownData = async () => {
      try {
        setIsLoadingContent(true);
        // Fetch files from /public root context base folder dynamically
        const response = await fetch(`/content/${post.markdownFile}`);
        
        if (!response.ok) {
          throw new Error("Failed to load matching file resource");
        }

        const textData = await response.text();
        setMarkdownContent(textData);
      } catch (err) {
        console.error("Markdown file parsing error logic crashed:", err);
        setMarkdownContent("### Error Loading Document\nCould not compile data stream cleanly.");
      } finally {
        setIsLoadingContent(false);
      }
    };

    fetchMarkdownData();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-[#f7f4ef] rounded-lg m-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Article Not Found</h2>
        <NavLink to="/blog" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800 text-white rounded-md">
          <ArrowLeft size={16} /> Back to Blog
        </NavLink>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-gray-900 py-10 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        
        {/* BACK NAV ACTION CONTROL */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950 mb-6 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </button>

        {/* METADATA ARTICLE HEADER AREA */}
        <div className="space-y-4 mb-6">
          <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 border-y border-gray-200/60 py-3">
            <div className="flex items-center gap-1.5"><User size={16} /> <span className="font-semibold text-gray-700">{post.author}</span></div>
            <span>•</span>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> <span>{formattedDate}</span></div>
            <span>•</span>
            <div className="flex items-center gap-1.5"><Clock size={16} /> <span>{post.readTime || "5 min"} read</span></div>
          </div>
        </div>

        {/* FEATURE IMAGE */}
        <div className="overflow-hidden rounded-xl shadow-md mb-8 max-h-[420px]">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* DYNAMIC CONTENT CONTAINER HOOKING AS REACT-MARKDOWN */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-gray-700 italic border-l-4 border-amber-800 pl-4 mb-6">
            {post.excerpt}
          </p>

          {/* DYNAMIC ASYNC EVALUATION BLOCK */}
          {isLoadingContent ? (
            <div className="flex items-center justify-center py-10 gap-2 text-amber-800">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-sm font-semibold">Loading post layers content details...</span>
            </div>
          ) : (
            // Core markdown rendering component layer mapping values safely 
            <div className="markdown-body-content prose-headings:font-bold prose-h2:text-2xl prose-a:text-amber-800">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* DYNAMIC ARTICLE TAG MAPPINGS */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200/60 flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-gray-400 mr-1" />
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-200/60 text-gray-600 px-2.5 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}
</article>
      </div>
   
  );
};

export default BlogDetail;