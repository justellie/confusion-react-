
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
            const dishComments = dish.map(commentDish => {                  
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
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
           
                        <RenderDish dish={props.dish} />         
                        <RenderComments dish={props.comments} />
                    
                </div>
                </div>
  



         );
      
    }
  export default DishDetail ;   