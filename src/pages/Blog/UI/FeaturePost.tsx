import { NavLink } from "react-router-dom";
import Card from "../../../components/ui/Card";
import type { Post } from "../../../types/blogtypes";



interface FeaturePostProps {
  mainPost: Post;
  sidePosts: Post[];
}

const FeaturePost = ({ mainPost, sidePosts }: FeaturePostProps) => {
  // Array validation check
  if (!sidePosts || sidePosts.length < 2) return null;

  return (
    <Card>
      {/* Container configuration: Mobile-la column, Desktop-la Left-to-Right row alignment */}
      <div className="feature-post-container flex flex-col md:flex-row gap-6 p-4 bg-[#f7f4ef]">

        {/* MAIN FEATURE POST (Left side on desktop) */}
        <div className="feature-post-main flex-1 flex flex-col gap-3">
          <NavLink to={`/blog/${mainPost.id}`} className="block">
          <div className="overflow-hidden rounded-md shadow-sm">
            <img 
              src={mainPost.img} 
              alt={mainPost.title} 
              className="w-full h-[380px] object-cover hover:scale-[1.02] transition-transform duration-300" 
            />
          </div>
          <div className="post-content mt-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 cursor-pointer hover:text-amber-800 transition-colors leading-tight">
              {mainPost.title}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-gray-500 font-medium">
              <span className="text-gray-700">{mainPost.author}</span>
              <span>•</span>
              <span>{mainPost.date}</span>
            </div>
          </div>
          </NavLink>
        </div>

        {/* SIDE FEATURE POSTS (Right side on desktop - stacked vertically) */}
        <div className="feature-post-side w-full md:w-[32%] flex flex-col gap-5 ">
          {sidePosts.slice(0, 2).map((post) => (
            <div key={post.id} className="side-post flex flex-col gap-2 group cursor-pointer">
              <NavLink to={`/blog/${post.id}`} className="block">
              <div className="overflow-hidden rounded-md shadow-sm">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-md font-bold text-gray-800 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
              </NavLink>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
};

export default FeaturePost;