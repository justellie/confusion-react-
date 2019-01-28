import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);//para heredar todas las propiedades que fueron pasadas

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {//cambiar el valor del estado
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {//muestra descripcion e imagen de un platillo
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else

            return(

                <div> </div>
            );
    }

    render() {
        
        const menu = this.props.dishes.map((dish) => {     {/*Esto es para llenar el array menu que va a salir en pantalla usando la propiedad dishes que fue pasada en el archivo app.js*/}
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>{/* Si le doy click a esta card entonces eslla pasara como paramatro a el dish en el que se encuentre en ese momento*/}
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}{/*Muestro el array.Y queda esperando que toque alguno para cambiar el selectedDish actual*/}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}{/*Aqui se renderiza despues de tocar algo y si no toque ninguno queda null y en consecuencia no rederiza nada*/}
                  </div>
                </div>
            </div>
        );
    }
}
    export default Menu;