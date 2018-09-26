import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'



const Definition = props => {

    const matchingTerm = props.terms.find(el=>el.id == props.match.params.id)
    console.log("TErm", matchingTerm)

    return (
        <div className = "definition">
        <p>{matchingTerm.definition}</p>
            
        </div>
    );
};

export default withRouter(Definition);