import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import classes from './BackButton.module.css';

const BackButton = () => {
    return (
        <Link to={'/'} className={classes.back_button}>
            <BiArrowBack />
        </Link>
    )
}

export default BackButton