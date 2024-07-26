import Button from "../../@theme/Component/Button/Button";
import Car_card from "../../@theme/Component/car_card/Car_card";
import { card_card } from "../../@theme/Component/car_card/imgAsset";
import Search_bar from "../../@theme/Component/Search_bar/Search_bar";
import { carsDetails } from "./Data";



export default function Popular_Deals() {
  return (
    <>
        <div className="container mt-5">
        <Search_bar />
        <Button buttonName="POPULAR RENTAL DEALS" className="btn text-primary mx-auto d-block" buttonStyle={{width:"220px",backgroundColor:"#1572d31a",border:"1px solid #1572d31a"}} />
          <h2 className="text-center my-4 fw-semibold">Most popular cars rental deals</h2>

          <div className="row justify-content-center">
          {carsDetails.map((car,index)=> ( 
            
              <div className="col-xxl-3 col-xl-4 col-md-6 "  key={index}>
                <Car_card  card_title={car.card_title}  car_price={car.car_price} card_image={car.card_image}/>
              </div>
            
            ))}
          </div>

            <Button  buttonName="Show All Details"  buttonStyle={{width:"200px"}} className="btn border-1 border-black mx-auto d-block my-4"> <i className="fa-solid fa-arrow-right"></i></Button>
          
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
              

              <div className="d-flex justify-content-between flex-wrap">
                <img src={card_card.audi} alt="audi" />
                <img src={card_card.jaguar} alt="jaguar" />
                <img src={card_card.nissan} alt="nissan" />
                <img src={card_card.ac} alt="ac" />
              </div>
        </div>
    </>
  )
}
