import './watchlistBody.css';

function WatchlistBody() {
  return (
    <>
        <section className='series-container'>
            <div className='nav-area'>
                <div className='tabs active-tab'>
                    All
                </div>
                <div className='tabs'>
                    Watching
                </div>
                <div className='tabs'>
                    Completed
                </div>
                <div className='tabs'>
                    Plan to Watch
                </div>
                <div className='tabs'>
                    Dropped
                </div>
            </div>
        </section>
    </>
  );
}

export default WatchlistBody;