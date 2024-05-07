import { BtnCustomComponent } from './btn-custom.component';

describe('button.cy.ts', () => {
  it('playground', () => {
    cy.mount(BtnCustomComponent, {
      componentProperties: {
        btnText: 'test',
      },
    });

    cy.get('button').should('contains.text', 'test');
  });
});
