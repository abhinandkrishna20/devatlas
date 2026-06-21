import { useParams, NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "../../data/blog.ts"; // Path verify pannikonga

const BlogDetail = () => {
  // 1. URL path parameter la irukura (:id) ah edukirom
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 2. blog.ts array la irunthu matching post id oda data-va matching find panrom
  const post = blogPosts.find((item) => item.id === id);

  // 3. Fallback check: oruvelai thappana ID url la vantha error card logic display aagum
  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-[#f7f4ef] rounded-lg m-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2"> (Post Not Found)</h2>
        <p className="text-gray-500 mb-4">The article you are looking for might have been moved or deleted.</p>
        <NavLink 
          to="/blog" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800 text-white font-semibold rounded-md hover:bg-amber-950 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blog
        </NavLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-gray-900 py-10 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        
        {/* BACK ACTION BUTTON */}
        <button 
          onClick={() => navigate(-1)} // Sequential history tracking push back navigation
          className="flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950 transition-colors mb-6 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </button>

        {/* HEADER AREA */}
        <div className="space-y-4 mb-6">
          <span className="px-3 py-1 bg-slate-100 text-slate-900 text-xs font-bold rounded uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          {/* POST METADATA LOGIC CONTAINER */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 border-y border-gray-200/60 py-3">
            <div className="flex items-center gap-1.5">
              <User size={16} className="text-red-400" />
              <span className="font-semibold text-gray-700">{post.author}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-red-400" />
              <span>{post.date}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-red-400" />
              <span>{post.readTime || "5 min"} read</span>
            </div>
          </div>
        </div>

        {/* HERO IMAGE BANNER BOX */}
        <div className="overflow-hidden rounded-xl shadow-md mb-8 max-h-[420px]">
          <img 
            src={post.img} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* ARTICLE TEXT CONTENT PARAGRAPHS */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
          {/* Excerpt highlighting as bold lead text paragraph split */}
          <p className="text-xl font-medium text-gray-700 italic border-l-4 border-amber-800 pl-4 mb-6">
            {post.excerpt}
          </p>
          
            {/* Main content paragraphs */}
        </div>

        {/* DYNAMIC ARTICLE TAGS */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200/60 flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-gray-400 mr-1" />
            {post.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-xs bg-gray-200/60 text-gray-600 px-2.5 py-1 rounded hover:bg-amber-100 hover:text-amber-900 transition-colors cursor-pointer"
              >
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