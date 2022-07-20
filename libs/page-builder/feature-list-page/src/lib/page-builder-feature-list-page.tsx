import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './page-builder-feature-list-page.module.scss';

/* eslint-disable-next-line */
export interface PageBuilderFeatureListPageProps {}

export function PageBuilderFeatureListPage(
  props: PageBuilderFeatureListPageProps
) {
  const [page, setPage] = useState({
    title: '',
  });
  const params = useParams();

  useEffect(() => {
    const id = params['id'];
    fetch(`/api/pages/${id}`)
      .then((x) => x.json())
      .then((res) => {
        setPage(res);
      });
  }, [params['id']]);

  return (
    <div className={styles['container']}>
      <h1>Welcome to {page.title}</h1>
    </div>
  );
}

export default PageBuilderFeatureListPage;
