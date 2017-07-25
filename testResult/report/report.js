$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JulyRelease2017/C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override.feature");
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
        "tabletname",
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
        "Apple iPad 9.7",
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
  "duration": 16965036012,
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
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the devices JBL Xtreme Black, Fitbit Alta and Your Tariff in the basket",
  "matchedColumns": [
    3,
    4,
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 7010970727,
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
  "duration": 12095220689,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 20271709946,
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
  "duration": 5787147437,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 14378188332,
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
  "duration": 20350210273,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5141609740,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 22802316907,
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
  "duration": 5262826155,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_to_Basket_button()"
});
formatter.result({
  "duration": 12253352244,
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
  "duration": 20238067119,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 5154437277,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 10931533313,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_the_elements()"
});
formatter.result({
  "duration": 177119640,
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
  "duration": 6603572385,
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
  "duration": 40396284329,
  "error_message": "junit.framework.AssertionFailedError: Selected devices are not in basket\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat actionsPerformed.BasketPageActions.verifyDevicesInBasket(BasketPageActions.java:542)\r\n\tat steps.E2EOrderPlaced_Steps.verify_3_devices_in_basket(E2EOrderPlaced_Steps.java:2505)\r\n\tat ✽.Then Verify the devices JBL Xtreme Black, Fitbit Alta and Your Tariff in the basket(Features/JulyRelease2017/C1669_E11521_TC4_Existing_customer_add_Standalone_Accessory_Fitnesstracker_to_basket_later_add_SIMO_phone_to_basket_no_override.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3861021924,
  "status": "passed"
});
});