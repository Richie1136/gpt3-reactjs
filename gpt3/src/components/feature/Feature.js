import './Feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3-features-container-feature'>
      <div className='gpt3-features-container-feature-title'>
        <div></div>
        <h1>{title}</h1>
        <div className='gpt3-features-container-feature-text'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Feature