import { Routes, Route } from 'react-router-dom'
import ArticleDetailsPage from './pages/ArticleDetailsPage'
import NewsGrid from './components/NewsGrid'
import './App.css'

function App () {
  return (
    <Routes>
      <Route path='/' element={<NewsGrid />} />
      <Route path='/article/:article_id' element={<ArticleDetailsPage />} />
    </Routes>
  )
}

export default App
