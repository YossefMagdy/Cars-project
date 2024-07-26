
import Navbar from './Layout/Navbar/Navbar'
import './App.css';
import Home from './Components/Home/Home';
import Popular_Deals from './Components/PopularDeals/Popular_Deals';
import ChooseUS from './Components/ChooseUs/ChooseUS';
import Customer_service from './Components/Customer_service/Customer_service';
import Contact_us from './Components/Contact_us/Contact_us';
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <>
     <Navbar />
     <Home />
     <Popular_Deals />
     <ChooseUS />
     <Customer_service />
     <Contact_us />
     <Footer />
       
    </>
  )
}

export default App
