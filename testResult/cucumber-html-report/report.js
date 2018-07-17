$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JuneRelease2018/Regression/10_Reg_CFA_Phones_customers_moved_to_new_address_Payment_page_Home_Address_copy_update.feature");
formatter.feature({
  "line": 1,
  "name": "10_Reg_CFA_Phones_customers_moved_to_new_address_Payment_page_Home_Address_copy_update",
  "description": "\r\nThis scenario ensures that when the customer in acquisition journey who have moved address recently selects \u0027PayM Phone\u0027, then the customer should be prompted with updated copy of \u0027Home Address\u0027 to ensure that their address is up to date",
  "id": "10-reg-cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate",
  "description": "",
  "id": "10-reg-cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 15,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and verify copy text message below home address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "10-reg-cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
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
      "line": 26,
      "id": "10-reg-cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;1"
    },
    {
      "cells": [
        "Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Someone",
        "Not",
        "Yes",
        "Not",
        "Not",
        "Yes",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 27,
      "id": "10-reg-cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19920034105,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate",
  "description": "",
  "id": "10-reg-cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;2",
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
  "name": "I choose PayM Galaxy S8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 15,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Is this order for You or Someone else Someone when GDPR is Enabled",
  "matchedColumns": [
    4,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and verify copy text message below home address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Choose Someone Enabled Business preferences Not Yes Not Not And Channel Preferences Yes Not Not Not No Connected",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 746629535,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61817836997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
