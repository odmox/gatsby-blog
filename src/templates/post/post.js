import React from 'react'

import TransformOembedToIframe from '../../utils/TransformOembedToIframe';
import BlogLayout from '../../layouts/BlogLayout';
import Seo from '../../components/seo';
import './post.scss'

export default function Post( props ) {

    const { pageContext: { data: post} } = props;

    return (
        <BlogLayout className = "post">
            <Seo 
                title = {post.seo_title}
                description = {post.seo_description}
                // image = {post.miniature.publicURL}
            />
            <h1> {post.title} </h1>
            <div className = "markdown-body" >
                <div dangerouslySetInnerHTML = {{ __html: TransformOembedToIframe(post.content) }}/>
            </div>
        </BlogLayout>
    )
}
