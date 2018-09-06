$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("10_1_FR_Mix_CFU_Phone.feature");
formatter.feature({
  "line": 1,
  "name": "45_Reg_CFU_ordering choice on upgrade options page_Phone_option_not selected",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 8,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on link view Phone Details link next to device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "upFront",
        "term",
        "data"
      ],
      "line": 16,
      "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;1"
    },
    {
      "cells": [
        "rbmuatlokesh_donotusee3035",
        "test123",
        "iPhone 8 Plus",
        "max",
        "max",
        "avg"
      ],
      "line": 17,
      "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16746382103,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid rbmuatlokesh_donotusee3035 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 8,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a iPhone 8 Plus device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on link view Phone Details link next to device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Build your plan with max max and avg",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 12403136445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rbmuatlokesh_donotusee3035",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 50
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 19144719817,
  "error_message": "java.lang.AssertionError: Unable to signin using credentials\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(E2EOrderPlaced_Steps.java:834)\r\n\tat ✽.And Signin using valid rbmuatlokesh_donotusee3035 and test123 credentials(10_1_FR_Mix_CFU_Phone.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOn_Click_on_View_Phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "max",
      "offset": 21
    },
    {
      "val": "max",
      "offset": 25
    },
    {
      "val": "avg",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18149593547,
  "status": "passed"
});
formatter.uri("10_2_FR_Mix_CFU_Phone.feature");
formatter.feature({
  "line": 1,
  "name": "45_Reg_CFU_ordering choice on upgrade options page_Phone_option_not selected",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 8,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on link view Phone Details link next to device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "upFront",
        "term",
        "data"
      ],
      "line": 16,
      "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;1"
    },
    {
      "cells": [
        "rbmuatlokesh_donotusee3035",
        "test123",
        "iPhone 8 Plus",
        "avg",
        "avg",
        "avg"
      ],
      "line": 17,
      "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14607078770,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "45-reg-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid rbmuatlokesh_donotusee3035 and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 8,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a iPhone 8 Plus device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on link view Phone Details link next to device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Build your plan with avg avg and avg",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
