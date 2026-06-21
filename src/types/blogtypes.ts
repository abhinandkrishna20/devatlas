export interface Post {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  img: string;
  featured?: boolean;
}