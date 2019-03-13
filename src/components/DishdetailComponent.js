
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button,Row, Col, Label,Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component{

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
       
        this.state = {
          isNavOpen: false,
          isModalOpen:false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
         }
      
    render()
    
    {   
        return(


            <div>
                <Button outline onClick={this.toggleModal}><span className=" fa fa-pencil"></span> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        
                                <div className="col-12 col-md-12">       
                                    <LocalForm >

                                        <Row className="form-group">
                                            <Label htmlFor="rating" md={4}>Rating</Label>
                                                <Col md={10}>
                                                    <Control.select model=".rating" name="rating"
                                                        className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>

                                                        
                                                    </Control.select>
                                                </Col>
                                        </Row>

                                        <Row className="form-group">
                                            <Label htmlFor="name" md={4}>Your Name</Label>
                                                    <Col md={10}>
                                                        <Control.text model=".name" id="name" name="name"
                                                            placeholder="Your Name"
                                                            className="form-control"
                                                            validators={{
                                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                                            }}
                                                            />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".name"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required',
                                                                minLength: 'Must be greater than 2 characters',
                                                                maxLength: 'Must be 15 characters or less'
                                                            }}
                                                        />
                                                    </Col>
                                         </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="message" md={4}>Comment </Label>
                                                <Col md={10}>
                                                    <Control.textarea model=".message" id="message" name="message"
                                                        rows="12"
                                                        className="form-control" />
                                                </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col >
                                                <Button type="submit" color="primary">
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </div>
                            
                    </ModalBody>
                </Modal>
            </div>            
        );}

}






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
              <CommentForm/> 
              
              
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