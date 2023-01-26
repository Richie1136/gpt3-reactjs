import { Article } from '../../components'
import './Blog.css'
import { blog1, blog2, blog3, blog4, blog5 } from './imports'

const Blog = () => (
  <div className='gpt3-blog section-padding' id='blog'>
    <div className='gpt3-blog-heading'>
      <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
    </div>
    <div className='gpt3-blog-container'>
      <div className='gpt3-blog-container-groupA'>
        <Article imgUrl={blog1} date="Sept 26, 2021" title="GPT-3 and Open Ai is the future. Let us explore how it is?" />
      </div>
      <div className='gpt3-blog-container-groupB'>
        <Article imgUrl={blog2} date="Sept 26, 2021" title="GPT-3 and Open Ai is the future. Let us explore how it is?" />
        <Article imgUrl={blog3} date="Sept 26, 2021" title="GPT-3 and Open Ai is the future. Let us explore how it is?" />
        <Article imgUrl={blog4} date="Sept 26, 2021" title="GPT-3 and Open Ai is the future. Let us explore how it is?" />
        <Article imgUrl={blog5} date="Sept 26, 2021" title="GPT-3 and Open Ai is the future. Let us explore how it is?" />
      </div>
    </div>
  </div>
)

export default Blog