import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "../App.css";

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;

        console.log("Fetching data from:", url);

        const res = await fetch(url);

        if (res.status === 426) {
          console.error(
            "Upgrade Required: The server requires an upgrade to a different protocol."
          );
          return;
        }

        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const result = await res.json();
        const data = result.articles;

        console.log("Fetched data:", data);

        setArticles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category, country]);

  return (
    <div className="news-board">
      <h2 className="text-center text-light">
        {category && category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        <span className="badge bg-danger">News</span>
      </h2>
      <div className="all-news">
        {articles &&
          articles.map((news, index) => {
            if (news.url === "https://removed.com") {
              return null;
            }
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NewsBoard;
