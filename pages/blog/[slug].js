import Link from 'next/link'
import React, { useState } from 'react'
import { client, urlFor } from '../../client/client'
import BlockContent from '@sanity/block-content-to-react'

const SinglePost = ({ post, posts }) => {
  const { title, mainImage, body, author, publishedAt, read } = post
  console.log(post)
  return (
    <section>
      <div className='site-map'>
        <div className='site-map-container container'>
          <Link href='/'>
            <a>
              <h5>
                HOME
              </h5>
            </a>
          </Link>
          <span>|</span>
          <Link href="/Blog">
            <a>
              <h5>BLOG</h5>
            </a>
          </Link>
          <span>|</span>
          <h5>{title}</h5>
        </div>
      </div>

      <main className='main-content-single-post'>
        <article className='blog-post'>
          <div className='single-post-details'>
            <h1 className='single-post-title'>{title}</h1>

          </div>
          <img src={urlFor(mainImage)} />

          <div className='single-post-block-content'>
            {body[0] !== undefined && (
              <BlockContent blocks={body} projectId='9luiiryd' dataset='production' />
            )}
          </div>
        </article>

        <div className='recent-posts-container'>
          <hr />
          <h2 className='single-post-subtitle'>Recent Posts</h2>
          <ul>
            {posts.map((item) => (
              <Link key={item.title} href={`/blog/${item.slug.current}`}>
                <a>
                  <li className='single-post-link'>{item.title}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </section>
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

export const getStaticProps = async ({ params: { slug } }) => {
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