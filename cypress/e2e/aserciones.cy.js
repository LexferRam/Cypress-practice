

describe('Aserciones', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Asercion', () => {
        cy.url().should('include','asesores.segurospiramide')
        
        //Pausar la ejecucioon
        // cy.pause()

        cy.get('#username')
            .should('be.visible')
            .and('have.attr','placeholder','Usuario').debug()

        //Ver logs
        cy.log('testtt')

    })

    it('Asercion 2', () => {
        cy.url().should('include','asesores.segurospiramide')
        cy.get('#username').then(element => {
            expect(element).to.be.visible
            expect(element).to.be.attr('placeholder','Usuario')
        })
       
    })

}) 