import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header';
import "./Event.css";


const Event = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [places, setPlaces] = useState([])
    const [city, setCity] = useState("baku")


    useEffect(() => {
        console.log("Front useEffect");
        setIsLoading(true);
        getPlaces();
    }, [city]);

    const getPlaces = () => {
        fetch(`https://nominatim.openstreetmap.org/search.php?city=${city}&format=jsonv2`)
            .then(res => res.json())
            .then((data) => {
                setIsLoading(false);
                setPlaces(data)
                console.log(data)
            })
    }

    const changeCity = (e) => {
        setCity(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className='event'>
            <Header />
            
            {isLoading
                ? <>
                    <h1 >Loading...</h1>
                    <h2>Please wait</h2>
                </>
                : <>
                    <h1>{city}</h1>

                    <select id="select" onChange={(e) => changeCity(e)}>

                        <option value="select">Select</option>
                        <option value="baku">Baku</option>
                        <option value="oslo">Oslo</option>
                        <option value="odesa">Odesa</option>

                    </select>

                    {places.map((city, index) => {
                        return(
                            <h1  key={index}>{city.display_name}</h1>


                        )

                    })}
                </>
            }


        </div>
    )
}

export default Event