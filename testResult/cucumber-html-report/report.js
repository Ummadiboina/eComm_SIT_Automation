$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/FebruaryRelease2018/Regression/Reg_CS_PayMSimOnly.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayMSimOnly",
  "description": "",
  "id": "reg-cs-paymsimonly",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sim Only PayM 12Months E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Plan included basket page and choose home delivery option",
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
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;;1"
    },
    {
      "cells": [
        "30 Days",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10974348129,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Sim Only PayM 12Months E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;;2",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on different 30 Days  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Plan included basket page and choose home delivery option",
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
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
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
  "duration": 635853680,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 12339332723,
  "error_message": "java.lang.AssertionError: Unable to do mousehover to PAYM SIMO page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page(E2EOrderPlaced_Steps.java:282)\r\n\tat ✽.And navigate to PAYM SIMO page(Features/FebruaryRelease2018/Regression/Reg_CS_PayMSimOnly.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "30 Days ",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_different_Months_Tariff_in_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30 Days",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "status": "skipped"
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
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery(String)"
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
  "duration": 20313441135,
  "status": "passed"
});
});