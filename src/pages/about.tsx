import Image from "next/image";
import React from "react";
import logo from "../images/IMG-0380 (1).jpg";

import constructionImage from "../../public/images/Under_Construction-removebg-preview.png";
import underConstructionCats from "../../public/images/under_construction_Cats.jpeg";
import stickerCat from "../../public/images/sticker_cat_noBg.png";

function about() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">About LiLu</h1>
      <div className="flex flex-col items-center mb-6">
        <div className="mb-6">
          <Image
            src={logo}
            alt="logo"
            className="rounded-lg"
            width="300"
            height="300"
          />
        </div>
        <p className="mb-4 text-lg">
          Hi! I'm a dedicated 2-time mom learning to be a web developer, with a
          mission to make life easier for expecting mothers in Berlin, and
          eventually all around Germany. Through this platform, I aim to provide
          valuable information and support for the best care of babies and hacks
          for pregnancy, including finding the nearest midwife based on your
          home location. This app, developed as my final project at Codeacademy
          Berlin, addresses the need for close-by midwifery support, as midwives
          in Germany cannot travel more than 10km to their clients. Let's make
          your pregnancy journey smoother together!
        </p>
      </div>
    </div>
  );
}

export default about;
