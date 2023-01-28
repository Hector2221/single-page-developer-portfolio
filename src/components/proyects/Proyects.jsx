import React from "react";
import "./proyects.css"
import One from "../../assets/proyects/One.png"
import two from "../../assets/proyects/Two.png"
import Three from "../../assets/proyects/One.png"
import four from "../../assets/proyects/four.png"
import five from "../../assets/proyects/five.png"
import six from "../../assets/proyects/six.png"



const proyects = [
    {
        id: 1,
        title: 'DESIGN PORTFOLIO',
        img: One,
        idioms: 'HTML CSS'
    },
    {
        id: 2,
        title: 'E-LEARNING LANDING PAGE',
        img: two,
        idioms: 'HTML CSS'
    },
    {
        id: 3,
        title: 'TODO WEB APP',
        img: Three,
        idioms: 'HTML CSS JAVASCRIPT'
    },
    {
        id: 4,
        title: 'ENTERTAINMENT WEB APP',
        img: four,
        idioms: 'HTML CSS JAVASCRIPT'
    },
    {
        id: 5,
        title: 'MEMORY GAME',
        img: five,
        idioms: 'HTML CSS JAVASCRIPT'
    },
    {
        id: 6,
        title: 'ART GALLERY SHOWCASE',
        img: six,
        idioms: 'HTML CSS JAVASCRIPT'
    }
]



export const Proyects = () =>{
    return(
        <div className="proyects content">
            <div className="proyects-header">
                <h2 className="proyects-tittle">Projects</h2>
                <button className="">Contact me</button>
            </div>
            <div className="proyect content">
                {
                    proyects.map((item) => 
                        <div className="proyect-item" key={item.id}>
                            <div className="proyect-code" >
                                <img className="proyect-img" src={item.img} alt="" />
                                <ul className="proyect-url" >
                                    <li><a href="#">VIEW PROJECT</a></li>
                                    <li><a href="#">VIEW CODE</a></li>
                                </ul>
                            </div>
                            <h4 >{item.title}</h4>
                            <p>{item.idioms}</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}