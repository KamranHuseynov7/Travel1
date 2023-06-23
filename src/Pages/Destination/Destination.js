import React, { useContext, useEffect } from "react";
import AppContext from '../../Context/AppContext';
import Header from '../../Components/Header/Header';
import Div from '../../Components/Div/Div';
import "./Destination.css";

const Destination = () => {

  const context = useContext(AppContext);
  useEffect(() => {
    console.log(context);
  }, [context]);
  return (
    <div className={context.theme + " destination"}>


      <Header />
      <Div />


    </div>
  )
}

export default Destination;