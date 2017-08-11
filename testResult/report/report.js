$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reg_CS_AccessoriesOnly.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_AccessoriesOnly",
  "description": "",
  "id": "reg-cs-accessoriesonly",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey",
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
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
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
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24617293345,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;;2",
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
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
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
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
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
  "duration": 418241620,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 55644202588,
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
  "duration": 2477328250,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 20613850269,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 4062885077,
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
  "duration": 14462801441,
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
  "duration": 17714975499,
  "status": "passed"
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
  "duration": 67015715698,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 20198699192,
  "error_message": "junit.framework.AssertionFailedError: Unable to Continue to Review page and review the order or unable to enter some information in this page, Please review the screenshots for failure\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.ReviewPageConfirmation(E2EOrderPlaced_Steps.java:1088)\r\n\tat ✽.And Continue to Review page and review the order(Reg_CS_AccessoriesOnly.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5822374609,
  "status": "passed"
});
formatter.uri("Reg_CS_CFA_MBBPayG.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_CFA_MBBPayG",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PAYG MBB only E2E journey",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey",
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
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose MBB PayG \"Huawei 4G Dongle\"",
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
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 19,
      "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 20,
      "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22600225864,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "PAYG MBB only E2E journey",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;2",
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
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose MBB PayG \"Huawei 4G Dongle\"",
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
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 74653616,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page()"
});
formatter.result({
  "duration": 25449415706,
  "error_message": "junit.framework.AssertionFailedError: unable to do mousehover to Accessories\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page(E2EOrderPlaced_Steps.java:189)\r\n\tat ✽.And Navigate to PayG MBB page(Reg_CS_CFA_MBBPayG.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Huawei 4G Dongle",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayG(String)"
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
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery(String)"
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
  "duration": 4912777959,
  "status": "passed"
});
formatter.uri("Reg_CS_CFU_SavedBasket.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_CFU_SavedBasket",
  "description": "",
  "id": "reg-cs-cfu-savedbasket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#CFU Saved Basket Feature Validation - This feature is not automated due to presence of Captcha"
    },
    {
      "line": 4,
      "value": "# @smokeTesthomedelivery"
    },
    {
      "line": 5,
      "value": "#Scenario Outline: CFU Saved Basket Feature Validation"
    },
    {
      "line": 6,
      "value": "# Given I am an Existing user and Navigates to Signin page"
    },
    {
      "line": 7,
      "value": "# And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    },
    {
      "line": 8,
      "value": "# And choose to upgrade any Phone in My upgrade page"
    },
    {
      "line": 9,
      "value": "# And Select any Tariff and go to basket"
    },
    {
      "line": 10,
      "value": "# And I choose to save the basket"
    },
    {
      "line": 11,
      "value": "# And Mail should be recieved"
    },
    {
      "line": 12,
      "value": "# And the retrieved mail should match the contents of the Basket"
    },
    {
      "line": 13,
      "value": "# Examples:"
    },
    {
      "line": 14,
      "value": "#  | username | password |"
    },
    {
      "line": 15,
      "value": "# |ink_jun9198|test123|"
    }
  ],
  "line": 17,
  "name": "CFU to Verify is user can upgrade phone to refresh Tariff",
  "description": "",
  "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@ConsumerShop"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select any new Tariff and land on basket page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verifies the basket page for the upgrade journey",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;1"
    },
    {
      "cells": [
        "ink_jun9198",
        "test123"
      ],
      "line": 26,
      "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;2"
    }
  ],
  "keyword": "Examples"
});
