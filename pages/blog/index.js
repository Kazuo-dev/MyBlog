import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx';
import Link from 'next/link';

export default function blog({ posts }) {
    return (
        <div>
            {posts.map(post => ( 
            <div key={post.slug} className="blog-posts__post">
              <Link href={`./blog/${post.slug}`}>
                <h2> {post.title} &rarr; </h2>
              </Link>
            </div>
          ))}
        </div>
    )
}

export async function getStaticProps(){
    const posts = getAllFilesMetadata();
    // console.log(posts);
    return {
      props: { posts }
    }
  };