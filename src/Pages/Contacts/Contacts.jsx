import logo1 from "../../assets/icons/check.svg";
import logo2 from "../../assets/icons/person.svg";
import logo3 from "../../assets/icons/Wrench.svg";

const Contacts = () => {
  return (
    <div className="min-h-56 flex items-center justify-around px-12 text-white rounded-xl bg-black">
      {/* card 1 */}
      <div className="flex gap-4 items-center">
        <img src={logo1} alt="" />
        <div>
          <p className="text-sm">We are open monday to friday</p>
          <h2 className="text-xl">7:00 AM - 9:00 PM</h2>
        </div>
      </div>
      {/* card 2 */}
      <div className="flex gap-4 items-center">
        <img src={logo2} alt="" />
        <div>
          <p className="text-sm">Have a question</p>
          <h2 className="text-xl">+2546 251 2658</h2>
        </div>
      </div>
      {/* card 3 */}
      <div className="flex gap-4 items-center">
        <img src={logo3} alt="" />
        <div>
          <p className="text-sm">Need a repair? Our address</p>
          <h2 className="text-xl">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
