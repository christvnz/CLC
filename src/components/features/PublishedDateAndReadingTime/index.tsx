import Styles from "@src/styles/PublishedDateAndReadingTime.module.css";
import { formatDateForDateTime, formatDateForDisplay } from "@src/utils/Date";

export default function PublishedDate(props) {
  const { date, readingTime, isTalk, updatedDate } = props;
  const timeSuffix = isTalk ? "watch time" : "read";

  return (
    <div className={Styles.container}>
      <time
        className={Styles.publishedDate}
        dateTime={formatDateForDateTime(date)}
      >
        {formatDateForDisplay(date)}
      </time>
      {updatedDate && (
        <span className={Styles.updatedDate}>
          <span className={Styles.divider}>•</span>
          <p className={Styles.updatedDate__date}>
            <time dateTime={formatDateForDateTime(updatedDate)}>
              Updated {formatDateForDisplay(updatedDate)}
            </time>
          </p>
        </span>
      )}
      {/* <span className={Styles.divider}>•</span> */}
      {/* <span className={Styles.readingTime}>
        {readingTime} min {timeSuffix}
      </span> */}
    </div>
  );
}
