import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import "./Home.css";

const Home=() => {

    

  return (
    <div className='home'>
       <Header />
       <Main/>
       <Footer/>
     
      
    </div>
  )
}

export default Home;