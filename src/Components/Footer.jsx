import logo from '../Assets/logo.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
      <img src={logo} alt="" />
      <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <FaInstagramSquare style={{width: '40px', height: '40px'}}/>
        </div>
        <div className="footer-icons-container">
        <FaWhatsappSquare style={{width: '40px', height: '40px'}}/>
        </div>

        <div className="footer-icons-container">
        <FaFacebookSquare style={{width: '40px', height: '40px'}}/>
        </div>
        </div>
        
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
  
    </div>
  )
}

export default Footer
