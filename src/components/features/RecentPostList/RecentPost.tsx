import RecentPostListStyles from '@src/styles/RecentPostList.module.css';
import PublishedDateAndReadingTime from '@src/components/features/PublishedDateAndReadingTime';
import Link from 'next/link';
import Image from 'next/image';

export default function RecentPost({ post }) {
  return (
    <a href={`/${post.slug}`} className="flex space-x-4 hover:bg-[#1F242F]/10 py-4 px-4 cursor-pointer group">
      <Image
        src={post.featuredImage.url}
        alt={post.featuredImage.alt}
        width={100}
        height={100}
        className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
      />
      <div className="flex flex-col group">
        <div className="text-gray-500 flex items-center space-x-2 text-sm">
          <p><PublishedDateAndReadingTime date={post.publishedDate} /></p>
        </div>
        <p className="text-orange-500 mt-1 text-[15px] group-hover:underline">
          {post.title}
        </p>
      </div>
    </a>
  );
}
