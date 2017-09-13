$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RegressionPack_Master/Anusha_Demo/CFA_PayG_SIM.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayG_SIM",
  "description": "",
  "id": "cfa-payg-sim",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Ordering a free sim",
  "description": "",
  "id": "cfa-payg-sim;ordering-a-free-sim",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter details in Delivery Page\u003cFirstname\u003e and \u003cSurname\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# And I click on \u0027Send me my sim\u0027 CTA"
    }
  ],
  "line": 10,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "cfa-payg-sim;ordering-a-free-sim;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname"
      ],
      "line": 13,
      "id": "cfa-payg-sim;ordering-a-free-sim;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA"
      ],
      "line": 14,
      "id": "cfa-payg-sim;ordering-a-free-sim;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40316991517,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Ordering a free sim",
  "description": "",
  "id": "cfa-payg-sim;ordering-a-free-sim;;2",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter details in Delivery PageTEST and ACCEPTA",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# And I click on \u0027Send me my sim\u0027 CTA"
    }
  ],
  "line": 10,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 569470079,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 28004419258,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 7182478745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 32
    },
    {
      "val": "ACCEPTA",
      "offset": 41
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA(String,String)"
});
formatter.result({
  "duration": 14887476588,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2139707068,
  "status": "passed"
});
formatter.after({
  "duration": 2221129288,
  "status": "passed"
});
});