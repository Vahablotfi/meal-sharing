import React from "react";
import falafel from "../images/falafel.jpg";
// const falafel = require("../images/falafel.jpg");

function FalafelPic() {
  return (
    <div>
      "this is a crazy component"
      <img src={falafel} alt="hyf image" width={300} height={200}></img>
      <img
        src={"https://source.unsplash.com/random/200x200?food"}
        width={300}
        height={200}
      />
    </div>
  );
}

export default FalafelPic;
