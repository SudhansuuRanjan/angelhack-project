import About from "../../components/homepage/About"
import About2 from "../../components/homepage/About2"
import Collection from "../../components/homepage/Collection"
import FAQ from "../../components/homepage/FAQ"
import Hero from "../../components/homepage/Hero"
import Highlights from "../../components/homepage/Highlights"
import Partners from "../../components/homepage/Partners"
import RoadMap from "../../components/homepage/RoadMap"
import StayInTouch from "../../components/homepage/StayInTouch"
import Team from "../../components/homepage/Team"
import Timer from "../../components/homepage/Timer"
import Video from "../../components/homepage/Video"

const Home = () => {
  return (
    <div className="pt-16">
      <Hero/>
      <Highlights/>
      <About/>
      <About2/>
      <Collection/>
      <RoadMap/>
      <Video/>
      <Timer/>
      <Team/>
      <FAQ/>
      <Partners/>
      <StayInTouch/>
    </div>
  )
}

export default Home