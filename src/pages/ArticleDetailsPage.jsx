import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchNewsArticles } from '../services/NewsArticles'

const isValidImage = (url) => url && /\.(jpg|jpeg|png|gif|webp)$/.test(url)

const ArticleDetailsPage = () => {
  const { articleId } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetchNewsArticles()
        const news = response.news || []
        const foundArticle = news.find(a => encodeURIComponent(a.url) === articleId)
        setArticle(foundArticle)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [articleId])

  if (loading) return <p>Loading article...</p>
  if (!article) return <p>Article not found.</p>

  return (
    <div className="max-w-3xl mx-auto p-4">
      <button className="mb-4 text-blue-500" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <img src={isValidImage(article.image) ? article.image : '/breaking-news.jpg'} alt={article.title} className="w-full h-64 object-cover rounded mb-4"/>
      <p className="mb-2 text-gray-700">{article.description}</p>
      <p className="text-sm text-gray-500 mb-1">By {article.author || 'Unknown'}</p>
      <p className="text-sm text-gray-500 mb-1">Category: {article.category || 'General'}</p>
      <p className="text-xs text-gray-400">{new Date(article.published).toLocaleString()}</p>
    </div>
  )
}

export default ArticleDetailsPage;
