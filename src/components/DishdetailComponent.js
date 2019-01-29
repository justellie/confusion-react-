import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail  extends Component {
   constructor(props) {
    super(props);
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





renderComments(comments) {//muestra descripcion e imagen de un platillo
        if (comments != null){
          const aux = comments.map((comment) => {     {/*Esto es para llenar el array menu que va a salir en pantalla usando la propiedad dishes que fue pasada en el archivo app.js*/}
            return (
              <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </li>
            );
        });
        return({aux});
          }
        else

            return(

                    
                <div> </div>                
            );
    }















    render() {
        console.log(this.renderComments());     
        return (
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishes)}
                  </div>
                </div>


         );
      
    }
}
  export default DishDetail ;  