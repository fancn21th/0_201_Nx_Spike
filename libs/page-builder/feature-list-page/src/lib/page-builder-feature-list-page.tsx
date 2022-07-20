import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatType } from '@bigspur/page-builder/util-formatters';
import styles from './page-builder-feature-list-page.module.scss';
import { Page } from '@bigspur/api/util-interfaces';

/* eslint-disable-next-line */
export interface PageBuilderFeatureListPageProps {}

export function PageBuilderFeatureListPage(
  props: PageBuilderFeatureListPageProps
) {
  const [page, setPage] = useState<Page | null>(null);
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
      <h1>Welcome to {page ? page.title : 'loading...'} </h1>
      <h2>{formatType('string')}</h2>
    </div>
  );
}

export default PageBuilderFeatureListPage;
