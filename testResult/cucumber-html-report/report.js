$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CFA_DGN - Register button \u0026 Forgot link on overlay_Forgot Password.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_DGN - Register button \u0026 Forgot link on overlay_Forgot Password",
  "description": "\r\nThis scenario validates that when a CFA customer click on the \u0027My O2\u0027 link and chooses to click \"Forgotten username or password\" on the Overlay window, then the customer should be re-directed to shop\u0027s Get Help sign in page - \"https://accounts.o2.co.uk/resetpassword/selectusername\"",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "CFA_DGN - Register button \u0026 Forgot link on overlay_Forgot Password",
  "description": "",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027Forgotten username or password\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate URL after clicking on \u0027Forgotten username or password\u0027 link",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;;1"
    },
    {
      "cells": [
        "ins_feb3087@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 17,
      "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29711785726,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CFA_DGN - Register button \u0026 Forgot link on overlay_Forgot Password",
  "description": "",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-forgot-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027Forgotten username or password\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate URL after clicking on \u0027Forgotten username or password\u0027 link",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 600432897,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9488778187,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11968446847,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Forgotten_username_password_MyO2()"
});
formatter.result({
  "duration": 28296900177,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnForgottenUserNamePasswordLink_MyO2()"
});
formatter.result({
  "duration": 8326901100,
  "status": "passed"
});
formatter.after({
  "duration": 17006696600,
  "status": "passed"
});
formatter.uri("CFA_DGN - Register button \u0026 Forgot link on overlay_Register.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_DGN - Register button \u0026 Forgot link on overlay_Register",
  "description": "\r\nThis scenario validates that when a Acquisition customer click on the \u0027My O2\u0027 link and chooses to click \u0027Register\u0027 on the Overlay window, then the customer should be re-directed to \"https://accounts.o2.co.uk/register\"",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "CFA_DGN - Register button \u0026 Forgot link on overlay_Register",
  "description": "",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \u0027Register\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "validate URL after clicking on \u0027Register\u0027 link",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;;1"
    },
    {
      "cells": [
        "ins_feb3087@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 16,
      "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26869913891,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CFA_DGN - Register button \u0026 Forgot link on overlay_Register",
  "description": "",
  "id": "cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;cfa-dgn---register-button-\u0026-forgot-link-on-overlay-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \u0027Register\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "validate URL after clicking on \u0027Register\u0027 link",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 337937998,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9491229691,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11940922554,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_RegisterLink_MyO2()"
});
formatter.result({
  "duration": 24443849883,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnRegisterLink_MyO2()"
});
formatter.result({
  "duration": 8324070564,
  "status": "passed"
});
formatter.after({
  "duration": 17004027799,
  "status": "passed"
});
formatter.uri("CFA_DGN_Drupal_Create_section_for_My_O2_global_nav_link.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_DGN_Drupal_Create_section_for_My_O2_global_nav_link",
  "description": "\r\nThis scenario ensures that when an Acquisition customer lands on Drupal Global nav enabled Page and clicks on the \u0027My O2\u0027 link, then the customer should be displayed with \u0027My O2\u0027 Sign in section",
  "id": "cfa-dgn-drupal-create-section-for-my-o2-global-nav-link",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "CFA_DGN_Drupal_Create_section_for_My_O2_global_nav_link",
  "description": "",
  "id": "cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;cfa-dgn-drupal-create-section-for-my-o2-global-nav-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Navigate to Ipad page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "# PayG navigations starts"
    }
  ],
  "line": 36,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 48,
      "value": "#//--------Validating at Device details,Tariff\u0026Extras, Basket and order confirmation page-------------"
    }
  ],
  "line": 49,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I search for a PayM \u003chandset\u003e device",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 69,
      "value": "#Then Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e"
    }
  ],
  "line": 73,
  "name": "",
  "description": "",
  "id": "cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "filtername",
        "sortoption",
        "consumer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "status",
        "MBBStatus",
        "DeviceType"
      ],
      "line": 74,
      "id": "cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;;1"
    },
    {
      "cells": [
        "Galaxy S9",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "low",
        "Monthly data (High to low)",
        "Me",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 75,
      "id": "cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25232548831,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "CFA_DGN_Drupal_Create_section_for_My_O2_global_nav_link",
  "description": "",
  "id": "cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;cfa-dgn-drupal-create-section-for-my-o2-global-nav-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Navigate to Ipad page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "# PayG navigations starts"
    }
  ],
  "line": 36,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 48,
      "value": "#//--------Validating at Device details,Tariff\u0026Extras, Basket and order confirmation page-------------"
    }
  ],
  "line": 49,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I search for a PayM Galaxy S9 device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    6,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 361917928,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9480031059,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11910563832,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 54879041822,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9435209988,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11953981667,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58444231393,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9444604764,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11972896146,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 44418319847,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9483782811,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11896435924,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 71127577626,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9448527098,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11851374551,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 45057351449,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9624687811,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 12084798237,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 47539169731,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9498212247,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11946175220,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 67790542442,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9471962367,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11928430043,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Ipad_page()"
});
formatter.result({
  "duration": 43731487999,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9477045158,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11939653803,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 64278674044,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9447248792,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11967001143,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 55937973105,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9482093620,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11838427272,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 64116842965,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9462386038,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11878107511,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page()"
});
formatter.result({
  "duration": 61785002051,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9449227124,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11858466818,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 45001334931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S9",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_device(String)"
});
formatter.result({
  "duration": 21949780100,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9550414017,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11833684938,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33062706040,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9466859404,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 12031560231,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16065297335,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 36385932185,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9504480266,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11867113437,
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
  "duration": 40093020877,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 33263381078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 38
    },
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.isThisOrder4UorSomeoneElse(String,String)"
});
formatter.result({
  "duration": 83370339109,
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
  "duration": 213193125881,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 57202142332,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 29876721971,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 738904089,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9468150451,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11856507597,
  "status": "passed"
});
formatter.after({
  "duration": 17004786572,
  "status": "passed"
});
formatter.uri("CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet",
  "description": "\r\nThis scenario ensures that when an Upgrade customer lands on Drupal Global nav enabled Page and clicks on the \u0027My O2\u0027 link, then the customer should be re-directed to\r\n\u0027https://mymobile.ref.o2.co.uk/\u0027",
  "id": "cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet",
  "description": "",
  "id": "cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Navigate to Ipad page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "# PayG navigations starts"
    }
  ],
  "line": 48,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 64,
      "value": "#//--------Validating at Device details,Tariff\u0026Extras, Basket and order confirmation page-------------"
    }
  ],
  "line": 65,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Select a \u003cTablet\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Enter details in Delivery page for Click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Enter cardDetails in payment page input \u003cUsername\u003e and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Firstname",
        "Surname",
        "Tablet",
        "Username",
        "Action",
        "consumer",
        "status"
      ],
      "line": 91,
      "id": "cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;;1"
    },
    {
      "cells": [
        "ash1425a@gmail.com",
        "test123",
        "Test",
        "Accepta",
        "Samsung",
        "TEST ACCEPTA",
        "enterCode",
        "Me",
        "Enabled"
      ],
      "line": 92,
      "id": "cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25591773891,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet",
  "description": "",
  "id": "cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;cfu-dgn-drupal-create-section-for-my-o2-global-nav-link-tablet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid ash1425a@gmail.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Navigate to Ipad page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "# PayG navigations starts"
    }
  ],
  "line": 48,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 64,
      "value": "#//--------Validating at Device details,Tariff\u0026Extras, Basket and order confirmation page-------------"
    }
  ],
  "line": 65,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Select a Samsung device from Recommended devices section",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Enter details in Delivery page for Click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Enter cardDetails in payment page input TEST ACCEPTA and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "validate url for existing customer when clicks on \u0027My O2\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Click on browser back arrow and land on previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 16294728612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ash1425a@gmail.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 25805752239,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 54699847432,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9454868732,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 94166465118,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 15761061051,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 45845089543,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9460755595,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8337835365,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 9511283038,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 158442839129,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9491351788,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8335065347,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 8375034373,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 46672961938,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9508221756,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8309144600,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 7972523838,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 71895145584,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9457015876,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8336614392,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 8361043780,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 40412437230,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9665092495,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8324126836,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 10379696017,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 46990958776,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9475545306,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 11041072857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 9049374065,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 66572838884,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9477519037,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8324572403,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 7801461134,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Ipad_page()"
});
formatter.result({
  "duration": 42911547335,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9489197919,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8321498025,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 7408829871,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 60347514681,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9454485097,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8313696179,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 8770861756,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 57332407517,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9546954236,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8340820912,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 7879129236,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 72432944993,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9475981318,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8303323562,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 6663142829,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page()"
});
formatter.result({
  "duration": 62387272779,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9531489274,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "duration": 8324409960,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "duration": 7774193423,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 48324064902,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 3387834781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "duration": 13526945481,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tariffs()"
});
formatter.result({
  "duration": 23099808431,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16160705306,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 4357641333,
  "error_message": "java.lang.AssertionError: Failed to Click on My O2 link at O2 | Upgrade | Tariffs And Extras page ::[Ljava.lang.StackTraceElement;@6e78fcf5\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.click_on_MyO2Link(E2EOrderPlaced_Steps.java:137)\r\n\tat ✽.And click on \u0027My O2\u0027 link(CFU_DGN_Drupal_Create_section_for_My_O2_global_nav_link_Tablet.feature:70)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
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
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
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
      "val": "enterCode",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.DeliveryPage_ClickandCollect()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 38
    },
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.isThisOrder4UorSomeoneElse(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 40
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPg_ClickAndCollect(String)"
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectURLWhenClicksOnMyO2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17301930590,
  "status": "passed"
});
formatter.uri("CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop",
  "description": "\r\nThis scenario validates that the Drupal logout message should be merchandised",
  "id": "cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop",
  "description": "",
  "id": "cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Logout from shop",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "validate logout message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate url after logout",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;;1"
    },
    {
      "cells": [
        "in_mar2358@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 17,
      "id": "cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26420636159,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop",
  "description": "",
  "id": "cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;cfu-ensuring-that-the-drupal-logout-message-merchandised-desktop;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid in_mar2358@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Logout from shop",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "validate logout message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate url after logout",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 17542939885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in_mar2358@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 51
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 26826682564,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 48629332113,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Logput()"
});
formatter.result({
  "duration": 3350703723,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LogoutMessage()"
});
formatter.result({
  "duration": 22020364076,
  "error_message": "java.lang.AssertionError: Unable to validate Logout Message\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.LogoutMessage(E2EOrderPlaced_Steps.java:890)\r\n\tat ✽.And validate logout message(CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.redirectLogoutURL()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17426596635,
  "status": "passed"
});
formatter.uri("Invalid_Credentials_DGN_Clicking_My_O2_link_on_global Nav_Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid_Credentials_DGN_Clicking_My_O2_link_on_global Nav_Tablet",
  "description": "\r\nThis scenario ensures that when a customer is not signed in and tries to sign in with invalid credentials in \u0027My o2\u0027 link overlay on Drupal global nav,then the  error message should be displayed on the overlay",
  "id": "invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Invalid_Credentials_DGN_Clicking_My_O2_link_on_global Nav_Tablet",
  "description": "",
  "id": "invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credentials \u003cusername\u003e \u003cpassword\u003e and submit form",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;;1"
    },
    {
      "cells": [
        "invalid",
        "test123"
      ],
      "line": 16,
      "id": "invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32607294417,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid_Credentials_DGN_Clicking_My_O2_link_on_global Nav_Tablet",
  "description": "",
  "id": "invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;invalid-credentials-dgn-clicking-my-o2-link-on-global-nav-tablet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credentials invalid test123 and submit form",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 348626651,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9461485703,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 11884208489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 24
    },
    {
      "val": "test123",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_credentials(String,String)"
});
formatter.result({
  "duration": 18144412911,
  "status": "passed"
});
formatter.after({
  "duration": 17004013996,
  "status": "passed"
});
formatter.uri("My_O2_Sign_in_Overlay_Validation_Desktop.feature");
formatter.feature({
  "line": 1,
  "name": "My_O2_Sign_in_Overlay_Validation_Desktop",
  "description": "\r\nThis scenario ensures that when a customer is not signed in and clicks on the \u0027My o2\u0027 link on the Drupal global nav,then an overlay to \u0027Sign in\u0027 should be displayed",
  "id": "my-o2-sign-in-overlay-validation-desktop",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "My_O2_Sign_in_Overlay_Validation_Desktop",
  "description": "",
  "id": "my-o2-sign-in-overlay-validation-desktop;my-o2-sign-in-overlay-validation-desktop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credentials \u003cusername\u003e \u003cpassword\u003e and submit form",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Logout from MyO2 page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "validate pre-populated input fields at My O2 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "my-o2-sign-in-overlay-validation-desktop;my-o2-sign-in-overlay-validation-desktop;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "my-o2-sign-in-overlay-validation-desktop;my-o2-sign-in-overlay-validation-desktop;;1"
    },
    {
      "cells": [
        "ins_feb3087@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 18,
      "id": "my-o2-sign-in-overlay-validation-desktop;my-o2-sign-in-overlay-validation-desktop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66793239555,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "My_O2_Sign_in_Overlay_Validation_Desktop",
  "description": "",
  "id": "my-o2-sign-in-overlay-validation-desktop;my-o2-sign-in-overlay-validation-desktop;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "validate \u0027My O2\u0027 section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credentials ins_feb3087@stf.ref.o2.co.uk test123 and submit form",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Logout from MyO2 page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on \u0027My O2\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "validate pre-populated input fields at My O2 page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 421013069,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9493920788,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validateMyO2Page()"
});
formatter.result({
  "duration": 12023398463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ins_feb3087@stf.ref.o2.co.uk",
      "offset": 24
    },
    {
      "val": "test123",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_credentials(String,String)"
});
formatter.result({
  "duration": 14370257003,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LogoutMyO2()"
});
formatter.result({
  "duration": 36113711609,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MyO2Link()"
});
formatter.result({
  "duration": 9559361101,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_prePopulatedField()"
});
formatter.result({
  "duration": 4435581589,
  "status": "passed"
});
formatter.after({
  "duration": 17001889148,
  "status": "passed"
});
});