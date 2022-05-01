import React from "react";

function CardImage({ image }) {
  return (
    <div>
      <img
        src={image}
        alt="picture of a falafel plate"
        width={200}
        height={150}
      ></img>
    </div>
  );
}

export default CardImage;
