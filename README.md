# Cypress Course
---

* npm init --yes
* npm i -D cypress
* npx cypress open
* crear script: 

```js
    "test":"cypress open"
``

* En el archivo cypress.config.json:

```js
  e2e: {
    baseUrl: "https://segurospiramide.com/login",
    excludeSpecPattern: ["**/2-advanced-examples/*.js", "**/1-getting-started/*.js"],    
  },
```