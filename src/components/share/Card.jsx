import React from "react";
import propTypes from 'prop-types'

function Card({children, reverse}) {
  // console.log(props);

  //const { children } = props;

   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  // return <div className="card" style={{
  //   backgroundColor: reverse? '#000' : '#fff',
  //   color: reverse? '#fff' : '#000' 
  // }}>{children}</div>;
}

//TO SET THE DEFAULT PROPERTY VALUE
Card.defaultProps = {
  reverse: false 
}

//TO SET PROP TYPE
Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool
}

export default Card;
