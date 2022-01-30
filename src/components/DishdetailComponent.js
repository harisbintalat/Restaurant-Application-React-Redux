import React, {useState} from "react";
import CommentForm from "./CommentFormComponent";
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderCom({comments, postComment, dishId }) {

    if (comments == null) {
        return (<div></div>)
    }
    
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
            <CommentForm dishId={dishId} postComment={postComment}  />
        </div>
    )
}

function RenderDish({ dish }) {
    if (dish == null) {
        return (
            <div></div>
        );

    }
    else {
        return (
            <div className='col-12 col-md-5 m-1'>
                 <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
            </div>
        );
    }
}


const DishDetail = (props) => {
    const dish = props.dish;

    if(props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );

    }

    else if (dish == null) {
        return (<div></div>);
    }

    const dishItem = <RenderDish dish={props.dish} />
    const dishComment = <RenderCom comments={props.comments}
    postComment={props.postComment}
    dishId = {props.dish.id}
    />

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
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        </div>
    )
}


export default DishDetail;
