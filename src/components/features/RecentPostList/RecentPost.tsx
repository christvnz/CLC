import Link from 'next/link';
import RecentPostListStyles from '@src/styles/RecentPostList.module.css';
import ReactMarkdown from 'react-markdown';
import PublishedDateAndReadingTime from '@src/components/features/PublishedDateAndReadingTime';

export default function RecentPost({ post }) {
  console.log('post', post);
  return (
    <article className={RecentPostListStyles.contentList__post}>
      <PublishedDateAndReadingTime date={post.publishedDate} readingTime={post.readingTime} />
      <Link href={`/${post.slug}`}>
        <div className={RecentPostListStyles.contentList__link}>
          <h2 className={RecentPostListStyles.contentList__title}>{post.title}</h2>
        </div>
      </Link>
      {/* <Topics topics={post.topicsCollection.items} /> */}
      <div className={RecentPostListStyles.contentList__excerpt}></div>
    </article>
  );
}
