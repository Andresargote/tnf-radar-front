import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { getAllFilesMetadata } from "../../lib/mdx";
import Header from "../components/Header";
import PrincipalPost from "../components/PrinciplePost";

type Post = {
  title: string;
  date: string;
  category: string;
  img: string;
  allPosts: string;
  alt: string;
  id: string;
};

type TypePosts = {
  principalPost: Post[];
  secondaryPost: Post[];
};

const Home = ({ principalPost, secondaryPost }: TypePosts) => {
  return (
    <>
      <Header />
      <main>
        <PrincipalPost posts={principalPost} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesMetadata();

  const principalPost = posts.slice(0, 2);
  const secondaryPost = posts.slice(2, posts.length - 1);

  console.log(principalPost);

  return {
    props: {
      principalPost,
      secondaryPost,
    },
  };
};
