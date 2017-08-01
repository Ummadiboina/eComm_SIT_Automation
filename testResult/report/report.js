$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JulyRelease2017/C1669/C1669_E11521_TC2_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Like_New_Phone_Verify_Not_Overridden.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11521_TC2_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Like_New_Phone_Verify_Not_Overridden",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device(Like New Phone) and Veiryf Basket not overridden",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "##   And Navigate to Accessories"
    },
    {
      "line": 6,
      "value": "##   And select an \"Random\" Accessory"
    },
    {
      "line": 7,
      "value": "##   And add quantity of accessories to basket within \u003climit\u003e in details page and navigate to basket"
    },
    {
      "line": 8,
      "value": "##   And I Land on the Non Phone related basket page and choose home delivery option"
    },
    {
      "line": 9,
      "value": "##    And I click on Continue Shopping link"
    },
    {
      "line": 10,
      "value": "##    And Navigate to Fitness Trackers"
    },
    {
      "line": 11,
      "value": "##    And select any available \"Random\" Fitness tracker"
    },
    {
      "line": 12,
      "value": "##   And add quantity of FitnessTracker to basket within \u003climit\u003e in details page and navigate to basket"
    },
    {
      "line": 13,
      "value": "##   And I Land on the Non Phone related basket page and choose home delivery option"
    },
    {
      "line": 14,
      "value": "##   And I click on Continue Shopping link"
    },
    {
      "line": 15,
      "value": "##   And Navigate to SmartWatches"
    },
    {
      "line": 16,
      "value": "##   And select any available \"Random\" Smartwatch"
    },
    {
      "line": 17,
      "value": "##   And add quantity of SmartWatches to basket within \u003climit\u003e in details page and navigate to basket"
    },
    {
      "line": 18,
      "value": "##   And I Land on the Non Phone related basket page and choose home delivery option"
    },
    {
      "line": 19,
      "value": "##   And Verify all three non connected devices got added to the basket section before selecting connected device"
    },
    {
      "line": 20,
      "value": "##   And I click on Continue Shopping link"
    }
  ],
  "line": 21,
  "name": "navigate to Like New Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select to buy a like new phone on Pay Monthly",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify all three non connected devices are still retained in the basket and not overridden",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "limit"
      ],
      "line": 36,
      "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;;1"
    },
    {
      "cells": [
        "Iphone7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "1"
      ],
      "line": 37,
      "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40174196598,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device(Like New Phone) and Veiryf Basket not overridden",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "##   And Navigate to Accessories"
    },
    {
      "line": 6,
      "value": "##   And select an \"Random\" Accessory"
    },
    {
      "line": 7,
      "value": "##   And add quantity of accessories to basket within \u003climit\u003e in details page and navigate to basket"
    },
    {
      "line": 8,
      "value": "##   And I Land on the Non Phone related basket page and choose home delivery option"
    },
    {
      "line": 9,
      "value": "##    And I click on Continue Shopping link"
    },
    {
      "line": 10,
      "value": "##    And Navigate to Fitness Trackers"
    },
    {
      "line": 11,
      "value": "##    And select any available \"Random\" Fitness tracker"
    },
    {
      "line": 12,
      "value": "##   And add quantity of FitnessTracker to basket within \u003climit\u003e in details page and navigate to basket"
    },
    {
      "line": 13,
      "value": "##   And I Land on the Non Phone related basket page and choose home delivery option"
    },
    {
      "line": 14,
      "value": "##   And I click on Continue Shopping link"
    },
    {
      "line": 15,
      "value": "##   And Navigate to SmartWatches"
    },
    {
      "line": 16,
      "value": "##   And select any available \"Random\" Smartwatch"
    },
    {
      "line": 17,
      "value": "##   And add quantity of SmartWatches to basket within \u003climit\u003e in details page and navigate to basket"
    },
    {
      "line": 18,
      "value": "##   And I Land on the Non Phone related basket page and choose home delivery option"
    },
    {
      "line": 19,
      "value": "##   And Verify all three non connected devices got added to the basket section before selecting connected device"
    },
    {
      "line": 20,
      "value": "##   And I click on Continue Shopping link"
    }
  ],
  "line": 21,
  "name": "navigate to Like New Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select to buy a like new phone on Pay Monthly",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose PayM Iphone7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify all three non connected devices are still retained in the basket and not overridden",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 468294699,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_LikeNew_Phones_page()"
});
formatter.result({
  "duration": 18028221841,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.buy_a_like_new_phone_on_pay_monthly()"
});
formatter.result({
  "duration": 1749604261,
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
  "duration": 20385432842,
  "error_message": "junit.framework.AssertionFailedError: Unable to choose PayM phone\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:319)\r\n\tat ✽.And I choose PayM Iphone7(Features/JulyRelease2017/C1669/C1669_E11521_TC2_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Like_New_Phone_Verify_Not_Overridden.feature:23)\r\n",
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
  "location": "E2EOrderPlaced_Steps.verify_non_Connected_device_ratined_in_basket_after_selecting_connected_device()"
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
  "duration": 5562986290,
  "status": "passed"
});
});