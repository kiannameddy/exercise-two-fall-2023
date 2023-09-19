"use client";

const ArticleCard = ({ description, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    ); 
};

export default ArticleCard;