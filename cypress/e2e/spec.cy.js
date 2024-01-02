describe('visit main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 201,
      fixture: 'reservationData',
    }).as('HomePage');
    cy.visit('http://localhost:3000');
    cy.wait('@HomePage');
  });

  it('should display already made reservations', () => {
    cy.get('h1')
      .should('contain', 'Turing Cafe Reservations')
      .get('form')
      .should('exist')
      .get(':nth-child(1) > input')
      .should('have.attr', 'placeholder', 'Name')
      .get(':nth-child(1) > input')
      .should('have.attr', 'placeholder', 'Name')
      .get(':nth-child(3) > input')
      .should('have.attr', 'placeholder', 'Time')
      .get(':nth-child(4) > input')
      .should('have.attr', 'placeholder', 'Number of Guests')
      .get('form > button')
      .click()
      .get('p')
      .should('contain', 'Please fill out all fields');
    cy.get('.reservation-container > :nth-child(1)')
      .first()
      .contains('h2', 'Christie')
      .get('.reservation-container > :nth-child(1)')
      .first()
      .contains('p', 'Date: 12/29')
      .get('.reservation-container > :nth-child(1)')
      .first()
      .contains('p', 'Time: 7:00')
      .get('.reservation-container > :nth-child(1)')
      .first()
      .contains('p', 'Number of Guests: 12');
    cy.get('.reservation-container > :nth-child(9)')
      .last()
      .contains('h2', 'Brittany')
      .get('.reservation-container > :nth-child(9)')
      .last()
      .contains('p', 'Date: 9/9')
      .get('.reservation-container > :nth-child(9)')
      .last()
      .contains('p', 'Time: 7:30')
      .get('.reservation-container > :nth-child(9)')
      .last()
      .contains('p', 'Number of Guests: 3')
      .get('.reservation-container')
      .children()
      .should('have.length', 9);
  });

  it('should add a new reservation', () => {
    cy.get(':nth-child(1) > input')
      .type('Jenny')
      .should('have.value', "Jenny")
      .get(':nth-child(2) > input')
      .type('1/4')
      .should('have.value', "1/4")
      .get(':nth-child(3) > input')
      .type('6:30')
      .should('have.value', "6:30")
      .get(':nth-child(4) > input')
      .type('4')
      .should('have.value', "4")
    cy.get("form > button").click()
    cy.get('.reservation-container > :nth-child(10)')
      .last()
      .contains('h2', 'Jenny')
      .get('.reservation-container > :nth-child(10)')
      .last()
      .contains('p', 'Date: 1/4')
      .get('.reservation-container > :nth-child(10)')
      .last()
      .contains('p', 'Time: 6:30')
      .get('.reservation-container > :nth-child(10)')
      .last()
      .contains('p', 'Number of Guests: 4')
      .get('.reservation-container')
      .children()
      .should('have.length', 10);
  });
});
