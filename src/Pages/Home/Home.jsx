import About from "../About/About";
import Banner from "../Banner/Banner";
import BrouseProducts from "../BrouseProducts/BrouseProducts";
import Contacts from "../Contacts/Contacts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contacts></Contacts>
      <BrouseProducts></BrouseProducts>
    </div>
  );
};

export default Home;
