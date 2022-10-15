import './card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='img-area'>
                <img src={props.showimg} alt='Show-1'/>
            </div>
            <div className='content-area'>
                <span className='show_title'>
                    {props.name}
                </span> 
                {/* <span className='rating'>
                    10 Star
                </span> */}
            </div>
        </div>
    );
}

export default Card;