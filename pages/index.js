import styled from 'styled-components';
import Image from 'next/image';
import MeImage from '../assets/images/jpg/city.jpg';
import { getAllFilesMetadata } from '../lib/mdx';
import Link from 'next/link';

export default function Home({ posts }) {
  const sortedPosts = posts.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 3);

  return (
    <HomeWrapper>
      <Title> Hi, my name is <strong style={{'color': 'blue'}}> DoDo </strong> and Im a <strong style={{'color': 'blue'}}> Frontend Developer </strong> </Title>
      <AboutMe>
        <ImageWrapper>
          <Image src={MeImage} alt="image-me" layout="fill" />
        </ImageWrapper>
        <p style={{ 'fontStyle': 'italic' }}>{'"'} Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia quam, exercitationem illum libero perferendis mollitia temporibus, quaerat voluptas placeat explicabo! Minus deserunt aliquam suscipit voluptates earum reprehenderit ipsam exercitationem.  {'"'}</p>
      </AboutMe>
      <RecentPosts>
        <h2> Recent Posts </h2>
        {sortedPosts.map (post => ( 
            <Post key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div> {post.title} &rarr; </div>
              </Link> 
              <p> { post.description } </p>
            </Post>
          ))}
      </RecentPosts>
      <Link href="/blog"> View more posts &rarr;</Link>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  height: fit-content;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & hr {
    width: 100%;
    opacity: .3;
  }

  & > a {
    text-align: center;
    text-decoration: underline 2px solid;
    color: ${({ theme }) => theme.text}
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-align: justify;
  max-width: 90%;
  `;

const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: content-box;
  padding: 20px;
  border-radius: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 5% 5% 5% 5%;
`;

const AboutMe = styled.section`
  width: 96%;
  display: grid;
  grid-template-columns: 20% auto;
  align-items: center;
  gap: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & p {
    margin: 0 5% 0 5%;
    font-size: 1.3rem;
  }
`;

const RecentPosts = styled.section`
  width: 96%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  & h2 {
    width: 100%;
      font-size: 2rem;
      margin-top: 5%;
    }
  `;

  const Post = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 150px;
    margin: 2% 0 2% 0;
    display: flex;
    flex-direction: column;

    & div {
        text-decoration: none;
        font-size: 1.7rem;
        color: ${({ theme }) => theme.text};
        opacity: .6;
        transition: .3s;
        font-weight: 600;
        width: 50%;
        cursor: pointer;
      
        &:hover {
          color: gray;
        }
    }
    `;

export async function getStaticProps(){
  const posts = getAllFilesMetadata();
  return {
    props: { posts }
  }
};