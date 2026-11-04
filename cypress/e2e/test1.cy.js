it('Debe mostrar la tarea creada', () => {
  cy.visit('http://localhost:3000');

  cy.get('#email').type('admin@test.com');
  cy.get('#password').type('123');

  cy.contains('button', 'Ingresar').click();

  cy.get('#taskTitle').type('Comprar pan');
  cy.contains('button', 'Crear tarea').click();

  cy.contains('#taskList li', 'Comprar pan').should('exist');
});