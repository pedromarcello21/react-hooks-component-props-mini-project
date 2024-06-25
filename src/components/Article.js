import React from "react";
// { title, date = "January 1, 1970", preview }

const Article = ({ blog }) =>{

    return(
        <>
            {blog.map(post => (
                <article key = {post.id}>
                    <h3>{post.title}</h3>
                    <small>{post.date}</small>
                    <span>{post.minutes < 30 ? post.minutes + "min read ☕️": post.minutes + "min read ☕️☕️☕️"}</span>
                    <p>{post.preview}</p>
                </article>

            ))
            }
        </>
    )
}

export default Article;