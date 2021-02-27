/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';

const Popcorn = () => {
    return (
        <div className="Popcorn">
            <img src="https://cdn.pixabay.com/photo/2015/03/26/20/59/popcorn-693418_960_720.jpg" />
            <h3><Link to="/">Go Back</Link></h3>
        </div>
    )
}

export default Popcorn;