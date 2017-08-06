import React, { Component } from 'react';
import {orderBy} from 'lodash'

class PatentClaims extends Component {
    
    parseClaims(claims){
        claims = orderBy(claims, ['_seq'],['asc']);
        return(claims.map((item, index) => (<p key={index}>{item['claim-text']['#text']}</p>)))
    }
    getClaims(){
        return(<div>{this.props.claims['claim-statement']['#text']}{this.parseClaims(this.props.claims['claim'])}</div>)
    }
    render() {
        return (
            this.getClaims()            
        );
    }
}

export default PatentClaims;