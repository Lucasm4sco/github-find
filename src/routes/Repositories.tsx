import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { repositoriesProps } from '../types/repositories';

import BackButton from '../components/BackButton/BackButton';
import ListRepositories from '../components/ListRepositories/ListRepositories';

const Repositories = () => {
  const [listRepositories, setListRepositories] = useState<repositoriesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useParams();

  const loadRepositories = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data: repositoriesProps[] = await response.json();

    data.sort((repositorie_1, repositorie_2) => {
      const date_1 = new Date(repositorie_1.created_at);
      const date_2 = new Date(repositorie_2.created_at);
      return date_2.getTime() - date_1.getTime();
    });

    const firstRepositories = data.filter(repositorie => (data.indexOf(repositorie)) < 5)

    setListRepositories([
      ...firstRepositories.map(({ name, html_url, description, created_at, language, full_name, login, stargazers_count }) => ({
        name,
        html_url,
        description,
        created_at,
        language,
        full_name,
        login,
        stargazers_count
      }))
    ]);

    setLoading(false);
  }

  useEffect(() => {
    loadRepositories();
  }, [])

  return (
    <div>
      <BackButton />
      <ListRepositories
        userName={listRepositories[0]?.login || user}
        listRepositories={listRepositories}
        loading={loading}
      />
    </div>
  )
}

export default Repositories