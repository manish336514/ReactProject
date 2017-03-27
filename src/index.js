
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componemts/Header.js"
export default class Basic extends React.Component{



render(){
return(
<div>
<Header/>
</div>
);
}

}


ReactDOM.render(
  <Basic/>,
document.getElementById("start"));
