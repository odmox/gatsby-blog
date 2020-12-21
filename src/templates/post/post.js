import React from 'react'

import './post.scss'

export default function Post( props ) {

    const { pageContext: { data: post} } = props;
    console.log(post);

    return (
        <div>
            <h1>Estamos en la pag del post </h1>
        </div>
    )
}
