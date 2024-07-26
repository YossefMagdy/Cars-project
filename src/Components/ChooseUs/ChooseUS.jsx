import Button from "../../@theme/Component/Button/Button";
import style from "./choose.module.css";
import { chooseUs_asset } from "./chooseUs_asset";
export default function ChooseUS() {
  return (
    <>
      <div className="d-flex mt-5 chooseUs">
        <div className={`${style.car_container} d-flex align-items-center d-lg-block d-none `} >
            <img src={chooseUs_asset.audi} alt="audi" style={{marginTop:"10em"}} className="w-75"/>
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

          <ul className="list-unstyled d-lg-block  d-flex align-items-md-center align-items-start flex-column ">
            <li className="d-flex mt-4 align-items-center">
              <div className="me-4">
                <img src={chooseUs_asset.user} alt="" />
              </div>
              <div>
                <h6>Best price guaranteed</h6>
                <p className="m-0">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </li>
            <li className="d-flex mt-4 align-items-center">
              <div className="me-4">
                <img src={chooseUs_asset.user} alt="" />
              </div>
              <div>
                <h6>24 hour car delivery</h6>
                <p className="m-0">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </li>
            <li className="d-flex mt-4 align-items-center">
              <div className="me-4">
                <img src={chooseUs_asset.message} alt="" />
              </div>
              <div>
                <h6>Best price guaranteed</h6>
                <p className="m-0">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </li>
            <li className="d-flex mt-4 align-items-center">
              <div className="me-4">
                <img src={chooseUs_asset.chat} alt="" />
              </div>
              <div>
                <h6>24/7 technical support</h6>
                <p className="m-0">
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
