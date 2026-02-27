import { useState, useEffect } from 'react'
import { fetchNewsArticles } from '../services/NewsArticles'
import NewsArticleCard from './NewsArticleCard'
import CategoryFilter from './CategoryFilter'

// Utility function to check if a URL is a valid image
const isValidImage = url => {
  return url && /\.(jpg|jpeg|png|gif|webp)$/.test(url)
}

const NewsGrid = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const response = await fetchNewsArticles()
  //       const unique = response.results.filter(
  //         (article, index, self) =>
  //           index === self.findIndex(a => a.title === article.title)
  //       )
  //       setArticles(unique)
  //     } catch (error) {
  //       console.error('Error fetching news articles:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchArticles()
  // }, [])

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await fetchNewsArticles({ category })
        setArticles(response.results || [])
      } catch (error) {
        console.error('Error fetching news articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [category]) //refetch articles whenever the category changes...

  if (loading) {
    return <p>Loading news articles. Please wait...</p>
  }

  return (
    <>
      <h1 className='text-5xl text-blue-500 font-bold'>
        The Daily Tea News Site!!!
      </h1>
      <div className='mt-2'>
        <p>All the latest news and updates, all in one place</p>
      </div>

      <div className='flex items-center justify-center mx-8'>
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      <div className='mt-4'>
        {articles.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {articles.map(article => (
              <NewsArticleCard
                key={article.article_id} // use url as unique key
                article_id={article.article_id}
                title={article.title}
                image_url={
                  isValidImage(article.image_url)
                    ? article.image_url
                    : '/breaking-news.jpg'
                }
                description={article.description}
                pubDate={article.pubDate}
                creator={article.creator?.[0] || 'Unknown'} // use first creator or default to "Unknown"
                category={article.category?.[0] || 'General'} // use first category or default to "General"
              />
            ))}
          </div>
        ) : (
          <p>
            No news articles available at the moment. Please check back later.
          </p>
        )}
      </div>
    </>
  )
}
export default NewsGrid
