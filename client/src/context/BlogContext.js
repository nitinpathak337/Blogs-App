import React from "react";

//using context api to avoid prop drilling

const BlogContext = React.createContext({
  blogsList: [],
  blogTitle: "",
  blogContent: "",
  changeTitle: () => {},
  changeContent: () => {},
  publishBlog: () => {},
});

export default BlogContext;
