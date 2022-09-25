
describe('Esperando por elementos', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('Esperar por un tiempo definido',() => {
        cy.wait(5000)
    })

    it('Esperar por un elemento',() => {
        cy.get('#username',{timeout: 10000}).should('be.visible')
    })

})

describe('Esperando por elementos2', ()=> {

    beforeEach(()=> {
        cy.visit('/')
    })

    it('Deshabilitar el retry',() => {
        cy.get('#username',{timeout: 0})
    })


})