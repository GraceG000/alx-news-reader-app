import { useState, useEffect } from 'react'
import { fetchNewsArticles } from './services/NewsArticles'
import NewsArticleCard from './components/NewsArticleCard'
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     
    const fetchArticles = async () => {
      try{
        const response = await fetchNewsArticles();
        setArticles(response.news || []);
      }catch(error){
        console.error('Error fetching news articles:', error);
      }finally{
        setLoading(false);
      }
    }
     
    fetchArticles();

  }, [])

  if(loading){
    return <p>Loading news articles. Please wait...</p>
  }

  return (
    <>
  
  <h1 className="text-5xl text-blue-500 font-bold ">
    The Daily Tea News Site!!!
  </h1>
  <div className='mt-2'>
      <p>All the latest news and updates, all in one place</p>
  </div>
  
   <div className="mt-4">
    {articles.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {articles.map((article) =>(
    <NewsArticleCard 
    key={article.id} 
    title={article.title} 
    image={article.image} 
    description={article.description} 
    published={article.published} 
    author={article.author} 
    category={article.category} />
     ))}
    </div>
    ):(
      <p>No news articles available at the moment. Please check back later.</p>
    )}

   </div>


    </>
  )
}

export default App
