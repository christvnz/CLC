import Link from "next/link";
import RecentPostListStyles from "@src/styles/RecentPostList.module.css";
import ButtonStyles from "@src/styles/Button.module.css";
import RecentPost from "./RecentPost";

import { Config } from "@src/utils/Config";

export default function RecentPostList(props) {
  const { posts } = props;
  return (
    <>
      <h2 className={RecentPostListStyles.recentPostList__header}>
        I build stuff, learn things, and write about it.
      </h2>
      <ol className={RecentPostListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <RecentPost post={post} />
          </li>
        ))}
      </ol>
      <div className={RecentPostListStyles.contentList__readMoreContainer}>
        <Link href={Config.pageMeta.blogIndex.slug}>
          <a className={ButtonStyles.button}>View more articles →</a>
        </Link>
      </div>
    </>
  );
}