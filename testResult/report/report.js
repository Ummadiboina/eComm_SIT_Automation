$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reg_AFA_PAYM_Acquistion.feature");
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
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
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
      "line": 21,
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
      "line": 22,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42605878961,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
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
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3882302457,
  "error_message": "junit.framework.AssertionFailedError: Unable to Login/validate home page, please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.LoginAgentShop(E2EOrderPlaced_Steps.java:1245)\r\n\tat ✽.Given I login to Agent shop(Reg_AFA_PAYM_Acquistion.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
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
  "duration": 11173206567,
  "status": "passed"
});
formatter.uri("Reg_AFA_PayG_withoutAnyAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_PayG_withoutAnyAccessory",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory",
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
  "name": "Successful completion of a PAY G handset acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory",
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
  "name": "Select a valid PAYG \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid \u003cTariffs\u003e from PAYG tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Pay by card",
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
  "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 18,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 128GB Jet Black",
        "Random",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 19,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
