import './reccomend.css';

function Reccomend() {
  return (
    <>
        <h1 className='reccomend_heading'>Add new Shows to your List</h1>
        <section className='reccomend_container'>
            <div className='reccomend_content'>
                <input className='search_reccomend' type="text" placeholder='Search shows here'/>
                <div className='reccomend-shows'>
                    
                </div>
            </div>
        </section>
    </>
  );
}

export default Reccomend;