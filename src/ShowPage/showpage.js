import './showpage.css';
import Heading from '../NavHeader/heading';
import { useParams } from 'react-router-dom';

function ShowPage() {
    const { showid } = useParams();
    return (
        <>
            < Heading />
            <div className='test'>Testing for Show: { showid }</div>
        </>
    );
}

export default ShowPage;