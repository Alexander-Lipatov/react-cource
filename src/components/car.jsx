import React from "react";
import "./car.css";

const Car = (props) => {
  return (
    <div class="car">
      <p>
        Name:<strong>{props.name}</strong>
      </p>
      <p>
        Year:<strong>{props.year}</strong>
      </p>
      <p>
        Color:<strong>{props.color}</strong>
      </p>
      <p>
        owner:<strong>{props.owner ? props.owner : "Нет владельца"}</strong>
      </p>
      <input type="text" onChange={props.onChangeName} />
      <button onClick={props.onChangeTitle}>click</button>
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};
export default Car;
