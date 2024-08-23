const TopBar = ({ img }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#151515] rounded-xl to-[#1515150b]">
      <img
        src={img ? img : "img not found"}
        className="max-h-96 min-h-40 rounded-xl w-full"
        alt="img not found"
      />
      <div className="absolute top-1/2 left-5">
        <h2 className="lg:text-5xl -translate-y-1/2 text-2xl font-bold text-white">
          Check Out
        </h2>
      </div>
      <div className="absolute bottom-0 px-8 py-4 left-1/2 bg-themeColor transform trapezoid -translate-x-1/2 text-white">
        <h4 className="font-semibold">Home/Checkout</h4>
      </div>
    </div>
  );
};

export default TopBar;
