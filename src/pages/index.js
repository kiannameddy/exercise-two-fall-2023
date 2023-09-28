import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";
// import Article from "./article";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "Exercise Two";

  return (
    <main className={styles.page}>
        <h1 className={styles.projectName}>{projectName}</h1>
        {Data.map((article) =>(
          <ArticleCard
            key={article.id}
            date={new Date(article.publishedDate).toDateString()}
            description={article.blurb}
            id={article.id}
            title={article.title}
            imageSrc={article.image.url}
            imageAlt={article.image.alt}
          />
        ))}
    </main>
  );
}
