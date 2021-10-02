import Link from "next/link";
import Image from "next/image";
import styles from "../PrincipalPost/PrincipalPost.module.css";

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

export default function SecondaryPost({ posts }: TypePosts) {
  return (
    <div className={styles.secondaryPost}>
      {posts.map(({ img, title, date, alt, id }) => {
        return (
          <Link href="/" key={id}>
            <a className={styles.post}>
              <picture>
                <Image src={img} alt={alt} width={300} height={200} />
              </picture>
              <div>
                <h2>{title}</h2>
                <div>
                  <time dateTime={date}>{date}</time>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
