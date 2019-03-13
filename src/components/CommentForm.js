import React , {Component}from 'react';
import { Button,Row, Col, Label,Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

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
export default CommentForm;