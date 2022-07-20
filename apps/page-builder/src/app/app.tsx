import { Route, Routes } from 'react-router-dom';
import Card from './card';
import { Header } from '@bigspur/page-builder/ui-shared';
import { formatType } from '@bigspur/page-builder/util-formatters';
import './app.scss';

import { PageBuilderFeatureListPage } from '@bigspur/page-builder/feature-list-page';

export function App() {
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
        <Card />
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
