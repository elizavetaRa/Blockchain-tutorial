import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'



const Definition = props => {

    const matchingTerm = props.terms.find(el=>el.id === props.match.params.id)


    return (
        <div className = "definition">
        <p>{matchingTerm.definition}</p>
            
        </div>
    );
};

export default Definition;