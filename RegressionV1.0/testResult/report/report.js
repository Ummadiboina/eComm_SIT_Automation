$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CS_AccessoriesOnly.feature");
formatter.feature({
  "line": 1,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "accessories-only-e2e-journey",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "accessories-only-e2e-journey;accessories-only-e2e-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionAccessory"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "accessories-only-e2e-journey;accessories-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "accessories-only-e2e-journey;accessories-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "accessories-only-e2e-journey;accessories-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23035159080,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "accessories-only-e2e-journey;accessories-only-e2e-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionAccessory"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 212112592,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 19591188064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "duration": 380695531,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 14573645400,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 7843172819,
  "error_message": "junit.framework.AssertionFailedError: Stock is not present in Reference shop Basket page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat actionsPerformed.BasketPageActions.BasketContentsforNonConnected(BasketPageActions.java:200)\r\n\tat steps.E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage(E2EOrderPlaced_Steps.java:371)\r\n\tat ✽.And I Land on the Non Phone related basket page and choose home delivery option(CS_AccessoriesOnly.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "go to checkout",
      "offset": 10
    }
  ],
  "location": "E2EOrderPlaced_Steps.CheckoutFromBasket(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 6
    },
    {
      "val": "ACCEPTA",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5114415117,
  "status": "passed"
});
});