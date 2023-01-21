import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import BlogContext from "../../context/BlogContext";

import "./index.css";

//Blog Post Screen Route
const BlogPost = () => {
  //using useParams hook to get path parameter
  const { id } = useParams();

  return (
    <BlogContext.Consumer>
      {(value) => {
        const { blogsList } = value;

        //filtering the blogItem based on id
        const blogItem = blogsList.filter((eachItem) => eachItem._id === id);

        if (blogItem.length === 0) {
          //showing loader on reloading

          return (
            <div className="loader-container">
              <Bars color="cyan" />
            </div>
          );
        }

        //destructing title and body from blog item to render on webpage
        const { title, body } = blogItem[0];

        return (
          <div className="bg">
            <nav className="navbar">
              <h1 className="heading">Eqaim Blog</h1>
            </nav>
            <div className="blog-post-content">
              <Link to="/" className="home-icon-container">
                <svg
                  width="42"
                  height="54"
                  viewBox="0 0 42 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 27L21 1L41 27"
                    stroke="#000001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.15385 33V53H34.8462V33"
                    stroke="#000001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="blog-post">
                <h1 className="blog-title">{title}</h1>
                <p className="blog-body">{body}</p>
              </div>
            </div>
          </div>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default BlogPost;
