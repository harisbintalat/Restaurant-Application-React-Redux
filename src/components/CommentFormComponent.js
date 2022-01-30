import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Col, Row, Button,ModalHeader,Modal, ModalBody,Input} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const CommentForm = (props) => {

    const [model,setModel] = useState(false);

    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    function handleSubmit(values) {
        props.postComment(props.dishId, values.rating, values.author, values.comment);
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
    }

    function handleModel() {
        
        setModel(!model)
    }
return (
    <React.Fragment>
        <Button outline onClick={() => handleModel()}>
            <span className="fa fa-pencil fa-lg"> Submit comment</span>
        </Button>
        <Modal isOpen={model} toggle={()=>handleModel()}>
            <ModalHeader toggle={()=>handleModel()}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className='form-group'>
                        <Label htmlFor="rating" md={{ size: 12}}>Rating</Label>
                        <Col md={{ size: 12}}>
                            <Control.select model=".rating" name="rating" className='form-control' >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlFor="author" md={{ size: 12}}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".author" id="author" name="author" className='form-control'
                                validators={{
                                    minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className='text-danger'
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 chatacters',
                                    maxLength: 'Must be less than 15 characters',
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlfor="comment" md={12}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" className='form-control' />
                        </Col>
                    </Row>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>
    </React.Fragment >
    );
}
export default CommentForm;