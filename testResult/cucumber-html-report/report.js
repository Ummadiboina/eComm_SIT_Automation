$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_B1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Validating GDPR functionality"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "01_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_B1",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYM Phone\u0027 and lands on delivery page\r\nthen customer should not be displayed with end user question instead the customer should see GDPR consent and placed\r\nan order by opting of Marketing preference \u0027B1\u0027, with CC then the Order consent profile should be created in CMT as expected",
  "id": "01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "01_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_B1",
  "description": "",
  "id": "01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select \u003ccolor\u003e color of the connected device",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR to click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Firstname",
        "Surname",
        "Username",
        "GDPRstatus",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "B1",
        "B2",
        "B3",
        "B4",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 34,
      "id": "01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;;1"
    },
    {
      "cells": [
        "Galaxy S9",
        "Lilac Purple",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "Enabled",
        "CapMyBill",
        "£15",
        "Select",
        "Not",
        "Not",
        "Not",
        "Connected",
        "No",
        "No"
      ],
      "line": 35,
      "id": "01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29979136006,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "01_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_B1",
  "description": "",
  "id": "01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;01-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-b1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose PayM Galaxy S9",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select Lilac Purple color of the connected device",
  "matchedColumns": [
    1
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR to click and collect",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    5,
    9,
    10,
    11,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1638073561,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57542112842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S9",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 29688271733,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 16591677271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_the_name_of_the_colour_is_next_to_the_colour_tile_in_CFAPhoneColour(String)"
});
formatter.result({
  "duration": 322638415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lilac Purple",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 15985622476,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 31521875194,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 14405754765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40564751768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£15",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 70048340182,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39147388261,
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
  "duration": 32317187323,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr_ClickAndCollect(String,String)"
});
formatter.result({
  "duration": 43669895490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 78
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 91
    },
    {
      "val": "Connected",
      "offset": 98
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "No",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 67935105725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(String)"
});
formatter.result({
  "duration": 225723362496,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 70332138857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 56531624809,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5878136071,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20042281517,
  "status": "passed"
});
formatter.after({
  "duration": 17017083728,
  "status": "passed"
});
formatter.uri("02_CFA_NewConnection_PAYM_Tablet_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_All.feature");
formatter.feature({
  "line": 1,
  "name": "02_CFA_NewConnection_PAYM_Tablet_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_All",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYM Tablet\u0027 and any accessories with home\r\ndelivery option and lands on delivery page then customer should not be displayed with end user question instead the customer\r\nshould see GDPR consent and placed an order by opting of Marketing preference \u0027All\u0027, then the Order consent profile should\r\nbe created in CMT as expected",
  "id": "02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "02_CFA_NewConnection_PAYM_Tablet_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_All",
  "description": "",
  "id": "02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select PayM Tablet \u003ctabletname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
formatter.step({
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "tabletname",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 30,
      "id": "02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£15",
        "iPad Pro 10.5 inch",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 31,
      "id": "02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26767546947,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "02_CFA_NewConnection_PAYM_Tablet_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_All",
  "description": "",
  "id": "02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;02-cfa-newconnection-paym-tablet-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select PayM Tablet iPad Pro 10.5 inch",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
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
formatter.step({
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1333483140,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 57284484186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad Pro 10.5 inch",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PayMTablet(String)"
});
formatter.result({
  "duration": 28844616577,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 43782905235,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 14268196901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40270785346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£15",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 69181762224,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 20800594261,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40406817449,
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
  "duration": 32440683394,
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
  "duration": 37651264952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "No",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 67691029137,
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
  "duration": 154493452375,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 84959136723,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 56170588680,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5949292672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20038497838,
  "status": "passed"
});
formatter.after({
  "duration": 17003202274,
  "status": "passed"
});
formatter.uri("03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2B3.feature");
formatter.feature({
  "line": 1,
  "name": "03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2B3",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYM MBB\u0027 device with home delivery option\r\nand lands on delivery page then customer should not be displayed with end user question instead the customer should see\r\nGDPR consent  and placed an order by opting of Marketing preference \u0027B2, B3\u0027, then the Order consent profile should be created in CMT as expected",
  "id": "03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2B3",
  "description": "",
  "id": "03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I choose MBB PayM \u003cDevice_Name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and verify copy text message below home address",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 28,
      "id": "03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "DontCapMyBill",
        "Nill",
        "Not",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 29,
      "id": "03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27156005787,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2B3",
  "description": "",
  "id": "03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;03-cfa-newconnection-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I choose MBB PayM Random Device",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and verify copy text message below home address",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1344765342,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 51889037116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayM(String)"
});
formatter.result({
  "duration": 15606433677,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 39467043992,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 14327999622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40016520528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DontCapMyBill",
      "offset": 21
    },
    {
      "val": "Nill",
      "offset": 35
    },
    {
      "val": "Enabled",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 40238957727,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39418583205,
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
  "duration": 40863664110,
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
  "duration": 37494662401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 75
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 94
    },
    {
      "val": "Connected",
      "offset": 101
    },
    {
      "val": "Enabled",
      "offset": 141
    },
    {
      "val": "No",
      "offset": 153
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 68382911607,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyCopyTextinPaymentPage()"
});
formatter.result({
  "duration": 972644986,
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
  "duration": 163877563768,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 71308422455,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55851022833,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5810319982,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20060907502,
  "status": "passed"
});
formatter.after({
  "duration": 17003021368,
  "status": "passed"
});
formatter.uri("04_CFA_NewConnection_Phone_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B1B3.feature");
formatter.feature({
  "line": 1,
  "name": "04_CFA_NewConnection_Phone_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B1B3",
  "description": "\r\nThis Scenario ensures that when the Customer in Phone SIMO acquisition journey selects \u0027simo tariff\u0027 with home delivery\r\noption and lands on delivery page then customer should not be displayed with end user question instead the customer\r\nshould see GDPR consent and placed an order by opting of Marketing preference \u0027B1, B3\u0027, then the Order consent profile\r\nshould be created in CMT as expected",
  "id": "04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "04_CFA_NewConnection_Phone_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B1B3",
  "description": "",
  "id": "04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 26,
      "id": "04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;;1"
    },
    {
      "cells": [
        "12 Months",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£0",
        "Select",
        "Not",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 27,
      "id": "04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26596987848,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "04_CFA_NewConnection_Phone_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B1B3",
  "description": "",
  "id": "04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;04-cfa-newconnection-phone-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on different 12 Months  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 12 Months tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1294413000,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 82756721562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months ",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_different_Months_Tariff_in_Tab(String)"
});
formatter.result({
  "duration": 11612121995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String)"
});
formatter.result({
  "duration": 17571509028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40138197294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£0",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 68981229516,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 25369391966,
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
  "duration": 33500980480,
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
  "duration": 37379388478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 94
    },
    {
      "val": "Connected",
      "offset": 101
    },
    {
      "val": "Enabled",
      "offset": 141
    },
    {
      "val": "No",
      "offset": 153
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 67995756090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_SimOnly(String)"
});
formatter.result({
  "duration": 118994946561,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54049622457,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5897382145,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20070803322,
  "status": "passed"
});
formatter.after({
  "duration": 17002475235,
  "status": "passed"
});
formatter.uri("05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL.feature");
formatter.feature({
  "line": 1,
  "name": "05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYG Phone\u0027 and any accessories with home\r\ndelivery option and lands on delivery page then customer should not be displayed with end user question instead the\r\ncustomer should see GDPR consent and place an order by opting of Marketing preference \u0027All\u0027, then the Order consent\r\nprofile should be created in CMT as expected",
  "id": "05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL",
  "description": "",
  "id": "05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose PayG \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select a PayG tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
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
formatter.step({
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Firstname",
        "tariff",
        "BSCstatus",
        "Surname",
        "Username",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 30,
      "id": "05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "TEST",
        "1GB Preloaded",
        "Disabled",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 31,
      "id": "05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26530341396,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL",
  "description": "",
  "id": "05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;05-cfa-newconnection-payg-phone-with-accessory-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose PayG iPhone X",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    1
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
  "name": "Select a PayG tariff 1GB Preloaded",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR",
  "matchedColumns": [
    6
  ],
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
formatter.step({
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1222607865,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 68739522349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYG_Handset(String)"
});
formatter.result({
  "duration": 91849089181,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 16905473449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_the_name_of_the_colour_is_next_to_the_colour_tile_in_CFAPhoneColour(String)"
});
formatter.result({
  "duration": 199476850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Space Grey",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 17732186529,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 35784013999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1GB Preloaded",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectPayGTariffTariff(String)"
});
formatter.result({
  "duration": 51703289258,
  "error_message": "java.lang.AssertionError: Unable to select PayG tariff\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.selectPayGTariffTariff(E2EOrderPlaced_Steps.java:8561)\r\n\tat ✽.And Select a PayG tariff 1GB Preloaded(05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "No",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery_for_GDPR(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17515330129,
  "status": "passed"
});
formatter.uri("06_CFA_Fitness_Tracker_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User.feature");
formatter.feature({
  "line": 1,
  "name": "06_CFA_Fitness_Tracker_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027fitness tracker\u0027 and lands on delivery page\r\nthen customer should not be displayed with gdpr end user question and consent",
  "id": "06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "06_CFA_Fitness_Tracker_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User",
  "description": "",
  "id": "06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user",
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
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any available \u003cDevice\u003e Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username",
        "B1",
        "B2",
        "B3",
        "DeviceType",
        "GDPRstatus",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 22,
      "id": "06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Not",
        "Not",
        "Not",
        "NonConnected",
        "Enabled",
        "No",
        "No"
      ],
      "line": 23,
      "id": "06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25732255934,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "06_CFA_Fitness_Tracker_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User",
  "description": "",
  "id": "06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;06-cfa-fitness-tracker-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;;2",
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
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any available Random Device Fitness tracker",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for NonConnected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1181932322,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 59311407983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Fitness_tracker(String)"
});
formatter.result({
  "duration": 13064587075,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 32721904435,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 12105904325,
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
  "duration": 34348067172,
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
  "duration": 37427433976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "NonConnected",
      "offset": 95
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "No",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 49107696325,
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
  "duration": 153733485872,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 59524204224,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5797100147,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20041983419,
  "status": "passed"
});
formatter.after({
  "duration": 17004193279,
  "status": "passed"
});
formatter.uri("07_CFA_Smart_Watch_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User.feature");
formatter.feature({
  "line": 1,
  "name": "07_CFA_Smart_Watch_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027smart watch\u0027 and lands on delivery page\r\nthen customer should not be displayed with gdpr end user question and GDPR consent",
  "id": "07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "07_CFA_Smart_Watch_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User",
  "description": "",
  "id": "07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user",
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
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any available \u003cDevice\u003e Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "Device",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 22,
      "id": "07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Random Device",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "Non Connected",
        "No",
        "No"
      ],
      "line": 23,
      "id": "07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27353944361,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "07_CFA_Smart_Watch_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User",
  "description": "",
  "id": "07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;07-cfa-smart-watch-home-delivery-gdpr-should-not-display-for-nonconnecteddevice-user;;2",
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
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any available Random Device Smartwatch",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Non Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    4,
    5,
    6,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1258865989,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 92682917922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Smartwatch(String)"
});
formatter.result({
  "duration": 18596706248,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 26780832204,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 12162294283,
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
  "duration": 36183559344,
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
  "duration": 37423419898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "Non Connected",
      "offset": 95
    },
    {
      "val": "Enabled",
      "offset": 139
    },
    {
      "val": "No",
      "offset": 151
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 49051575452,
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
  "duration": 152784534532,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 61179467895,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5832931604,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20048178617,
  "status": "passed"
});
formatter.after({
  "duration": 17004076657,
  "status": "passed"
});
formatter.uri("08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All.feature");
formatter.feature({
  "line": 1,
  "name": "08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYG Tablet\u0027  with home delivery option\r\nand lands on delivery page then customer should not be displayed with end user question instead the customer should\r\nsee GDPR consent and place an order with MP OptOut \u0027All\u0027, then the Order consent profile should be created in CMT as expected",
  "id": "08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All",
  "description": "",
  "id": "08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select any available \u003cDevice\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select a PayG tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
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
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "tariff",
        "BSCstatus",
        "Surname",
        "Username",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 25,
      "id": "08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;;1"
    },
    {
      "cells": [
        "iPad Pro 10.5 inch",
        "TEST",
        "1GB Preloaded",
        "Disabled",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 26,
      "id": "08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26256553455,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All",
  "description": "",
  "id": "08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;08-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select any available iPad Pro 10.5 inch Tablet",
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
  "name": "Select a PayG tariff 1GB Preloaded",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    6,
    7,
    8,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR",
  "matchedColumns": [
    5
  ],
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
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1238461657,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 72268135462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad Pro 10.5 inch",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 55183857441,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34385966539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1GB Preloaded",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectPayGTariffTariff(String)"
});
formatter.result({
  "duration": 34554135736,
  "error_message": "java.lang.AssertionError: Unable to select PayG tariff\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.selectPayGTariffTariff(E2EOrderPlaced_Steps.java:8561)\r\n\tat ✽.And Select a PayG tariff 1GB Preloaded(08_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "Connected",
      "offset": 95
    },
    {
      "val": "Enabled",
      "offset": 135
    },
    {
      "val": "No",
      "offset": 147
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery_for_GDPR(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17368448179,
  "status": "passed"
});
formatter.uri("09_CFA_NewConnection_PAYG_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B3.feature");
formatter.feature({
  "line": 1,
  "name": "09_CFA_NewConnection_PAYG_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B3",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYG MBB\u0027  with home delivery option and\r\nlands on delivery page then customer should not be displayed with end user question instead the customer should see\r\nGDPR consent and place an order by opting of Marketing preference \u0027B3\u0027, then the Order consent profile should be\r\ncreated in CMT as expected",
  "id": "09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "09_CFA_NewConnection_PAYG_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B3",
  "description": "",
  "id": "09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose MBB PayG \"Random Device\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a PayG tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "tariff",
        "BSCstatus",
        "Surname",
        "Username",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 26,
      "id": "09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;;1"
    },
    {
      "cells": [
        "TEST",
        "1GB Preloaded",
        "Disabled",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Not",
        "Not",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 27,
      "id": "09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35275794411,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "09_CFA_NewConnection_PAYG_MBB_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B3",
  "description": "",
  "id": "09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;09-cfa-newconnection-payg-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose MBB PayG \"Random Device\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a PayG tariff 1GB Preloaded",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    5,
    6,
    7,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1494721566,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page()"
});
formatter.result({
  "duration": 71399266020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayG(String)"
});
formatter.result({
  "duration": 10505755163,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 48842652774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1GB Preloaded",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectPayGTariffTariff(String)"
});
formatter.result({
  "duration": 22610764057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 29886452085,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40886257525,
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
  "duration": 32550009585,
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
  "duration": 37394974892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Select",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 91
    },
    {
      "val": "Connected",
      "offset": 98
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "No",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 70381142362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery_for_GDPR(String)"
});
formatter.result({
  "duration": 113446150415,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 71934960090,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 6041338868,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20026627975,
  "status": "passed"
});
formatter.after({
  "duration": 17005026700,
  "status": "passed"
});
formatter.uri("10_CFA_NewConnection_Tablet_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All.feature");
formatter.feature({
  "line": 1,
  "name": "10_CFA_NewConnection_Tablet_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All",
  "description": "\r\nThis Scenario ensures that when the Customer in Tablet SIMO acquisition journey selects \u0027simo tariff\u0027 with home\r\ndelivery option and lands on delivery page then customer should not be displayed with end user question instead the\r\ncustomer should see GDPR consent and placed an order with Marketing preference OptOut-\u0027All\u0027, then the Order consent\r\nprofile should be created in CMT as expected",
  "id": "10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "10_CFA_NewConnection_Tablet_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All",
  "description": "",
  "id": "10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select \u0027Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 27,
      "id": "10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;;1"
    },
    {
      "cells": [
        "12 Months",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£20",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 28,
      "id": "10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24884103713,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "10_CFA_NewConnection_Tablet_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptOut_All",
  "description": "",
  "id": "10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;10-cfa-newconnection-tablet-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optout-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select \u0027Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on different 12 Months  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 12 Months tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose your bill cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1338818180,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 84913115331,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectTabletsTab()"
});
formatter.result({
  "duration": 3174042972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months ",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_different_Months_Tariff_in_Tab(String)"
});
formatter.result({
  "duration": 11447559553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String)"
});
formatter.result({
  "duration": 17489759718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40214782232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£20",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 69146149789,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 22454703088,
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
  "duration": 31911371687,
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
  "duration": 37489608963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "Connected",
      "offset": 95
    },
    {
      "val": "Enabled",
      "offset": 135
    },
    {
      "val": "No",
      "offset": 147
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 63682948641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_SimOnly(String)"
});
formatter.result({
  "duration": 119053620607,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54623557227,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5941110915,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20057735948,
  "status": "passed"
});
formatter.after({
  "duration": 17005087003,
  "status": "passed"
});
formatter.uri("11_CFA_NewConnection_MBB_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2.feature");
formatter.feature({
  "line": 1,
  "name": "11_CFA_NewConnection_MBB_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2",
  "description": "\r\nThis Scenario ensures that when the Customer in MBB SIMO acquisition journey selects \u0027simo tariff\u0027 with home delivery\r\noption and lands on delivery page then customer should not be displayed with end user question instead the customer\r\nshould see GDPR consent and placed an order by opting of Marketing preference \u0027B2\u0027, then the Order consent profile\r\nshould be created in CMT as expected",
  "id": "11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "11_CFA_NewConnection_MBB_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2",
  "description": "",
  "id": "11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select \u0027MBB\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 27,
      "id": "11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;;1"
    },
    {
      "cells": [
        "12 Months",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£60",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 28,
      "id": "11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23705265008,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "11_CFA_NewConnection_MBB_SIMO_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_B2",
  "description": "",
  "id": "11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;11-cfa-newconnection-mbb-simo-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select \u0027MBB\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on different 12 Months  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 12 Months tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose your bill cap CapMyBill £60 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1283362337,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 81431371824,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectMBBTab()"
});
formatter.result({
  "duration": 3159695030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months ",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_different_Months_Tariff_in_Tab(String)"
});
formatter.result({
  "duration": 11414924113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String)"
});
formatter.result({
  "duration": 17502028373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40236186102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£60",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 69344243103,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 23278207068,
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
  "duration": 32086052384,
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
  "duration": 37549892395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 91
    },
    {
      "val": "Connected",
      "offset": 98
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "No",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 64898793558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_SimOnly(String)"
});
formatter.result({
  "duration": 119011079108,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54961907780,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5916392131,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20074953934,
  "status": "passed"
});
formatter.after({
  "duration": 17004512994,
  "status": "passed"
});
formatter.uri("12_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_OptOut_All.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Validating GDPR functionality"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "12_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_OptOut_All",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYM Phone\u0027 and lands on delivery page\r\nthen customer should not be displayed with end user question instead the customer should see GDPR consent and placed\r\nan order by opting out \u0027All\u0027 Marketing preference, with CC then the Order consent profile should be created in CMT as expected",
  "id": "12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "12_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_OptOut_All",
  "description": "",
  "id": "12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select \u003ccolor\u003e color of the connected device",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR to click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Firstname",
        "Surname",
        "Username",
        "GDPRstatus",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "B1",
        "B2",
        "B3",
        "B4",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 34,
      "id": "12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Silver",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "Enabled",
        "CapMyBill",
        "£30",
        "Not",
        "Not",
        "Not",
        "Not",
        "Connected",
        "No",
        "No"
      ],
      "line": 35,
      "id": "12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27824681009,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "12_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_OptOut_All",
  "description": "",
  "id": "12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;12-cfa-newconnection-paym-phone-gdpr-enabled-refresh-cc-enduser-mp-optout-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I choose PayM iPhone X",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select Silver color of the connected device",
  "matchedColumns": [
    1
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose your bill cap CapMyBill £30 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR to click and collect",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    5,
    9,
    10,
    11,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1239471435,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57085002785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 29355712468,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 15114251630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_the_name_of_the_colour_is_next_to_the_colour_tile_in_CFAPhoneColour(String)"
});
formatter.result({
  "duration": 215134374,
  "status": "passed"
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
  "duration": 15815015590,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 30645006608,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 14369481282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40082277239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£30",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 69369752641,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40319416798,
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
  "duration": 32440013813,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr_ClickAndCollect(String,String)"
});
formatter.result({
  "duration": 43546502387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "Connected",
      "offset": 95
    },
    {
      "val": "Enabled",
      "offset": 135
    },
    {
      "val": "No",
      "offset": 147
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 64306010366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(String)"
});
formatter.result({
  "duration": 225817461812,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 70248473529,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 57505759714,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 6119322135,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20050839310,
  "status": "passed"
});
formatter.after({
  "duration": 17004766718,
  "status": "passed"
});
formatter.uri("13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2.feature");
formatter.feature({
  "line": 1,
  "name": "13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYG Tablet\u0027  and lands on delivery page\r\nthen customer should not be displayed with end user question instead the customer should see GDPR consent and placed\r\nan order by opting of Marketing preference \u0027B1B2\u0027, with CC then the Order consent profile should be created in CMT as expected",
  "id": "13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2",
  "description": "",
  "id": "13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select any available \u003cDevice\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select a PayG tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR to click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
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
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "tariff",
        "BSCstatus",
        "Surname",
        "Username",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 25,
      "id": "13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;;1"
    },
    {
      "cells": [
        "A3 10",
        "TEST",
        "1GB Preloaded",
        "Disabled",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Select",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 26,
      "id": "13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24725884949,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2",
  "description": "",
  "id": "13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;13-cfa-newconnection-payg-tablet-gdpr-enabled-refresh-cc-enduser-mp-optin-b1b2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select any available A3 10 Tablet",
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
  "name": "Select a PayG tariff 1GB Preloaded",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR to click and collect",
  "matchedColumns": [
    1,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    6,
    7,
    8,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR",
  "matchedColumns": [
    5
  ],
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
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1520437043,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 78728802779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3 10",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 53191586363,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33685110418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1GB Preloaded",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectPayGTariffTariff(String)"
});
formatter.result({
  "duration": 22556432908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 29857104823,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40230246334,
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
  "duration": 32590843281,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr_ClickAndCollect(String,String)"
});
formatter.result({
  "duration": 43748527290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Not",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 94
    },
    {
      "val": "Connected",
      "offset": 101
    },
    {
      "val": "Enabled",
      "offset": 141
    },
    {
      "val": "No",
      "offset": 153
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 69278465343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery_for_GDPR(String)"
});
formatter.result({
  "duration": 95042040877,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery_for_GDPR(E2EOrderPlaced_Steps.java:2151)\r\n\tat ✽.And land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR(13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2.feature:19)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17381191287,
  "status": "passed"
});
formatter.uri("14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3.feature");
formatter.feature({
  "line": 1,
  "name": "14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Tablet\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand select MP OptIn - B1B2B3 and place an order as an CC End user then the Order consent profile should be created in CMT as expected",
  "id": "14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3",
  "description": "",
  "id": "14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on View all Tablets link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select PayM Tablet \u003cTablet\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select \u003cCapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter details in Delivery page for Click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter cardDetails in payment page input \u003cUsername\u003e and click \u0027Continue on next step\u0027",
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
formatter.step({
  "line": 34,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Tablet",
        "color",
        "Capacity",
        "Username",
        "Action",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 37,
      "id": "14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;;1"
    },
    {
      "cells": [
        "cucumber024@o2.com",
        "test123",
        "Enabled",
        "CapMyBill",
        "£60",
        "iPad 9.7 inch 2018",
        "Space Grey",
        "32GB",
        "TEST ACCEPTA",
        "enterCode",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 38,
      "id": "14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28165296308,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3",
  "description": "",
  "id": "14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;14-cfu-tablets-gdpr-enabled-cc-enduser-complaint-mp-optin-b1b2b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid cucumber024@o2.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on View all Tablets link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select PayM Tablet iPad 9.7 inch 2018",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select 32GB capacity of the connected device",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Choose your bill cap CapMyBill £60 when BSC is Enabled",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter details in Delivery page for Click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    16,
    17,
    10,
    11,
    12,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter cardDetails in payment page input TEST ACCEPTA and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
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
formatter.step({
  "line": 34,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 35369204801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber024@o2.com",
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
  "duration": 34698219890,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 58415066335,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15501860551,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11534478354,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tablets()"
});
formatter.result({
  "duration": 177801111381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad 9.7 inch 2018",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PayMTablet(String)"
});
formatter.result({
  "duration": 28512932263,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 81371777317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_the_name_of_the_colour_is_next_to_the_colour_tile_in_CFAPhoneColour(String)"
});
formatter.result({
  "duration": 242533193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Space Grey",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 20073412815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
});
formatter.result({
  "duration": 19837793895,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 32503470506,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 14555151202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40430311415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£60",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 69752514630,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 45579744262,
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
  "duration": 36576798556,
  "status": "passed"
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
  "duration": 40299357213,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.DeliveryPage_ClickandCollect()"
});
formatter.result({
  "duration": 26952858467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "No",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 62873204374,
  "status": "passed"
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
  "duration": 132424391560,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 67167146334,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 52423605355,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 28424280057,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20066322185,
  "status": "passed"
});
formatter.after({
  "duration": 17002377955,
  "status": "passed"
});
formatter.uri("15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL.feature");
formatter.feature({
  "line": 1,
  "name": "15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Tablet\u0027 and lands on\r\nreview page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand MP PreTicked - B1B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL",
  "description": "",
  "id": "15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;",
  "rows": [
    {
      "cells": [
        "username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "password",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 29,
      "id": "15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;;1"
    },
    {
      "cells": [
        "in056936_403407",
        "Enabled",
        "CapMyBill",
        "£30",
        "test123",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "Yes",
        "No"
      ],
      "line": 30,
      "id": "15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28257191749,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL",
  "description": "",
  "id": "15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;15-cfu-simo-review-page-home-delivery-gdpr-enabled-enduser-preticked-to-mp-all;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Signin using valid in056936_403407 and test123 credentials",
  "matchedColumns": [
    0,
    4
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £30 when BSC is Enabled",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and Yes",
  "matchedColumns": [
    5,
    6,
    7,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 35824029064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in056936_403407",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 40524543851,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 67369265672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 28495736464,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "duration": 5585286376,
  "error_message": "java.lang.AssertionError:  Failed to  verify that the url has simo at the end\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat actionsPerformed.SimsPageActions.verifyThatURL_has_simo_at_end(SimsPageActions.java:132)\r\n\tat steps.E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end(E2EOrderPlaced_Steps.java:9814)\r\n\tat ✽.And verify that the url has simo at the end(15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.phones_button_should_be_selected_by_default()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.two_contract_length_should_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.all_the_tariffs_under_twelve_months_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£30",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectILlKeepMyCurrentSimOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnIAgreeToTheTermsAndConditionCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "Yes",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17449936370,
  "status": "passed"
});
formatter.uri("16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B2.feature");
formatter.feature({
  "line": 1,
  "name": "16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B2",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Tablet\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand Pre Ticked MP - B2 and place an order as an CC End user then the Order consent profile should be created in CMT as expected",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B2",
  "description": "",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a \u003cTablet\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "tariff",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Tablet",
        "Username",
        "Action",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 43,
      "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;;1"
    },
    {
      "cells": [
        "inavl0ww_555130@o2.com",
        "test123",
        "",
        "Enabled",
        "CapMyBill",
        "£10",
        "iPad 9.7 inch 2018",
        "TEST ACCEPTA",
        "enterCode",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "Connected",
        "Yes",
        "No"
      ],
      "line": 44,
      "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29198538184,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B2",
  "description": "",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Signin using valid inavl0ww_555130@o2.com and test123 credentials",
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a iPad 9.7 inch 2018 device from Recommended devices section",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a tariff ",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap CapMyBill £10 when BSC is Enabled",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Not with No for Connected in delivery page when GDPR is Enabled and Yes",
  "matchedColumns": [
    16,
    9,
    10,
    11,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 35109578209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inavl0ww_555130@o2.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 35960354144,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 58040552095,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 16012892725,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11563187324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad 9.7 inch 2018",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "duration": 22524942642,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 10617720429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 6017367604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40696446096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£10",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 69755277154,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 493489921,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "duration": 515695924,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "duration": 2475557411,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 454158093,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "duration": 603485695,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "duration": 20412591670,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "duration": 20057420784,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_dont_need_a_new_sim_option()"
});
formatter.result({
  "duration": 3200509383,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 526319922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3767246004,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueUpgrade_extraSection()"
});
formatter.result({
  "duration": 9955633506,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 86037911883,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 453827568,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
});
formatter.result({
  "duration": 565620461,
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
  "duration": 40720885555,
  "status": "passed"
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
  "duration": 39005581367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 91
    },
    {
      "val": "Connected",
      "offset": 98
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "Yes",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 59811060676,
  "error_message": "java.lang.AssertionError: Failed:: \u0027O2 Perks And Extras Preference\u0027 is expected to be selected by default as the customer was selected this preference earlier\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat actionsPerformed.DeliveryPageActions.GDPRvalidation(DeliveryPageActions.java:1249)\r\n\tat steps.E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(E2EOrderPlaced_Steps.java:11434)\r\n\tat ✽.And Validate consumer GDPR consent section and choose Business preferences Not Select Not with No for Connected in delivery page when GDPR is Enabled and Yes(16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B2.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17366950865,
  "status": "passed"
});
formatter.uri("17_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_PreTicked_To_MP_B1B2B3.feature");
formatter.feature({
  "line": 1,
  "name": "17_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_PreTicked_To_MP_B1B2B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Phones\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand Pre Ticked MP - B1B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "17_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_PreTicked_To_MP_B1B2B3",
  "description": "",
  "id": "17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 12,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e in Delivery section",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select the Home address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter cardDetails in payment page input \u003cUsername\u003e and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "houseNumber",
        "PostCode",
        "handset",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Username",
        "Action",
        "tariff",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 46,
      "id": "17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;;1"
    },
    {
      "cells": [
        "22fe97536512@stf.ref.o2.co.uk",
        "test123",
        "11",
        "SL11Er",
        "iPhone 8 Plus",
        "Enabled",
        "DontCapMyBill",
        "Nill",
        "TEST ACCEPTA",
        "enterCode",
        "129.99upfront37.00amonth",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "Yes",
        "No"
      ],
      "line": 47,
      "id": "17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34419022956,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "17_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_PreTicked_To_MP_B1B2B3",
  "description": "",
  "id": "17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;17-cfu-phones-gdpr-enabled-home-delivery-enduser-complaint-preticked-to-mp-b1b2b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid 22fe97536512@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 12,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a iPhone 8 Plus device from Recommended devices section",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a tariff 129.99upfront37.00amonth",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter a 11 and an SL11Er in Delivery section",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and Yes",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select the Home address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter cardDetails in payment page input TEST ACCEPTA and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 15098348345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22fe97536512@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 34357538600,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 51139893720,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15847012168,
  "status": "passed"
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
  "duration": 22596725021,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 10709509487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129.99upfront37.00amonth",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 5745550863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 40576902663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DontCapMyBill",
      "offset": 21
    },
    {
      "val": "Nill",
      "offset": 35
    },
    {
      "val": "Enabled",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 40524618375,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 624645511,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "duration": 555258154,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "duration": 2539233696,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 645465132,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "duration": 801156892,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "duration": 20548027577,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "duration": 20069912442,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_dont_need_a_new_sim_option()"
});
formatter.result({
  "duration": 3215852312,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 534636506,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3693185225,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueUpgrade_extraSection()"
});
formatter.result({
  "duration": 10083005416,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 54772527567,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 559826330,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
});
formatter.result({
  "duration": 689998879,
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
  "duration": 50309521548,
  "status": "passed"
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
  "duration": 45025112456,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Use_a_different_delivery_address_link()"
});
formatter.result({
  "duration": 3104174904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 8
    },
    {
      "val": "SL11Er",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.enter_houseNum_and_PostCode(String,String)"
});
formatter.result({
  "duration": 9234560218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "Yes",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 70853599899,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectTheHomeAddress()"
});
formatter.result({
  "duration": 13245300268,
  "status": "passed"
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
  "duration": 118885800139,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 65813413600,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 64080240617,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5420560094,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20015506769,
  "status": "passed"
});
formatter.after({
  "duration": 17002158933,
  "status": "passed"
});
formatter.uri("18_CFU_MBB_GDPR_Enabled_Hme_Delivery_complaint_EndUser_MP_OptOut.feature");
formatter.feature({
  "line": 1,
  "name": "18_CFU_MBB_GDPR_Enabled_Hme_Delivery_complaint_EndUser_MP_OptOut",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM MBB\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand MP OptOut - B1B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "18_CFU_MBB_GDPR_Enabled_Hme_Delivery_complaint_EndUser_MP_OptOut",
  "description": "",
  "id": "18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on MBB section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose MBB PayM \u003cDevice_Name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for DD confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "Action",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Username",
        "username",
        "password",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 32,
      "id": "18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;;1"
    },
    {
      "cells": [
        "Random Device",
        "skip",
        "Enabled",
        "CapMyBill",
        "£100",
        "TEST ACCEPTA",
        "inavl0wx_492663@o2.com",
        "test123",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 33,
      "id": "18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29146883087,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "18_CFU_MBB_GDPR_Enabled_Hme_Delivery_complaint_EndUser_MP_OptOut",
  "description": "",
  "id": "18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;18-cfu-mbb-gdpr-enabled-hme-delivery-complaint-enduser-mp-optout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid inavl0wx_492663@o2.com and test123 credentials",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on MBB section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose MBB PayM Random Device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £100 when BSC is Enabled",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    8,
    9,
    10,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for DD confirmation",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 34604975615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inavl0wx_492663@o2.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 35785352594,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 67793551419,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15136166361,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11413474585,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_tab()"
});
formatter.result({
  "duration": 67184029245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayM(String)"
});
formatter.result({
  "duration": 15458235887,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 52478955953,
  "error_message": "java.lang.AssertionError: Unable to navigate to device details page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_device_details_page(E2EOrderPlaced_Steps.java:630)\r\n\tat ✽.And Navigate to device details page(18_CFU_MBB_GDPR_Enabled_Hme_Delivery_complaint_EndUser_MP_OptOut.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£100",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "Connected",
      "offset": 95
    },
    {
      "val": "Enabled",
      "offset": 135
    },
    {
      "val": "No",
      "offset": 147
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_forDD(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17319586896,
  "status": "passed"
});
formatter.uri("19_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3.feature");
formatter.feature({
  "line": 1,
  "name": "19_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM MBB\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand selects MP OptIn - B1B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "19_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3",
  "description": "",
  "id": "19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on MBB section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose MBB PayM \u003cDevice_Name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for DD confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "Action",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Username",
        "username",
        "password",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 32,
      "id": "19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;;1"
    },
    {
      "cells": [
        "Random Device",
        "enterCode",
        "Enabled",
        "CapMyBill",
        "£200",
        "TEST ACCEPTA",
        "in02818o_820724@o2.com",
        "test123",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 33,
      "id": "19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29459019248,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "19_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3",
  "description": "",
  "id": "19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;19-cfu-mbb-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b2b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid in02818o_820724@o2.com and test123 credentials",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on MBB section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose MBB PayM Random Device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £200 when BSC is Enabled",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    8,
    9,
    10,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for DD confirmation",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 38308228463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in02818o_820724@o2.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 36411820825,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 62446105473,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15155051191,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11398214145,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_tab()"
});
formatter.result({
  "duration": 92172669675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayM(String)"
});
formatter.result({
  "duration": 15430612926,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 45856874423,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13832459425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 39505356940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£200",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 68270047497,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 47748818560,
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
  "duration": 31360345498,
  "error_message": "java.lang.AssertionError: Unable to click on Go to Checkout button\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CheckoutFromBasket(E2EOrderPlaced_Steps.java:1355)\r\n\tat ✽.And click on \"go to checkout\" button(19_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3.feature:22)\r\n",
  "status": "failed"
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
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "No",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_forDD(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17310377156,
  "status": "passed"
});
formatter.uri("20_CFU_Phones_GDPR_Enabled_HomeDelivery_EndUser_MP_OptIn_B1B2B3.feature");
formatter.feature({
  "line": 1,
  "name": "20_CFU_Phones_GDPR_Enabled_HomeDelivery_EndUser_MP_OptIn_B1B2B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Phones\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand selects MP OptIn - B1B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "20_CFU_Phones_GDPR_Enabled_HomeDelivery_EndUser_MP_OptIn_B1B2B3",
  "description": "",
  "id": "20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 12,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e in Delivery section",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select the Home address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter cardDetails in payment page input \u003cUsername\u003e and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "houseNumber",
        "PostCode",
        "handset",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Username",
        "Action",
        "tariff",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 46,
      "id": "20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;;1"
    },
    {
      "cells": [
        "in01808o_486312@o2.com",
        "test123",
        "11",
        "SL11Er",
        "iPhone 8 Plus",
        "Enabled",
        "DontCapMyBill",
        "Nill",
        "TEST ACCEPTA",
        "enterCode",
        "129.99upfront37.00amonth",
        "Select",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 47,
      "id": "20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23034749431,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "20_CFU_Phones_GDPR_Enabled_HomeDelivery_EndUser_MP_OptIn_B1B2B3",
  "description": "",
  "id": "20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;20-cfu-phones-gdpr-enabled-homedelivery-enduser-mp-optin-b1b2b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid in01808o_486312@o2.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Navigate to upgrade phone"
    }
  ],
  "line": 12,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a iPhone 8 Plus device from Recommended devices section",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a tariff 129.99upfront37.00amonth",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter a 11 and an SL11Er in Delivery section",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select the Home address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter cardDetails in payment page input TEST ACCEPTA and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 10676792696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in01808o_486312@o2.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 29594576898,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 40827947000,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15121489032,
  "status": "passed"
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
  "duration": 21856043845,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 9952464795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129.99upfront37.00amonth",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 5082464403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 39538701216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DontCapMyBill",
      "offset": 21
    },
    {
      "val": "Nill",
      "offset": 35
    },
    {
      "val": "Enabled",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 39906838213,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 368494828,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "duration": 365146349,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "duration": 2407860222,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 339392188,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "duration": 439517742,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "duration": 20340149379,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "duration": 20060671414,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_dont_need_a_new_sim_option()"
});
formatter.result({
  "duration": 2742646117,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 334750056,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3476448860,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueUpgrade_extraSection()"
});
formatter.result({
  "duration": 9665187935,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 47563885920,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 353751508,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
});
formatter.result({
  "duration": 403914409,
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
  "duration": 34001208889,
  "status": "passed"
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
  "duration": 37855240005,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Use_a_different_delivery_address_link()"
});
formatter.result({
  "duration": 3047458973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 8
    },
    {
      "val": "SL11Er",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.enter_houseNum_and_PostCode(String,String)"
});
formatter.result({
  "duration": 8054584873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "No",
      "offset": 97
    },
    {
      "val": "Connected",
      "offset": 104
    },
    {
      "val": "Enabled",
      "offset": 144
    },
    {
      "val": "No",
      "offset": 156
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 64606452449,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectTheHomeAddress()"
});
formatter.result({
  "duration": 13139036974,
  "status": "passed"
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
  "duration": 118384150647,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 65835180420,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 60401597326,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5416614850,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20043434654,
  "status": "passed"
});
formatter.after({
  "duration": 17004352567,
  "status": "passed"
});
formatter.uri("21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3.feature");
formatter.feature({
  "line": 1,
  "name": "21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM MBB\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand Pre Ticked MP - B2B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3",
  "description": "",
  "id": "21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on MBB section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose MBB PayM \u003cDevice_Name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for DD confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "Action",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "Username",
        "username",
        "password",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 32,
      "id": "21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;;1"
    },
    {
      "cells": [
        "Random Device",
        "enterCode",
        "Enabled",
        "CapMyBill",
        "£20",
        "TEST ACCEPTA",
        "in00533s_540350@o2.com",
        "test123",
        "Not",
        "Select",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "Yes",
        "No"
      ],
      "line": 33,
      "id": "21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28768078288,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3",
  "description": "",
  "id": "21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;21-cfu-mbb-gdpr-enabled-homedelivery-enduser-expired-preticked-to-mp-b2b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid in00533s_540350@o2.com and test123 credentials",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on MBB section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose MBB PayM Random Device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Select with No for Connected in delivery page when GDPR is Enabled and Yes",
  "matchedColumns": [
    8,
    9,
    10,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for DD confirmation",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 33836596384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in00533s_540350@o2.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 34880529385,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 59496840107,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15164714904,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11455911408,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_tab()"
});
formatter.result({
  "duration": 143859295045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayM(String)"
});
formatter.result({
  "duration": 15423055809,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 41420180076,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13831171462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 39472430230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£20",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 68243186847,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 43891144849,
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
  "duration": 34954880866,
  "status": "passed"
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
  "duration": 41859706920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Select",
      "offset": 75
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 94
    },
    {
      "val": "Connected",
      "offset": 101
    },
    {
      "val": "Enabled",
      "offset": 141
    },
    {
      "val": "Yes",
      "offset": 153
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 58748736641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_forDD(String)"
});
formatter.result({
  "duration": 82065695270,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_forDD(E2EOrderPlaced_Steps.java:1970)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for DD confirmation(21_CFU_MBB_GDPR_Enabled_HomeDelivery_EndUser_expired_PreTicked_To_MP_B2B3.feature:25)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17321242362,
  "status": "passed"
});
formatter.uri("22_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3.feature");
formatter.feature({
  "line": 1,
  "name": "22_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM SIMO\u0027 and lands on\r\nreview page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand select MP OptIn - B1B3 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "22_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3",
  "description": "",
  "id": "22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;",
  "rows": [
    {
      "cells": [
        "username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "password",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 29,
      "id": "22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;;1"
    },
    {
      "cells": [
        "15ju81666468",
        "Enabled",
        "CapMyBill",
        "£20",
        "test123",
        "Select",
        "Not",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 30,
      "id": "22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 98485209178,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "22_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3",
  "description": "",
  "id": "22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;22-cfu-simo-gdpr-enabled-home-delivery-complaint-enduser-mp-optin-b1b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
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
  "name": "Signin using valid 15ju81666468 and test123 credentials",
  "matchedColumns": [
    0,
    4
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    5,
    6,
    7,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 33501119289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15ju81666468",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 36
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 32419513338,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 55157980969,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 28347629128,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "duration": 5334930962,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.phones_button_should_be_selected_by_default()"
});
formatter.result({
  "duration": 352811135,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.two_contract_length_should_displayed()"
});
formatter.result({
  "duration": 428150207,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.all_the_tariffs_under_twelve_months_should_be_displayed()"
});
formatter.result({
  "duration": 561425475,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "duration": 28194040549,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "duration": 12874383112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 39395701932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£20",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 68230106957,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectILlKeepMyCurrentSimOption()"
});
formatter.result({
  "duration": 7665864344,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnIAgreeToTheTermsAndConditionCheckbox()"
});
formatter.result({
  "duration": 11403794374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 78
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "No",
      "offset": 94
    },
    {
      "val": "Connected",
      "offset": 101
    },
    {
      "val": "Enabled",
      "offset": 141
    },
    {
      "val": "No",
      "offset": 153
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 45404430961,
  "error_message": "java.lang.AssertionError: Unable to validate GDPR consent in delivery page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(E2EOrderPlaced_Steps.java:11440)\r\n\tat ✽.And Validate consumer GDPR consent section and choose Business preferences Select Not Select with No for Connected in delivery page when GDPR is Enabled and No(22_CFU_SIMO_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17305149637,
  "status": "passed"
});
formatter.uri("23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_B3.feature");
formatter.feature({
  "line": 1,
  "name": "23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Phone\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand MP Pre Ticked - B3 and place an order as an CC End user then the Order consent profile should be created in CMT as expected",
  "id": "23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_Optin_B3",
  "description": "",
  "id": "23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-b3;23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-optin-b3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for existing customer",
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
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-b3;23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-optin-b3;",
  "rows": [
    {
      "cells": [
        "handset",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "username",
        "password",
        "Username",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 29,
      "id": "23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-b3;23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-optin-b3;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Enabled",
        "CapMyBill",
        "£60",
        "in0183b9_561635@o2.com",
        "test123",
        "TEST ACCEPTA",
        "Not",
        "Not",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "Yes",
        "No"
      ],
      "line": 30,
      "id": "23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-b3;23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-optin-b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29885408744,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_Optin_B3",
  "description": "",
  "id": "23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-b3;23-existing-customer-paym-phone-gdpr-enabled-refresh-homedelivery-enduser-preticked-to-mp-optin-b3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid in0183b9_561635@o2.com and test123 credentials",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose PayM iPhone X",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap CapMyBill £60 when BSC is Enabled",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and Yes",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details for existing customer",
  "matchedColumns": [
    6
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
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 1821033864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in0183b9_561635@o2.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 65642914235,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 60028587797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 27981483810,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 35780862924,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13861780519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 39641567676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£60",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 68420097587,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 47026682588,
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
  "duration": 35958893239,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "duration": 5371421761,
  "error_message": "java.lang.AssertionError: Unable to select existing account\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout(E2EOrderPlaced_Steps.java:3793)\r\n\tat ✽.And Select existing account and begin fast checkout(23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_B3.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Select",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 91
    },
    {
      "val": "Connected",
      "offset": 98
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "Yes",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_MBBurlUpgrade(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17308355895,
  "status": "passed"
});
formatter.uri("24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2.feature");
formatter.feature({
  "line": 1,
  "name": "24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM MBB\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand select MP OptIn - B1B2 and place an order as an End user then the Order consent profile should be created in CMT as expected",
  "id": "24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2",
  "description": "",
  "id": "24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose MBB PayM \u003cDevice_Name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for existing customer",
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
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "username",
        "password",
        "Username",
        "B1",
        "B2",
        "B3",
        "B4",
        "GDPRstatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 29,
      "id": "24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;;1"
    },
    {
      "cells": [
        "Random Device",
        "Enabled",
        "CapMyBill",
        "£30",
        "dont36182576@stf.ref.o2.co.uk",
        "test123",
        "TEST ACCEPTA",
        "Not",
        "Not",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "No",
        "No"
      ],
      "line": 30,
      "id": "24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49223479972,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2",
  "description": "",
  "id": "24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;24-existing-customer-paym-mbb-gdpr-enabled-refresh-homedelivery-enduser-mp-optin-b1b2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid dont36182576@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose MBB PayM Random Device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap CapMyBill £30 when BSC is Enabled",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    7,
    8,
    9,
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details for existing customer",
  "matchedColumns": [
    6
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
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 1839220668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dont36182576@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 46797286742,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 62268523444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayM(String)"
});
formatter.result({
  "duration": 15380708870,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 54483337533,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13839950553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillSpendCap(String)"
});
formatter.result({
  "duration": 39426688163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£30",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 68225247510,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 42090243956,
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
  "duration": 42814380710,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "duration": 5332000047,
  "error_message": "java.lang.AssertionError: Unable to select existing account\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout(E2EOrderPlaced_Steps.java:3793)\r\n\tat ✽.And Select existing account and begin fast checkout(24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Select",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 91
    },
    {
      "val": "Connected",
      "offset": 98
    },
    {
      "val": "Enabled",
      "offset": 138
    },
    {
      "val": "No",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_MBBurlUpgrade(String)"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17318131679,
  "status": "passed"
});
formatter.uri("25_Reg_Agent_GenerateCCA_Not_EndUser.feature");
formatter.feature({
  "line": 1,
  "name": "25_Reg_Agent_GenerateCCA_Not_EndUser",
  "description": "",
  "id": "25-reg-agent-generatecca-not-enduser",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 5,
  "name": "Successful completion of a PAY M Acquistion journey by CCA settlement",
  "description": "",
  "id": "25-reg-agent-generatecca-not-enduser;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination_new",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add your Bill Spend Cap \u003cBillCapAmount\u003e in agent deal builder when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cconfirmPassword\u003e, \u003cSecurityAnswer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cGDPRstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#Then CCALink Should be generated"
    }
  ],
  "line": 23,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials for New User",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus2\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input details and click \u0027Continue on next step\u0027 in upgrade journey for CCA Link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "25-reg-agent-generatecca-not-enduser;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "BSCstatus",
        "BillCapAmount",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Password",
        "confirmPassword",
        "SecurityAnswer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "GDPRstatus",
        "GDPRstatus2",
        "username",
        "password",
        "MBBStatus",
        "DeviceType",
        "DeviceModule",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 34,
      "id": "25-reg-agent-generatecca-not-enduser;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 32GB Rose Gold",
        "Refresh",
        "Base",
        "Enabled",
        "£60",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
        "test123",
        "test123",
        "vinudeep",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Someone",
        "Enabled",
        "Disabled",
        "ink_jun8829@stf.ref.o2.co.uk",
        "test123",
        "No",
        "Connected",
        "Phone",
        "Yes",
        "No"
      ],
      "line": 35,
      "id": "25-reg-agent-generatecca-not-enduser;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 75196464584,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Successful completion of a PAY M Acquistion journey by CCA settlement",
  "description": "",
  "id": "25-reg-agent-generatecca-not-enduser;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a valid PayM iPhone 7 Plus 32GB Rose Gold",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination_new",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add your Bill Spend Cap £60 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate deal summary for applied Bill Spend Cap £60 when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Register customer with valid test123, test123, vinudeep in delivery page",
  "matchedColumns": [
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose Business preferences Not Not Not Not and Channel Preferences Not Not Not Not for Someone when GDPR Enabled Connected Phone for AFA journey",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    28,
    29,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#Then CCALink Should be generated"
    }
  ],
  "line": 23,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Signin using valid ink_jun8829@stf.ref.o2.co.uk and test123 credentials for New User",
  "matchedColumns": [
    25,
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Disabled and Yes",
  "matchedColumns": [
    16,
    24,
    28,
    14,
    30,
    15,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input details and click \u0027Continue on next step\u0027 in upgrade journey for CCA Link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2673563115,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10087098571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Plus 32GB Rose Gold",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 34214273646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Refresh",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 27663626336,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination_new()"
});
formatter.result({
  "duration": 16560093708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCap_AgentDealBuilder(String)"
});
formatter.result({
  "duration": 25176767381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£60",
      "offset": 24
    },
    {
      "val": "Enabled",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.addBillCap_AgentDealBuilder(String,String)"
});
formatter.result({
  "duration": 57109298885,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22696784015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£60",
      "offset": 49
    },
    {
      "val": "Enabled",
      "offset": 65
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourCapInAgentDealSummary(String,String)"
});
formatter.result({
  "duration": 14451420032,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 39410681341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 38
    },
    {
      "val": "ACCEPTA",
      "offset": 44
    },
    {
      "val": "14",
      "offset": 53
    },
    {
      "val": "SL11UP",
      "offset": 57
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 91584252705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 29
    },
    {
      "val": "test123",
      "offset": 38
    },
    {
      "val": "vinudeep",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.Register_Customer_Phones(String,String,String)"
});
formatter.result({
  "duration": 60463265433,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16055821637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 28
    },
    {
      "val": "Not",
      "offset": 32
    },
    {
      "val": "Not",
      "offset": 36
    },
    {
      "val": "Not",
      "offset": 40
    },
    {
      "val": "Not",
      "offset": 68
    },
    {
      "val": "Not",
      "offset": 72
    },
    {
      "val": "Not",
      "offset": 76
    },
    {
      "val": "Not",
      "offset": 80
    },
    {
      "val": "Someone",
      "offset": 88
    },
    {
      "val": "Enabled",
      "offset": 106
    },
    {
      "val": "Connected",
      "offset": 114
    },
    {
      "val": "Phone",
      "offset": 124
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 18340070303,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000314595,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "duration": 28400393558,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_CCA_link()"
});
formatter.result({
  "duration": 19999878826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ink_jun8829@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials_New(String,String)"
});
formatter.result({
  "duration": 18521846749,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_link_for_the_upgrade_journey()"
});
formatter.result({
  "duration": 6794784201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not",
      "offset": 71
    },
    {
      "val": "Not",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 79
    },
    {
      "val": "No",
      "offset": 88
    },
    {
      "val": "Connected",
      "offset": 95
    },
    {
      "val": "Disabled",
      "offset": 135
    },
    {
      "val": "Yes",
      "offset": 148
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 53693614736,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade_CCA_Link()"
});
formatter.result({
  "duration": 126451343231,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_CCA_or_Buyout_or_Trade_In_Agreements_page_and_confirm_all_the_agreement_checks_New()"
});
formatter.result({
  "duration": 40022266873,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
});
formatter.result({
  "duration": 41283936346,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5398647069,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20020833843,
  "status": "passed"
});
formatter.after({
  "duration": 17003185777,
  "status": "passed"
});
});