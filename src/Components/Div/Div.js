import React from 'react'
import "./Div.css"
import SimpleImageSlider from "react-simple-image-slider";

const Div = () => {
  const city = [
  { title: "Bibi-Heybat", url: [{ url: "/images/bibiheybet10.jpg" }, { url: "/images/bibiheybet7.jpg" }, { url: "/images/bibiheybet4.jpg" }, { url: "/images/bibiheybet2.jpg" }] },
  { title: "Balaxani", url: [{ url: "/images/balaxani6.jpg" }, { url: "/images/balaxani.jpg" }, { url: "/images/balaxani3.jpg" }, { url: "/images/balaxani5.jpg" }, { url: "/images/balaxani2.jpg" }] },
  
  ];

  return (
    <div className='section'>
      <div className='product'>
        <h1 className='divh1'>Places</h1>
      </div>
      <div className='price'>
        {city.map((city, index) => {

          return (
            <div className='city' key={index}>
              <SimpleImageSlider
                images={city.url}
                width={500}
                height={590}
                showBullets={true}
                showNavs={true}
              />
              <h3 className='h3'>{city.title}</h3>
            </div>

          )
        })}
    </div>
    </div>
)
}

export default Div;