import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import team1 from "../../assets/images/team/1.jpg";
import team2 from "../../assets/images/team/2.jpg";
import team3 from "../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <h4 className="text-themeColor font-bold">Team</h4>
        <h3 className="text-3xl pb-6 font-bold">Meat Our Team</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={team1}
              alt="car engine plug"
              className="rounded-xl h-[40vh]"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto">Car Engine Plug</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Engine Expert</span>
              </p>
            </div>
            <div className="text-3xl flex gap-4 justify-center">
              <FaFacebook className="text-blue-500"></FaFacebook>
              <FaTwitter className="text-blue-300"></FaTwitter>
              <FaLinkedin className="text-blue-700"></FaLinkedin>
              <FaInstagram className="text-pink-600"></FaInstagram>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={team2}
              alt="car engine plug"
              className="rounded-xl h-[40vh]"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Engine Expert</span>
              </p>
            </div>{" "}
            <div className="text-3xl flex gap-4 justify-center">
              <FaFacebook className="text-blue-500"></FaFacebook>
              <FaTwitter className="text-blue-300"></FaTwitter>
              <FaLinkedin className="text-blue-700"></FaLinkedin>
              <FaInstagram className="text-pink-600"></FaInstagram>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={team3}
              alt="car engine plug"
              className="rounded-xl h-[40vh]"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Engine Expert</span>
              </p>
            </div>{" "}
            <div className="text-3xl flex gap-4 justify-center">
              <FaFacebook className="text-blue-500"></FaFacebook>
              <FaTwitter className="text-blue-300"></FaTwitter>
              <FaLinkedin className="text-blue-700"></FaLinkedin>
              <FaInstagram className="text-pink-600"></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
