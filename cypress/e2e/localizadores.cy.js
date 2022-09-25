 
 describe("Tipos de localizadores", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Obtener por tag", () => {
        // cy.visit('/login')
        cy.get('input')
    })

    it("Obtener por atributo", () => {
        // cy.visit('/login')
        cy.get('[placeholder="Clave"]')
    })

    it("Obtener por atributo y tag", () => {
        // cy.visit('/login')
        cy.get('input[placeholder="Clave"]')
    })


    it("Obtener por id", () => {
        // cy.visit('/login')
        cy.get('#username')
    })

    it("Obtener por class", () => {
        // cy.visit('/login')
        cy.get('.MuiInputAdornment-root.MuiInputAdornment-positionStart')
    })

    it("Obtener por contains", () => {
        // cy.visit('/login')
        cy.contains('Entrar')
    })

    it("Obtener padre", () => {
        // cy.visit('/login')
        cy.get('#username').parent()
        cy.get('#username').parents()
        // cy.get('#username').parents().find('label')
    })

 })