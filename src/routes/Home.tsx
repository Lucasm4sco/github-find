import { UserProps } from "../types/user";
import { useState } from "react";

import Search from "../components/Search/Search";
import User from "../components/User/User";
import Error from "../components/Error/Error";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const loadUser = async (userName: string) => {
        setUser(null);
        setLoading(true);
        setError(false);

        const res = await fetch(`https://api.github.com/users/${userName}`);

        if(res.status === 404){
            setLoading(false);
            setError(true);
            return
        }
            
        const data = await res.json();

        const { avatar_url, login, location, followers, following, name } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
            name
        };

        setLoading(false);
        setUser(userData);
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}
            {loading && <div className="loading"></div>}
        </div>
    )
}

export default Home