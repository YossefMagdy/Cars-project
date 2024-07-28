import {  useNavigate } from "react-router-dom";
import Button from "../../@theme/Component/Button/Button";
import Car_card from "../../@theme/Component/car_card/Car_card";
import { card_card } from "../../@theme/Component/car_card/imgAsset";
import Search_bar from "../../@theme/Component/Search_bar/Search_bar";
import { useEffect, useState } from "react";
import axios from "axios";

import bluebcar from '../../assets/card/car3.png';
import greencar from '../../assets/card/car1.png';

const carImage=[
  bluebcar,
  greencar,
]

export default function Popular_Deals() {
  const navigate=useNavigate()
  const [cars,setCars]=useState([]);
  const [filteredCars, setFilteredCars] = useState([]);



  useEffect(()=>{
    async function getVehicle(){
      let response = await axios.get('https://freetestapi.com/api/v1/cars');
      setCars(response.data)
      setFilteredCars(response.data.slice(0,4))
    }
  
    getVehicle()
  },[]);

  function onSearching(searchingText){

    if(searchingText.trim()===''){
      setFilteredCars(cars.slice(0,4))
    }
    else{
      const filtered=cars.filter(car =>
        car.make.toLowerCase().includes(searchingText.toLowerCase()) ||
        car.model.toLowerCase().includes(searchingText.toLowerCase())
      );
      setFilteredCars(filtered.slice(0,4))
    }

  }

  function goToVehicleDetails(id){
    navigate(`all-vehicles/car/${id}`)
  }
  return (
    <>
        <div className="container mt-5">
        <Search_bar handlingSearchFunc={onSearching} />
        <Button buttonName="POPULAR RENTAL DEALS" className="btn text-primary mx-auto d-block " buttonStyle={{width:"220px",backgroundColor:"#1572d31a",border:"1px solid #1572d31a"}} />
          <h2 className="text-center my-4 fw-semibold">Most popular cars rental deals</h2>
          
          
          <div className="row justify-content-center">
          {filteredCars.map((car,index)=> ( 
            
            <div className="col-xxl-3 col-xl-4 col-md-6" key={index}>
            <Car_card showDetailButton={()=>goToVehicleDetails(car.id)} car_id={car.id} card_title={car.make + ' ' + car.model} car_price={car.price} card_image={carImage[Math.floor(Math.random() * 2)]} />
          </div>
            
            ))}
          </div>
          {!filteredCars.length && <div className="alert alert-info text-center mt-4">
          <h4>No Cars Available</h4>
          <p>
            Unfortunately, we couldn&apos;t find any cars that match your search criteria. 
            Please try adjusting your search terms or check back later for more options.
          </p>
          </div>}


            <Button  buttonName="Show All Details" onClick={()=>navigate('all-vehicles')}  buttonStyle={{width:"200px"}} className="btn border-1 border-black mx-auto d-block my-4 showDetailsButton"> <i className="fa-solid fa-arrow-right"></i></Button>
          
            <Button buttonName="How iT WORK" className="btn text-primary mx-auto d-block my-5" buttonStyle={{width:"150px",backgroundColor:"#1572d31a",border:"1px solid #1572d31a"}} />
              <h3 className="m-auto text-center fw-fw-semibold">Most popular cars rental deals</h3>

              <div className="mt-5 d-flex justify-content-center flex-wrap">
                    <div className="text-center">
                        <div>
                          <img src={card_card.location} alt="location" />
                        </div>
                        <h5 className="my-2">Choose location</h5>
                        <p>Choose your and find <br /> your best car</p>
                    </div>
                    <div className="text-center mx-5">
                        <div>
                          <img src={card_card.calender} alt="car" />
                        </div>
                        <h5 className="my-2">Pick-up date</h5>
                        <p>Select your pick up date   <br />and time to book your  <br /> car</p>
                    </div>
                    <div className="text-center">
                        <div>
                          <img src={card_card.car} alt="" />
                        </div>
                        <h5 className="my-2">Book your car</h5>
                        <p>Book your car and we  <br /> will deliver it directly to  <br /> you</p>
                    </div>
              </div>
              

              <div className="d-flex justify-content-around flex-wrap">
                <img src={card_card.audi} alt="audi" className="m-2"/>
                <img src={card_card.jaguar} alt="jaguar" className="m-2"/>
                <img src={card_card.nissan} alt="nissan"className="m-2" />
                <img src={card_card.ac} alt="ac" className="m-2" />
              </div>
        </div>
    </>
  )
}
