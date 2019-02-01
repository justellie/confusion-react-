import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail  from './DishdetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);//para heredar todas las propiedades que fueron pasadas
    }

    

    render() {
        
        const menu = this.props.dishes.map((dish) => {     {/*Esto es para llenar el array menu que va a salir en pantalla usando la propiedad dishes que fue pasada en el archivo app.js*/}
            return (
              <div  className="col-12 col-md-5 m-1">
               <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>{/* Si le doy click a esta card entonces eslla pasara como paramatro a el dish en el que se encuentre en ese momento*/}
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
            </div>
        );
    }
}
    export default Menu;