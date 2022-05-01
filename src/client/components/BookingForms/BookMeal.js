/*
This component has to get props, which is date , number of guests and meal Id 
and has to get them from it's parent component meal-id=?- you can use, react hooks , form validation for this component , remember that you want two forms , one with selected meal (choosen from meal page ) one with select from home page (forget about it let your home page book meal button lead customers to meals page)

*/

import React from "react";

function BookMeal() {
  // const onAdd = () => {
  //     console.log( "you did not add anything" );
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name) {
  //     alert("please enter your name");
  //     return;
  //   } else if (!start) {
  //     alert("please choose start date");
  //     return;
  //   } else if (!end) {
  //     alert("please choose the finish date");
  //     return;
  //   }
  //   onAdd({ name, start, end });
  //   setName("");
  //   setStart("");
  //   setEnd("");
  // };

  // onSubmit = { onSubmit };

  return (
    <div>
      <form className="add-form">
        <div className="form-control">
          <label>Number of guests</label>
          <input
            type="number"
            placeholder="Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Start Date</label>
          <input
            type="datetime-local"
            placeholder="Start-Date"
            // value={start}
            // onChange={(e) => setStart(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>End Date</label>
          <input
            type="datetime-local"
            placeholder="End-Date"
            // value={end}
            // onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Submit Your Shift"
          className="btn btn-block"
        ></input>
      </form>
    </div>
  );
}

export default BookMeal;
