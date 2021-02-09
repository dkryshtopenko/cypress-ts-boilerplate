declare namespace Cypress {
  interface Chainable {
    sum(a: number, b: number): Chainable<number>;
  }
}
