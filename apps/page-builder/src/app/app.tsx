import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
  });

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
          <Page key={page.id} title={page.title} type={page.type} />
        ))}
      </div>

      <Routes>
        <Route
          path="/feature-list-page"
          element={<PageBuilderFeatureListPage />}
        />
      </Routes>
    </>
  );
}

export default App;
