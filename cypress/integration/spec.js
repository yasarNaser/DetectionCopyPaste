describe('Test Copy Paste Detection', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000/iframePage')
        cy.get('#myFrame').its('0.contentDocument').as('document')
        cy.get('#myFrame').its('0.contentDocument.body').then(cy.wrap).as('body')
    });

    it('detect copypaste in email', () => {
        cy.get('@body').find("[type='email']").focus()
        cy.get('@document').then((doc) => {
            doc.execCommand("copy")
        })
        cy.get('@body').find('#emailDetect').should('include.text', 'Copy is detected in email')
        
        cy.get('@document').then((doc) => {
            doc.execCommand("paste")
        })
        cy.get('@body').find('#emailDetect').should('include.text', 'Paste is detected in email')
    })
    it('detect paste in password', () => {
        cy.get('@body').find("[type='password']").focus()
        cy.get('@document').then((doc) => {
            doc.execCommand("paste")
        })
        cy.get('@body').find('#passwordDetect').should('include.text', 'Paste is detected in password')
    })

})
