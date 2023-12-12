// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import DecentralizedDonationAdvantages from "./decentralizedDonationAdvantages";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Hero />
      {/* <VideoIntro /> */}
      <Feature />
      <DecentralizedDonationAdvantages />
      {/* <Testimonials /> */}
      <Faqs />
    </>
  );
}
