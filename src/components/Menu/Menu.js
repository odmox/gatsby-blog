import React from 'react';
import { Link } from 'gatsby';

import './Menu.scss';

export default function Menu() {
    return (
        <div className = "menu">
            <Link to ='/'>
                <h2> Blog Developer </h2>
            </Link>
            <p>
                Blog sobre desarrollo web 
            </p>
            <h5> Social Media </h5>
            <h5> Lista de Cursos </h5>
        </div>
    )
}
