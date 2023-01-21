import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogContext from "./context/BlogContext";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";
import NewBlog from "./components/NewBlog";
import "./App.css";

class App extends Component {
  //using class component and initializing the state
  state = { blogsList: [], title: "", content: "" };

  //for fetching data on render
  componentDidMount() {
    this.getList();
  }

  changeContent = (value) => {
    this.setState({ content: value });
  };

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  //function to send post request to the server
  publishBlog = async () => {
    const { title, content } = this.state;
    const blogData = { title, content };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    };

    const response = await fetch("http://localhost:3001/postBlog", options);
    if (response.ok === true) {
      alert("Blog Published Successfully");
    } else {
      alert("Error in publishing blog");
    }
    this.setState({ title: "", content: "" }, () => this.getList());
  };

  //function to send get request to the server
  getList = async () => {
    const response = await fetch("http://localhost:3001/getData");
    const data = await response.json();

    this.setState({ blogsList: data.reverse() });
  };

  render() {
    const { blogsList, title, content } = this.state;
    return (
      //using context provider to make necessary variables available for every child element
      <BlogContext.Provider
        value={{
          blogsList,
          title,
          content,
          changeContent: this.changeContent,
          changeTitle: this.changeTitle,
          publishBlog: this.publishBlog,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-blog" element={<NewBlog />} />
            <Route exact path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
      </BlogContext.Provider>
    );
  }
}

export default App;
