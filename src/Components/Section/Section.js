import React from 'react'
import "./Section.css"
import SimpleImageSlider from "react-simple-image-slider";

const Section = () => {

const products = [
        { title: "Bag 45$", url: [{url:"/images/pro/bag.jpg"},  {url:"/images/pro/bag1.jpg"},{url:"/images/pro/bag2.jpg"}] },
        { title: "Hiking Shoes 55$", url: [ {url:"/images/pro/shoes.jpg"}, {url:"/images/pro/shoes1.jpg"},] },
        { title: "2 Person Camping Tent 65$", url: [{url:"/images/pro/tent1.jpg"}, {url:"/images/pro/tent2.jpg"},{url:"/images/pro/tent3.jpg"}] },
        { title: "Winter Hat 9$", url:[{url:"/images/pro/hat1.jpg"}, {url:"/images/pro/hat.jpg"}] },
        { title: "Walking Poles 15$", url: [{url:"/images/pro/walking.jpg"}, {url:"/images/pro/walking1.jpg"}] },
        { title: "Waist Bag 5$", url: [{url:"/images/pro/waist.jpg"}, {url:"/images/pro/waist1.jpg"},{url:"/images/pro/waist3.jpg"} ]},
        { title: "Coffee Mug 5$", url: [{url:"/images/pro/coffeemug.jpg"}, {url:"/images/pro/coffeemug2.jpg"},{url:"/images/pro/coffeemug1.png"}] },
        { title: "Thermos Hiking 500-WH 12$", url: [{url:"/images/pro/termos.jpg"}, {url:"/images/pro/termos1.jpg"},{url:"/images/pro/termos2.jpg"}] },
        { title: "Hat 8$", url: [{url:"/images/pro/hat4.jpg"}, {url:"/images/pro/hat3.jpg"}]},
    ]

return (
        <div className='section'>
            <div className='product'>
                <h1 className='h1'>Product</h1>
            </div>
            <div className='price'>
                {products.map((product, index) => {
                    return (
                        <div className='photo' key={index}>
                            <SimpleImageSlider
                                images={product.url }
                                width={300}
                                height={300}
                                showBullets={true}
                                showNavs={true}
                            />
                            <h3 className='h3'>{product.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Section;