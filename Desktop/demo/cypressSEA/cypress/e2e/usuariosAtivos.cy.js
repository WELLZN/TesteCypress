describe("Teste: Ver apenas funcionários ativos", () => {
    it("Deve verificar se o funcionário 'Ativoo' com CPF '123.412.341-23' está listado", () => {
        cy.visit("/");

        cy.contains("Ver apenas ativos").click();

        cy.contains("Ativoo").should("exist");
        cy.contains("123.412.341-23").should("exist");
    });
});
