describe('Members', () => {

  beforeEach(() => {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();

    cy.task('dropDatabase');
    cy.task('addMember', {name: 'Cat', role: 'driver'});
    cy.task('addMember', {name: 'Dec', role: 'guest'});
    cy.task('addMember', {name: 'Jo', role: 'guest'});
  });

  it('displays all guests names and addresses', () => {
    cy.visit('/');
    cy.get('.guest-list').should('contain', 'Dec');
    cy.get('.guest-list').should('contain', 'Jo');
    cy.get('.guest-list').should('not.contain', 'Cat');
  });

  afterEach(() => {
    cy.visit('/')
    cy.get("#logout").click();
  });
});
