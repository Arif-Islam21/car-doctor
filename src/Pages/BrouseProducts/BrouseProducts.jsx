import { FaStairs, FaStar } from "react-icons/fa6";
import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
import img4 from "../../assets/images/products/4.png";
import img5 from "../../assets/images/products/5.png";
import img6 from "../../assets/images/products/6.png";

const BrouseProducts = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <h4 className="text-themeColor font-bold">Popular Product</h4>
        <h3 className="text-3xl font-bold pb-6">Brouse Our Popular Product</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="car engine plug"
              className="rounded-xl h-[25vh]"
            />
          </figure>
          <div className="card-body text-center">
            <p className="text-amber-400 flex gap-2 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title mx-auto">Car Engine Plug</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Price :</span> $20.00
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img2}
              alt="car engine plug"
              className="rounded-xl h-[25vh]"
            />
          </figure>
          <div className="card-body text-center">
            <p className="text-amber-400 flex gap-2 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Price :</span> $20.00
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img3}
              alt="car engine plug"
              className="rounded-xl h-[25vh]"
            />
          </figure>
          <div className="card-body text-center">
            <p className="text-amber-400 flex gap-2 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Price :</span> $20.00
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img4}
              alt="car engine plug"
              className="rounded-xl h-[25vh]"
            />
          </figure>
          <div className="card-body text-center">
            <p className="text-amber-400 flex gap-2 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Price :</span> $20.00
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img5}
              alt="car engine plug"
              className="rounded-xl h-[25vh]"
            />
          </figure>
          <div className="card-body text-center">
            <p className="text-amber-400 flex gap-2 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Price :</span> $20.00
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img6}
              alt="car engine plug"
              className="rounded-xl h-[25vh]"
            />
          </figure>
          <div className="card-body text-center">
            <p className="text-amber-400 flex gap-2 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title mx-auto">Car Engine Oil</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg text-themeColor">
                <span className="text-2xl font-semibold">Price :</span> $20.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrouseProducts;
