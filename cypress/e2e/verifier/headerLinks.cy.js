
context('Actions', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    describe('User login',() => {
        it('Login as a user student',()=>{

            cy.get('[data-cy="username"]').type('user-student1');
            cy.get('[data-cy="password"]').type('student');

            cy.get('[data-cy="submit"]').click();
            cy.url().should('include', '/?page=1&sort=id,asc');

        });
    });















});