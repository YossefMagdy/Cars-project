import { useParams } from "react-router-dom";
import RouterNavigator from "../../@theme/Component/RouterNavigator/RouterNavigator";
import { useEffect, useState } from "react";
import Button from "../../@theme/Component/Button/Button";
import { card_card } from "../../@theme/Component/car_card/imgAsset";
import style from './vehicleDetails.module.css'
import { chooseUs_asset } from "../ChooseUs/chooseUs_asset";
import axios from "axios";
let Router = [
         { navTitle: "Home", NavLink: "/home",ActiveLink:true },
        { navTitle: "Cars", NavLink: "/home/all-vehicles",ActiveLink:true },
        { navTitle: "Car details", NavLink: "",ActiveLink:false },
];
export default function VehicleDetails() {
  const [cars,setCars]=useState([])

  const { carId } = useParams();

  

  useEffect(() => {
    async function getVehicle(){
      let response = await axios.get(`https://freetestapi.com/api/v1/cars/${carId}`);
      const data=response.data
      const existingRoute = Router.find(route => route.NavLink === `car/${carId}`);
      if (!existingRoute) {
        Router.push({ navTitle: `${data.make} ${data.model}`, NavLink: `car/${carId}`,ActiveLink:false });
      }      setCars(data) 
    }
  
    getVehicle();


    return () => {
      Router=[
        { navTitle: "Home", NavLink: "/home",ActiveLink:true },
        { navTitle: "Cars", NavLink: "/home/all-vehicles",ActiveLink:true },
        { navTitle: "Car details", NavLink: "",ActiveLink:false },
      ];
    };
  }, [carId]);

  return (
    <>
      <div className="">
        <div className="m-5">
              <RouterNavigator Router={Router} />
        </div>


        <div className="d-md-flex  align-items-center mt-5 chooseUs">
        <div className={`${style.carDetails_container} d-flex align-items-center d-lg-block  `} >
            <img src={chooseUs_asset.audi} alt="audi" style={{marginTop:"10em"}}/>
        </div>


        <div className={`${style.chosseUsContent} container `}>
          <Button
            buttonName="WHY CHOOSE US"
            className="btn text-primary  d-block my-5 mx-lg-0 mx-auto"
            buttonStyle={{
              width: "200px",
              backgroundColor: "#1572d31a",
              border: "1px solid #1572d31a",
            }}
          />
          <h3 className="text-lg-start text-center">We offer the best experience with our rental deals</h3>

          <ul className="list-unstyled d-lg-block  d-flex  align-items-start flex-column ">
                    <li><img src={card_card.user} alt="Passanger" />2 Passanger</li>
                    <li className="my-3"><img src={card_card.d8wxke_2_} alt="Air conditioning" />Air conditioning</li>
                    <li><img src={card_card.Frame} alt="CVT" />CVT</li>
                    <li className="my-3"><img src={card_card.doors} alt="Doors" />Doors</li>
                    <li className="my-3"><i className="fa-solid fa-calendar-days me-1"></i>{cars.year}</li>
                    <li className="my-3"><i className="fa-solid fa-dollar-sign mx-1"></i>{cars.price}</li>
          </ul>
        </div>
      </div>

      </div>
    </>
  );
}
