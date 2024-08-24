import About from "../About/About";
import Banner from "../Banner/Banner";
import BrouseProducts from "../BrouseProducts/BrouseProducts";
import Contacts from "../Contacts/Contacts";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contacts></Contacts>
      <BrouseProducts></BrouseProducts>
      <Team></Team>
    </div>
  );
};

export default Home;
