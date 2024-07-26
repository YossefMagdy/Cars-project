import Button from '../../@theme/Component/Button/Button'
import style from './customer.module.css'
import { customer_img } from './customer_img'
export default function Customer_service() {
  return (
    <>
        <div className={`${style.cutomer_container}  mt-4`}>
    
        <Button buttonName="TEST IMONIALS" className="btn text-primary mx-auto d-block my-5" buttonStyle={{width:"150px",backgroundColor:"#1572d31a",border:"1px solid #1572d31a"}} />
        
        <h3 className='text-center'> Most popular cars rental deals</h3>
 
            <div className='d-lg-flex justify-content-between container mt-5'>

            <div className={`${style.customer_feedback} card d-flex  my-2 mx-auto`}>
                <div>
                    <img src={customer_img.man} alt="" className='w-100 ' />
                </div>
                <div className='px-3 py-2'>
                    <h3>5.5 <sub>Stars</sub></h3>
                    <p className='mt-0'>
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                    </p>
                    <p >
                    “I feel very secure when using caretall s services. Your customer care team is very enthusiastic and the driver is always on time.”
                    </p>
                    
                    <h5>Charlie Johnson</h5>
                    <p>Last updated <span className='text-muted'>3 mins ago</span></p>
                </div>
            </div>
            <div className={`${style.customer_feedback} card d-flex  my-2  mx-auto  `}>
                <div>
                    <img src={customer_img.girl} alt="" className='w-100 ' />
                </div>
                <div className='px-3 py-2'>
                    <h3>5.5 <sub>Stars</sub></h3>
                    <p className='mt-0'>
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                        <img src={customer_img.star} alt="star" />
                    </p>
                    <p >
                    “I feel very secure when using caretall s services. Your customer care team is very enthusiastic and the driver is always on time.”
                    </p>
                    
                    <h5>Charlie Johnson</h5>
                    <p>Last updated <span className='text-muted'>3 mins ago</span></p>
                </div>
            </div>


            </div>

        </div>
    </>
  )
}
