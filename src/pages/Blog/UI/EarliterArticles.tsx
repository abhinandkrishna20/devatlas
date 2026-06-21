import Card from "../../../components/ui/Card";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  img: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface EarlierArticlesProps {
  earlierPosts: Post[];
}

const EarlierArticles = ({ earlierPosts }: EarlierArticlesProps) => {
  // Array element handling check
  if (!earlierPosts || earlierPosts.length === 0) return null;

  return (
    <Card>
      <div className="p-6 bg-[#f7f4ef]">
        
        {/* HEADER AREA */}
        <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-3xl font-black italic text-gray-950 uppercase tracking-tight">
            Earlier
          </h2>
          <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">
            Older posts, in reverse
          </span>
        </div>

        {/* DYNAMIC LIST CONTAINER */}
        <div className="Earlier-articles-container flex flex-col">
          {earlierPosts.map((post) => {
            // Format Date safely (e.g., "2026-06-15" to "June 15, 2026")
            const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <div 
                key={post.id} 
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-4 border-b border-gray-100 last:border-b-0 group cursor-pointer"
              >
                {/* 1. DATE FIELD (Fixed Width on Desktop) */}
                <div className="w-28 flex-shrink-0 text-xs font-bold text-gray-400">
                  {formattedDate}
                </div>

                {/* 2. CATEGORY FIELD (Fixed Width on Desktop) */}
                <div className="w-28 flex-shrink-0 text-xs font-black text-gray-400 uppercase tracking-wider">
                  {post.category}
                </div>

                {/* 3. TITLE FIELD (Expands to take remaining middle space) */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                </div>

                {/* 4. AUTHOR FIELD (Right Aligned on Desktop) */}
                <div className="text-xs md:text-sm text-gray-400 md:text-right font-medium">
                  by <span className="text-gray-500 underline decoration-gray-300 group-hover:text-amber-800 group-hover:decoration-amber-800 transition-colors">{post.author}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </Card>
  );
};

export default EarlierArticles;