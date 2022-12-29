import { repositoriesProps } from '../../types/repositories';
import { BiStar } from 'react-icons/bi';
import classes from './ListRepositories.module.css';

type ListRepositoriesProps = {
  userName: string | undefined;
  listRepositories: repositoriesProps[],
  loading: boolean
}

const ListRepositories = ({ userName, listRepositories, loading }: ListRepositoriesProps) => {
  return (
    <div className={classes.list_repositories}>
      <h2>Repositórios recentes de: <span>{userName}</span></h2>
      {loading && <div className='loading'></div>}
      {!loading && !listRepositories.length && <p>Não foram encontrados repositórios.</p>}
      <div className={classes.container_repositories}>
        {listRepositories.map((repositorie) => (
          <div key={repositorie.full_name} className={classes.card_repositorie}>
            <h3>{repositorie.name}</h3>
            <div className={classes.containerRow}>
              <p>
                <span>
                  {repositorie.stargazers_count}
                </span>
                <BiStar  className={classes.icon}/>
              </p>
              <p>
                {repositorie.language}
              </p>
            </div>
            <p>
              {repositorie.description ? repositorie.description : 'Repositório sem descrição.'}
            </p>
            <a href={repositorie.html_url} target='_blank' className={classes.link}>Conhecer</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListRepositories