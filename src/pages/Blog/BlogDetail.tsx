import { NavLink } from "react-router-dom";
const BlogDetail = () => {
  return (
    <div>
      <h1>Blog Detail</h1>
      <p>This is the blog detail page.</p>
      <NavLink to="/blog" className="text-blue-500 hover:underline">
        Back to Blog
      </NavLink>
    </div>
  );
};

export default BlogDetail;  