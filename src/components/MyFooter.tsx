import React from "react";

function MyFooter() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <a href="/about" className="text-xl font-bold hover:underline mr-4">
              LiLu
            </a>
            <p className="text-sm md:text-base">Crafting Dreams into Reality</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <a
              href="https://www.codeacademyberlin.com/"
              className="text-xl font-bold hover:underline mr-8"
            >
              @ CodeAcademy Berlin
            </a>
            <a href="/contact" className="text-xl font-bold hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
