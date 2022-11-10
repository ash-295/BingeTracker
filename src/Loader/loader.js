import './loader.css';

function Loader(){
    return(
        <div className='loading'>
            <div className='loader'>
                <span className='load_dot dot-1'></span>
                <span className='load_dot dot-2'></span>
                <span className='load_dot dot-3'></span>
                <span className='load_dot dot-4'></span>
            </div>
        </div>
    )
}

export default Loader;