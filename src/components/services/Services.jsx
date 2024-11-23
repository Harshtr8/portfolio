import React from 'react'
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
const data = [
  {
    id: 1,
    image: Image1,
    title: "Gen-A.I.",
    description:
      "Utilizing generative AI to create dynamic, tailored content that captivates audiences, drives engagement, and enhances overall online presence.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Building responsive and dynamic web solutions using cutting-edge technologies to deliver seamless user experiences and drive digital innovation.",
  },
  {
    "id": 3,
    "image": Image3,
    "title": "Machine Learning",
    "description": "Leveraging machine learning to develop intelligent solutions that adapt, optimize performance, and deliver data-driven insights for impactful results."
  }
  
];

const Services = () => {
  return (
   <section className='services container section' id='services'>
    <h2 className='section__title'>Services</h2>


    <div className="service__container grid">
      {data.map(({id,image,title,description})=>{
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className='service__img'/>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
   </section>
  )
}

export default Services