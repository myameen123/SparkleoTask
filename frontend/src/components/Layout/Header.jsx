import React from "react";

function Header() {
  return (
    <header className=" bg-primaryColor w-full h-20 text-white flex justify-between items-center">
      <div className=" md:ml-8 ml-4 text-xl">Sparkleo</div>
      <div className="md:mr-8 mr-4">Employee Management</div>
    </header>
  );
}

export default Header;
