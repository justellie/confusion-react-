//Este componente es el que se encarga de pasar todos los datos a los demas componentes para que ellos lo muestren por pantalla
import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />{/*Comparo el id del dishes y retorno el objeto como tal, el cero es para indicar donde inica */}
        <Footer />
      </div>
    );
  }
}

export default Main;