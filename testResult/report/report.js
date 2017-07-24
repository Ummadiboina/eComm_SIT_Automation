$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CFA_Refresh_Order_Basket_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Refresh Order Basket Review Page and Confirmation Page",
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
        "Iphone7",
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
  "duration": 19466252907,
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
  "name": "I choose PayM Iphone7",
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
  "duration": 620530292,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 19763716079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 1569133313,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 31525740331,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3702554197,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 11017083248,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_in_basket_page()"
});
formatter.result({
  "duration": 52313549,
  "status": "passed"
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
  "duration": 9379549839,
  "status": "passed"
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
  "duration": 15966899283,
  "status": "passed"
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
  "duration": 119664127745,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 33331958478,
  "error_message": "junit.framework.AssertionFailedError: Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.AgreementsPageConfirmation(E2EOrderPlaced_Steps.java:1051)\r\n\tat ✽.And Continue to Agreements page and confirm all the agreement checks(CFA_Refresh_Order_Basket_Review_Page_and_Confirmation_Page.feature:15)\r\n",
  "status": "failed"
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
  "duration": 3946733566,
  "status": "passed"
});
formatter.uri("CFA_Refresh_Order_Ddphone_with_DDaccessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Refresh Order Delayed delivery phone with Delayed Delivery accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-delayed-delivery-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Refresh Order Delayed delivery phone with Delayed Delivery accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-delayed-delivery-accessory-basket-review-and-confirmation-page;",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select \u003cDDAccessory\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose \u003ccolorAcc\u003e and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Check stock extended message for \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Agreements page, check stock extended message for \u003chandset\u003e and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page, check order contract text, stock extended message for \u003chandset\u003e and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 26,
      "value": "#Close the browser"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-delayed-delivery-accessory-basket-review-and-confirmation-page;;",
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
      "line": 28,
      "id": "cfa-refresh-order-delayed-delivery-phone-with-delayed-delivery-accessory-basket-review-and-confirmation-page;;;1"
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
      "line": 29,
      "id": "cfa-refresh-order-delayed-delivery-phone-with-delayed-delivery-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22466112383,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "CFA Refresh Order Delayed delivery phone with Delayed Delivery accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-delayed-delivery-phone-with-delayed-delivery-accessory-basket-review-and-confirmation-page;;;2",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select LightningDataCable1MeterBraided from accessories",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose Black and add to basket",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Check for order contract text for DD/PreOrder phone in Basket Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Input TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Check stock extended message for GalaxyS7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page, check stock limited message for GalaxyS7 and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check order contract text in Order Confirmation page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 68030232,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 18791032775,
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
  "duration": 1229164520,
  "status": "passed"
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
  "duration": 37639953516,
  "error_message": "junit.framework.AssertionFailedError: Unable to Navigate to device details page, check if the selected device is Delayed Delivery \r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_DD_and_select_color(E2EOrderPlaced_Steps.java:1986)\r\n\tat ✽.And Navigate to device details page, check if the selected device is Delayed Delivery and select pink(CFA_Refresh_Order_Ddphone_with_DDaccessory_Basket_Review_and_Confirmation_Page.feature:9)\r\n",
  "status": "failed"
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
  "duration": 2851929790,
  "status": "passed"
});
formatter.uri("CFA_Refresh_Order_Delayed_delivery_phone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
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
  "duration": 16125174916,
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
  "duration": 45309409,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 22991771004,
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
  "duration": 1241922681,
  "status": "passed"
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
  "duration": 35265862833,
  "error_message": "junit.framework.AssertionFailedError: Unable to Navigate to device details page, check if the selected device is Delayed Delivery \r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_device_details_page_check_if_DD_and_select_color(E2EOrderPlaced_Steps.java:1986)\r\n\tat ✽.And Navigate to device details page, check if the selected device is Delayed Delivery and select pink(CFA_Refresh_Order_Delayed_delivery_phone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:9)\r\n",
  "status": "failed"
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
  "duration": 2866479247,
  "status": "passed"
});
formatter.uri("CFA_Refresh_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Refresh Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "cfa-refresh-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Refresh Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
  "name": "Navigate to device details page, check if the selected device is Pre Order and select \u003ccolor\u003e",
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
  "id": "cfa-refresh-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
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
      "id": "cfa-refresh-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "AquarisM45",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "black"
      ],
      "line": 27,
      "id": "cfa-refresh-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14223424710,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFA Refresh Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-refresh-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "name": "I choose PayM AquarisM45",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page, check if the selected device is Pre Order and select black",
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
  "name": "Check stock extended message for AquarisM45",
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
  "name": "land on the payment page, check stock limited message for AquarisM45 and input \u003cusername\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page, check stock extended message for AquarisM45 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page, check order contract text, stock extended message for AquarisM45 and review the order",
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
  "duration": 22987662,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 21409877558,
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
  "duration": 21079533931,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM AquarisM45(CFA_Refresh_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:8)\r\n",
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
  "duration": 4982316363,
  "status": "passed"
});
formatter.uri("CFA_Standard_Order_Basket_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Standard Order Basket Review Page and Confirmation Page",
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
        "Iphone7",
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
  "duration": 13005842441,
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
  "name": "I choose PayM Iphone7",
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
  "duration": 13406312,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 23239460337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 1162249014,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 27102260674,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
});
formatter.result({
  "duration": 985393306,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 9534937607,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_for_order_contract_text_in_basket_page()"
});
formatter.result({
  "duration": 73419125,
  "status": "passed"
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
  "duration": 9267518737,
  "status": "passed"
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
  "duration": 14925550623,
  "status": "passed"
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
  "duration": 109788257014,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 39432804825,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
});
formatter.result({
  "duration": 13421586518,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOrderContractTextOC()"
});
formatter.result({
  "duration": 135827571,
  "error_message": "junit.framework.AssertionFailedError: Assertion Failed: Expected Message: Your contract will not start until the order is on its way. is not present in the page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat steps.E2EOrderPlaced_Steps.checkOrderContractTextOC(E2EOrderPlaced_Steps.java:1160)\r\n\tat ✽.And Check order contract text in Order Confirmation page(CFA_Standard_Order_Basket_Review_Page_and_Confirmation_Page.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5352071301,
  "status": "passed"
});
formatter.uri("CFA_Standard_Order_Ddphone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "cfa-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
  "id": "cfa-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
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
      "id": "cfa-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
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
      "id": "cfa-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15957107935,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFA Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "duration": 11552647,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 19412132666,
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
  "duration": 1063429225,
  "status": "passed"
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
  "duration": 32747299140,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to device details page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_device_details_page_and_select_color(E2EOrderPlaced_Steps.java:445)\r\n\tat ✽.And Navigate to device details page and select pink(CFA_Standard_Order_Ddphone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:9)\r\n",
  "status": "failed"
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
  "duration": 2811183097,
  "status": "passed"
});
formatter.uri("CFA_Standard_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "cfa-standard-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
  "name": "Navigate to device details page, check if the selected device is Pre Order and select \u003ccolor\u003e",
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
  "name": "land on the payment page, check stock limited message for \u003chandset\u003e and input \u003cuser\u003e and other details and click \u0027Continue on next step\u0027",
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
  "id": "cfa-standard-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "User",
        "color"
      ],
      "line": 26,
      "id": "cfa-standard-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "AquarisM45",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "black"
      ],
      "line": 27,
      "id": "cfa-standard-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13887217721,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFA Standard Order PreOrder phone with Instock accessory Basket Review and Confirmation Page",
  "id": "cfa-standard-order-preorder-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "name": "I choose PayM AquarisM45",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page, check if the selected device is Pre Order and select black",
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
  "name": "Check stock extended message for AquarisM45",
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
  "name": "land on the payment page, check stock limited message for AquarisM45 and input \u003cuser\u003e and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page, check stock extended message for AquarisM45 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page, check order contract text, stock extended message for AquarisM45 and review the order",
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
  "duration": 8603202,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 22739973687,
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
  "duration": 20756657465,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM AquarisM45(CFA_Standard_Order_PreOrderPhone_with_Instock_accessory_Basket_Review_and_Confirmation_Page.feature:8)\r\n",
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
  "duration": 4793902482,
  "status": "passed"
});
formatter.uri("CFU_Refresh_Order_Ddphone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "CFU Refresh Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "cfu-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Refresh Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
  "id": "cfu-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
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
      "id": "cfu-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
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
      "id": "cfu-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16447149417,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFU Refresh Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "duration": 10987930254,
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
  "duration": 14662066845,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 30971808180,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to upgrade phones\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2292)\r\n\tat ✽.And Navigate to upgrade phone(CFU_Refresh_Order_Ddphone_with_Instock_accessory.feature:8)\r\n",
  "status": "failed"
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
  "duration": 2705136145,
  "status": "passed"
});
formatter.uri("CFU_Refresh_Order_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFU Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfu-refresh-order-basket-review-page-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfu-refresh-order-basket-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page",
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
  "id": "cfu-refresh-order-basket-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;",
  "rows": [
    {
      "cells": [
        "handset",
        "user",
        "username",
        "password"
      ],
      "line": 23,
      "id": "cfu-refresh-order-basket-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST ACCEPTA",
        "ink_jun9198",
        "test123"
      ],
      "line": 24,
      "id": "cfu-refresh-order-basket-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13296781072,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CFU Refresh Order Basket Review Page and Confirmation Page",
  "description": "",
  "id": "cfu-refresh-order-basket-review-page-and-confirmation-page;cfu-refresh-order-basket-review-page-and-confirmation-page;;2",
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
  "duration": 11499352046,
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
  "duration": 13591938608,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 32375237382,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to upgrade phones\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2292)\r\n\tat ✽.And Navigate to upgrade phone(CFU_Refresh_Order_Review_Page_and_Confirmation_Page.feature:7)\r\n",
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
  "duration": 2724311477,
  "status": "passed"
});
formatter.uri("CFU_Standard_Order_Ddphone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "CFU Standard Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "cfu-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Standard Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
  "id": "cfu-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
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
      "id": "cfu-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
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
      "id": "cfu-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12390492228,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "CFU Standard Order Delayed delivery phone with InStock Accessory Basket Review and Confirmation Page",
  "id": "cfu-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "duration": 11045813878,
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
  "duration": 13264438637,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 33167993956,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to upgrade phones\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2292)\r\n\tat ✽.And Navigate to upgrade phone(CFU_Standard_Order_Ddphone_with_Instock_accessory.feature:8)\r\n",
  "status": "failed"
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
  "duration": 2737508976,
  "status": "passed"
});
formatter.uri("Existing_Refresh_Order_Ddphone_with_ DDaccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Refresh Order Ddphone with DDaccessory",
  "description": "",
  "id": "existing-customer-refresh-order-ddphone-with-ddaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing customer Refresh Order Ddphone with DDaccessory",
  "id": "existing-customer-refresh-order-ddphone-with-ddaccessory;",
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the payment page, check stock extended message for \u003chandset\u003e and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
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
  "id": "existing-customer-refresh-order-ddphone-with-ddaccessory;;",
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
      "line": 27,
      "id": "existing-customer-refresh-order-ddphone-with-ddaccessory;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "pink",
        "LightningDataCable1MeterBraided",
        "black"
      ],
      "line": 28,
      "id": "existing-customer-refresh-order-ddphone-with-ddaccessory;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15379647733,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "Existing customer Refresh Order Ddphone with DDaccessory",
  "id": "existing-customer-refresh-order-ddphone-with-ddaccessory;;;2",
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
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
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
  "name": "Choose black and add to basket",
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the payment page, check stock extended message for GalaxyS7 and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Agreements page, check stock extended message for GalaxyS7 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page, check order contract text, stock extended message for GalaxyS7 and review the order",
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
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 10925368256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 19
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 15067575105,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 17298896446,
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
  "duration": 20059592028,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM GalaxyS7(Existing_Refresh_Order_Ddphone_with_ DDaccessory.feature:9)\r\n",
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
      "val": "black",
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
      "val": "\u003cuser\u003e",
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
  "duration": 2736199646,
  "status": "passed"
});
formatter.uri("Existing_Refresh_Order_Ddphone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "existing-customer-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing customer Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "existing-customer-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
      "line": 23,
      "value": "#Close the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "existing-customer-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 25,
      "id": "existing-customer-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "pink"
      ],
      "line": 26,
      "id": "existing-customer-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29020070191,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Existing customer Refresh Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "existing-customer-refresh-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
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
  "name": "land on the payment page, check stock extended message for GalaxyS7 and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
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
  "duration": 17758342185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 19
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17162734930,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 24405162079,
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
  "duration": 20061353721,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM GalaxyS7(Existing_Refresh_Order_Ddphone_with_Instock_accessory.feature:9)\r\n",
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
      "val": "\u003cuser\u003e",
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
  "duration": 2703193665,
  "status": "passed"
});
formatter.uri("Existing_Refresh_Order_PreOrder_phone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Refresh Order PreOrder phone with Instock accessory",
  "description": "",
  "id": "existing-customer-refresh-order-preorder-phone-with-instock-accessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing customer Refresh Order PreOrder phone with Instock accessory",
  "id": "existing-customer-refresh-order-preorder-phone-with-instock-accessory;",
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
      "line": 23,
      "value": "#Close the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "existing-customer-refresh-order-preorder-phone-with-instock-accessory;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 25,
      "id": "existing-customer-refresh-order-preorder-phone-with-instock-accessory;;;1"
    },
    {
      "cells": [
        "AquarisM45",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "black"
      ],
      "line": 26,
      "id": "existing-customer-refresh-order-preorder-phone-with-instock-accessory;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13552385588,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Existing customer Refresh Order PreOrder phone with Instock accessory",
  "id": "existing-customer-refresh-order-preorder-phone-with-instock-accessory;;;2",
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
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for AquarisM45 and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page, check stock extended message for AquarisM45 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page, check order contract text, stock extended message for AquarisM45 and review the order",
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
  "duration": 13586921948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 19
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 13945059109,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 16809761269,
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
  "duration": 20028097084,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM AquarisM45(Existing_Refresh_Order_PreOrder_phone_with_Instock_accessory.feature:9)\r\n",
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
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 59
    },
    {
      "val": "\u003cuser\u003e",
      "offset": 80
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
  "duration": 2712200679,
  "status": "passed"
});
formatter.uri("Existing_Standard_Order_Ddphone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "description": "",
  "id": "existing-customer-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing customer Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "existing-customer-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;",
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
      "line": 23,
      "value": "#Close the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "existing-customer-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 25,
      "id": "existing-customer-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "pink"
      ],
      "line": 26,
      "id": "existing-customer-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15959465279,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Existing customer Standard Order Delayed delivery phone with Instock accessory Basket Review and Confirmation Page",
  "id": "existing-customer-standard-order-delayed-delivery-phone-with-instock-accessory-basket-review-and-confirmation-page;;;2",
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
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for GalaxyS7 and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
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
  "duration": 9277795212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 19
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 15416864724,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 17339164327,
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
  "duration": 20049930942,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM GalaxyS7(Existing_Standard_Order_Ddphone_with_Instock_accessory.feature:9)\r\n",
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
      "val": "\u003cuser\u003e",
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
  "duration": 2653152198,
  "status": "passed"
});
formatter.uri("Existing_Standard_Order_PreOrder_phone_with_Instock_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Standard Order PreOrder phone with Instock accessory",
  "description": "",
  "id": "existing-customer-standard-order-preorder-phone-with-instock-accessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing customer Standard Order PreOrder phone with Instock accessory",
  "id": "existing-customer-standard-order-preorder-phone-with-instock-accessory;",
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
      "line": 23,
      "value": "#Close the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "existing-customer-standard-order-preorder-phone-with-instock-accessory;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "color"
      ],
      "line": 25,
      "id": "existing-customer-standard-order-preorder-phone-with-instock-accessory;;;1"
    },
    {
      "cells": [
        "AquarisM45",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "black"
      ],
      "line": 26,
      "id": "existing-customer-standard-order-preorder-phone-with-instock-accessory;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12588121936,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Existing customer Standard Order PreOrder phone with Instock accessory",
  "id": "existing-customer-standard-order-preorder-phone-with-instock-accessory;;;2",
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
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page, check stock extended message for AquarisM45 and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page, check stock extended message for AquarisM45 and confirm all the agreement checks",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page, check order contract text, stock extended message for AquarisM45 and review the order",
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
  "duration": 12653800745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 19
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 15713241195,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 16811743223,
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
  "duration": 20042087600,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM AquarisM45(Existing_Standard_Order_PreOrder_phone_with_Instock_accessory.feature:9)\r\n",
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
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AquarisM45",
      "offset": 59
    },
    {
      "val": "\u003cuser\u003e",
      "offset": 80
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
  "duration": 2839220577,
  "status": "passed"
});
formatter.uri("Existing_customer_Refresh_Order_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Refresh Order Review Page and Confirmation Page",
  "description": "",
  "id": "existing-customer-refresh-order-review-page-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "Existing customer Refresh Order Review Page and Confirmation Page",
  "id": "existing-customer-refresh-order-review-page-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
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
  "line": 21,
  "name": "",
  "description": "",
  "id": "existing-customer-refresh-order-review-page-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "user"
      ],
      "line": 22,
      "id": "existing-customer-refresh-order-review-page-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "ink_jun9198",
        "test123",
        "TEST ACCEPTA"
      ],
      "line": 23,
      "id": "existing-customer-refresh-order-review-page-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10859178269,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "Existing customer Refresh Order Review Page and Confirmation Page",
  "id": "existing-customer-refresh-order-review-page-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
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
    0,
    1
  ],
  "keyword": "And "
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
    2
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
  "duration": 12114442919,
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
  "duration": 13096410734,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 16757437457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chandset\u003e",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20039824991,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM \u003chandset\u003e(Existing_customer_Refresh_Order_Review_Page_and_Confirmation_Page.feature:8)\r\n",
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
  "duration": 2759053099,
  "status": "passed"
});
formatter.uri("Existing_customer_Standard_Order_Review_Page_and_Confirmation_Page.feature");
formatter.feature({
  "line": 1,
  "name": "Existing customer Standard Order Review Page and Confirmation Page",
  "description": "",
  "id": "existing-customer-standard-order-review-page-and-confirmation-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "Existing customer Standard Order Review Page and Confirmation Page",
  "id": "existing-customer-standard-order-review-page-and-confirmation-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
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
  "line": 21,
  "name": "",
  "description": "",
  "id": "existing-customer-standard-order-review-page-and-confirmation-page;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "user"
      ],
      "line": 22,
      "id": "existing-customer-standard-order-review-page-and-confirmation-page;;;1"
    },
    {
      "cells": [
        "ink_jun9198",
        "test123",
        "iphone7",
        "TEST ACCEPTA"
      ],
      "line": 23,
      "id": "existing-customer-standard-order-review-page-and-confirmation-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14077761580,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "Existing customer Standard Order Review Page and Confirmation Page",
  "id": "existing-customer-standard-order-review-page-and-confirmation-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
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
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM iphone7",
  "matchedColumns": [
    2
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
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
    3
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
  "duration": 11727207632,
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
  "duration": 13424640172,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 16249482604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 20030409034,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:313)\r\n\tat ✽.And I choose PayM iphone7(Existing_customer_Standard_Order_Review_Page_and_Confirmation_Page.feature:8)\r\n",
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
  "duration": 2729293796,
  "status": "passed"
});
formatter.uri("FTQ-Ecomm-11478-CFA_FitnessTrackerandAccessoryGroup.feature");
formatter.feature({
  "line": 1,
  "name": "FTQ-Ecomm-11478-CFAMultipleFitnesTrackers-and-Accessories",
  "description": "",
  "id": "ftq-ecomm-11478-cfamultiplefitnestrackers-and-accessories",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Multiple Accessories and Fitness Trackers Smarwatches of Same type/Model",
  "description": "",
  "id": "ftq-ecomm-11478-cfamultiplefitnestrackers-and-accessories;cfa-multiple-accessories-and-fitness-trackers-smarwatches-of-same-type/model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFA_MultipleAccessoriesFitnessTrackers"
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
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any available \"Random\" Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that correct quantity of Grouped non connected items are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that correct quantity of Grouped non connected items are displayed in Delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify that correct quantity of Grouped non connected items are displayed in Review page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "ftq-ecomm-11478-cfamultiplefitnestrackers-and-accessories;cfa-multiple-accessories-and-fitness-trackers-smarwatches-of-same-type/model;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 23,
      "id": "ftq-ecomm-11478-cfamultiplefitnestrackers-and-accessories;cfa-multiple-accessories-and-fitness-trackers-smarwatches-of-same-type/model;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 24,
      "id": "ftq-ecomm-11478-cfamultiplefitnestrackers-and-accessories;cfa-multiple-accessories-and-fitness-trackers-smarwatches-of-same-type/model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12192716864,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CFA Multiple Accessories and Fitness Trackers Smarwatches of Same type/Model",
  "description": "",
  "id": "ftq-ecomm-11478-cfamultiplefitnestrackers-and-accessories;cfa-multiple-accessories-and-fitness-trackers-smarwatches-of-same-type/model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFA_MultipleAccessoriesFitnessTrackers"
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
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any available \"Random\" Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that correct quantity of Grouped non connected items are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that correct quantity of Grouped non connected items are displayed in Delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify that correct quantity of Grouped non connected items are displayed in Review page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 25395532,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 44377052364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "duration": 361222393,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 15822721138,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 28181670660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Fitness_tracker(String)"
});
formatter.result({
  "duration": 5241013611,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 9149291908,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage_julyRelease()"
});
formatter.result({
  "duration": 3113226747,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifytheQuantityBasketPageGrouped()"
});
formatter.result({
  "duration": 285029875,
  "error_message": "java.lang.AssertionError: Quantity Values are not correct\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat GlobalActions.JuneReleaseValidations.QuantityValidationsBasket_Grouped(JuneReleaseValidations.java:88)\r\n\tat steps.E2EOrderPlaced_Steps.verifytheQuantityBasketPageGrouped(E2EOrderPlaced_Steps.java:1737)\r\n\tat ✽.Then Verify that correct quantity of Grouped non connected items are displayed in Basket page(FTQ-Ecomm-11478-CFA_FitnessTrackerandAccessoryGroup.feature:13)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.verifytheQuantityDeliveryPageGrouped()"
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
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifytheQuantityReviewPageGrouped()"
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
  "duration": 5177937671,
  "status": "passed"
});
formatter.uri("FTQ-Ecomm-11478-CFA_FitnessTrackerandAccessoryGroup_Remove.feature");
formatter.feature({
  "line": 1,
  "name": "FTQ-Ecomm-11478-remove",
  "description": "",
  "id": "ftq-ecomm-11478-remove",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12393544697,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "CFA Multiple non connected Remove and verify correct display",
  "description": "",
  "id": "ftq-ecomm-11478-remove;cfa-multiple-non-connected-remove-and-verify-correct-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFA_Remove"
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
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that correct quantity of devices are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that correct quantity of devices are displayed in Delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "navigate back to Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Change the quantity of the items",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that correct quantity of devices are displayed in Delivery page after update",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 15660631,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 22723662142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Smartwatch(String)"
});
formatter.result({
  "duration": 21616530859,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 33781728133,
  "error_message": "junit.framework.AssertionFailedError: Unable to add SmartWatch to basket\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket(E2EOrderPlaced_Steps.java:569)\r\n\tat ✽.And add SmartWatch to basket within limit in details page and navigate to basket(FTQ-Ecomm-11478-CFA_FitnessTrackerandAccessoryGroup_Remove.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage_julyRelease()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifytheQuantityBasketPage()"
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
  "location": "E2EOrderPlaced_Steps.verifytheQuantityDeliveryPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_back_to_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.change_the_quantity_of_the_items()"
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
  "location": "E2EOrderPlaced_Steps.verifyUpdatedQuantityDeliveryPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5031376919,
  "status": "passed"
});
formatter.uri("FTQ-Ecomm-11478-CFA_Smartwatches_Group.feature");
formatter.feature({
  "line": 1,
  "name": "FTQ-Ecomm-11478-CFA_MultipleDevices",
  "description": "",
  "id": "ftq-ecomm-11478-cfa-multipledevices",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Multiple Accessories/Smarwatches of Same type/Model",
  "description": "",
  "id": "ftq-ecomm-11478-cfa-multipledevices;cfa-multiple-accessories/smarwatches-of-same-type/model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFA_MultipleDevices"
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
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that correct quantity of devices are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that correct quantity of devices are displayed in Delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that correct quantity of devices are displayed in Review page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "ftq-ecomm-11478-cfa-multipledevices;cfa-multiple-accessories/smarwatches-of-same-type/model;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "ftq-ecomm-11478-cfa-multipledevices;cfa-multiple-accessories/smarwatches-of-same-type/model;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "ftq-ecomm-11478-cfa-multipledevices;cfa-multiple-accessories/smarwatches-of-same-type/model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14424634645,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CFA Multiple Accessories/Smarwatches of Same type/Model",
  "description": "",
  "id": "ftq-ecomm-11478-cfa-multipledevices;cfa-multiple-accessories/smarwatches-of-same-type/model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFA_MultipleDevices"
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
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that correct quantity of devices are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that correct quantity of devices are displayed in Delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that correct quantity of devices are displayed in Review page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 25611056,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 22502565961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Smartwatch(String)"
});
formatter.result({
  "duration": 22382414020,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 8488266369,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage_julyRelease()"
});
formatter.result({
  "duration": 23056935476,
  "error_message": "junit.framework.AssertionFailedError: Unable to find BasketHeaderXXL element in Reference shop Basket page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat actionsPerformed.BasketPageActions.JuneReleaseBasketContent(BasketPageActions.java:298)\r\n\tat steps.E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage_julyRelease(E2EOrderPlaced_Steps.java:1669)\r\n\tat ✽.And I Land on the Non Phone related basket page(FTQ-Ecomm-11478-CFA_Smartwatches_Group.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifytheQuantityBasketPage()"
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
  "location": "E2EOrderPlaced_Steps.verifytheQuantityDeliveryPage()"
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
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifytheQuantityReviewPage()"
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
  "duration": 2831068554,
  "status": "passed"
});
formatter.uri("FTQ-Ecomm-11478-CFU_Smartwatches_Group.feature");
formatter.feature({
  "line": 1,
  "name": "FTQ-Ecomm-11478-CFU_MultipleDevices",
  "description": "",
  "id": "ftq-ecomm-11478-cfu-multipledevices",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU to validate multiple accessories",
  "description": "",
  "id": "ftq-ecomm-11478-cfu-multipledevices;cfu-to-validate-multiple-accessories",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFU_MultipleDevices"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that correct quantity of devices are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that correct quantity of devices are displayed in Delivery page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "ftq-ecomm-11478-cfu-multipledevices;cfu-to-validate-multiple-accessories;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 16,
      "id": "ftq-ecomm-11478-cfu-multipledevices;cfu-to-validate-multiple-accessories;;1"
    },
    {
      "cells": [
        "ing_jul987",
        "test123",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 17,
      "id": "ftq-ecomm-11478-cfu-multipledevices;cfu-to-validate-multiple-accessories;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16695269404,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CFU to validate multiple accessories",
  "description": "",
  "id": "ftq-ecomm-11478-cfu-multipledevices;cfu-to-validate-multiple-accessories;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@eComm11478_CFU_MultipleDevices"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid ing_jul987 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the Non Phone related basket page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that correct quantity of devices are displayed in Basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that correct quantity of devices are displayed in Delivery page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 15731945610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_jul987",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 14350427634,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 30666093514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "duration": 224027862,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 12871350251,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage_julyRelease()"
});
formatter.result({
  "duration": 3100543981,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifytheQuantityBasketPage()"
});
formatter.result({
  "duration": 41469054,
  "error_message": "java.lang.AssertionError: expected [2] but found [4]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat GlobalActions.JuneReleaseValidations.QuantityValidationsBasket(JuneReleaseValidations.java:26)\r\n\tat steps.E2EOrderPlaced_Steps.verifytheQuantityBasketPage(E2EOrderPlaced_Steps.java:1682)\r\n\tat ✽.Then Verify that correct quantity of devices are displayed in Basket page(FTQ-Ecomm-11478-CFU_Smartwatches_Group.feature:11)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.verifytheQuantityDeliveryPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2844407366,
  "status": "passed"
});
formatter.uri("SurfaceVouchercodes_testcase_1.feature");
formatter.feature({
  "line": 1,
  "name": "Surface voucher code test case  wrong voucher code",
  "description": "",
  "id": "surface-voucher-code-test-case--wrong-voucher-code",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "surface-voucher-code-test-case--wrong-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "name": "Apply a \u003cvoucher\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that error message is thrown",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "surface-voucher-code-test-case--wrong-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "voucher"
      ],
      "line": 15,
      "id": "surface-voucher-code-test-case--wrong-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "TOPAZVOUCHER0%OFF"
      ],
      "line": 16,
      "id": "surface-voucher-code-test-case--wrong-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11976463265,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "surface-voucher-code-test-case--wrong-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "Apply a TOPAZVOUCHER0%OFF",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that error message is thrown",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 17632322,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 21927052186,
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
  "duration": 1040618010,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 37875915731,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3514058212,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 12652852991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOPAZVOUCHER0%OFF",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.Apply_Voucher(String)"
});
formatter.result({
  "duration": 5252919938,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_error_message_is_thrown()"
});
formatter.result({
  "duration": 4062914099,
  "status": "passed"
});
formatter.after({
  "duration": 2454100267,
  "status": "passed"
});
formatter.uri("SurfaceVouchercodes_testcase_2.feature");
formatter.feature({
  "line": 1,
  "name": "Surface voucher code test case  Duplicate voucher code",
  "description": "",
  "id": "surface-voucher-code-test-case--duplicate-voucher-code",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "surface-voucher-code-test-case--duplicate-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "name": "Apply the \u003cvoucher\u003e twice",
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
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "surface-voucher-code-test-case--duplicate-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "voucher"
      ],
      "line": 20,
      "id": "surface-voucher-code-test-case--duplicate-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "TOPAZVOUCHER0%OFF"
      ],
      "line": 21,
      "id": "surface-voucher-code-test-case--duplicate-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22182706044,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "surface-voucher-code-test-case--duplicate-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "Apply the TOPAZVOUCHER0%OFF twice",
  "matchedColumns": [
    4
  ],
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
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 17755084,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 22067720761,
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
  "duration": 1302181807,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 22497523249,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3551950986,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 10620674764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOPAZVOUCHER0%OFF",
      "offset": 10
    }
  ],
  "location": "E2EOrderPlaced_Steps.Apply_Voucher_twice(String)"
});
formatter.result({
  "duration": 25110523223,
  "error_message": "junit.framework.AssertionFailedError: Unable to apply promocode\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Apply_Voucher_twice(E2EOrderPlaced_Steps.java:1964)\r\n\tat ✽.And Apply the TOPAZVOUCHER0%OFF twice(SurfaceVouchercodes_testcase_2.feature:11)\r\n",
  "status": "failed"
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
  "duration": 3251995473,
  "status": "passed"
});
formatter.uri("SurfaceVouchercodes_testcase_3.feature");
formatter.feature({
  "line": 1,
  "name": "Surface voucher code test case valid voucher code",
  "description": "",
  "id": "surface-voucher-code-test-case-valid-voucher-code",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "surface-voucher-code-test-case-valid-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTestcase"
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
  "name": "Apply a \u003cvoucher\u003e",
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
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "surface-voucher-code-test-case-valid-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "voucher"
      ],
      "line": 20,
      "id": "surface-voucher-code-test-case-valid-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "TOPAZVOUCHER0%OFF"
      ],
      "line": 21,
      "id": "surface-voucher-code-test-case-valid-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15324427371,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "surface-voucher-code-test-case-valid-voucher-code;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTestcase"
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
  "name": "Apply a TOPAZVOUCHER0%OFF",
  "matchedColumns": [
    4
  ],
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
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 14927218,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 20431862599,
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
  "duration": 2009219775,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 26896985781,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3259582238,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 9971888706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOPAZVOUCHER0%OFF",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.Apply_Voucher(String)"
});
formatter.result({
  "duration": 4838536899,
  "status": "passed"
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
  "duration": 8821877199,
  "status": "passed"
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
  "duration": 15474649664,
  "status": "passed"
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
  "duration": 110111822288,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 39412565688,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 11924966418,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 20125689253,
  "status": "passed"
});
formatter.after({
  "duration": 2119656946,
  "status": "passed"
});
formatter.uri("UpgradeUpsellPromoModuleDongleSims.feature");
formatter.feature({
  "line": 1,
  "name": "Upgrade _not eligible customers selects Dongle sim",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-dongle-sim",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Not eligible for upgrade customer selects iPad sims",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-dongle-sim;not-eligible-for-upgrade-customer-selects-ipad-sims",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Click on Pick a sim on the Dongle promo module",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Send me my sim\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-dongle-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Firstname",
        "Surname"
      ],
      "line": 16,
      "id": "upgrade--not-eligible-customers-selects-dongle-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;1"
    },
    {
      "cells": [
        "ing_jul987",
        "test123",
        "TEST",
        "ACCEPTA"
      ],
      "line": 17,
      "id": "upgrade--not-eligible-customers-selects-dongle-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18848888,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:622)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:174)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:142)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:46)\r\n\tat steps.Hooks.openBrowser(Hooks.java:53)\r\n\tat sun.reflect.GeneratedMethodAccessor52.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.lang.NullPointerException: Unable to find executable for: C:\\Users\\snarasi1\\.gitconfig\\regression\\Browsers\\ChromeDriver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:251)\r\n\tat org.openqa.selenium.os.UnixProcess.\u003cinit\u003e(UnixProcess.java:62)\r\n\tat org.openqa.selenium.os.CommandLine.\u003cinit\u003e(CommandLine.java:38)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Not eligible for upgrade customer selects iPad sims",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-dongle-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid ing_jul987 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Click on Pick a sim on the Dongle promo module",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Send me my sim\u0027",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_jul987",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_be_displayed_the_promo_modules()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Click_on_Pick_a_sim_on_the_Dongle_promo_module()"
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
  "location": "E2EOrderPlaced_Steps.input_TEST_and_ACCEPTA_and_other_valid_details_in_Delivery_page_and_Click_on_the_Send_me_my_sim(String,String)"
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
  "duration": 2011141730,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\snarasi1\\AppData\\Local\\Temp\\scoped_dir6288_373}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f985b41264825b73ae7dae0b34eace90\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor55.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("UpgradeUpsellPromoModule_TabletSims.feature");
