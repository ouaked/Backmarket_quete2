describe('Tests authentification', () => {

    beforeEach(() =>{
        cy.visit("https://www.backmarket.fr/register")
        cy.wait(2000)
    })

   it('Test ok', () => {
       
        cy.get('[data-test=form] > [data-test=input-email] > .input-inner > [data-test=input]', {timeout: 1000}).type('ouaksad@gmail.fr')
        cy.get('[data-test=password-wrapper] > [data-test=password-input] > [data-test=input-field-input-wrapper] > [data-test=input-field-input]',{timeout: 1000}).type('Bo123456')
        cy.get('[data-test=submit-button-login]').click()
        cy.url().should('contain', '/dashboard/orders')
   })

   it('Test MDP Incorrecte', () => {
       
        cy.get('[data-test=form] > [data-test=input-email] > .input-inner > [data-test=input]', {timeout: 1000}).type('ouaksad@gmail.fr')
        cy.get('[data-test=password-wrapper] > [data-test=password-input] > [data-test=input-field-input-wrapper] > [data-test=input-field-input]',{timeout: 1000}).type('Bo')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain', 'Mauvaise combinaison email/mot de passe')
})

it('Test email and mdp fail', () => {
   
        cy.get('[data-test=form] > [data-test=input-email] > .input-inner > [data-test=input]', {timeout: 1000}).type('sad@gmail.fr')
        cy.get('[data-test=password-wrapper] > [data-test=password-input] > [data-test=input-field-input-wrapper] > [data-test=input-field-input]',{timeout: 1000}).type('Bo')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain', 'Mauvaise combinaison email/mot de passe')
})
it('Test email fail', () => {
   
        cy.get('[data-test=form] > [data-test=input-email] > .input-inner > [data-test=input]', {timeout: 1000}).type('sad@gmail.fr')
        cy.get('[data-test=password-wrapper] > [data-test=password-input] > [data-test=input-field-input-wrapper] > [data-test=input-field-input]',{timeout: 1000}).type('Bo123456')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain', 'Mauvaise combinaison email/mot de passe')
})
})