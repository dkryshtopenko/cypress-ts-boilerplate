declare namespace Cypress {
  interface Chainable<Subject> {
    sum(a: number, b: number): Chainable<Subject>;
  }
}
