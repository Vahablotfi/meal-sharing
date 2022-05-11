import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./forms.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const mealsValidSchema = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string().required(),
  description: Joi.string(),
  location: Joi.string().required(),
  created_date: Joi.date(),
  Hosting_time: Joi.date().greater("now").required(),
  max_number_of_guests: Joi.number().integer().min(10).max(100).required(),
  price: Joi.number().precision(2).required(),
});

function AddMeal({ closePopUp }) {
  const [title, setTitle] = useState("");
  const [servingNum, setServingNum] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    resolver: joiResolver(mealsValidSchema),
  });

  const submitMeal = (e) => {
    const meal = {
      title,
      description,
      location,
      Hosting_time: eventDate,
      max_number_of_guests: servingNum,
      price,
    };
    console.log(meal);
    fetch("/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meal),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return alert(`${meal} successfully added. thanks for sharing.`);
      } else {
        alert(
          "Error occurred , please make sure , that the input data type are correct "
        );
        throw Error(response.statusText);
      }
      history.push("/");
    });
    setTitle("");
    setServingNum("");
    setLocation("");
    setEventDate("");
    setPrice("");
    setDescription("");
  };

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit(submitMeal)}>
        <div className="form-control">
          <label>Meal title</label>
          <input
            type="text"
            placeholder="meal title"
            value={title}
            {...register("title")}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>describe a bit</label>
          <input
            type="textarea"
            placeholder="meal description"
            value={description}
            {...register("description")}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Number of guests</label>
          <input
            type="number"
            placeholder="number of guests"
            value={servingNum}
            {...register("max_number_of_guests")}
            onChange={(e) => setServingNum(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label>location</label>
          <input
            type="text"
            placeholder="event location"
            value={location}
            {...register("location")}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>event date</label>
          <input
            type="datetime-local"
            placeholder="event-date"
            value={eventDate}
            {...register("Hosting_time")}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>price</label>
          <input
            type="number"
            placeholder="price"
            value={price}
            {...register("price")}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          value="add your meal"
          className="btn btn-block"
        ></input>
        <button className="btn btn-block" onClick={closePopUp}>
          close
        </button>
      </form>
    </div>
  );
}

export default AddMeal;