formatter.feature({
  "line": 1,
  "name": "Upgrade _not eligible customers selects Tablet sim",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-tablet-sim",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Not eligible for upgrade customer selects iPad sims",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-tablet-sim;not-eligible-for-upgrade-customer-selects-ipad-sims",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Click on Pick a sim on the Tablet promo module",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Send me my sim\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-tablet-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Firstname",
        "Surname"
      ],
      "line": 16,
      "id": "upgrade--not-eligible-customers-selects-tablet-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;1"
    },
    {
      "cells": [
        "ing_jul987",
        "test123",
        "TEST",
        "ACCEPTA"
      ],
      "line": 17,
      "id": "upgrade--not-eligible-customers-selects-tablet-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12495268,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:622)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:174)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:142)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:46)\r\n\tat steps.Hooks.openBrowser(Hooks.java:53)\r\n\tat sun.reflect.GeneratedMethodAccessor52.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.lang.NullPointerException: Unable to find executable for: C:\\Users\\snarasi1\\.gitconfig\\regression\\Browsers\\ChromeDriver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:251)\r\n\tat org.openqa.selenium.os.UnixProcess.\u003cinit\u003e(UnixProcess.java:62)\r\n\tat org.openqa.selenium.os.CommandLine.\u003cinit\u003e(CommandLine.java:38)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Not eligible for upgrade customer selects iPad sims",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-tablet-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid ing_jul987 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Click on Pick a sim on the Tablet promo module",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Send me my sim\u0027",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_jul987",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_be_displayed_the_promo_modules()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Click_on_Pick_a_sim_on_the_Tablet_promo_module()"
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
  "location": "E2EOrderPlaced_Steps.input_TEST_and_ACCEPTA_and_other_valid_details_in_Delivery_page_and_Click_on_the_Send_me_my_sim(String,String)"
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
  "duration": 2009110434,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\snarasi1\\AppData\\Local\\Temp\\scoped_dir6288_373}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f985b41264825b73ae7dae0b34eace90\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor55.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("UpgradeUpsellPromoModule_iPadSims.feature");
