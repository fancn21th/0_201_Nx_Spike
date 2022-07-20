import { render } from '@testing-library/react';

import PageBuilderFeatureListPage from './page-builder-feature-list-page';

describe('PageBuilderFeatureListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageBuilderFeatureListPage />);
    expect(baseElement).toBeTruthy();
  });
});
