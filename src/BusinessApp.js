import React from "react";
import BusinessList from "./businessList";
import './businessList.css';

 class BusinessApp extends React.Component {
    render(){
      return(  
        <div>
            <BusinessList imageSrc={this.props.businessObject.imageSrc} name={this.props.businessObject.name} address={this.props.businessObject.address} city={this.props.businessObject.city}/>
        </div>    
      )
    }
}

export default BusinessApp;