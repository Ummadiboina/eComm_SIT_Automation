$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RegressionPack_Master/Reg_CS_SmartWatch.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_SmartWatch",
  "description": "",
  "id": "reg-cs-smartwatch",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Smart Watches only E2E journey",
  "description": "",
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ConsumerShop"
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
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
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
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25667026360,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Smart Watches only E2E journey",
  "description": "",
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ConsumerShop"
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
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
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
  "duration": 368907884,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 68302373613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Smartwatch(String)"
});
formatter.result({
  "duration": 15280879522,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 8644535852,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 14520850412,
  "status": "passed"
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
  "duration": 24919009775,
  "status": "passed"
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
  "duration": 16403201422,
  "status": "passed"
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
  "duration": 77611028830,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 5354077917,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5182283624,
  "status": "passed"
});
formatter.after({
  "duration": 3703722403,
  "status": "passed"
});
});