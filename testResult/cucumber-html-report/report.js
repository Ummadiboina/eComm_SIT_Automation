$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/FebruaryRelease2018/Regression/Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid store for Click and Collect",
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
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Accessory",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
        "Username",
        "Password",
        "Confirm_Password",
        "Security_Answer"
      ],
      "line": 20,
      "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "tablet",
        "Random",
        "iPhone 7 Evo Elite Brushed Black",
        "TEST",
        "ACCEPTA",
        "32",
        "SL11ER",
        "TEST ACCEPTA",
        "test123",
        "test123",
        "Anything"
      ],
      "line": 21,
      "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32158495167,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select a valid PayM tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid Random from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid Accessory iPhone 7 Evo Elite Brushed Black",
  "matchedColumns": [
    2
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
  "name": "select a valid store for Click and Collect",
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 32, SL11ER and valid TEST ACCEPTA",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid test123, test123, Anything in delivery page",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 1788242672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 7651406300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tablet",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 11594501840,
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
  "duration": 11696248692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Evo Elite Brushed Black",
      "offset": 25
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_Accessory(String)"
});
formatter.result({
  "duration": 24989350940,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 19890309512,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 7627109891,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12475933043,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13128548190,
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
      "val": "32",
      "offset": 53
    },
    {
      "val": "SL11ER",
      "offset": 57
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 42808313987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 29
    },
    {
      "val": "test123",
      "offset": 38
    },
    {
      "val": "Anything",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.Register_Customer_Phones(String,String,String)"
});
formatter.result({
  "duration": 36492746925,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 22731340045,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 484857170,
  "status": "passed"
});
formatter.after({
  "duration": 20039941031,
  "status": "passed"
});
});