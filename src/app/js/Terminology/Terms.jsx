import React from 'react';
import { Link } from 'react-router-dom'

const Terms = props => {

    const terms = props.terms
    const mappedTerms = terms.map(el => {
        return (
            <div>
                <li key={el.id} className="term-item">
                    <Link to={"/terms/${el.id}"}>
                        {el.name}
                        &nbsp;
                </Link>
                </li>
                <div>
                    {/* output of {el.definition} */}
                </div>
            </div>


        )

    })

    return (
        <div className="list">
            <ul>{mappedTerms}</ul>
        </div>
    );
};

export default Terms;