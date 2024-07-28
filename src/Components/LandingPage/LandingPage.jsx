import style from './LandingPage.module.css'
import { Homeimg } from './img'

export default function LandingPage() {
  return (
    <>
        <main className={`${style.Home_section}`}>
                <div className=' h-100 w-50 d-flex  align-items-center justify-content-center '>
                    
                        <div>
                            <h2 className='h1 fw-semibold'>
                                Find, book and <br /> rent a car <span className='m-0'>Easily</span> 
                            </h2>
                            <p className='my-4'>Get a car wherever and whenever you <br /> need it with your IOS and Android device.</p>
                            <div className=''>
                            <img src={Homeimg.andriod} alt="android"  className='me-3'/>
                            <img src={Homeimg.apple} alt="ios-apple" />
                            </div>
                        </div>
                    
                </div>
                <div className={`h-100  d-flex align-items-center justify-content-end ${style.animateSection}`}>
                        <img  className=' mt-5' src={Homeimg.car} alt="car_img" />
                </div>
        </main>
    </>
  )
}
