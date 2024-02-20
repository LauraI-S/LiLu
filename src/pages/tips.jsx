import Image from "next/image";
import React from "react";
import constructionImage from "../../public/images/Under_Construction-removebg-preview.png";
import underConstructionCats from "../../public/images/under_construction_Cats.jpeg";
import stickerCat from "../../public/images/sticker_cat_noBg.png";

function tips() {
  return (
    <div className="flex justify-center">
      {/* <Image
        src={constructionImage} // Route of the image file
        height={500} // Desired size with correct aspect ratio
        width={500} // Desired size with correct aspect ratio
        alt="Your Name"
      /> */}
      {/* <Image
        src={underConstructionCats} // Route of the image file
        height={700} // Desired size with correct aspect ratio
        width={700} // Desired size with correct aspect ratio
        alt="Your Name"
      /> */}
      <Image
        src={stickerCat} // Route of the image file
        height={600} // Desired size with correct aspect ratio
        width={600} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  );
}

export default tips;
