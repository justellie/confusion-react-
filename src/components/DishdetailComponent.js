
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

 function RenderDish({dish}) {
    
       if (dish != null)
            return(
              <div className="col-12 col-md-5 m-1"> 
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              </div>  
            );
        else

            return(      
                <div> </div>                
            );
    }


  function RenderComments({dish})
  {
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
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4> 
              {dishComments} 
          </div>

          );                      
        } else {
            return (<div></div>);
        }    
    
  }


  const  DishDetail = (props) => {

     return (
              <div className="container">

                <div className="row">

                     
                        <RenderDish dish={props.dishes}/>
                        <RenderComments dish={props.dishes}/>
                      
                    </div>
              </div>

         );
      
    }
  export default DishDetail ;  