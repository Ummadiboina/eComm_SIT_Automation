$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JulyRelease2017/C1669/C1669_E11522_TC2_CFA_morethan12Phone.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11522_TC2_CFA_morethan12Phone",
  "description": "",
  "id": "c1669-e11522-tc2-cfa-morethan12phone",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "E11522_CFA_MoreThan12Accessory_Phone",
  "description": "",
  "id": "c1669-e11522-tc2-cfa-morethan12phone;e11522-cfa-morethan12accessory-phone",
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
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add quantity of accessories to basket within \u003climit1\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add quantity of FitnessTracker to basket within \u003climit2\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# And Validate Basket content for non Connected"
    }
  ],
  "line": 13,
  "name": "Verify the devices \u003caccessoryname\u003e and \u003cfitnesstrackername\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the total quantity of devices added to basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices \u003caccessoryname\u003e, \u003cfitnesstrackername\u003e and \u003chandset\u003e in the basket",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "c1669-e11522-tc2-cfa-morethan12phone;e11522-cfa-morethan12accessory-phone;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "limit1",
        "limit2",
        "handset",
        "accessoryname",
        "fitnesstrackername"
      ],
      "line": 32,
      "id": "c1669-e11522-tc2-cfa-morethan12phone;e11522-cfa-morethan12accessory-phone;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "3",
        "3",
        "Samsung Galaxy S8 Plus",
        "JBL Clip 2",
        "Fitbit Alta"
      ],
      "line": 33,
      "id": "c1669-e11522-tc2-cfa-morethan12phone;e11522-cfa-morethan12accessory-phone;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 72790795679,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "E11522_CFA_MoreThan12Accessory_Phone",
  "description": "",
  "id": "c1669-e11522-tc2-cfa-morethan12phone;e11522-cfa-morethan12accessory-phone;;2",
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
  "name": "Select JBL Clip 2 from accessories",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add quantity of accessories to basket within 3 in details page and navigate to basket",
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
  "name": "I choose Fitbit Alta FitnessTracker",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add quantity of FitnessTracker to basket within 3 in details page and navigate to basket",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# And Validate Basket content for non Connected"
    }
  ],
  "line": 13,
  "name": "Verify the devices JBL Clip 2 and Fitbit Alta in basket",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "calculate the total quantity of devices added to basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices JBL Clip 2, Fitbit Alta and GalaxyS8 in the basket",
  "matchedColumns": [
    0,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 228067438,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 60002103216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Clip 2",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "duration": 8126171004,
  "status": "passed"
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
  "duration": 22442925278,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 69787929106,
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
  "duration": 5271709430,
  "status": "passed"
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
  "duration": 16298183123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Clip 2",
      "offset": 19
    },
    {
      "val": "Fitbit Alta",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_2_devices_in_basket(String,String)"
});
formatter.result({
  "duration": 94322029831,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.calculate_total_qty_of_devices_added()"
});
formatter.result({
  "duration": 185088,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5340706090,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 11166150507,
  "error_message": "junit.framework.AssertionFailedError: unable to do mousehover to phones\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page(E2EOrderPlaced_Steps.java:144)\r\n\tat ✽.And navigate to PAYM Phones page(Features/JulyRelease2017/C1669/C1669_E11522_TC2_CFA_morethan12Phone.feature:16)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.ChooseGivenAccessory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Clip 2",
      "offset": 19
    },
    {
      "val": "Fitbit Alta",
      "offset": 31
    },
    {
      "val": "GalaxyS8",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_3_devices_in_basket(String,String,String)"
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
  "duration": 2438759191,
  "status": "passed"
});
});