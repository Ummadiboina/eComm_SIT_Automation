$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden.feature");
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
  "duration": 45360338792,
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
  "duration": 1949160839,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 74257234517,
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
  "duration": 2317734829,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 37841229230,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 4063859144,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5193686984,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 75085937722,
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
  "duration": 5317633525,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 30042080426,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 3987842316,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5177242524,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 85800998613,
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
  "duration": 15274540060,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 19229245464,
  "error_message": "java.lang.AssertionError: expected [3] but found [4]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat actionsPerformed.SmartwatchesPageActions.AddtoBasketSmartwatchTracker(SmartwatchesPageActions.java:164)\r\n\tat steps.E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket(E2EOrderPlaced_Steps.java:565)\r\n\tat ✽.And add SmartWatch to basket within limit in details page and navigate to basket(C1669_E11521_TC1_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Phone_Verify_Not_Overridden.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_non_Connected_device_added_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 10425233262,
  "status": "passed"
});
formatter.uri("C1669_E11521_TC2_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Like_New_Phone_Verify_Not_Overridden.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11521_TC2_CFA_Add_All_NonConnected_Devices_To_Basket_Followed_By_Adding_A_Like_New_Phone_Verify_Not_Overridden",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device(Like New Phone) and Veiryf Basket not overridden",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
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
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Continue Shopping link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select any available \"Random\" Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Continue Shopping link",
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
  "line": 22,
  "name": "I click on Continue Shopping link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "navigate to Like New Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select to buy a like new phone on Pay Monthly",
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
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 38,
      "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;;1"
    },
    {
      "cells": [
        "Iphone7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 39,
      "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62419141251,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: ae81e62fde8760439421bce322d66e12\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 39,
  "name": "CFA Add all non connected devices (Standalone Smartwatch, Accessory and Fitnesstracker) and One Connected Device(Like New Phone) and Veiryf Basket not overridden",
  "description": "",
  "id": "c1669-e11521-tc2-cfa-add-all-nonconnected-devices-to-basket-followed-by-adding-a-like-new-phone-verify-not-overridden;cfa-add-all-non-connected-devices-(standalone-smartwatch,-accessory-and-fitnesstracker)-and-one-connected-device(like-new-phone)-and-veiryf-basket-not-overridden;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
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
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Continue Shopping link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select any available \"Random\" Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Continue Shopping link",
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
  "line": 22,
  "name": "I click on Continue Shopping link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "navigate to Like New Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select to buy a like new phone on Pay Monthly",
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
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_non_Connected_device_added_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_LikeNew_Phones_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.buy_a_like_new_phone_on_pay_monthly()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2011170984,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: ae81e62fde8760439421bce322d66e12\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("C1669_E11521_TC3_Existing_customer_add_Standalone_Smartwatch_Fitnesstracker_to_basket_later_add_Tablet_to_basket_no_override.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11521_TC3_Existing_customer_add_Standalone_Smartwatch_Fitnesstracker_to_basket_later_add_Tablet_to_basket_no_override",
  "description": "",
  "id": "c1669-e11521-tc3-existing-customer-add-standalone-smartwatch-fitnesstracker-to-basket-later-add-tablet-to-basket-no-override",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing customer add Standalone Smartwatch Fitnesstracker to basket later add Tablet to basket no override",
  "id": "c1669-e11521-tc3-existing-customer-add-standalone-smartwatch-fitnesstracker-to-basket-later-add-tablet-to-basket-no-override;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease1669TC3"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose \u003csmartwatchname\u003e Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices \u003csmartwatchname\u003e, \u003cfitnesstrackername\u003e and \u003ctabletname\u003e in the basket",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "c1669-e11521-tc3-existing-customer-add-standalone-smartwatch-fitnesstracker-to-basket-later-add-tablet-to-basket-no-override;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "smartwatchname",
        "fitnesstrackername",
        "tabletname"
      ],
      "line": 25,
      "id": "c1669-e11521-tc3-existing-customer-add-standalone-smartwatch-fitnesstracker-to-basket-later-add-tablet-to-basket-no-override;;;1"
    },
    {
      "cells": [
        "ins_nov746",
        "test123",
        "Samsung Gear S2",
        "Fitbit Alta",
        "Apple iPad Pro 12.9 inch"
      ],
      "line": 26,
      "id": "c1669-e11521-tc3-existing-customer-add-standalone-smartwatch-fitnesstracker-to-basket-later-add-tablet-to-basket-no-override;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41390523709,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Existing customer add Standalone Smartwatch Fitnesstracker to basket later add Tablet to basket no override",
  "id": "c1669-e11521-tc3-existing-customer-add-standalone-smartwatch-fitnesstracker-to-basket-later-add-tablet-to-basket-no-override;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease1669TC3"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid ins_nov746 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose Samsung Gear S2 Smartwatch",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I choose Fitbit Alta FitnessTracker",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I choose Apple iPad Pro 12.9 inch Tablet",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices Samsung Gear S2, Fitbit Alta and Apple iPad Pro 12.9 inch in the basket",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 55359361818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ins_nov746",
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
  "duration": 25649521724,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 14305932519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Gear S2",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_smartwatch(String)"
});
formatter.result({
  "duration": 41247561615,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 16270144686,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 15515760051,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 86765056394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fitbit Alta",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_fitnesstracker(String)"
});
formatter.result({
  "duration": 5226681665,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 40771466094,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5241478113,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 28575364836,
  "error_message": "junit.framework.AssertionFailedError: unable to do mousehover to tablets\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page(E2EOrderPlaced_Steps.java:2360)\r\n\tat ✽.And navigate to PAYM Tablets page(C1669_E11521_TC3_Existing_customer_add_Standalone_Smartwatch_Fitnesstracker_to_basket_later_add_Tablet_to_basket_no_override.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 12.9 inch",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
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
      "val": "Samsung Gear S2",
      "offset": 19
    },
    {
      "val": "Fitbit Alta",
      "offset": 36
    },
    {
      "val": "Apple iPad Pro 12.9 inch",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_3_devices_in_basket(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10090079430,
  "status": "passed"
});
formatter.uri("C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override",
  "description": "",
  "id": "c1669-e11521-tc4-existing-customer-add-standalone-accessory-fitnesstracker-to-basket-later-add-simo-phone-to-basket-no-override",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Existing custo add Standalone Accessory Fitnesstracker to basket later add SIMO phone to basket no override",
  "id": "c1669-e11521-tc4-existing-customer-add-standalone-accessory-fitnesstracker-to-basket-later-add-simo-phone-to-basket-no-override;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease1669TC4"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the device \u003caccessoryname\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the device \u003cfitnesstrackername\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "choose \u003ccontract\u003e contract length",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices \u003caccessoryname\u003e, \u003cfitnesstrackername\u003e and \u003cYour_Tariff\u003e in the basket",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "c1669-e11521-tc4-existing-customer-add-standalone-accessory-fitnesstracker-to-basket-later-add-simo-phone-to-basket-no-override;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "user",
        "accessoryname",
        "fitnesstrackername",
        "contract",
        "Your_Tariff"
      ],
      "line": 25,
      "id": "c1669-e11521-tc4-existing-customer-add-standalone-accessory-fitnesstracker-to-basket-later-add-simo-phone-to-basket-no-override;;;1"
    },
    {
      "cells": [
        "ins_nov746",
        "test123",
        "TEST ACCEPTA",
        "JBL Xtreme Black",
        "Fitbit Alta",
        "30 days",
        "Your Tariff"
      ],
      "line": 26,
      "id": "c1669-e11521-tc4-existing-customer-add-standalone-accessory-fitnesstracker-to-basket-later-add-simo-phone-to-basket-no-override;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 73145187538,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Existing custo add Standalone Accessory Fitnesstracker to basket later add SIMO phone to basket no override",
  "id": "c1669-e11521-tc4-existing-customer-add-standalone-accessory-fitnesstracker-to-basket-later-add-simo-phone-to-basket-no-override;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease1669TC4"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid ins_nov746 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select JBL Xtreme Black from accessories",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the device JBL Xtreme Black in basket",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose Fitbit Alta FitnessTracker",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the device Fitbit Alta in basket",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "choose 30 days contract length",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices JBL Xtreme Black, Fitbit Alta and Your Tariff in the basket",
  "matchedColumns": [
    3,
    4,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 29058854325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ins_nov746",
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
  "duration": 20459875551,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 24062746017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Xtreme Black",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "duration": 19821956770,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 38814700574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Xtreme Black",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_1_device_in_basket(String)"
});
formatter.result({
  "duration": 30635773974,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5292624427,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 66026755171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fitbit Alta",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_fitnesstracker(String)"
});
formatter.result({
  "duration": 5342946533,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 25204597415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fitbit Alta",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_1_device_in_basket(String)"
});
formatter.result({
  "duration": 20324080505,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5192332348,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 48784035477,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_the_elements()"
});
formatter.result({
  "duration": 87037071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30 days",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.choose_contract_length(String)"
});
formatter.result({
  "duration": 13509450844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Xtreme Black",
      "offset": 19
    },
    {
      "val": "Fitbit Alta",
      "offset": 37
    },
    {
      "val": "Your Tariff",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_3_devices_in_basket(String,String,String)"
});
formatter.result({
  "duration": 120269624389,
  "error_message": "junit.framework.AssertionFailedError: Selected devices are not in basket\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat actionsPerformed.BasketPageActions.verifyDevicesInBasket(BasketPageActions.java:589)\r\n\tat steps.E2EOrderPlaced_Steps.verify_3_devices_in_basket(E2EOrderPlaced_Steps.java:2505)\r\n\tat ✽.Then Verify the devices JBL Xtreme Black, Fitbit Alta and Your Tariff in the basket(C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 12751108467,
  "status": "passed"
});
formatter.uri("C1669_E11521_TC5_CFA_add_Standalone_Accessory_to_basket_later_add_SIMO_MBB_to_basket_no_override.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11521_TC5_CFA_add_Standalone_Accessory_to_basket_later_add_SIMO_MBB_to_basket_no_override",
  "description": "",
  "id": "c1669-e11521-tc5-cfa-add-standalone-accessory-to-basket-later-add-simo-mbb-to-basket-no-override",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA add Standalone Accessory to basket later add SIMO MBB to basket no override",
  "id": "c1669-e11521-tc5-cfa-add-standalone-accessory-to-basket-later-add-simo-mbb-to-basket-no-override;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyReleaseCheck"
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
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the device \u003caccessoryname\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select \u003ctabname\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "choose \u003ccontract\u003e contract length",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the devices \u003caccessoryname\u003e and \u003cYour_Tariff\u003e in basket",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "c1669-e11521-tc5-cfa-add-standalone-accessory-to-basket-later-add-simo-mbb-to-basket-no-override;;",
  "rows": [
    {
      "cells": [
        "accessoryname",
        "tabname",
        "contract",
        "Your_Tariff"
      ],
      "line": 20,
      "id": "c1669-e11521-tc5-cfa-add-standalone-accessory-to-basket-later-add-simo-mbb-to-basket-no-override;;;1"
    },
    {
      "cells": [
        "JBL Xtreme Black",
        "MBB",
        "30 Days",
        "Your Tariff"
      ],
      "line": 21,
      "id": "c1669-e11521-tc5-cfa-add-standalone-accessory-to-basket-later-add-simo-mbb-to-basket-no-override;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96062327428,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "CFA add Standalone Accessory to basket later add SIMO MBB to basket no override",
  "id": "c1669-e11521-tc5-cfa-add-standalone-accessory-to-basket-later-add-simo-mbb-to-basket-no-override;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyReleaseCheck"
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
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select JBL Xtreme Black from accessories",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the device JBL Xtreme Black in basket",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify the elements",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select MBB tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "choose 30 Days contract length",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the devices JBL Xtreme Black and Your Tariff in basket",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 9373853,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 63546549143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Xtreme Black",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "duration": 7406525268,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 20950630961,
  "error_message": "junit.framework.AssertionFailedError: Unable to click on Add to Basket button\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.click_on_Add_to_Basket_button(E2EOrderPlaced_Steps.java:2332)\r\n\tat ✽.And click on Add to Basket button(C1669_E11521_TC5_CFA_add_Standalone_Accessory_to_basket_later_add_SIMO_MBB_to_basket_no_override.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Xtreme Black",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_1_device_in_basket(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_the_elements()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MBB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30 Days",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.choose_contract_length(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Xtreme Black",
      "offset": 19
    },
    {
      "val": "Your Tariff",
      "offset": 40
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_2_devices_in_basket(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12015597964,
  "status": "passed"
});
formatter.uri("C1669_E11522_TC1_CFA_morethan12Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11522_TC1",
  "description": "",
  "id": "c1669-e11522-tc1",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "E11522_CFA_MoreThan12Accessory_Tablet",
  "description": "",
  "id": "c1669-e11522-tc1;e11522-cfa-morethan12accessory-tablet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@C1169_E11522_TC1"
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
  "name": "add quantity of accessories to basket within \u003climit\u003e in details page and navigate to basket",
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
  "name": "add quantity of FitnessTracker to basket within \u003climit\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And Validate Basket content for non Connected"
    }
  ],
  "line": 13,
  "name": "Verify all three non connected devices got added to the basket section before selecting connected device",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "c1669-e11522-tc1;e11522-cfa-morethan12accessory-tablet;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "limit",
        "tabletname"
      ],
      "line": 29,
      "id": "c1669-e11522-tc1;e11522-cfa-morethan12accessory-tablet;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "3",
        "Apple�iPad 9.7"
      ],
      "line": 30,
      "id": "c1669-e11522-tc1;e11522-cfa-morethan12accessory-tablet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 60785798571,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: e534ec44b4057c60a60e21367e4fbf9e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 30,
  "name": "E11522_CFA_MoreThan12Accessory_Tablet",
  "description": "",
  "id": "c1669-e11522-tc1;e11522-cfa-morethan12accessory-tablet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@C1169_E11522_TC1"
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
  "name": "add quantity of accessories to basket within 3 in details page and navigate to basket",
  "matchedColumns": [
    3
  ],
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
  "name": "add quantity of FitnessTracker to basket within 3 in details page and navigate to basket",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And Validate Basket content for non Connected"
    }
  ],
  "line": 13,
  "name": "Verify all three non connected devices got added to the basket section before selecting connected device",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose Apple�iPad 9.7 Tablet",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
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
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.addQuantityAccessories(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.addQuantityFitnessTracker(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_non_Connected_device_added_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad 9.7",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
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
  "location": "E2EOrderPlaced_Steps.ChooseMoreAccessory()"
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
  "location": "E2EOrderPlaced_Steps.validateEcomm11522()"
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
  "duration": 2011358193,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: e534ec44b4057c60a60e21367e4fbf9e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("C1669_E11522_TC2_CFA_morethan12Phone.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11522_TC2",
  "description": "",
  "id": "c1669-e11522-tc2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "E11522_CFA_MoreThan12Accessory_Phone",
  "description": "",
  "id": "c1669-e11522-tc2;e11522-cfa-morethan12accessory-phone",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@C1169_E11522_TC2"
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
  "name": "add quantity of accessories to basket within \u003climit\u003e in details page and navigate to basket",
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
  "name": "add quantity of FitnessTracker to basket within \u003climit\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate Basket content for non Connected",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "c1669-e11522-tc2;e11522-cfa-morethan12accessory-phone;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "limit"
      ],
      "line": 28,
      "id": "c1669-e11522-tc2;e11522-cfa-morethan12accessory-phone;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "2"
      ],
      "line": 29,
      "id": "c1669-e11522-tc2;e11522-cfa-morethan12accessory-phone;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62306843038,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: d0687c2714e3c4c9c1f66456f129828b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "E11522_CFA_MoreThan12Accessory_Phone",
  "description": "",
  "id": "c1669-e11522-tc2;e11522-cfa-morethan12accessory-phone;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@C1169_E11522_TC2"
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
  "name": "add quantity of accessories to basket within 2 in details page and navigate to basket",
  "matchedColumns": [
    4
  ],
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
  "name": "add quantity of FitnessTracker to basket within 2 in details page and navigate to basket",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate Basket content for non Connected",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Review page and review the order",
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
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.addQuantityAccessories(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.addQuantityFitnessTracker(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateBasketNonConnected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "status": "skipped"
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
  "location": "E2EOrderPlaced_Steps.ChooseMoreAccessory()"
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
  "location": "E2EOrderPlaced_Steps.validateEcomm11522()"
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
  "duration": 2010971618,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: d0687c2714e3c4c9c1f66456f129828b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("C1924_E11409_TC10_CFA_Displaying_label_in_place_of_only_one_variant_and_displaying_dropdown_for_more_than_one_variant_on_device_details_page_of_smartwatch.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC10_CFA_Displaying_label_in_place_of_only_one_variant_and_displaying_dropdown_for_more_than_one_variant_on_device_details_page_of_smartwatch",
  "description": "",
  "id": "c1924-e11409-tc10-cfa-displaying-label-in-place-of-only-one-variant-and-displaying-dropdown-for-more-than-one-variant-on-device-details-page-of-smartwatch",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Displaying Label in place of only one variant on device details page of smartwatch",
  "description": "",
  "id": "c1924-e11409-tc10-cfa-displaying-label-in-place-of-only-one-variant-and-displaying-dropdown-for-more-than-one-variant-on-device-details-page-of-smartwatch;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-smartwatch",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "check if the selected connected device has only 1 variant for capacity and dropdown for colour",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc10-cfa-displaying-label-in-place-of-only-one-variant-and-displaying-dropdown-for-more-than-one-variant-on-device-details-page-of-smartwatch;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-smartwatch;",
  "rows": [
    {
      "cells": [
        "handset",
        "color"
      ],
      "line": 13,
      "id": "c1924-e11409-tc10-cfa-displaying-label-in-place-of-only-one-variant-and-displaying-dropdown-for-more-than-one-variant-on-device-details-page-of-smartwatch;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-smartwatch;;1"
    },
    {
      "cells": [
        "Iphone5S",
        "Silver"
      ],
      "line": 14,
      "id": "c1924-e11409-tc10-cfa-displaying-label-in-place-of-only-one-variant-and-displaying-dropdown-for-more-than-one-variant-on-device-details-page-of-smartwatch;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-smartwatch;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62338990413,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: e2ad1f0bca1f5244fbaa9bc07b6bc2fc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "CFA Displaying Label in place of only one variant on device details page of smartwatch",
  "description": "",
  "id": "c1924-e11409-tc10-cfa-displaying-label-in-place-of-only-one-variant-and-displaying-dropdown-for-more-than-one-variant-on-device-details-page-of-smartwatch;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-smartwatch;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "I choose PayM Iphone5S",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if the selected connected device has only 1 variant for capacity and dropdown for colour",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select Silver color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone5S",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.capacity_1_and_Colour_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonViewAllTariffsDeviceDetailspage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2008302058,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: e2ad1f0bca1f5244fbaa9bc07b6bc2fc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("C1924_E11409_TC11_Existing_customer_displaying_label_in_place_of_only_one_variant_on_device_details_page_of_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "C1924_E11409_TC11_Existing_customer_displaying_label_in_place_of_only_one_variant_on_device_details_page_of_accessory",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "",
  "description": "    Existing customer displaying label in place of only one variant on device details page of accessory",
  "id": ";",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given I am existing user and I click on Signin button"
    },
    {
      "line": 8,
      "value": "#And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    }
  ],
  "line": 9,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the selected device has only 1 variant for both colour and capacity with dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#Close the browser"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": ";;",
  "rows": [
    {
      "cells": [
        "accessoryname",
        "username",
        "password"
      ],
      "line": 16,
      "id": ";;;1"
    },
    {
      "cells": [
        "SanDisk Ultra MemoryCard",
        "ins_nov746",
        "test123"
      ],
      "line": 17,
      "id": ";;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40306062188,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "    Existing customer displaying label in place of only one variant on device details page of accessory",
  "id": ";;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given I am existing user and I click on Signin button"
    },
    {
      "line": 8,
      "value": "#And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    }
  ],
  "line": 9,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select SanDisk Ultra MemoryCard from accessories",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the selected device has only 1 variant for both colour and capacity with dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 79703762265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SanDisk Ultra MemoryCard",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "duration": 6393315644,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity_with_dropdown()"
});
formatter.result({
  "duration": 27094059863,
  "error_message": "junit.framework.AssertionFailedError: Failed : check if the selected device has only 1 variant for both colour and capacity with dropdown\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity_with_dropdown(E2EOrderPlaced_Steps.java:3846)\r\n\tat ✽.Then check if the selected device has only 1 variant for both colour and capacity with dropdown(C1924_E11409_TC11_Existing_customer_displaying_label_in_place_of_only_one_variant_on_device_details_page_of_accessory.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonViewAllTariffsDeviceDetailspage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12217799339,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC12_CFU_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_tablet.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC12_CFU_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_tablet",
  "description": "",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU Displaying label in place of only one variant on device details page of tablet",
  "description": "",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "I choose upgrade PayM handset \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check if the selected device has only 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "#Close the browser"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;",
  "rows": [
    {
      "cells": [
        "handset",
        "username",
        "password"
      ],
      "line": 14,
      "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;1"
    },
    {
      "cells": [
        "Iphone6",
        "ins_nov746",
        "test123"
      ],
      "line": 15,
      "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 60781303514,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: 546d98b09fc104f639744cdd4cd221dd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "CFU Displaying label in place of only one variant on device details page of tablet",
  "description": "",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "Signin using valid ins_nov746 and test123 credentials",
  "matchedColumns": [
    1,
    2
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
  "name": "I choose upgrade PayM handset Iphone6",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check if the selected device has only 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ins_nov746",
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
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone6",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonViewAllTariffsDeviceDetailspage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2010258033,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: 546d98b09fc104f639744cdd4cd221dd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("C1924_E11409_TC1_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_Handset.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC1_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_handset",
  "description": "",
  "id": "c1924-e11409-tc1-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Displaying dropdown in place of variant swatches on device details page of handset",
  "description": "",
  "id": "c1924-e11409-tc1-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#Close the browser"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc1-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "capacity"
      ],
      "line": 15,
      "id": "c1924-e11409-tc1-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;1"
    },
    {
      "cells": [
        "Iphone7",
        "Black",
        "128GB"
      ],
      "line": 16,
      "id": "c1924-e11409-tc1-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62121679765,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CFA Displaying dropdown in place of variant swatches on device details page of handset",
  "description": "",
  "id": "c1924-e11409-tc1-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select Black color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select 128GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 10245067,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 42322872557,
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
  "duration": 1230606584,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity()"
});
formatter.result({
  "duration": 33092258275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 5192728244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
});
formatter.result({
  "duration": 5577420495,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 24569438152,
  "status": "passed"
});
formatter.after({
  "duration": 11444459933,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC2_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_Smartwatch.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC2_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_smartwatch",
  "description": "",
  "id": "c1924-e11409-tc2-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Displaying dropdown in place of variant swatches on device details page of smartwatch",
  "description": "",
  "id": "c1924-e11409-tc2-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "I choose \u003csmartwatchname\u003e Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if the selected non connected device has more than 1 variant for colour and single variant for capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select \u003ccolor\u003e color of the non connected device",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "#And select \u003ccapacity\u003e capacity of the non connected device"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc2-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;",
  "rows": [
    {
      "cells": [
        "smartwatchname",
        "color"
      ],
      "line": 14,
      "id": "c1924-e11409-tc2-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;;1"
    },
    {
      "cells": [
        "Samsung Galaxy Gear",
        "Orange"
      ],
      "line": 15,
      "id": "c1924-e11409-tc2-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62903419291,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CFA Displaying dropdown in place of variant swatches on device details page of smartwatch",
  "description": "",
  "id": "c1924-e11409-tc2-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-smartwatch;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "I choose Samsung Galaxy Gear Smartwatch",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if the selected non connected device has more than 1 variant for colour and single variant for capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select Orange color of the non connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 20703681,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 55468760307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Gear",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_smartwatch(String)"
});
formatter.result({
  "duration": 15229213047,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_non_connected_device_has_more_than_1_variant_for_colour_and_single_variant_for_capacity()"
});
formatter.result({
  "duration": 25162049370,
  "error_message": "junit.framework.AssertionFailedError: Failed step :check if the selected non connected device has more than 1 variant for colour and single variant for capacity\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.check_if_the_selected_non_connected_device_has_more_than_1_variant_for_colour_and_single_variant_for_capacity(E2EOrderPlaced_Steps.java:3814)\r\n\tat ✽.Then check if the selected non connected device has more than 1 variant for colour and single variant for capacity(C1924_E11409_TC2_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_Smartwatch.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_non_connected_device(String)"
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
formatter.after({
  "duration": 12025047188,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC3_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC3_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet",
  "description": "",
  "id": "c1924-e11409-tc3-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet",
  "id": "c1924-e11409-tc3-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc3-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;",
  "rows": [
    {
      "cells": [
        "tabletname",
        "color",
        "capacity"
      ],
      "line": 16,
      "id": "c1924-e11409-tc3-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;;1"
    },
    {
      "cells": [
        "Apple iPad Pro 10.5 inch",
        "Rose Gold",
        "256GB"
      ],
      "line": 17,
      "id": "c1924-e11409-tc3-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 54653146378,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet",
  "id": "c1924-e11409-tc3-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose Apple iPad Pro 10.5 inch Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select Rose Gold color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select 256GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 12704320,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 83230863895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 10.5 inch",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
});
formatter.result({
  "duration": 7246815614,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity()"
});
formatter.result({
  "duration": 19603445467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 5439797116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "256GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
});
formatter.result({
  "duration": 5378216095,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 36727430503,
  "status": "passed"
});
formatter.after({
  "duration": 11472725342,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC4_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC4_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker",
  "description": "",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check if the selected non connected device has more than 1 variant for colour and single variant for capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select \u003ccolor\u003e color of the non connected device",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "# And select \u003ccapacity\u003e capacity of the non connected device"
    },
    {
      "line": 14,
      "value": "#Close the browser"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;",
  "rows": [
    {
      "cells": [
        "fitnesstrackername",
        "color"
      ],
      "line": 16,
      "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;;1"
    },
    {
      "cells": [
        "Jawbone UP2",
        "Black Diamond"
      ],
      "line": 17,
      "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37452757938,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose Jawbone UP2 FitnessTracker",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check if the selected non connected device has more than 1 variant for colour and single variant for capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select Black Diamond color of the non connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 12123646,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 61896214557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jawbone UP2",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_fitnesstracker(String)"
});
formatter.result({
  "duration": 5231261817,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_non_connected_device_has_more_than_1_variant_for_colour_and_single_variant_for_capacity()"
});
formatter.result({
  "duration": 13867200309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black Diamond",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_non_connected_device(String)"
});
formatter.result({
  "duration": 7076368960,
  "error_message": "junit.framework.AssertionFailedError: not able to select  colorBlack Diamond\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.select_color_of_the_non_connected_device(E2EOrderPlaced_Steps.java:2694)\r\n\tat ✽.And select Black Diamond color of the non connected device(C1924_E11409_TC4_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11924071104,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC5_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_MBB.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC5_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_MBB",
  "description": "",
  "id": "c1924-e11409-tc5-existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_MBB",
  "description": "",
  "id": "c1924-e11409-tc5-existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose MBB PayM \u003cMBB\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "# And select \u003ccolor\u003e color of the connected device"
    },
    {
      "line": 13,
      "value": "#And select \u003ccapacity\u003e capacity of the connected device"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc5-existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;",
  "rows": [
    {
      "cells": [
        "MBB",
        "color",
        "capacity",
        "username",
        "password"
      ],
      "line": 15,
      "id": "c1924-e11409-tc5-existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;;1"
    },
    {
      "cells": [
        "Huawei4GDongle",
        "Black",
        "64 GB",
        "ink_jun9198",
        "test123"
      ],
      "line": 16,
      "id": "c1924-e11409-tc5-existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 60993399443,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: f2173e008211b7ff69ad0dedc0e1a86e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_MBB",
  "description": "",
  "id": "c1924-e11409-tc5-existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;existing-customer-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-mbb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose MBB PayM Huawei4GDongle",
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
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Huawei4GDongle",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayM(String)"
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
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2013978318,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: f2173e008211b7ff69ad0dedc0e1a86e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("C1924_E11409_TC6_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "C1924_E11409_TC6_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "",
  "description": "Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory",
  "id": ";",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check if the selected non connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select \u003ccolor\u003e color of the non connected device",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And select \u003ccapacity\u003e capacity of the non connected device"
    }
  ],
  "line": 16,
  "name": "Navigate to device details page",
  "keyword": "And "
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
  "id": ";;",
  "rows": [
    {
      "cells": [
        "accessoryname",
        "color",
        "capacity",
        "username",
        "password"
      ],
      "line": 20,
      "id": ";;;1"
    },
    {
      "cells": [
        "JBL Extreme",
        "Black",
        "64 GB",
        "ink_jun9198",
        "test123"
      ],
      "line": 21,
      "id": ";;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 55446490874,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory",
  "id": ";;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid ink_jun9198 and test123 credentials",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select JBL Extreme from accessories",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check if the selected non connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select Black color of the non connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And select \u003ccapacity\u003e capacity of the non connected device"
    }
  ],
  "line": 16,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 31630083531,
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
  "duration": 21204671974,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 24424921246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Extreme",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "duration": 22042585324,
  "error_message": "junit.framework.AssertionFailedError: Unable to select any accessory\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.select_accessory(E2EOrderPlaced_Steps.java:2033)\r\n\tat ✽.And Select JBL Extreme from accessories(C1924_E11409_TC6_Existing_customer_displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_accessory.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_non_connected_device_has_more_than_1_variant_for_both_colour_and_capacity()"
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
  "location": "E2EOrderPlaced_Steps.select_color_of_the_non_connected_device(String)"
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
formatter.after({
  "duration": 12313281104,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC7_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_handset.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC7_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_handset",
  "description": "",
  "id": "c1924-e11409-tc7-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Displaying dropdown in place of variant swatches on device details page of handset",
  "id": "c1924-e11409-tc7-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose upgrade PayM handset \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#Close the browser"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc7-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "capacity",
        "username",
        "password"
      ],
      "line": 18,
      "id": "c1924-e11409-tc7-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;;1"
    },
    {
      "cells": [
        "Iphone7",
        "Black",
        "128GB",
        "ing_apr5953",
        "test123"
      ],
      "line": 19,
      "id": "c1924-e11409-tc7-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37470398999,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "CFU Displaying dropdown in place of variant swatches on device details page of handset",
  "id": "c1924-e11409-tc7-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-handset;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid ing_apr5953 and test123 credentials",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose upgrade PayM handset Iphone7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select Black color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select 128GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 32836243456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_apr5953",
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
  "duration": 29195965106,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 31891230810,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to upgrade phones\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2292)\r\n\tat ✽.And Navigate to upgrade phone(C1924_E11409_TC7_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_handset.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone7",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity()"
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
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "128GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
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
formatter.after({
  "duration": 9988059511,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC8_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC8_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet",
  "description": "",
  "id": "c1924-e11409-tc8-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Displaying dropdown in place of variant swatches on device details page of handset",
  "id": "c1924-e11409-tc8-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade tablet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose upgrade PayM tablet \u003ctabletname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#Close the browser"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc8-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;",
  "rows": [
    {
      "cells": [
        "tabletname",
        "color",
        "capacity",
        "username",
        "password"
      ],
      "line": 18,
      "id": "c1924-e11409-tc8-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;;1"
    },
    {
      "cells": [
        "Apple iPad Pro 10.5 inch",
        "Rose Gold",
        "256GB",
        "inq_jan9586",
        "test123"
      ],
      "line": 19,
      "id": "c1924-e11409-tc8-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68338149591,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "CFU Displaying dropdown in place of variant swatches on device details page of handset",
  "id": "c1924-e11409-tc8-cfu-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-tablet;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid inq_jan9586 and test123 credentials",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade tablet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose upgrade PayM tablet Apple iPad Pro 10.5 inch",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the selected connected device has more than 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select Rose Gold color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select 256GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 30804194144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inq_jan9586",
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
  "duration": 18769420971,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_tablet()"
});
formatter.result({
  "duration": 34416422660,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to upgrade tablet\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_tablet(E2EOrderPlaced_Steps.java:2809)\r\n\tat ✽.And Navigate to upgrade tablet(C1924_E11409_TC8_CFU_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_tablet.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 10.5 inch",
      "offset": 29
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Tablet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_more_than_1_variant_for_both_colour_and_capacity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "256GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
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
formatter.after({
  "duration": 12004297312,
  "status": "passed"
});
formatter.uri("C1924_E11409_TC9_CFA_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_handset.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC9_CFA_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_handset",
  "description": "",
  "id": "c1924-e11409-tc9-cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Displaying Label in place of only one variant on device details page of handset",
  "description": "",
  "id": "c1924-e11409-tc9-cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "check if the selected device has only 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "#Close the browser"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc9-cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;",
  "rows": [
    {
      "cells": [
        "handset"
      ],
      "line": 13,
      "id": "c1924-e11409-tc9-cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;;1"
    },
    {
      "cells": [
        "BlackBerry Classic"
      ],
      "line": 14,
      "id": "c1924-e11409-tc9-cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34461865970,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.02 seconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\vMalalu1\\AppData\\Local\\Temp\\scoped_dir7720_4260}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c70580c72f077343c67801cd49500450\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:61)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.GeneratedMethodAccessor53.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "CFA Displaying Label in place of only one variant on device details page of handset",
  "description": "",
  "id": "c1924-e11409-tc9-cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;cfa-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-handset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
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
  "name": "I choose PayM BlackBerry Classic",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if the selected device has only 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BlackBerry Classic",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity()"
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
formatter.after({
  "duration": 10001975021,
  "status": "passed"
});
formatter.uri("CFD1786/C1786_E-11349-11350-11352-11358_Existing_Custo_Layout_New_Basecomm_Page_header_carousel_Sub_navigation_Sub_Banner_footer_banner.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11349-11350-11352-11358_Existing_Custo_Layout_New_Basecomm_Page_header_carousel_Sub_navigation_Sub_Banner_footer_banner",
  "description": "",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "\"This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page",
  "description": "\r\n1.The Header carousel should be displayed on the top of the page\r\n2.Static sub-navigation should be displayed on the top of the page above the header carousel\r\n3.Banner description for Sub-banner should be displayed below the header carousel \r\n4.Footer banner should be displayed below the tariff tiles",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@helloTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the contents of the basecomm landing page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 18,
      "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62265787808,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: b6c6d23aa5138a2c6346a27ecde6827c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.GeneratedMethodAccessor53.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "\"This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page",
  "description": "\r\n1.The Header carousel should be displayed on the top of the page\r\n2.Static sub-navigation should be displayed on the top of the page above the header carousel\r\n3.Banner description for Sub-banner should be displayed below the header carousel \r\n4.Footer banner should be displayed below the tariff tiles",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@helloTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the contents of the basecomm landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_the_contents_of_the_basecomm_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2014586142,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: b6c6d23aa5138a2c6346a27ecde6827c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor56.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("CFD1786/C1786_E-11353-11360-11361-11528_TC1_Existing_Custo_Basecomm_Ipads_Tab_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11353-11360-11361-11528_TC1_Existing_Custo_Basecomm_Ipads_Tab_Verification",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 9,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 13,
      "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 67218577758,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 9,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 33822214082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 26949265384,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 16105299329,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 60595943,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify contents of the iPad section in the landing page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyContentsofIpadSection(E2EOrderPlaced_Steps.java:3293)\r\n\tat ✽.And Verify the contents of the iPad section in the landing page(CFD1786/C1786_E-11353-11360-11361-11528_TC1_Existing_Custo_Basecomm_Ipads_Tab_Verification.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12248918277,
  "status": "passed"
});
formatter.uri("CFD1786/C1786_E-11353-11360-11361-11528_TC2_Existing_Custo_Basecomms_Other_Tablets_Tab_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11353-11360-11361-11528_TC2_Existing_Custo_Basecomms_Other_Tablets_Tab_Verification",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 16,
      "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51170249313,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 34360955936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 22474058502,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 14908881191,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4323580469,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 12944506127,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 641692553,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8209189723,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 1590081456,
  "status": "passed"
});
formatter.after({
  "duration": 11414011626,
  "status": "passed"
});
formatter.uri("CFD1786/C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027iPads\u0027 tab, \nthen the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message"
      ],
      "line": 16,
      "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad mini 4",
        "Silver",
        "32GB",
        "In Stock"
      ],
      "line": 17,
      "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 72363985327,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.10 seconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\vMalalu1\\AppData\\Local\\Temp\\scoped_dir6284_9281}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 57b47fa5fc56bdb8e53b138c821c5bc3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:61)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.GeneratedMethodAccessor53.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027iPads\u0027 tab, \nthen the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected Apple iPad mini 4 and its specific details are present in the device list Silver,32GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 16
    },
    {
      "val": "Silver",
      "offset": 90
    },
    {
      "val": "32GB",
      "offset": 97
    },
    {
      "val": "In Stock",
      "offset": 102
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11749515159,
  "status": "passed"
});
formatter.uri("CFD1786/C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027Other tablets\u0027 tab,",
  "description": "then the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message"
      ],
      "line": 16,
      "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab A 2016 10.1",
        "Black",
        "16GB",
        "In Stock"
      ],
      "line": 17,
      "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 79424515625,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027Other tablets\u0027 tab,",
  "description": "then the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for Samsung Galaxy Tab A 2016 10.1 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 44738799233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 30132171202,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 21773326439,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4339168708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 16
    },
    {
      "val": "Black",
      "offset": 103
    },
    {
      "val": "16GB",
      "offset": 109
    },
    {
      "val": "In Stock",
      "offset": 114
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 14932221205,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock(CFD1786/C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13196083024,
  "status": "passed"
});
formatter.uri("CFD1786/C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following",
  "description": "\nIn basecomm device tile:\n1.Device image\n2.Rating\n3.Colour dropdown\n4.Capacity dropdown\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\n6.Pricing\n7.\"\"Buy now\"\" button\n8.See device details\"\" link\n9.Stock message\n\nIn Tariff and extras Page:\n1.\"Back to iPad offers\" link \n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 25,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity"
      ],
      "line": 34,
      "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Silver",
        "256GB"
      ],
      "line": 35,
      "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 60798444944,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: 8233734aa03d218e8e4b2dd224daf429\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:822)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:60)\r\n\tat steps.Hooks.openBrowser(Hooks.java:51)\r\n\tat sun.reflect.GeneratedMethodAccessor53.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following",
  "description": "\nIn basecomm device tile:\n1.Device image\n2.Rating\n3.Colour dropdown\n4.Capacity dropdown\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\n6.Pricing\n7.\"\"Buy now\"\" button\n8.See device details\"\" link\n9.Stock message\n\nIn Tariff and extras Page:\n1.\"Back to iPad offers\" link \n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 25,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify expected Apple iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Out of stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Silver, 256GB of the device Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \"See device details\" link for Apple iPad Pro 9.7 inch and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \"Buy Now\" button for Apple iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 16
    },
    {
      "val": "Space Grey",
      "offset": 96
    },
    {
      "val": "32GB",
      "offset": 107
    },
    {
      "val": "Out of stock",
      "offset": 112
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    },
    {
      "val": "256GB",
      "offset": 15
    },
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.Click_on_See_device_details_link_and_verify_correct_details_are_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 102
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2008599891,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.62.39\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dchrome not reachable\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86), platform\u003dANY}]\nSession ID: 8233734aa03d218e8e4b2dd224daf429\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:487)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor56.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat testRunner.CucumberRunner.run(CucumberRunner.java:64)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("CFD1786/C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects Other Tablets tab,then the customer should be able to see the following",
  "description": "\r\nIn basecomm device tile:\r\n1.Device image\r\n2.Rating\r\n3.Colour dropdown\r\n4.Capacity dropdown\r\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\r\n6.Pricing\r\n7.\"Buy now\" button\r\n8.\"See device details\" link\r\n9.Stock message\r\n\r\nIn Tariff and extras Page:\r\n1.\"Back to tablet offers\" link \r\n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 26,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 29,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity"
      ],
      "line": 36,
      "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab A 2016 10.1",
        "Black",
        "16GB",
        "In Stock",
        "Black",
        "16GB"
      ],
      "line": 37,
      "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
