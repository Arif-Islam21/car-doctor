import { useLoaderData } from "react-router-dom";
import TopBar from "../Shared/TopBar/TopBar";

const Checkout = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);
  return (
    <div>
      <TopBar img={serviceData.img}></TopBar>
      <div className="px-12">
        <form className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="row-span-2 col-span-2 w-full">
            <textarea
              placeholder="Bio"
              name="moreInfo"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-themeColor text-white hover:text-themeColor font-bold">
              Comferm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
