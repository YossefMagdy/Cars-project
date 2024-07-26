import Button from "../../@theme/Component/Button/Button";
import { Homeimg } from "../Home/img";

export default function Contact_us() {
  return (
    <>
        <div className="container d-flex justify-content-around flex-lg-nowrap flex-wrap mt-5">
            <div >
                <h2  className="fw-semibold">Download Rentcars App for <span className="text-primary">FREE</span></h2>
                <p>For faster, easier booking and exclusive deals.</p>
                <img src={Homeimg.andriod} alt="android"  className='me-3'/>
                <img src={Homeimg.apple} alt="ios-apple" />

                <form  className="mt-4">
                    <input type="text" placeholder="Name" className="form-control rounded-pill " style={{backgroundColor:"#cedcff",border:"1px solid #cedcff"}}/>
                    <input type="text" placeholder="Phone Number" className="form-control my-3 rounded-pill" style={{backgroundColor:"#cedcff",border:"1px solid #cedcff"}}/>
                    <input type="text" placeholder="Email" className="form-control rounded-pill" style={{backgroundColor:"#cedcff",border:"1px solid #cedcff"}}/>
                    <Button buttonName="Send" buttonStyle={{with:"150px"}}  className="btn  btn-primary mx-auto d-block mt-3" />
                </form> 
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center align-items-end ">
                    <img src={Homeimg.iphone} alt="iphone" loading="lazy" style={{width:"80%"}}  className="mt-5"/>
            </div>
        </div>
    </>
  )
}
