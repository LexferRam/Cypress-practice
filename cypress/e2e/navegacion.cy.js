
describe('Navegacion',{browser: 'chrome'}, () => {


    it('login',async () => {
        await cy.visit('https://asesores.segurospiramide.com')
        await cy.contains("span","Ingresa").click({force: true})
        await cy.get("input[placeholder='Usuario']").type("Lexfer")
        await cy.get("input[placeholder='Clave']").type("Lfrp58942020*#")
        await cy.contains("span","Entrar").click()
    })

})