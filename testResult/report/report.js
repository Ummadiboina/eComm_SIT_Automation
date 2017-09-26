$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RegressionPack_Master/Reg_AFA_PayMSimO_withoutAnyAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_PayMSimO_withoutAnyAccessory",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 5,
  "name": "Successful completion of a PAY M SIMO acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid \u003cTariff\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Register customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;",
  "rows": [
    {
      "cells": [
        "Tariff",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode"
      ],
      "line": 18,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "SimO",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "6",
        "SL11UP"
      ],
      "line": 19,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27975141315,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful completion of a PAY M SIMO acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid SimO from tariffs tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "perform the credit checks using valid TEST, ACCEPTA, 6, SL11UP and valid TEST ACCEPTA",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Register customer with valid TEST, ACCEPTA, 6, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    2,
    3,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 1625754704,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 9316223530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SimO",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 11726382108,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15232092729,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13163776909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 38
    },
    {
      "val": "ACCEPTA",
      "offset": 44
    },
    {
      "val": "6",
      "offset": 53
    },
    {
      "val": "SL11UP",
      "offset": 56
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 109994402274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 29
    },
    {
      "val": "ACCEPTA",
      "offset": 35
    },
    {
      "val": "6",
      "offset": 44
    },
    {
      "val": "SL11UP",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String,String,String)"
});
formatter.result({
  "duration": 20368493268,
  "error_message": "junit.framework.AssertionFailedError: Unable to Register customer , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.register_customer(E2EOrderPlaced_Steps.java:1709)\r\n\tat ✽.And Register customer with valid TEST, ACCEPTA, 6, SL11UP and other valid details in delivery page(Features/RegressionPack_Master/Reg_AFA_PayMSimO_withoutAnyAccessory.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.submit_order_button_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4432386329,
  "status": "passed"
});
});