formatter.feature({
  "line": 1,
  "name": "Upgrade _not eligible customers selects and iPad sim",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-and-ipad-sim",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Not eligible for upgrade customer selects iPad sims",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-and-ipad-sim;not-eligible-for-upgrade-customer-selects-ipad-sims",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Click on Pick a sim on the iPad promo module",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Send me my sim\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-and-ipad-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Firstname",
        "Surname"
      ],
      "line": 16,
      "id": "upgrade--not-eligible-customers-selects-and-ipad-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;1"
    },
    {
      "cells": [
        "ing_jul987",
        "test123",
        "TEST",
        "ACCEPTA"
      ],
      "line": 17,
      "id": "upgrade--not-eligible-customers-selects-and-ipad-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12383559,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:622)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:174)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:142)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:46)\r\n\tat steps.Hooks.openBrowser(Hooks.java:53)\r\n\tat sun.reflect.GeneratedMethodAccessor52.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.lang.NullPointerException: Unable to find executable for: C:\\Users\\snarasi1\\.gitconfig\\regression\\Browsers\\ChromeDriver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:251)\r\n\tat org.openqa.selenium.os.UnixProcess.\u003cinit\u003e(UnixProcess.java:62)\r\n\tat org.openqa.selenium.os.CommandLine.\u003cinit\u003e(CommandLine.java:38)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Not eligible for upgrade customer selects iPad sims",
  "description": "",
  "id": "upgrade--not-eligible-customers-selects-and-ipad-sim;not-eligible-for-upgrade-customer-selects-ipad-sims;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid ing_jul987 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Click on Pick a sim on the iPad promo module",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Send me my sim\u0027",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_jul987",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_be_displayed_the_promo_modules()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Click_on_Pick_a_sim_on_the_iPad_promo_module()"
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
  "location": "E2EOrderPlaced_Steps.input_TEST_and_ACCEPTA_and_other_valid_details_in_Delivery_page_and_Click_on_the_Send_me_my_sim(String,String)"
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
  "duration": 2005590207,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\snarasi1\\AppData\\Local\\Temp\\scoped_dir6288_373}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f985b41264825b73ae7dae0b34eace90\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor55.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("UpgradeUpsellPromoModule_testcase_1.feature");
