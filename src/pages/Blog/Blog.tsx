import React from "react";
import FeaturePost from "./UI/FeaturePost";
import EarlierArticles from "./UI/EarliterArticles";
import RecentArticles from "./UI/RecentArticles";
import BannerPost from "./UI/BannerPost";
// import { Post } from "./UI/FeaturePost";
import {blogPosts} from "../../data/blog.ts";


const Blog: React.FC = () => {
  const featurePosts = blogPosts.slice(-3);
  const mainPost = featurePosts.pop()!;
  const sidePosts = featurePosts;
  const recentPosts = blogPosts.slice(-6, -3);
  const earlierPosts = blogPosts.slice(0, -6);
  return (
    <div className="Blog-container flex flex-col gap-6 items-center justify-center">
      <BannerPost />
      <FeaturePost mainPost={mainPost} sidePosts={sidePosts} />
      <RecentArticles recentPosts={recentPosts} />
      <EarlierArticles earlierPosts={earlierPosts} />
    </div>
    );  
}
export default Blog;