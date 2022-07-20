import styles from './page-builder-feature-list-page.module.scss';

/* eslint-disable-next-line */
export interface PageBuilderFeatureListPageProps {}

export function PageBuilderFeatureListPage(
  props: PageBuilderFeatureListPageProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PageBuilderFeatureListPage!</h1>
    </div>
  );
}

export default PageBuilderFeatureListPage;
