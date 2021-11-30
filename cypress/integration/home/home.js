import {
    Given,Then,
} from "cypress-cucumber-preprocessor/steps";

Given(/^user opens the home page$/, function () {
    cy.visit("/");
});
Then(/^he should able to see the Welcome screen$/, function () {
    cy.contains('Welcome')
});
