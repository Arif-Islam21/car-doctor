const BrouseCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg text-themeColor">
            <span className="text-2xl font-semibold">Price :</span> ${price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <p className="text-2xl flex justify-end text-themeColor font-bold">
              <FaArrowRight></FaArrowRight>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrouseCard;
