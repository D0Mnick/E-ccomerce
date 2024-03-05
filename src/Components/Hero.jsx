import hand_icon from '../Assets/logo.png'
import model from '../Assets/model.png'

function Hero() {
  return (
    <div className="hero">
        <div className="hero-left">
          <h2>NEEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={model} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>

          <div className="hero-latest-button">
             <div>Latest Collection</div>
             <img src={model} alt="" />
          </div>
        </div>

        <div className="hero-right">
         <img src={model} alt="" />
        </div>
    </div>
  )
}

export default Hero