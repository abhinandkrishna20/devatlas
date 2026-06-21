# Day 05


Date: 20-06-2026 - Part two

## Goal

Today Complete the Blog Layout and Design, then organize the Data Architecture

### Concept Learned.

Today I start with design the layouts
1. Feature Post
2. Recent Articles
3. Earlier Articles
4. Banner

the code I write for the above is 

***FeaturePost***

``` TS
import Card from "../../../components/ui/Card";

const FeaturePost = ({ post }: { post: any }) => {

  return (
    <Card>
    <div className="feature-post-container flex flex-col md:flex-row gap-6">

    <div className="feature-post-main">
    <p> {post.category}</p>
      <img src={post.img} alt={post.title} />
      <div className="post-content">
        <h2>{post.title}</h2>
        {/* <p>{post.excerpt}</p> */}
        <p className="text-lg font-weight-600">{post.author} - {post.date}</p>
        <p>read time: {post.readTime}</p>
        <button>Read More</button>
      </div>
    </div>
    <div className="feature-post-side flex flex-row md:flex-col gap-4">
        <div className="side-post-1">
            <img src={post.img} alt={post.title} />
                <h3>{post.title}</h3>
        </div>
        <div className="side-post-2">
            <img src={post.img} alt={post.title} />
                <h3>{post.title}</h3>
        </div>
      </div>

    </div></Card>
  );
};

export default FeaturePost;
```

***Recent Articles***

``` TS
import Card from "../../../components/ui/Card";

const RecentArticle = () => {
  return (
    <Card>
    <div className="Recent-post-container flex flex-row md:flex-row gap-6">  
         <div className="Recent-post-1 flex flex-col gap-2">
            <div className="Recent-post-content">
                <p>Category</p>
            <h3>Recent Post 1</h3>
            </div>
            <div className="Recent-post-image">
              <img src="https://via.placeholder.com/150" alt="Post 1" />
            </div>
            

           
        </div>
        <div className="Recent-post-2 flex flex-col gap-2">
            <div className="Recent-post-content">
                <p>Category</p>
            <h3>Recent Post 2</h3>
            </div>
            <div className="Recent-post-image">
              <img src="https://via.placeholder.com/150" alt="Post 2" />
            </div>
            
          
                
        </div>
        <div className="Recent-post-3 flex flex-col gap-2">
            <div className="Recent-post-content">
                <p>Category</p>
            <h3>Recent Post 3</h3>
            </div>
            <div className="Recent-post-image">
              <img src="https://via.placeholder.com/150" alt="Post 3" />
            </div>
           
          
        </div>

      </div>
      </Card>
  );
};
  export default RecentArticle;

```
***Earlier Articles***

```TS
import Card from "../../../components/ui/Card";

const EarlierArticles = () => {
  return (
    <Card>
    <div className="Earlier-articles-container">
      <div className="Earlier-articles-1 flex flex-col gap-2">
        <p>Date of Publication</p>
        <p>Category</p>
        <h3>Earlier Article 1</h3>
        <h4>Author Name</h4>
      </div>
      <div className="Earlier-articles-2 flex flex-col gap-2">
        <p>Date of Publication</p>
        <p>Category</p>
        <h3>Earlier Article 2</h3>
        <h4>Author Name</h4>

      </div>
      <div className="Earlier-articles-3 flex flex-col gap-2">
        <p>Date of Publication</p>
        <p>Category</p>
        <h3>Earlier Article 3</h3>
        <h4>Author Name</h4>
      </div>
    </div>
    </Card>
  );
};
export default EarlierArticles;


```

***Banner Post***

```TS
import Card from "../../../components/ui/Card";

const BannerPost = () => {
  return (
    <Card >
    <div className="Banner-post-container">
        
             <div className="Banner-post-content">
                <img src="https://via.placeholder.com/600x300" alt="Banner Post" />
                <h2>Banner Post</h2>
                <p>This is a simple banner post.</p>
              </div>
        
      
    </div>
    </Card>
  );
};
export default BannerPost;

```

then I add the temporary data for the post like below

``` TS
import thumbnailImg from "../assets/Thumpnail.jpg"
export const blogPosts = [  
  {
    id: "1",
    img: thumbnailImg,
    title: "My Journey into Web Development",
    date: "2026-06-15",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["web development", "career", "personal journey"],
    category: "Career & Development",
      readTime: "3 min"

    },
    {
    id: "2",
    img: thumbnailImg,
    title: "Top 10 JavaScript Frameworks in 2024",
    date: "2026-06-16",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    author: "Mr.x",
    tags: ["JavaScript", "web development", "2024"],
    category: "JavaScript",
    readTime: "4 min"
  },
  {
    id: "3",
    img: thumbnailImg,
    title: "Getting Started with React Hooks",
    date: "2026-06-17",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["React", "JavaScript", "web development"],
    category: "React Framework",
    readTime: "6 min"
  },
  {
    id: "4",
    img: thumbnailImg,
    title: "Mastering CSS Grid Layout",
    date: "2026-06-18",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["CSS", "web development"],
    category: "Design & Styling",
    readTime: "4 min"
  },
  {
    id: "5",
    img: thumbnailImg,
    title: "Building a Full-Stack Application with Node.js and Express",
    date: "2026-06-19",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["Node.js", "Express", "web development"],
    category: "Application Development",
    readTime: "5 min"
  },
  {
    id: "6",
    img: thumbnailImg,
    title: "Understanding Asynchronous JavaScript",
    date: "2026-06-20",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["JavaScript", "web development"],
    category: "JavaScript",
    readTime: "3 min"
  },
  {
    id: "7",
    img: thumbnailImg,
    title: "A Guide to Responsive Web Design",
    date: "2026-06-21",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Mr.x",
    tags: ["web design", "CSS", "responsive design"],
    category: "Design & Styling",
    readTime: "4 min"
  },
  {
    id: "8",
    img: thumbnailImg,
    title: "Optimizing Web Performance",
    date: "2026-06-22",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["web performance", "optimization"],
    category: "Performance & Optimization",
    readTime: "5 min"
  },
  {
    id: "9",
    img: thumbnailImg,
    title: "Introduction to TypeScript",
    date: "2026-06-23",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["TypeScript", "JavaScript", "web development"],
    category: "TypeScript",
    readTime: "4 min"
    },{
    id: "10",
    img: thumbnailImg,
    title: "Exploring the MERN Stack",
    date: "2026-06-24",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mr.x",
    tags: ["MERN", "web development"],
    category: "MERN Stack",
    readTime: "5 min"

  }



];


```

