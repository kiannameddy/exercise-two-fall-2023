import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "A Site About Ceasar Salad";

  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
    </head>
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
    </>
  );
}
