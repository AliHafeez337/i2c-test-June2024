import './CardContent.css';

function CardContent({ img, name, description }) {
  return (
    <div className='card-content'>
      <div className='card-img'><img src={ img } alt="investment" /></div>
      <div className='card-text'>
        <div className='card-name'>{ name }</div>
        <div className='card-descrition'>{ description }</div>
      </div>
    </div>
  )
}

export default CardContent;