import React from 'react';
import { Link } from 'react-router-dom'

const Terms = props => {

    const terms = props.terms

    const mappedTerms = terms.map(el => {
        return (
           
                <li key={el.name} className="term-item">
                    <Link to={`/terminology/${el.id}`}>
                        {el.name}
                        &nbsp;
                </Link>
                </li>


        )

    })

    return (
        <div className="list">
            <ul>{mappedTerms}</ul>
        </div>
    );
};

export default Terms;