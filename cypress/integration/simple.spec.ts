/// <reference path="../support/index.d.ts" />

describe("Feature description", () => {
  before(() => {
    // executes once before all tests
    // db reset, etc
  });

  beforeEach(() => {
    // executes once before each test
    // graphql mocking, etc
  });

  Cypress._.each(
    [
      {
        a: 1,
        b: 2,
        res: 3,
      },
      {
        a: 4,
        b: 5,
        res: 9,
      },
      {
        a: 6,
        b: 7,
        res: 13,
      },
    ],
    (item) => {
      it(`sum positive test ${item.a}+${item.b}=${item.res}`, () => {
        cy.sum(item.a, item.b).then((sum: number) => {
          expect(sum).equal(item.res);
        });
      });
    }
  );

  it.skip("skipped test", () => {
    cy.log("you won't see that message");
  });

  // (optional), see beforeEach(() => {}).
  afterEach(() => {
    // executes once after each test
  });

  // (optional), see before(() => {})
  after(() => {
    // executes once after all tests
  });
});
