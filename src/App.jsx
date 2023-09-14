import { useEffect } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import Header from './Header/Header'
import { useState } from 'react'

function App() {

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    blogInfo()
  }, [])

  const blogInfo = async () => {
    const response = await fetch('blogs.json')
    const data = await response.json()
    setBlogs(data);
  }

  return (
    <>
      <Header></Header>
      <div className='flex my-10 gap-5'>
        <Blogs blogs={blogs}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
