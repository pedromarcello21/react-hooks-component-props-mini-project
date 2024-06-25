import React from "react"

const ArticleList = ({ blog }) =>{
    return(
        <ul>
            {/* needs to be  valid jsx.  That means needs the ul parent since only one parent can be returned 
            and the returning of map needs to be wrapped in () like jsx*/}
            {blog.map(post =>(
                <li key = {post.id}>{post.title}</li>
            ))}
        </ul>   
    )
}

export default ArticleList;