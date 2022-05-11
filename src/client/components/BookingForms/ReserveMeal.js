import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ReserveMeal({ meal, closePopUp }) {
  const mealTitle = meal.map((m) => m.title);
  const mealId = meal.map((m) => m.meal_id);
  const maxGuests = meal.map((m) => m.availableSpots);

  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const reservation = {
    number_of_guests: guests,
    meal_id: mealId[0],
    contact_phonenumber: phone,
    contact_name: name,
    contact_email: email,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return alert(`${reservation} successfully added.`);
      } else {
        alert(
          "Error occurred , please make sure , that the input data type are correct "
        );
        throw Error(response.statusText);
      }
      history.push("/menu");
    });

    setGuests("");
    setName("");
    setPhone("");
    setEmail("");
    closePopUp();
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Meal title</label>
          <input type="text" placeholder={mealTitle} />
        </div>
        <div className="form-control">
          <label>Number of guests</label>
          <input
            type="number"
            placeholder="number of guests"
            value={guests}
            min={1}
            max={maxGuests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            placeholder="booking name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>e-mail</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          value="save your booking"
          disabled={maxGuests == 0}
          className="btn btn-block"
        ></input>
        <button className="btn btn-block" onClick={closePopUp}>
          close
        </button>
      </form>
    </div>
  );
}

export default ReserveMeal;




