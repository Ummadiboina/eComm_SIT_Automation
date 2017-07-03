$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CFA_Refresh_Order_Basket_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Refresh_Order_Basket_Review_Page_and_Confirmation_Page",
  "description": "",
  "id": "cfa-refresh-order-basket-review-page-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfa-refresh-order-basket-review-page-and-confirmation-page;cfa-refresh-order-basket-review-page-and-confirmation-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneReleaseTest1"
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
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
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
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 20,
      "value": "#Close the browser"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "cfa-refresh-order-basket-review-page-and-confirmation-page;cfa-refresh-order-basket-review-page-and-confirmation-page;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 22,
      "id": "cfa-refresh-order-basket-review-page-and-confirmation-page;cfa-refresh-order-basket-review-page-and-confirmation-page;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 23,
      "id": "cfa-refresh-order-basket-review-page-and-confirmation-page;cfa-refresh-order-basket-review-page-and-confirmation-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9759959011,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "CFA Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfa-refresh-order-basket-review-page-and-confirmation-page;cfa-refresh-order-basket-review-page-and-confirmation-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneReleaseTest1"
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
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
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
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 128236069,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 17795854042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20117911831,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM GalaxyS8(CFA_Refresh_Order_Basket_Review_Page_and_Confirmation_Page.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 4055196677,
  "status": "passed"
});
formatter.uri("CFA_Refresh_Order_Ddphone_with_DDaccessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Refresh_Order_Ddphone_with_DDaccessory_Basket_Review_and_Confirmation_Page",
  "description": "",
  "id": "cfa-refresh-order-ddphone-with-ddaccessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Refresh Order Delayed delivery phone with Delayed Delivery accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-ddphone-with-ddaccessory-basket-review-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select \u003cDDAccessory\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose \u003ccolorAcc\u003e and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Check stock extended message for \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "#Close the browser"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "cfa-refresh-order-ddphone-with-ddaccessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color",
        "DDAccessory",
        "colorAcc"
      ],
      "line": 29,
      "id": "cfa-refresh-order-ddphone-with-ddaccessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "pink",
        "LightningDataCable1MeterBraided",
        "Black"
      ],
      "line": 30,
      "id": "cfa-refresh-order-ddphone-with-ddaccessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11246171190,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "CFA Refresh Order Delayed delivery phone with Delayed Delivery accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-ddphone-with-ddaccessory-basket-review-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select pink",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select LightningDataCable1MeterBraided from accessories",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose Black and add to basket",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Input TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Check stock extended message for GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page, check stock limited message for GalaxyS7 and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 21102812,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 18621260943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20039877491,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM GalaxyS7(CFA_Refresh_Order_Ddphone_with_DDaccessory_Basket_Review_and_Confirmation_Page.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pink",
      "offset": 93
    }
  ],
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_DD_and_select_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LightningDataCable1MeterBraided",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.choose_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Entering_DeliveryPage_Inputs_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.checkStockExtMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 58
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 77
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation_alongwith_stock_ext_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.ReviewPageStockExtMsgConfirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3823341658,
  "status": "passed"
});
formatter.uri("CFA_Refresh_Order_Delayed_delivery_phone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Refresh_Order_Delayed_delivery_phone_with_Instock_accessory_Basket_Review_and_Confirmation_Page",
  "description": "",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check stock extended message for \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#Close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 26,
      "id": "cfa-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "pink"
      ],
      "line": 27,
      "id": "cfa-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11562938770,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFA Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select pink",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check stock extended message for GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page, check stock limited message for GalaxyS7 and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 6672170,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 16317264549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20068014442,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM GalaxyS7(CFA_Refresh_Order_Delayed_delivery_phone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pink",
      "offset": 93
    }
  ],
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_DD_and_select_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Entering_DeliveryPage_Inputs_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.checkStockExtMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 58
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 77
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation_alongwith_stock_ext_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.ReviewPageStockExtMsgConfirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3944779639,
  "status": "passed"
});
formatter.uri("CFA_Refresh_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Refresh_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page",
  "description": "",
  "id": "cfa-refresh-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Refresh Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Pre Order and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check stock extended message for \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#Close the browser"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "cfa-refresh-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 27,
      "id": "cfa-refresh-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "AquarisM45",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "black"
      ],
      "line": 28,
      "id": "cfa-refresh-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8433628633,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "CFA Refresh Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM AquarisM45",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Pre Order and select black",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check stock extended message for AquarisM45",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the payment page, check stock limited message for AquarisM45 and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Agreements page, check stock extended message for AquarisM45 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page, check order contract text, stock extended message for AquarisM45 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 8544388,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 15635252643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20094790355,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM AquarisM45(CFA_Refresh_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "black",
      "offset": 86
    }
  ],
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_PO_and_select_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Entering_DeliveryPage_Inputs_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.checkStockExtMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 58
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation_alongwith_stock_ext_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.ReviewPageStockExtMsgConfirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3931430564,
  "status": "passed"
});
formatter.uri("CFA_Standard_Order_Basket_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Standard_Order_Basket_Review_Page_and_Confirmation_Page",
  "description": "",
  "id": "cfa-standard-order-basket-review-page-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Standard Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfa-standard-order-basket-review-page-and-confirmation-page;cfa-standard-order-basket-review-page-and-confirmation-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
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
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 20,
      "value": "#Close the browser"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "cfa-standard-order-basket-review-page-and-confirmation-page;cfa-standard-order-basket-review-page-and-confirmation-page;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 22,
      "id": "cfa-standard-order-basket-review-page-and-confirmation-page;cfa-standard-order-basket-review-page-and-confirmation-page;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 23,
      "id": "cfa-standard-order-basket-review-page-and-confirmation-page;cfa-standard-order-basket-review-page-and-confirmation-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10741651302,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "CFA Standard Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfa-standard-order-basket-review-page-and-confirmation-page;cfa-standard-order-basket-review-page-and-confirmation-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
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
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 6841510,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 16667926259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20031750336,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM GalaxyS8(CFA_Standard_Order_Basket_Review_Page_and_Confirmation_Page.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3875344157,
  "status": "passed"
});
formatter.uri("CFA_Standard_Order_Ddphone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Standard_Order_Ddphone_with_Instock_accessory_Basket_Review_and_Confirmation_Page",
  "description": "",
  "id": "cfa-standard-order-ddphone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-ddphone-with-instock-accessory-basket-review-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check stock extended message for \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#Close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "cfa-standard-order-ddphone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 26,
      "id": "cfa-standard-order-ddphone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "pink"
      ],
      "line": 27,
      "id": "cfa-standard-order-ddphone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8368478372,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFA Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-ddphone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page and select pink",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check stock extended message for GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page, check stock limited message for GalaxyS7 and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 6032702,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 15297617511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20092881033,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM GalaxyS7(CFA_Standard_Order_Ddphone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pink",
      "offset": 43
    }
  ],
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_and_select_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Entering_DeliveryPage_Inputs_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.checkStockExtMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 58
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 77
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation_alongwith_stock_ext_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.ReviewPageStockExtMsgConfirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3804447771,
  "status": "passed"
});
formatter.uri("CFA_Standard_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Standard_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page",
  "description": "",
  "id": "cfa-standard-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Pre Order and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check stock extended message for \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cuser\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#Close the browser"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "cfa-standard-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "User",
        "color"
      ],
      "line": 27,
      "id": "cfa-standard-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "AquarisM45",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "black"
      ],
      "line": 28,
      "id": "cfa-standard-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10092581036,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-preorderphone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM AquarisM45",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Pre Order and select black",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check stock extended message for AquarisM45",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the payment page, check stock limited message for AquarisM45 and input \u003cuser\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Agreements page, check stock extended message for AquarisM45 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page, check order contract text, stock extended message for AquarisM45 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 9160565,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 18338062233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20090923947,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:277)\r\n\tat ✽.And I choose PayM AquarisM45(CFA_Standard_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "black",
      "offset": 86
    }
  ],
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_PO_and_select_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Entering_DeliveryPage_Inputs_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.checkStockExtMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 58
    },
    {
      "val": "\u003cuser\u003e",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_check_stock_limited_msg_HomeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation_alongwith_stock_ext_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.ReviewPageStockExtMsgConfirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3889250596,
  "status": "passed"
});
formatter.uri("CFU_Refresh_Order_Ddphone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Refresh_Order_Ddphone_with_Instock_accessory",
  "description": "",
  "id": "cfu-refresh-order-ddphone-with-instock-accessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Refresh Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-refresh-order-ddphone-with-instock-accessory;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose upgrade PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for \u003chandset\u003e and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#Close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "cfu-refresh-order-ddphone-with-instock-accessory;;",
  "rows": [
    {
      "cells": [
        "handset",
        "user",
        "username",
        "password",
        "color"
      ],
      "line": 26,
      "id": "cfu-refresh-order-ddphone-with-instock-accessory;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST ACCEPTA",
        "ini_aug5200",
        "test123",
        "pink"
      ],
      "line": 27,
      "id": "cfu-refresh-order-ddphone-with-instock-accessory;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9892049646,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFU Refresh Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-refresh-order-ddphone-with-instock-accessory;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid ini_aug5200 and test123 credentials",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose upgrade PayM GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select pink",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for GalaxyS7 and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 105414590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ini_aug5200",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 37434005603,
  "error_message": "junit.framework.AssertionFailedError: Unable to signin using credentials\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(E2EOrderPlaced_Steps.java:535)\r\n\tat ✽.And Signin using valid ini_aug5200 and test123 credentials(CFU_Refresh_Order_Ddphone_with_Instock_accessory.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pink",
      "offset": 93
    }
  ],
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_DD_and_select_color(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_for_DD_or_PreOrder_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 59
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 78
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_check_Stock_ext_msg_Upgrade(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation_alongwith_stock_ext_msg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS7",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.ReviewPageStockExtMsgConfirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3572828802,
  "status": "passed"
});
formatter.uri("CFU_Refresh_Order_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Refresh_Order_Review_Page_and_Confirmation_Page",
  "description": "",
  "id": "cfu-refresh-order-review-page-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfu-refresh-order-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose upgrade PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#Close the browser"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "cfu-refresh-order-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;",
  "rows": [
    {
      "cells": [
        "handset",
        "user",
        "username",
        "password"
      ],
      "line": 23,
      "id": "cfu-refresh-order-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST ACCEPTA",
        "ink_jun9198",
        "test123"
      ],
      "line": 24,
      "id": "cfu-refresh-order-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8917221365,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CFU Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfu-refresh-order-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid ink_jun9198 and test123 credentials",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose upgrade PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 49145029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ink_jun9198",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 20591854135,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 33074585560,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to upgrade phones\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2249)\r\n\tat ✽.And Navigate to upgrade phone(CFU_Refresh_Order_Review_Page_and_Confirmation_Page.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
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
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_in_basket_page()"
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
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_Upgrade(String)"
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
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
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
  "duration": 3685014244,
  "status": "passed"
});
formatter.uri("CFU_Standard_Order_Ddphone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Standard_Order_Ddphone_with_Instock_accessory",
  "description": "",
  "id": "cfu-standard-order-ddphone-with-instock-accessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Standard Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-standard-order-ddphone-with-instock-accessory;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose upgrade PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select \u003ccolor\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for \u003chandset\u003e and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#Close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "cfu-standard-order-ddphone-with-instock-accessory;;",
  "rows": [
    {
      "cells": [
        "handset",
        "user",
        "username",
        "password",
        "color"
      ],
      "line": 26,
      "id": "cfu-standard-order-ddphone-with-instock-accessory;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST ACCEPTA",
        "ink_jun9198",
        "test123",
        "pink"
      ],
      "line": 27,
      "id": "cfu-standard-order-ddphone-with-instock-accessory;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9498877182,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFU Standard Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-standard-order-ddphone-with-instock-accessory;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JuneRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid ink_jun9198 and test123 credentials",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose upgrade PayM GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page, check if the selected device is Delayed Delivery and select pink",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Check for order contract text in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for GalaxyS7 and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 43612058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ink_jun9198",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 18981048482,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
