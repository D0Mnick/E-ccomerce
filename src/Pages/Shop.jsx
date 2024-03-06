import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import NewCollection from "../NewCollections/NewCollection"
import NewsLetter from "../NewsLetters/NewsLetter"
import Offer from "../Offers/Offer"
import Popular from "../Populars/Popular"


function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    
    </div>
  )
}

export default Shop