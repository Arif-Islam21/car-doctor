import About from "../About/About";
import Banner from "../Banner/Banner";
import BrouseProducts from "../BrouseProducts/BrouseProducts";
import Contacts from "../Contacts/Contacts";
import Services from "../Services/Services";
import Team from "../Team/Team";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contacts></Contacts>
      <BrouseProducts></BrouseProducts>
      <Team></Team>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
