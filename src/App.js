import "./styles.css";

import React, { Component } from "react";

import Car from "./components/car";

import AddCar from "./components/addCars";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: "2018", color: "white" },
      { name: "Audi", year: "2015", color: "gray" },
      { name: "Mazda", year: "2012", color: "red" }
    ],
    pageTitle: "Hello React Components",
    showCars: true,
    showAddCars: false
  };

  // handleChangeTitle = (newTitle) => {
  //   this.setState({
  //     pageTitle: newTitle
  //   });
  // };

  // handleInput = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   });
  // };

  handlerToogleCars = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = this.state.cars.concat(); // const cars = [...this.state.cars]
    this.setState({ cars }); // this.setState({cars: cars})
  }

  onDelete(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  }

  handlerToogleAddCar = () => {
    this.setState({ showAddCars: !this.state.showAddCars });
  };

  handlerAddCar = (car) => {
    const cars = [...this.state.cars];
    cars.push(car);
    this.setState({ cars });
  };

  render() {
    const style = { color: "blue" };
    const cars = this.state.cars;
    let carsView = null;
    let addCars = null;

    if (this.state.showCars) {
      carsView = cars.map((car, index) => (
        <Car
          key={index}
          name={car.name}
          year={car.year}
          color={car.color}
          owner={car.owner}
          onChangeName={(event) => this.onChangeName(event.target.value, index)}
          onChangeTitle={() => this.handleChangeTitle(car.name)}
          onDelete={this.onDelete.bind(this, index)}
        />
      ));
    }

    if (this.state.showAddCars) {
      addCars = <AddCar handlerAddCar={this.handlerAddCar} />;
    }

    return (
      <div className="App">
        <h1 style={style}>{this.state.pageTitle}</h1>
        {/* <input type="text" onChange={this.handleInput}></input> */}
        {/* <button onClick={this.handleChangeTitle.bind(this, "Changed")}> */}
        <button onClick={this.handlerToogleCars}>
          {this.state.showCars ? "Скрыть" : "Показать"}
        </button>
        <button onClick={this.handlerToogleAddCar}>Добавить</button>
        <hr />
        <div style={{ margin: "auto", width: 400, paddingTop: 20 }}>
          {addCars}

          {carsView}
        </div>
      </div>
    );
  }
}

export default App;
