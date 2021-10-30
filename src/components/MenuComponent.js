import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onclicking }) {
  return (
    <Card key={dish.id}
      onClick={() => onclicking(dish.id)}>

        <CardImg width="100%" src={dish.image} alt={dish.name} />

         <CardImgOverlay>
           <CardTitle>{dish.name}</CardTitle>
         </CardImgOverlay>
    </Card>
  );

}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    //console.log(dish.id);
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onclicking = {props.onclicking} />
      </div>
    );
  });
  
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );

}
export default Menu;
