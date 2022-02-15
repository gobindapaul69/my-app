import React from "react";
import PropTypes from "prop-types";

//basic props
// function Header(props) {
//   return (
//     <div className="container">
//         <h2>{props.headerTitle}</h2>
//     </div>);
// }

//since props is an object so we can destructuring this object directly with name name of its properties
function Header(props) {
    return (
      <div className="container">
          <h2>Hello{props.headerTitle}</h2>
      </div>);
  }

//Set default props  
Header.defaultProps = {
    headerTitle : "Feedback UI"
}

//set propperty types i.e. String, int, boolean etc
//PropTypes should start with lower case as propTypes
Header.propTypes = {
    // headerTitle: PropTypes.string.isRequired
    headerTitle: PropTypes.string
}

export default Header;
