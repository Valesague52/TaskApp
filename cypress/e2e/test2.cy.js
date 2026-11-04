describe('Validación de vulnerabilidad XSS', () => {

  it('Debe mostrar el HTML ingresado por el usuario como texto plano', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML malicioso
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // La tarea debe mostrarse exactamente como texto plano
    cy.contains('#taskList li', '<h1>TAREA MALICIOSA</h1>').should('exist');

    // Verificar que NO se renderizó ningún elemento H1 dentro de la lista
    cy.get('#taskList h1').should('not.exist');

  });

});