import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
import image6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative max-h-[70vh] w-full">
        <img src={image1} className="w-full " />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform gap-5">
          <div className="text-white">
            <h2 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn mr-5 bg-themeColor text-white font-semibold border-none hover:text-themeColor">
                Discover More
              </button>
              <button className="btn btn-outline text-white font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide6"
            className="btn bg-[#ffffff3d] border-none btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn bg-[#FF3811] text-white border-none btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative max-h-[70vh] w-full">
        <img src={image2} className="w-full " />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide1"
            className="btn bg-[#ffffff3d] border-none btn-circle"
          >
            ❮
          </a>
          <a href="#slide3" className="btn bg-[#FF3811] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative max-h-[70vh] w-full">
        <img src={image3} className="w-full " />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide2"
            className="btn bg-[#ffffff3d] border-none btn-circle"
          >
            ❮
          </a>
          <a href="#slide4" className="btn bg-[#FF3811] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative max-h-[70vh] w-full">
        <img src={image4} className="w-full " />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide3"
            className="btn bg-[#ffffff3d] border-none btn-circle"
          >
            ❮
          </a>
          <a href="#slide5" className="btn bg-[#FF3811] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative max-h-[70vh] w-full">
        <img src={image5} className="w-full " />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide4"
            className="btn bg-[#ffffff3d] border-none btn-circle"
          >
            ❮
          </a>
          <a href="#slide6" className="btn bg-[#FF3811] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative max-h-[70vh] w-full">
        <img src={image6} className="w-full " />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide5"
            className="btn bg-[#ffffff3d] border-none btn-circle"
          >
            ❮
          </a>
          <a href="#slide1" className="btn bg-[#FF3811] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
