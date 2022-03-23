import React, { useState } from "react";
import data from "./data.json";
import {Routes, Route, Link, NavLink } from "react-router-dom";
import image1 from "../../assets/Rectangle.png";
import NearestRides from "../nearest-ride";
import UpComingRides from "../upcoming-ride";
import PastRides from "../past-rides";

const Navbar = () => {

  const [isActive,setIsActive] = useState(false);

  return (
    <div className="w-full flex flex-col  bg-color">
      <div className="w-full justify-between flex p-4 h-20 bg-black">
        <div className="" >
          <h1 className="text-3xl text-white " >Edvora</h1>
          <p></p>
        </div>
        <div className="mt-3 px-3 flex selection:bg-black justify-between"     >

          <h1 className="text-white font-bold px-1 cursor-pointer"  onClick={()=>setIsActive(!isActive)}>{data.user.name}</h1>
          <img className=" w-7 h-7  rounded-full cursor-pointer" src={image1} onClick={()=>setIsActive(!isActive)}></img>
          {isActive && (
          <ul className="bg-color2 text-white w-36 h-44 absolute -ml-10 rounded-md cursor-default animate-drop border-2 border-black border-dotted " >
               <div className="flex w-full justify-around py-2 bg-black  ">
               <img src={image1} className="w-8 h-8 animate-drop"></img>
               
                <p className="p-1 font-bold text-white animate-drop">{data.user.name}</p>
                
                </div>
                <hr className="border-zinc-400 border-2"></hr>
                <div className="text-left p-1 mt-5 aniamate-drop">
                <p ><span className="font-semibold ">Station code:</span>  {data.user.station_code}</p>
                <hr></hr>
                <p ><span className="font-semibold">Your key:</span> {data.user.profile_key}</p>
                <hr></hr>
                </div>
                <p className="underline text-red-500 cursor-pointer mt-4 animate-drop" onClick={()=>setIsActive(!isActive)} >Close &#10007; </p>
          </ul>
          )}
        </div>
      </div>      

      <div className=" flex items-start w-full lg:w-5/12 ">
        <div className="w-full flex justify-around lg:justify-between  m-2 text-md text-gray-100">
          <NavLink to="/" className="w-20 h-12 rounded-md bg-black text-white">Nearest Rides</NavLink>
          <NavLink to="upcoming-ride" className="w-20 h-12 rounded-md bg-black text-white">Upcoming Rides</NavLink>
          <NavLink  to="past-ride" className="w-20 h-12 rounded-md bg-black text-white p-1">Past Rides</NavLink>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<NearestRides /> } />
        <Route  path="past-ride" element={<PastRides /> } />
        <Route  path="upcoming-ride" element={<UpComingRides /> } />
          
        
      </Routes>
    </div>
  );
};

export default Navbar;
