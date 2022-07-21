describe('page-builder-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary'));

  it('should render the component', () => {
    cy.get('.css-1t6c9ts > :nth-child(1)').should('contain', 'List Page');
  });
});
