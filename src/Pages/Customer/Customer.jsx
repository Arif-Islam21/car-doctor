import { FaStar } from "react-icons/fa6";
import bgImg from "../../assets/icons/quote.svg";

const Customer = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <h4 className="text-themeColor font-bold">Testimonial</h4>
        <h3 className="text-3xl font-bold">What Customers Says</h3>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div>
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item flex items-center gap-8 h-[65vh] relative w-full"
          >
            <div className="carousel-item flex flex-col border px-6 py-4 w-1/2">
              <div className="flex justify-around gap-6 items-start">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Arif Hossain</h2>
                  <p className="text-gray-500 font-semibold">Businessman</p>
                </div>
                <div>
                  <img
                    src={bgImg}
                    alt=""
                    className="h-16 fill-themeColor w-20"
                  />
                </div>
              </div>
              <div>
                <p className="px-12 py-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div className="flex gap-4  justify-center text-amber-500">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
              </div>
            </div>
            <div className="carousel-item flex flex-col border px-6 py-4 w-1/2">
              <div className="flex justify-around gap-6 items-start">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Arif Hossain</h2>
                  <p className="text-gray-500 font-semibold">Businessman</p>
                </div>
                <div>
                  <img
                    src={bgImg}
                    alt=""
                    className="h-16 fill-themeColor w-20"
                  />
                </div>
              </div>
              <div>
                <p className="px-12 py-8">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div className="flex gap-4  justify-center text-amber-500">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a className="btn hover:bg-themeColor btn-circle">❮</a>
              <a className="btn hover:bg-themeColor btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
