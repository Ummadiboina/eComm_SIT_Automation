$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RegressionPack_Master/Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect",
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
  "name": "This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@FNTRegression"
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
  "name": "Select a PAYG \u003cDevice\u003e device in stock",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid \u003cTariffs\u003e from PAYG tariffs tab less than 50 GBP",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Confirm Device and Tariff are added in Deal Builder",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a valid store using \u003cPostCode\u003e for Click and Collect",
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
  "name": "Register customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode"
      ],
      "line": 19,
      "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;1"
    },
    {
      "cells": [
        "In stock",
        "50",
        "TEST",
        "ACCEPTA",
        "",
        "g2"
      ],
      "line": 20,
      "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43079035886,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@FNTRegression"
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
  "name": "Select a PAYG In stock device in stock",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid 50 from PAYG tariffs tab less than 50 GBP",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Confirm Device and Tariff are added in Deal Builder",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a valid store using g2 for Click and Collect",
  "matchedColumns": [
    5
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
  "name": "Register customer with valid TEST, ACCEPTA, , g2 and other valid details in delivery page",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 1497761403,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 21698731401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In stock",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_PAYG_Device_InStock(String)"
});
formatter.result({
  "duration": 7630340447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_valid_Tariffs_from_PAYG_tariffs_tab_LessThan50GBP(int)"
});
formatter.result({
  "duration": 6533100796,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Confirm_Device_and_Tariff_are_added_in_DealBuilder()"
});
formatter.result({
  "duration": 1292225067,
  "error_message": "junit.framework.AssertionFailedError: Failed to add Device \u0026 Tariff into Deal Builer\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Confirm_Device_and_Tariff_are_added_in_DealBuilder(E2EOrderPlaced_Steps.java:6105)\r\n\tat ✽.And Confirm Device and Tariff are added in Deal Builder(Features/RegressionPack_Master/Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "g2",
      "offset": 27
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_valid_store_using_postCodefor_Click_and_Collect(String)"
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
      "val": "TEST",
      "offset": 29
    },
    {
      "val": "ACCEPTA",
      "offset": 35
    },
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "g2",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
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
  "duration": 14296781681,
  "status": "passed"
});
});