import img from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" pr-12 lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl text-center py-6 font-semibold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-themeColor border-none text-white hover:text-themeColor font-bold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
