import img1 from "../../assets/icons/check.svg";
import img2 from "../../assets/icons/deliveryt.svg";
import img3 from "../../assets/icons/Group 38729.svg";
import img4 from "../../assets/icons/group.svg";
import img5 from "../../assets/icons/Wrench.svg";
import img6 from "../../assets/icons/person.svg";

const WhyChoose = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <h4 className="text-themeColor font-bold">Core Feature</h4>
        <h3 className="text-3xl font-bold pb-6">Why Choose Us!</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="py-6 flex gap-4 justify-around ">
        <div className="items-center flex flex-col shadow-sm border  p-4 ml-2 rounded-md py-6 hover:text-white hover:bg-themeColor">
          <img src={img1} alt="" className="" />
          <h2 className="font-bold">Expert Team</h2>
        </div>
        <div className="items-center flex flex-col shadow-sm border  p-4 ml-2 rounded-md py-6 hover:text-white hover:bg-themeColor">
          <img src={img2} alt="" className="" />
          <h2 className="font-bold">TImely delivary</h2>
        </div>
        <div className="items-center flex flex-col shadow-sm border  p-4 ml-2 rounded-md py-6 hover:text-white hover:bg-themeColor">
          <img src={img3} alt="" className="fill-themeColor" />
          <h2 className="font-bold">Expert Team</h2>
        </div>
        <div className="items-center flex flex-col shadow-sm border  p-4 ml-2 rounded-md py-6 hover:text-white hover:bg-themeColor">
          <img src={img4} alt="" className="" />
          <h2 className="font-bold">Expert Team</h2>
        </div>
        <div className="items-center flex flex-col shadow-sm border  p-4 ml-2 rounded-md py-6 hover:text-white hover:bg-themeColor">
          <img src={img5} alt="" className="" />
          <h2 className="font-bold">Expert Team</h2>
        </div>
        <div className="items-center flex flex-col shadow-sm border  p-4 ml-2 rounded-md py-6 hover:text-white hover:bg-themeColor">
          <img src={img6} alt="" className="" />
          <h2 className="font-bold">Expert Team</h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
