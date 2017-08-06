import React, { Component } from 'react';
import {orderBy} from 'lodash'

class PatentDescription extends Component {
    
    getDescription(description){
        description.heading.map((element) =>{
            return element.header= true;
        })
        let jointDescription = description.heading.concat(description.p);
        jointDescription = orderBy(jointDescription, ['_seq'],['asc']);
        return(jointDescription.map((item, index) => (!!item.header ? <strong key={index}>{item['#text']}</strong> : <p key={index}>{item['#text']}</p>)))
    }
    render() {
        return (
            <div>{this.getDescription(this.props.description)}</div>
        );
    }
}

export default PatentDescription;