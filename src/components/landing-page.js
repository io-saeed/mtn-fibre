import Hero from "./layouts/hero";
import HowItWorks from "./layouts/how-it-works";
import LeafletMap from "./layouts/leaflet-map/index";
import Footer from "./layouts/footer";
import logo from "../img/logo.png";




function Landing(props) {
  return (
    <div className="">
        { props.children }
    </div>
  );
}
const LandingPage=()=>{

  return(
    <Landing>
      <Hero
        logo={logo}
        title={"Fibre Broadband Checker"}
        subtitle={"A simple and easy way to check MTN fibre availability in or out of your area."} />
      <HowItWorks />
      <LeafletMap />
      <Footer />
    </Landing>
  )

}
export default LandingPage;