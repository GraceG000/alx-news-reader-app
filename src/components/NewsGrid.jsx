import { useState, useEffect } from 'react'
import { fetchNewsArticles } from './services/NewsArticles'
import NewsArticleCard from './components/NewsArticleCard'
import './App.css'


// Utility function to check if a URL is a valid image
const isValidImage = (url) => {
  return url && /\.(jpg|jpeg|png|gif|webp)$/.test(url);
}

const NewsGrid = ( ) => {
const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetchNewsArticles();
        setArticles(response.news || []); // Currents API uses "news"
      } catch(error) {
        console.error('Error fetching news articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if(loading){
    return <p>Loading news articles. Please wait...</p>
  }


return(
    <>
      <h1 className="text-5xl text-blue-500 font-bold">
        The Daily Tea News Site!!!
      </h1>
      <div className='mt-2'>
        <p>All the latest news and updates, all in one place</p>
      </div>

      <div className="mt-4">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article) => (
              <NewsArticleCard
                key={article.url} // use url as unique key
                title={article.title}
                image={isValidImage(article.image) ? article.image : '/breaking-news.jpg'} // fallback image
                description={article.description}
                published={article.published}
                author={article.author}
                category={article.category}
              />
            ))}
          </div>
        ) : (
          <p>No news articles available at the moment. Please check back later.</p>
        )}
      </div>
    </>
)
}
export default NewsGrid;