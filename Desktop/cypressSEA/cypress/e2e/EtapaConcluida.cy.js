describe("Teste: Marcar etapa como concluída", () => {
    it("Deve clicar no botão 'Não' e verificar se aparece 'ITEM 1CONCLUIDO'", () => {
        cy.visit("/");

        cy.contains("Não").click();

        cy.contains("ITEM 1CONCLUIDO").should("exist");
        cy.wait(200)
    });
});
