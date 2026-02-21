// In ArticleDetailsPage — read from state instead of fetching
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ArticleDetailsPage = () => {
  const { article_id } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const article = state?.article

  if (!article) return <p>Article not found.</p>

  return (
    <div className='max-w-full mx-auto p-4'>
      <button className='mb-4 text-blue-500' onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className='tex-left text-3xl font-bold mb-2'>{article.title}</h1>
      <div className='flex justify-between items-center mb-4 mt-4'>
        <div>
          <p className='text-sm text-gray-500 mb-1'>
            By{' '}
            {Array.isArray(article.creator)
              ? article.creator.join(', ')
              : article.creator || 'Unknown'}
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-400'>
            {new Date(article.pubDate).toLocaleString()}
          </p>
        </div>
      </div>

      <img
        src={article.image_url ? article.image_url : '/breaking-news.jpg'} // fallback image if image_url is missing
        alt={article.title || 'News image'}
        className='w-full h-[60%] object-cover mb-2 rounded'
      />
        <div className='my-2 flex items-center justify-start align-middle'>
        <div className='inline-block text-sm bottom-2 right-2 py-1 px-3 bg-blue-400 rounded-2xl text-white'>
          {Array.isArray(article.category)
            ? article.category[0]
            : article.category || 'General'}
        </div>
      </div>

      <p className='text-left mb-2 line-clamp-none mt-2 text-black'>
        {article.description}
      </p>

     {Array.isArray(article.keywords) && article.keywords.length > 0 && (
        <div className='mt-4'>
          <h2 className='text-left text-lg font-semibold mb-2'>Keywords:</h2>   
          <div className='flex flex-wrap gap-2'>
            {article.keywords.map((keyword, index) => (
              <span key={index} className='bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm'>
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={article.link}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-4 inline-block text-blue-500 underline'
      >
        Read full article →
      </Link>

      {article.source_url}
    </div>
  )
}

export default ArticleDetailsPage
