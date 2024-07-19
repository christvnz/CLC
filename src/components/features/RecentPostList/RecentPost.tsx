import RecentPostListStyles from '@src/styles/RecentPostList.module.css';
import PublishedDateAndReadingTime from '@src/components/features/PublishedDateAndReadingTime';

export default function RecentPost({ post }) {
  return (
    <a href={`/${post.slug}`}>
      <PublishedDateAndReadingTime date={post.publishedDate} readingTime={post.readingTime} />

      <h2 className={RecentPostListStyles.contentList__title}>{post.title}</h2>

      <div className={RecentPostListStyles.contentList__excerpt}></div>
    </a>
  );
}
