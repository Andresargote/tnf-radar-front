import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { getAllFilesMetadata } from "../../lib/mdx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrincipalPost from "../components/PrinciplePost";
import SecondaryPost from "../components/SecondaryPost";

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
      <div className="container">
        <main>
          <PrincipalPost posts={principalPost} />
          <SecondaryPost posts={secondaryPost} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesMetadata();

  const principalPost = posts.slice(0, 1);
  const secondaryPost = posts.slice(1, posts.length);

  return {
    props: {
      principalPost,
      secondaryPost,
    },
  };
};
