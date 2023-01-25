import { Article } from '../../components'
import './Blog.css'

const Blog = () => {
  return (
    <div className='gpt3-blog section-padding' id='blog'>
      <div className='gpt3-blog-heading'>
        <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3-blog-container'>
        <div className='gpt3-blog-container-groupA'>
          <Article />
        </div>
        <div className='gpt3-blog-container-groupB'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Blog