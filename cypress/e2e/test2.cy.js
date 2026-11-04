describe('Validación de vulnerabilidad XSS', () => {

  it('No debe interpretar el HTML ingresado por el usuario', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // La aplicación NO debe interpretar el HTML: no debe existir un <h1> renderizado
    cy.get('#taskList h1').should('not.exist');

    // La tarea debe mostrarse como texto plano, tal cual se ingresó
    cy.contains('#taskList li', '<h1>TAREA MALICIOSA</h1>').should('exist');

  });

});
