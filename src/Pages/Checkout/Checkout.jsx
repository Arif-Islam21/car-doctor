import { useLoaderData } from "react-router-dom";
import TopBar from "../Shared/TopBar/TopBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const serviceData = useLoaderData();
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const order = {
      customerName: name,
      email,
      phone,
      date,
      service_id: serviceData._id,
      service_title: serviceData.title,
      service_img: serviceData.img,
      price: serviceData.price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <TopBar img={serviceData.img}></TopBar>
      <div className="px-12">
        <form onSubmit={handleBookService} className="card-body">
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
                type="date"
                name="date"
                placeholder="date"
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
