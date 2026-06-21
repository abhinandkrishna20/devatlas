import Card from "../../../components/ui/Card";

import type { Post } from "../../../types/blogtypes";

interface RecentArticlesProps {
  recentPosts: Post[];
}

const RecentArticles = ({ recentPosts }: RecentArticlesProps) => {
  return (
    <Card>
      {/* Container blocks arranged vertically with proper padding */}
      <div className="Recent-articles-container flex flex-col gap-8 p-4">
        
        {recentPosts.map((post) => (
          <div 
            key={post.id} 
            className="Recent-article-card flex flex-row justify-between items-center gap-6 border-b border-red-100 pb-6 last:border-b-0 last:pb-0 group cursor-pointer"
          >
            {/* LEFT SIDE: Text Contents */}
            <div className="Recent-article-content flex-1 flex flex-col gap-1 border-b border-gray-100 pb-2 group-hover:border-amber-500 transition-colors">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b-2 border-amber-500 w-max pb-0.5 mb-1">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-950 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 font-medium">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>

            {/* RIGHT SIDE: Fixed Aspect Ratio Image */}
            <div className="Recent-article-image w-32 h-20 md:w-44 md:h-28 flex-shrink-0 overflow-hidden rounded shadow-sm">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

          </div>
        ))}

      </div>
    </Card>
  );
};

export default RecentArticles;