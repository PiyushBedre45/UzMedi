import WhyStudy from "./_components/whyStudy";
import CurveImg from "./_components/curveImg";
import Testimonials from "./_components/testimonial";
import Partner from "./_components/patner";
import Blog from "./_components/blog";
import Galary from "./_components/galary";
import Univercity from "./_components/university";
import Services from "./_components/servicies";
import ContactUs from "./_components/contactUs";
import HomeHerosection from "./_components/HomeHerosection";


export default function Home() {
  return (
    <>
      <HomeHerosection />
      <WhyStudy />
      <Univercity />
      <CurveImg />
      <Services />
      <Partner />
      <Blog />
      <Galary />
      <Testimonials />
      <ContactUs />
    </>
  );
}
