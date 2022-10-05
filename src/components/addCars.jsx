import React, { useState } from "react";

const AddCar = (props) => {
  const [obj, setObj] = useState({ name: "", year: "", color: "", owner: "" });

  const onTrigger = () => {
    props.handlerAddCar(obj);
  };
  let input = Object.entries(obj).map(([key, value], index) => {
    return (
      <div key={index}>
        <label>{key}: </label>
        <input
          type="text"
          name={key}
          onChange={(event) =>
            setObj({ ...obj, [event.target.name]: event.target.value })
          }
          value={value}
        />
      </div>
    );
  });
  return (
    <div>
      {input}
      <button onClick={onTrigger}>Добавить</button>
      <hr />
    </div>
  );
};

export default AddCar;
