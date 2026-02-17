const NewsArticleCard = ({
  title,
  image,
  description,
  published,
  author,
  category
}) => {
  return (
    <>
    <Link to={`/article/${articleId}`}>
      <div className='bg-slate-100 rounded-lg shadow-lg p-4'>
        <div className='font-bold border-b-2 mb-2'>{title}</div>
        <div>
          <img
            src={image}
            alt={title || 'News image'}
            className='w-full h-48 object-cover mb-2 rounded'
          />
        </div>
        <div>{description}</div>
        <div className='text-sm text-gray-500'>{published}</div>
        <div className='text-sm text-gray-500'>{author}</div>
        <div className='text-sm text-gray-500'>{category}</div>
      </div>
    </Link>
    </>
  )
}
export default NewsArticleCard
