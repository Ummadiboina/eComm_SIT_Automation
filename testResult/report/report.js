$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RegressionPack_Master/Reg_Consumer_PreOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Consumer_PreOrder",
  "description": "",
  "id": "reg-consumer-preorder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Pre Order Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for a PayM \u003cPreOrder_handset\u003e device",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check the status \u003cstatus\u003e of the device",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 18,
      "value": "#Close the browser"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;",
  "rows": [
    {
      "cells": [
        "PreOrder_handset",
        "Firstname",
        "Surname",
        "Username",
        "status"
      ],
      "line": 20,
      "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Apple iPhone7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Pre Order"
      ],
      "line": 21,
      "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82109272696,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CFA PayM Pre Order Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for a PayM Apple iPhone7 device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check the status Pre Order of the device",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 389299153,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 70681645110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone7",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_device(String)"
});
formatter.result({
  "duration": 5385592439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pre Order",
      "offset": 17
    }
  ],
  "location": "E2EOrderPlaced_Steps.check_status_of_device(String)"
});
formatter.result({
  "duration": 20092352186,
  "error_message": "junit.framework.AssertionFailedError: Unable to check status of the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.check_status_of_device(E2EOrderPlaced_Steps.java:4750)\r\n\tat ✽.And check the status Pre Order of the device(Features/RegressionPack_Master/Reg_Consumer_PreOrder.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
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
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
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
  "duration": 3071443612,
  "status": "passed"
});
});