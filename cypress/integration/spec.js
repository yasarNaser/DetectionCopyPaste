describe('Test Copy Paste Detection', () => {
    beforeEach(() => {
        cy.visit('/')
      });
      
    it('detect copypaste in email', () => {
        cy.get("[type='email']").focus()
        cy.document().then((doc) => {
            doc.execCommand("copy")
        })
        cy.get('#emailDetect').should('include.text', 'Copy is detected in email')

        cy.document().then((doc) => {
            doc.execCommand("paste")
        })
        cy.get('#emailDetect').should('include.text', 'Paste is detected in email')

    })
    it('detect paste in password', () => {
        cy.get("[type='password']").focus()

        cy.document().then((doc) => {
            doc.execCommand("paste")
        })
        cy.get('#passwordDetect').should('include.text', 'Paste is detected in password')

    })

})
