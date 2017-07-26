$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JulyRelease2017/C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden",
  "description": "",
  "id": "c1669-e11521-tc1-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-phone-verify-not-overridden",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device and Veiryf Basket not overridden",
  "description": "",
  "id": "c1669-e11521-tc1-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device-and-veiryf-basket-not-overridden",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# And I click on Continue Shopping link"
    }
  ],
  "line": 10,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select any available \"Random\" Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "# And I click on Continue Shopping link"
    }
  ],
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify all three non connected devices got added to the basket section before selecting connected device",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And I click on Continue Shopping link"
    }
  ],
  "line": 23,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify all three non connected devices are still retained in the basket and not overridden",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "c1669-e11521-tc1-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device-and-veiryf-basket-not-overridden;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 38,
      "id": "c1669-e11521-tc1-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device-and-veiryf-basket-not-overridden;;1"
    },
    {
      "cells": [
        "Iphone7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 39,
      "id": "c1669-e11521-tc1-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device-and-veiryf-basket-not-overridden;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46136882455,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device and Veiryf Basket not overridden",
  "description": "",
  "id": "c1669-e11521-tc1-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device-and-veiryf-basket-not-overridden;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# And I click on Continue Shopping link"
    }
  ],
  "line": 10,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select any available \"Random\" Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "# And I click on Continue Shopping link"
    }
  ],
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select any available \"Random\" Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify all three non connected devices got added to the basket section before selecting connected device",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And I click on Continue Shopping link"
    }
  ],
  "line": 23,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I choose PayM Iphone7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify all three non connected devices are still retained in the basket and not overridden",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1122884544,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 39156261719,
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
  "duration": 1003546648,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 55385432020,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 4179317891,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5302982421,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 24567070923,
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
  "duration": 5280718077,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 8545149599,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 3838182064,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5130830851,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 18524928377,
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
  "duration": 15325285448,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 8451957426,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 4025459288,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_non_Connected_device_added_to_basket()"
});
formatter.result({
  "duration": 5057794771,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5129634820,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 12726823238,
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
  "duration": 1750343218,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 22682306786,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 4148168571,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 23706770565,
  "error_message": "junit.framework.AssertionFailedError: Unable to Land on the basket page and choose home delivery option\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option(E2EOrderPlaced_Steps.java:720)\r\n\tat ✽.And I Land on the basket page and choose home delivery option(Features/JulyRelease2017/C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden.feature:28)\r\n",
  "status": "failed"
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
  "duration": 5524237205,
  "status": "passed"
});
});