here I build just a layout for the Blog, but the data integration is not done so far. I Bring it chatgpt for review, int gives that


[ChatGPT - TL Response](https://chatgpt.com/s/t_6a377c6f649c8191b8c0f52e7e3aa0f3)

[ChatGPT - TL Response](https://chatgpt.com/s/t_6a377dc0988881919395bb3a05c26f3c)

---

### Problem faced

in starting of data architecture I struggled to how to get the data and load to the components, I use the assistence of Gemini for that. it helps me to how to load like below

I asked 
> Ipo blog.ts la irukka datava FeaturePost.tsx la load pannanum, condition yenna na last ah irukka 3 ah mattum than pick pannanum, athula last id la irukkarathu main feature post ah vum remaining 2 side feature post ah vum irukanum

and it replays

``` Gemini
Intha logic-ah achieve panna, mudhala blogPosts array-oda last 3 items-ah slice panni edukanum. Athula irukkarathulaye kadaisi item (id: "10") thaan unga Main Feature Post. Matha rendu items (id: "8" matrum id: "9") unga Side Posts.

Nenga FeaturePost component-kku direct-ah antha 3 posts-ayum dynamic-ah pass pannidalaam. Keela irukka madhiri code-ah update pannunga:

1. FeaturePost component-ai call pannum edathil (e.g., BlogList.tsx or Home.tsx)
Unga main page-la blogPosts-la irunthu kadaisi 3 data-va eduthu eppadi pass panrathunu keela irukku:

TypeScript
import { blogPosts } from "./blog"; // unga path-ku yethapadi mathikonga
import FeaturePost from "./FeaturePost";

const BlogPage = () => {
  // Array-oda kadaisi 3 posts-ah mattum yedukirom
  const recentPosts = blogPosts.slice(-3); 
  
  // pop() use panni kadaisi item-ah (id: 10) Main Post-ah yedukirom
  // Ipo recentPosts array-la balance 2 items mattum thaan irukum (id: 8 and id: 9)
  const mainPost = recentPosts.pop(); 
  const sidePosts = recentPosts; // remaining 2 posts

  if (!mainPost) return null;

  return (
    <FeaturePost mainPost={mainPost} sidePosts={sidePosts} />
  );
};

export default BlogPage;
2. FeaturePost.tsx-ah update pannunga
Ipo FeaturePost component-la single post-ah prop-ah vaangama, mainPost matrum sidePosts array-va vaangi render panna porom.

TypeScript
import Card from "../../../components/ui/Card";

// TypeScript interfaces for safety
interface Post {
  id: string;
  img: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  category: string;
  readTime: string;
}

interface FeaturePostProps {
  mainPost: Post;
  sidePosts: Post[];
}

const FeaturePost = ({ mainPost, sidePosts }: FeaturePostProps) => {
  return (
    <Card>
      <div className="feature-post-container flex flex-col md:flex-row gap-6">
        
        {/* MAIN FEATURE POST (Last item - id: 10) */}
        <div className="feature-post-main flex-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {mainPost.category}
          </p>
          <img src={mainPost.img} alt={mainPost.title} className="w-full h-auto rounded-lg my-2" />
          <div className="post-content">
            <h2 className="text-2xl font-bold my-2">{mainPost.title}</h2>
            <p className="text-lg font-semibold text-gray-600">{mainPost.author} - {mainPost.date}</p>
            <p className="text-sm text-gray-500">read time: {mainPost.readTime}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded">Read More</button>
          </div>
        </div>

        {/* SIDE FEATURE POSTS (Remaining 2 items - id: 8, 9) */}
        <div className="feature-post-side flex flex-row md:flex-col gap-4 flex-1">
          {sidePosts.map((post) => (
            <div key={post.id} className="side-post flex gap-3 items-center">
              <img src={post.img} alt={post.title} className="w-24 h-24 object-cover rounded" />
              <div>
                <span className="text-xs text-blue-500 font-medium">{post.category}</span>
                <h3 className="text-md font-semibold line-clamp-2">{post.title}</h3>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
};

export default FeaturePost;
Enna panni irukkom?
.slice(-3) moolama dynamic-ah array-oda kadaisi moonu elements-ah mattum eduthom. blog.ts-la puthu data add aanalum, auto-va kadaisi 3 thaan pick aagum.

.pop() senju id 10-ah mainPost aakki, matha id 8 and 9-ah loop (map) panni side posts-la dynamic-ah render panniyachu. Unga side post-oda UI structuring-um ipo clean-ah dynamic-ah maaridum!

```

and I use the same method to all other posts


### Out Come

end of today I need to learn more about data architecture
