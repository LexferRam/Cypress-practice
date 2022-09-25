

describe('Guardando Elementos', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Evitar repeticion', () => {
        cy.get('[placeholder="Clave"]')
    })


})