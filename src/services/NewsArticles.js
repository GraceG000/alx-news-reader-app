import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

//pre-configuring my axios instance with the base URL and API key for authentication...
const newsAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
})

//fetching all news articles...
export  const fetchNewsArticles = async () => {
  try {
    const response = await newsAPI.get('/news')
  
    console.log(API_KEY, BASE_URL);
    //outputting the response data to the console for debugging purposes...
    console.log(response.data)

    return response.data
  } catch (error) {
    throw error
  }
}
