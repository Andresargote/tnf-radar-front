import Link from "next/link";
import Image from "next/image";
import styles from "./PrincipalPost.module.css";
import React from "react";
import Category from "../Category";

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
  posts: Post[];
};

export default function PrincipalPost({ posts }: TypePosts) {
  return (
    <div className={styles.principalPost}>
      {posts.map(({ img, title, date, alt, id }) => {
        return (
          <Link href="/" key={id}>
            <a className={styles.post}>
              <picture>
                <Image src={img} alt={alt} width={800} height={600} />
              </picture>
              <div>
                <Category category="Cripto" />
                <h2>{title}</h2>
                <div>
                  <time dateTime={date}>{date}</time>
                  <span className={styles.separator}>-</span>
                  <span>Andres Argote</span>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
