import { Link } from 'react-router-dom'

const NewsArticleCard = ({
  article_id,
  title,
  image_url,
  description,
  pubDate,
  creator,
  category,
  link,
  source_url
}) => {
  //const articleId = encodeURIComponent(image_url) // Using image URL as unique ID for routing...

  return (
    <>
      
      <Link to={`/article/${article_id}`} state={{ article: { article_id, title, image_url, description, pubDate, creator, category, link, source_url, keywords } }}>
        <div className='relative group bg-slate-100 rounded-lg shadow-lg p-1'>
          {/* Hover overlay — now covers the whole card */}
          <div className='absolute inset-0 bg-black/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10'>
            <p className='text-white text-center font-semibold text-sm line-clamp-none'>
              {title}
            </p>
          </div>

          <div className='line-clamp-1 font-bold border-b-2 mb-2'>{title}</div>

          <div className='relative'>
            <img
              src={image_url ? image_url : '/breaking-news.jpg'} // fallback image if image_url is missing
              alt={title || 'News image'}
              className='w-full h-48 object-cover mb-2 rounded'
            />
            <div className='absolute top-2 right-2 flex items-center justify-center bg-green-500 text-white rounded-full px-3 py-1 line-clamp-1'>
            <span className='material-symbols-outlined'>person</span>
            <div className='text-sm'>{creator}</div>
          </div>
            <div className='text-sm absolute bottom-2 right-2 py-1 px-3 bg-blue-400 rounded-2xl text-white'>
              {Array.isArray(category) ? category[0] : category || 'General'}
            </div>
          </div>
          
          <div className='line-clamp-1'>{description ? description : 'No description available'}</div>
        </div>
        
          <div className='flex items-center justify-end align-middle mt-2'>
            <div>
               <span className='material-symbols-outlined mr-1'>overview</span>
            </div>
           
            <div className='text-sm text-gray-500'>
            {pubDate
              ? new Date(pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })
              : 'Date unavailable'}
          </div>
        </div>
      </Link>
    </>
  )
}
export default NewsArticleCard
