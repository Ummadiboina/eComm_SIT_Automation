$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reg_AFA_PAYM_Acquistion.feature");
formatter.feature({
  "line": 1,
  "name": "Successful completion of a PAY M dongle upgrade Journey by selecting a dongle",
  "description": "",
  "id": "successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle",
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
  "name": "Successful completion of a PAY M dongle upgrade Journey by selecting a dongle",
  "description": "",
  "id": "successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegressionPAYM"
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
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType"
      ],
      "line": 21,
      "id": "successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;;1"
    },
    {
      "cells": [
        "S7 edge black 32 GB",
        "Random",
        "Random",
        "HomeDelivery"
      ],
      "line": 22,
      "id": "successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45327617834,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful completion of a PAY M dongle upgrade Journey by selecting a dongle",
  "description": "",
  "id": "successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;successful-completion-of-a-pay-m-dongle-upgrade-journey-by-selecting-a-dongle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegressionPAYM"
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
  "name": "Select a valid PayM S7 edge black 32 GB",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Random from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select valid Random from extras tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 6754298375,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 11081792621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S7 edge black 32 GB",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 15665053522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 8489456616,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 581078437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_valid_Random_from_extras_tab(String)"
});
formatter.result({
  "duration": 6356888240,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15365313789,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 9223189325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cFirstname\u003e",
      "offset": 38
    },
    {
      "val": "\u003cSurname\u003e",
      "offset": 54
    },
    {
      "val": "\u003cUsername\u003e",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String)"
});
formatter.result({
  "duration": 13424470926,
  "error_message": "junit.framework.AssertionFailedError: Unable to perform credit checks , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheck(E2EOrderPlaced_Steps.java:1461)\r\n\tat ✽.And perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e(Reg_AFA_PAYM_Acquistion.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cFirstname\u003e",
      "offset": 29
    },
    {
      "val": "\u003cSurname\u003e",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
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
  "duration": 2603794961,
  "status": "passed"
});
});