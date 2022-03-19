import React from "react";
import data from "../Navbar/data.json"
import image2 from "../../assets/image1.png"
const NearestRides =()=>{
    const date =  new Date();
    const day = date.getDate();
    // const day2 = day += 1;
    const month = date.getMonth();
    return(
        <div className="w-full bg-red flex justify-center">
           <div className="text-2xl text-white w-10/12 items-center " > {data.Rides.map((Ride) =>  {
            //    var users = data.map
            //   var closest = Ride.reduce(function(prev, curr) {
                // return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
            //   });
               return(
                   <div key={Ride.id} className="text-white  text-left flex flex-col-reverse md:flex-row justify-around bg-black rounded-md  mt-3 p-5 ">
                       <div className="w-44">
                            <img src={image2} ></img>
                       </div>
                       <div className="flex flex-col justify-start" >
                       <p >Ride Number:  {Ride.id}</p>
                       <p >Path of stations:  {Ride.station_path}</p>
                       <p >Destination:  {Ride.destination_station_code}</p>
                       <p>date: {day} / {month} </p>
                       </div>
                       </div>
               )
           })} </div>
        </div>
    );
}
export default NearestRides;