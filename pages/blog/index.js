import React from 'react'
import { getAllFilesMetadata } from '../../lib/mdx';
import Link from 'next/link';
import styled from 'styled-components';

export default function blog({ posts }) {
  const sortedPosts = posts.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  })

  const Posts = () => {
    return (
      <>
        {sortedPosts.map(post => ( 
          <Post key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2> {post.title} &rarr; </h2>
            </Link>
            <p> { post.description } </p>
          </Post>
        ))}
      </>
    )
  }

    return (
        <div>
          <hr />
            <Posts />
        </div>
    )
}

const Post = styled.article`
h2 {
  width: fit-content;
  transition: .3s;
  cursor: pointer;
  color: lightgreen;

  &:hover {
          opacity: .5;
        }
}

@media (min-width: 2000px) {
        font-size: 1.1vw;
      }
  `;

export async function getStaticProps(){
    const posts = getAllFilesMetadata();
    return {
      props: { posts }
    }
  };