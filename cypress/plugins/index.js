/// <reference types="cypress" />
/// <reference types="cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};
