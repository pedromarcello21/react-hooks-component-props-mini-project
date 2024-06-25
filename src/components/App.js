import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList.js"
import Article from "./Article.js"

console.log(blogData.posts);

function App() {
  return (
    <>
      <div className="App">
        You're on your own from here! Follow the deliverables; test things out in
        the browser as you write your code; and good luck!
      </div>
      <Header name = {blogData.name}/>
      <About image = {blogData.image} alt = {blogData.name} p ={blogData.about}/>
      <ArticleList blog = {blogData.posts}/>
      <Article blog = {blogData.posts}/>

    </>
  );
}

export default App;
