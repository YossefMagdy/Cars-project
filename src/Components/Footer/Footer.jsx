import { footerAsset } from "./footer_asset";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${style.footer} py-5`}>
        <div className="container">
        <div className="d-flex justify-content-between flex-wrap ">
          <div>
            <img src={footerAsset.logo_footer} alt="RentCar" />
            <ul className="list-unstyled text-white my-3">
              <li>
                <img src={footerAsset.instagram} /> 25566 Hc 1, Glenallen,
                Alaska, 99588, USA
              </li>
              <li className="my-2">
                {" "}
                <img src={footerAsset.call} /> +603 4784 273 12{" "}
              </li>
              <li>
                {" "}
                <img src={footerAsset.sms} />
                rentcars@gmail.com{" "}
              </li>
            </ul>
          </div>
          {/* our product */}
          <div>
            <h5 className="text-white">Our Products</h5>
            <ul className="list-unstyled text-white my-3">
              <li>Career</li>
              <li>Car</li>
              <li>Packages</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </div>
          {/* our Resources */}

          <div>
            <h5 className="text-white">Resources</h5>
            <ul className="list-unstyled text-white my-3">
              <li>Download</li>
              <li>Help Centre</li>
              <li>Guides</li>
              <li>Partner Network</li>
              <li>Cruises</li>
              <li>Developer</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white">About Rentcars</h5>
            <ul className="list-unstyled text-white my-3">
              <li>Why choose us</li>
              <li>Our Story</li>
              <li>Investor Relations</li>
              <li>Press Center</li>
              <li>Advertise</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white">Follow Us</h5>

            <img src={footerAsset.facebook} alt="" />
            <img src={footerAsset.instagram} alt="" className="mx-2" />
            <img src={footerAsset.youtube} alt="" />
          </div>
        </div>
        <hr style={{borderColor:"#dee2e6"}}/>
        <p className="my-0 text-white fs-6">Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
