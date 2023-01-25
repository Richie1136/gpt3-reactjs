import './Article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3-blog-container-article'>
      <div className='gpt3-blog-container-article-image'>
        <img src={imgUrl} alt='blog img' />
      </div>
    </div>
  )
}

export default Article