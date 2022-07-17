import React from 'react'
import { urlFor } from '../../client/client'
import Link from 'next/link'

const BlogPosts = ({ post }) => {
  const featuredPosts = post.filter((item) => item.released)
  const { title, mainImage, read } = featuredPosts
  return (
    <section id='blog' className='blog'>
      {console.log(featuredPosts)}

      <div className="blog-container container">
        <h2 className='title-h2'>Latest Blog Posts</h2>
        <h4 className='subtitle subtitle-main subtitle-blog-section'>Discover the latest news & important tips in the world of SEO</h4>

        <div className="horizontal-line">
          <span className="horizontal-line-span"></span>
        </div>

        <div className="blog-posts-container">
          {featuredPosts.map((item) => (
            <Link href={`/blog/${item.slug.current}`} key={item.title}>
              <a>
                <article className="post">
                  <img src={urlFor(item.mainImage)} />
                  <h4 className='title-h4 post-title'>{item.title}</h4>
                </article>
              </a>

            </Link>
          ))}
        </div>
        <div className="btn-blog-container">
          <button className="btn btn-carousel">View All Blog Posts</button>
        </div>

      </div>

    </section>
  )
}

export default BlogPosts