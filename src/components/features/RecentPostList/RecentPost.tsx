import RecentPostListStyles from '@src/styles/RecentPostList.module.css';
import PublishedDateAndReadingTime from '@src/components/features/PublishedDateAndReadingTime';

export default function RecentPost({ post }) {
  return (
    <article>
      <PublishedDateAndReadingTime date={post.publishedDate} readingTime={post.readingTime} />
      <a href={`/${post.slug}`}>
        <h2 className={RecentPostListStyles.contentList__title}>{post.title}</h2>
      </a>

      <div className={RecentPostListStyles.contentList__excerpt}></div>
    </article>
  );
}
