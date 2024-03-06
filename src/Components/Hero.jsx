import hand_icon from '../Assets/logo.png'
import model from '../Assets/model.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";

function Hero() {
  return (
    <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <MdOutlineWavingHand style={{width:'60px', height:'60px', background: 'yellow'}}/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>

          <div className="hero-latest-button">
             <div>Latest Collection</div>
             <FaLongArrowAltRight />
          </div>
        </div>

        <div className="hero-right">
         <img src={model} alt="" />
        </div>
    </div>
  )
}

export default Hero