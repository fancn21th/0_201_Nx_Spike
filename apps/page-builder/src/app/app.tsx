import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Page from './page';
import { Header } from '@bigspur/page-builder/ui-shared';
import { formatType } from '@bigspur/page-builder/util-formatters';
import './app.scss';

import { PageBuilderFeatureListPage } from '@bigspur/page-builder/feature-list-page';

export function App() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch('/api/pages')
      .then((x) => x.json())
      .then((res) => {
        setPages(res);
      });
  }, []);

  return (
    <>
      <Header />
      <h2>{formatType('number')}</h2>
      <div
        style={{
          display: 'flex',
          marginTop: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {pages.map((page: any) => (
          <Link to={`/pages/${page.id}`} key={page.id}>
            <Page title={page.title} type={page.type} />
          </Link>
        ))}
      </div>

      <Routes>
        <Route path="/pages/:id" element={<PageBuilderFeatureListPage />} />
      </Routes>
    </>
  );
}

export default App;
