
import './App.css';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import All_vehicles from './Components/All-vehicles/All_vehicles';
import HomeContent from './Components/HomeContent/HomeContent';
import VehiclesRoot from './Components/VehiclesRoot/VehiclesRoot';
import VehicleDetails from './Components/VehicleDetails/VehicleDetails';
import NotFound from './Components/NotFound/NotFound';

  function App() {
    
    const routes=createHashRouter([
      {path:'',element:<Navigate to='/home' />,errorElement:<NotFound />},
      {path:'home',element:<Home />,
        errorElement:<NotFound />,
        children:[
          {index:true,element:<HomeContent />},
          {path:'all-vehicles',element:<VehiclesRoot />,children:[
            {index:true,element:<All_vehicles />},
            {path:'car/:carId',element:<VehicleDetails />}
          ]}
        ]
      },
      

     
    ])

    return (
      <>
      <RouterProvider router={routes} />
      </>
    )
  }

  export default App
