import React from 'react'
import "./Main.css"
import { GiHiking } from 'react-icons/gi';

const Main = () => {
    return (
   
    
    <div class="main">
    <div class="d-flex">
    <div class="text">
    <h1><span className='spanmain'>Discover</span> the Best Lovely Places!</h1>
    <p>Plan and book your perfect trip with expert advice,travel tips,destination information and inspiration from us</p>
    </div>
    <div class="but1">
    <a href="#top"><button>Discover Now</button></a>
    </div>
    <div class="img">
    <div class="icon">
    <GiHiking />
    </div>
    <div class="hiking">
    <h1>1000+</h1>
    <p>More than 1000 progessional and acateur clibers use our facilities with in 1 month</p>
    </div>
    </div>
    </div>
    </div>

   
    )
}
export default Main;