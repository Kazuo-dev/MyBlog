import { getAllFilesMetadata } from '../lib/mdx';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <>
      <main className="blog">
        <h3> My Blog </h3>
        <div className="blog-posts">
          {posts.map(post => ( 
            <div key={post.slug} className="blog-posts__post">
              <Link href={`./blog/${post.slug}`}>
                <h2> {post.title} &rarr; </h2>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <a style={{ textDecoration: 'none' }}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            image
          </span>
        </a>
      </footer>
    </>
  )
}

export async function getStaticProps(){
  const posts = getAllFilesMetadata();
  // console.log(posts);
  return {
    props: { posts }
  }
};