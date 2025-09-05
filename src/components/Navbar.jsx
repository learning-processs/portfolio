

const Navbar = () => {
  return (
    <div className=" ">
      <div className="flex justify-between bg-gray-900  text-gray-400 px-4 py-4">
        <div className="max-sm:hidden font-semibold cursor-pointer">myPortfolio</div>
        <div className="">
          <ul className="w-full flex justify-evenly gap-12 cursor-pointer  ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
