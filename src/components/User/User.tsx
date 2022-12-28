import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { FiUser, FiUsers } from 'react-icons/fi';
import { Link } from "react-router-dom";
import classes from "./User.module.css";

const User = ({
    login,
    name,
    avatar_url,
    followers,
    following,
    location
}: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={`ícone do usuário ${login}`} />
            {name && <h2>{name}</h2>}
            <hr className={classes.line} />
            <div className={classes.containerRow}>
                <div>
                    <p>
                        <FiUser className={classes.icon} />
                        Usuário
                    </p>
                    <span>
                        {login}
                    </span>
                </div>
                <div>
                    <p>
                        <MdLocationPin className={classes.icon} />
                        Local
                    </p>
                    <span>
                        {location ? location : 'Não informado.'}
                    </span>

                </div>

            </div>
            <div className={classes.containerRow}>
                <div>
                    <p>
                        <FiUsers className={classes.icon} />
                        Seguidores:
                    </p>
                    <span>
                        {followers}
                    </span>
                </div>
                <div>
                    <p>
                        <FiUsers className={classes.icon} />
                        Seguindo:
                    </p>
                    <span>
                        {following}
                    </span>
                </div>
            </div>
            <Link to={`/repos/${login}`} className={classes.link}>Ver melhores projetos</Link>
        </div>
    )
}

export default User