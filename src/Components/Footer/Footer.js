import React from 'react'
import "./Footer.css"
import {FiInstagram,FiFacebook,FiYoutube} from'react-icons/fi';
import {FaYahoo} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='main3'>
            <footer>
            <div class="footer-content">
            <h3>Travel Visit</h3>
            <p>Discover every city of the world with our picture. Don't be a tourist, be a traveler </p>
             <span>W A N D E R L U S T</span>
             <ul class="socials">
    <li><a href="https://www.instagram.com/travel__visit/"><FiInstagram/></a></li>
    <li><a href="#top"><FiFacebook/></a></li>
    <li><a href="mailto:travelvisit@yahoo.com"><FaYahoo/></a></li>
    <li><a href="https://www.youtube.com/channel/UCZGZmx8HMLfLqtJQd8ePsXA"><FiYoutube/></a></li>
  
 </ul>
           </div>
            </footer>
        </div>
    )
}

export default Footer