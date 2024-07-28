import RouterNavigator from "../../@theme/Component/RouterNavigator/RouterNavigator";
import Button from "../../@theme/Component/Button/Button";
import Car_card from "../../@theme/Component/car_card/Car_card";
import Search_bar from "../../@theme/Component/Search_bar/Search_bar";
import axios from "axios";
import { useEffect, useState } from "react";

import bluebcar from '../../assets/card/car3.png';
import greencar from '../../assets/card/car1.png';
import whiteCar from '../../assets/card/car2.png';
import { useNavigate } from "react-router-dom";

const carImage=[
  bluebcar,
  greencar,
  whiteCar
]

const router= [
  {navTitle:'Home',NavLink:'/home',ActiveLink:true},
  {navTitle:'Cars',NavLink:'/home/all-vehicles',ActiveLink:false},
]

export default function All_vehicles() {
  const [cars,setCars]=useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate=useNavigate()
  const itemsPerPage = 12;

  function goToVehicleDetails(id){
    navigate(`car/${id}`)
  }

  useEffect(()=>{
    async function getVehicle(){
      let response = await axios.get('https://freetestapi.com/api/v1/cars');
      setCars(response.data);
      setFilteredCars(response.data); 
    }
  
    getVehicle()
  },[])
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  function onSearching(searchingText) {
    if (searchingText.trim() === "") {
      setFilteredCars(cars); 
    } else {
      const filtered = cars.filter(car =>
        car.make.toLowerCase().includes(searchingText.toLowerCase()) ||
        car.model.toLowerCase().includes(searchingText.toLowerCase())
      );
      setFilteredCars(filtered);
    }
    setCurrentPage(1); 
  }


  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCars.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
        <div className="container mt-5">
        <RouterNavigator Router={router}/>
        <Search_bar   handlingSearchFunc={onSearching} />
        <Button buttonName="POPULAR RENTAL DEALS" className="btn text-primary mx-auto d-block" buttonStyle={{width:"220px",backgroundColor:"#1572d31a",border:"1px solid #1572d31a"}} />
          <h2 className="text-center my-4 fw-semibold">Most popular cars rental deals</h2>

          <div className="row justify-content-center">
          { currentCars.map((car, index) => (
            <div className="col-xxl-3 col-xl-4 col-md-6" key={index}>
              <Car_card showDetailButton={()=>goToVehicleDetails(car.id)} car_id={car.id} card_title={car.make + ' ' + car.model} car_price={car.price} card_image={carImage[Math.floor(Math.random() * 3)]} />
            </div>
          ))}
          {!filteredCars.length && <div className="alert alert-info text-center mt-4">
          <h4>No Cars Available</h4>
          <p>
            Unfortunately, we couldn&apos;t find any cars that match your search criteria. 
            Please try adjusting your search terms or check back later for more options.
          </p>
          </div>}
        </div>
          <nav aria-label="Page navigation example" style={{width:"fit-content",margin:"auto"}}>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a className="page-link" style={{cursor:"pointer"}} onClick={() => handleClick(currentPage - 1)}>Previous</a>
            </li>
            {pageNumbers.map(number => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <a className="page-link" style={{cursor:"pointer"}} onClick={() => handleClick(number)}>{number}</a>
              </li>
            ))}
            <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
              <a className="page-link" style={{cursor:"pointer"}} onClick={() => handleClick(currentPage + 1)}>Next</a>
            </li>
          </ul>
        </nav>

        </div>
    </>
  )
}
