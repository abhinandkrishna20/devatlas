import React from "react";
import FeaturePost from "./UI/FeaturePost";
import EarlierArticles from "./UI/EarliterArticles";
import RecentArticles from "./UI/RecentArticles";
import BannerPost from "./UI/BannerPost";
// import { Post } from "./UI/FeaturePost";
import { blogPosts } from "../../data/Blog/blog.ts";



const Blog: React.FC = () => {
  const featurePosts = blogPosts.slice(-3);
  const mainPost = featurePosts.pop()!;
  const sidePosts = featurePosts;
  const recentPosts = blogPosts.slice(-6, -3);
  const earlierPosts = blogPosts.slice(0, -6);
  return (
    <div className="Blog-container bg-[#1a1d27]  justify-center items-center rounded-xl p-6 pt-8 pb-16 font-sans">
      <BannerPost />
      <FeaturePost mainPost={mainPost} sidePosts={sidePosts} />
      <RecentArticles recentPosts={recentPosts} />
      <EarlierArticles earlierPosts={earlierPosts} />
    </div>
  );
}
export default Blog;