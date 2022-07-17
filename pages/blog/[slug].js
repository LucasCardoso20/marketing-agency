import React, {useState} from 'react'
import {client, urlFor} from '../../client/client'

const SinglePost = ({post, posts}) => {
  
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }
  `;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: { 
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const postsQuery = '*[_type == "post"]'
  
  const post = await client.fetch(query);
  const posts = await client.fetch(postsQuery);

  console.log(post);

  return {
    props: { posts, post }
  }
}

export default SinglePost;