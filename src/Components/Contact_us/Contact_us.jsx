import { useRef } from "react";
import Button from "../../@theme/Component/Button/Button";
import { Homeimg } from "../LandingPage/img";

export default function Contact_us() {
  const formSubmit=useRef(null)
  function handlingForm(event){
    event.preventDefault();
    const fd=new FormData(event.target)
    // eslint-disable-next-line no-unused-vars
    const data= Object.fromEntries(fd.entries());

    alert("Form Successfully Submitted")

  }
  
  return (
    <>
        <div className="container d-flex justify-content-around flex-lg-nowrap flex-wrap mt-5">
            <div >
                <h2  className="fw-semibold">Download Rentcars App for <span className="text-primary">FREE</span></h2>
                <p>For faster, easier booking and exclusive deals.</p>
                <img src={Homeimg.andriod} alt="android"  className='me-3'/>
                <img src={Homeimg.apple} alt="ios-apple" />

                <form  className="mt-4"onSubmit={handlingForm} ref={formSubmit}>
                    <input name="name" type="text" placeholder="Name" className="form-control rounded-pill" required style={{backgroundColor:"#cedcff",border:"1px solid #cedcff"}}/>
                    <input name="phone_number" type="number" placeholder="Phone Number" required className="form-control my-3 rounded-pill" style={{backgroundColor:"#cedcff",border:"1px solid #cedcff"}}/>
                    <input name="email"  required  type="email" placeholder="Email" className="form-control rounded-pill" style={{backgroundColor:"#cedcff",border:"1px solid #cedcff"}}/>
                    <Button type="submit" buttonName="Send" buttonStyle={{with:"150px"}}  className="btn  btn-primary mx-auto d-block mt-3" />
                    {/* <button type="reset">reset</button> */}
                </form> 
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center align-items-end ">
                    <img src={Homeimg.iphone} alt="iphone" loading="lazy" style={{width:"80%"}}  className="mt-5"/>
            </div>
        </div>
    </>
  )
}
