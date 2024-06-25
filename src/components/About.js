import React from "react";

const About = ({image = "https://via.placeholder.com/215", alt,p}) =>{
    return(
        <aside>
            <img src = {image} alt = {alt}/>
            <p>{p}</p>
        </aside>
    )

}

export default About;