formatter.feature({
  "line": 1,
  "name": "Upgrade _not eligible customers",
  "description": "",
  "id": "upgrade--not-eligible-customers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# @smokeTesthomedelivery"
    },
    {
      "line": 4,
      "value": "#Scenario Outline: CFU Saved Basket Feature Validation"
    },
    {
      "line": 5,
      "value": "# Given I am an Existing user and Navigates to Signin page"
    },
    {
      "line": 6,
      "value": "# And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    },
    {
      "line": 7,
      "value": "# And choose to upgrade any Phone in My upgrade page"
    },
    {
      "line": 8,
      "value": "# And Select any Tariff and go to basket"
    },
    {
      "line": 9,
      "value": "# And I choose to save the basket"
    },
    {
      "line": 10,
      "value": "# And Mail should be recieved"
    },
    {
      "line": 11,
      "value": "# And the retrieved mail should match the contents of the Basket"
    },
    {
      "line": 12,
      "value": "# Examples:"
    },
    {
      "line": 13,
      "value": "#  | username | password |"
    },
    {
      "line": 14,
      "value": "# |ink_jun9198|test123|"
    }
  ],
  "line": 16,
  "name": "Promo tiles for customers not eligible for upgrade",
  "description": "",
  "id": "upgrade--not-eligible-customers;promo-tiles-for-customers-not-eligible-for-upgrade",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should be displayed with Go to My O2 CTA and on clicking on it should land me to My O2 page",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "upgrade--not-eligible-customers;promo-tiles-for-customers-not-eligible-for-upgrade;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "upgrade--not-eligible-customers;promo-tiles-for-customers-not-eligible-for-upgrade;;1"
    },
    {
      "cells": [
        "ing_jul987",
        "test123"
      ],
      "line": 24,
      "id": "upgrade--not-eligible-customers;promo-tiles-for-customers-not-eligible-for-upgrade;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27801823,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:622)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:174)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:142)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:46)\r\n\tat steps.Hooks.openBrowser(Hooks.java:53)\r\n\tat sun.reflect.GeneratedMethodAccessor52.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.lang.NullPointerException: Unable to find executable for: C:\\Users\\snarasi1\\.gitconfig\\regression\\Browsers\\ChromeDriver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:251)\r\n\tat org.openqa.selenium.os.UnixProcess.\u003cinit\u003e(UnixProcess.java:62)\r\n\tat org.openqa.selenium.os.CommandLine.\u003cinit\u003e(CommandLine.java:38)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
  "name": "Promo tiles for customers not eligible for upgrade",
  "description": "",
  "id": "upgrade--not-eligible-customers;promo-tiles-for-customers-not-eligible-for-upgrade;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Upgrade_Upsell_Promo_Module"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Signin using valid ing_jul987 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be displayed the promo modules",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should be displayed with Go to My O2 CTA and on clicking on it should land me to My O2 page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_jul987",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_be_displayed_the_promo_modules()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "2",
      "offset": 87
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_should_be_displayed_with_Go_to_My_O_CTA_and_on_clicking_on_it_should_land_me_to_My_O_page(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2006316120,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST248497\u0027, ip: \u002710.172.53.207\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\snarasi1\\AppData\\Local\\Temp\\scoped_dir6288_373}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f985b41264825b73ae7dae0b34eace90\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor55.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});