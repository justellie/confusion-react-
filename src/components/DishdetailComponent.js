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




renderComments(dish) {        
        if (dish!=null) {   
            const dishComments = dish.comments.map(commentDish => {                  
                return (
                      <ul className="list-unstyled">
                          <li>
                            <p>{commentDish.comment}</p>
                            <p>--{commentDish.author}, {new Intl.DateTimeFormat("en-US", {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(commentDish.date))}</p>  
                          </li>
                        </ul>  
                ); 
            }); 
          return(
          <div>
            <h4>Comments</h4> 
              {dishComments} 
          </div>

          );                      
        } else {
            return (<div></div>);
        }    
    
    
      }














    render() {
          
        return (
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishes)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dishes)}
                  </div>
                </div>


         );
      
    }
}
  export default DishDetail ;  