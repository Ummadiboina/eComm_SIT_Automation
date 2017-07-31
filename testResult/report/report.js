$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RegressionPack_Master/Reg_AFA_PAYM_Acquistion.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_PAYM_Acquistion",
  "description": "",
  "id": "reg-afa-paym-acquistion",
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
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey",
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
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 23,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "S7 edge black 32 GB",
        "Random",
        "Random",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Test Accepta"
      ],
      "line": 24,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40841487762,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2",
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
  "name": "perform the credit checks using valid Test and Accepta and valid Test Accepta",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid Test and Accepta and other valid details in delivery page",
  "matchedColumns": [
    4,
    5
  ],
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
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 5873174163,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 18031972886,
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
  "duration": 7388120223,
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
  "duration": 8339463523,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 20057886225,
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
  "duration": 6343804970,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15412541570,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 9268755564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    },
    {
      "val": "Accepta",
      "offset": 47
    },
    {
      "val": "Test Accepta",
      "offset": 65
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String)"
});
formatter.result({
  "duration": 119426762096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    },
    {
      "val": "Accepta",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
});
formatter.result({
  "duration": 29098486896,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 47410,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 64560173852,
  "error_message": "junit.framework.AssertionFailedError: Unable to Pay by card , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.pay_by_card_payn_device(E2EOrderPlaced_Steps.java:1636)\r\n\tat ✽.When Pay by card for PAYM device(Features/RegressionPack_Master/Reg_AFA_PAYM_Acquistion.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.updatedeviceplan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ccaLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2430020005,
  "status": "passed"
});
});