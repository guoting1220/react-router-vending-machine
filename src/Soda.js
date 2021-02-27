/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';

const Soda = () => {
    return (
        <div className="Soda">
            <img src="https://cdn.pixabay.com/photo/2015/08/25/16/12/lime-907124_960_720.jpg"/>
            <h3><Link to="/">Go Back</Link></h3>
        </div>
    )
}

export default Soda;