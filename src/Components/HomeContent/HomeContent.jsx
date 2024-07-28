import Navbar from "../../Layout/Navbar/Navbar";
import ChooseUS from "../ChooseUs/ChooseUS";
import Contact_us from "../Contact_us/Contact_us";
import Customer_service from "../Customer_service/Customer_service";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Popular_Deals from "../PopularDeals/Popular_Deals";
export default function HomeContent() {
  return (
    <>
            <Navbar />
            <LandingPage />
            <Popular_Deals />
            <ChooseUS />
            <Customer_service />
            <Contact_us />
            <Footer />
    </>
  )
}
