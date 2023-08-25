import React from 'react'
import BlogCard from '../BlogCard'

const Blog = ({setBlogData}) => {
  return (
    <div>
      <BlogCard setBlogData={setBlogData} />
    </div>
  )
}

export default Blog
