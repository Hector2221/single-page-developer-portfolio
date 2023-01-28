import React from "react";
import "./about.css"

const lenguajes = [
    {
        idiom: 'Html',
        exp: '4 Years Experience'
    },
    {
        idiom: 'CSS',
        exp: '4 Years Experience'
    },
    {
        idiom: 'Javascript',
        exp: '4 Years Experience'
    },
    {
        idiom: 'Accessibility',
        exp: '4 Years Experience'
    },
    {
        idiom: 'React',
        exp: '3 Years Experience'
    },
    {
        idiom: 'Sass',
        exp: '3 Years Experience'
    }
]

export const About = () => {

    return(
        <React.Fragment>
            <div className="about content">
                <div className="about-info">
                    <h2 className="about-tittle">Nice to meet you! I’m <span className="about-span">Adam Keyes</span>.</h2>
                    <p className="about-paragraph">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                    <button className="about-contact">Contact me</button>
                </div>
                <div className="about-img"></div>
                <div className="about-bg-img"></div>
            </div>
            
            <hr />
             
            <div className="idioms content">
                {
                    lenguajes.map((item) => 
                       <div className="about-idioms" key={item.idiom}>
                            <h3>{item.idiom}</h3>
                            <p>{item.exp}</p>
                       </div>
                    )
                }
            </div>

        </React.Fragment>
    )
}