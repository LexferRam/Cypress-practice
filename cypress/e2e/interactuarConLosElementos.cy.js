
describe('Interactuando con los elementos', () => {


    beforeEach(() => cy.visit('/'))

    it('Login, interactundo con tooltips, inputs y tablas', () => {
        cy.intercept("POST","https://segurospiramide.com/asg-api/dbo/security/dashboards_to_json",{
            fixture: "dashboard_to_json.json"
        })

        cy.get("input[placeholder='Usuario']").type("Lexferrrrrrr")
        cy.get("input[placeholder='Usuario']").clear()
        cy.get("input[placeholder='Usuario']").type("Lexfer")
        cy.get("input[placeholder='Clave']").type("Lfrp58942020*#")
        cy.contains('span','Entrar').click()

        cy.get('.jss295',{timeout: 30000}).should('be.visible')
        cy.get('#alert-dialog-title > .MuiTypography-root',{timeout: 80000}).should('be.visible')

        cy.get('.MuiDialog-container',{timeout: 2000}).click('topRight')
        //cy.get('button').eq(1).click()

        cy.get('.jss368 > .MuiDrawer-root > .MuiPaper-root > .jss353 > :nth-child(2) > :nth-child(2) > .jss323 > .MuiListItemText-root').click()
        // cy.get('.jss756 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input',{timeout: 50000}).type("27")
        // cy.get('.jss756 > .MuiButtonBase-root > .MuiButton-label',{timeout: 5000}).click()

        //Buscando los headers de la tabla
        cy.get('.MuiTable-root').find('th').each($el => {
            cy.log($el.text())
        })

        cy.get('.MuiTable-root')
            .find('th')
            .eq(0)
            .invoke('text')
            .should('equal','Area')

        cy.get('.MuiTable-root').find('th').should('have.length',5)

        //Buscando la filas de la tabla y un valor especifico de una celda
        // cy.get('.MuiTable-root',{timeout: 90000})
        //     .find('tr',{timeout: 90000})
        //     .eq(0)
        //     .find('td',{timeout: 90000})
        //     .eq(1).invoke('text')
        //     .should('equal','377716')
        cy.wait(9000)
        cy.contains('span','group').trigger('mouseover')
        cy.contains('Cotización de Salud').should('exist')
            // .find('tr')
            // .find('td',{timeout: 90000}).eq(1)
            // .find('button',{timeout: 90000}).eq(1)
            // .trigger('mouseover')

    })

    // it('Interactuando con los dropdown(Select)', () => {
    //     cy.get('.custom-select').select('Greece').should('have.value',3)
    //     cy.get('#react-select').type(' ')
    // })

})