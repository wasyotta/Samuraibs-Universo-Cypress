// Title é a função que obtém o título da página

it('webapp deve estar online', function(){
  cy.visit("/")
  cy.title()
  .should('eq', 'Samurai Barbershop by QAninja')
})