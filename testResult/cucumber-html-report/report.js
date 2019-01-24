$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("05_CFA_NewConnection_PAYG_Phone_With_Accessory_GDPR_Enabled_Refresh_HomeDelivery_EndUser_MP_OptIn_ALL.feature");
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
  "duration": 97987812128,
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
  "duration": 1133915837,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 200392479177,
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
  "duration": 54249242667,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 11637619587,
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
  "duration": 117280393,
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
  "duration": 17631930701,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 43515130449,
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
  "duration": 58213258179,
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
  "duration": 29715504436,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 7789736451,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 41283913591,
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
  "duration": 33268121239,
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
  "duration": 35860262155,
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
  "duration": 60078123213,
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
  "duration": 191356795063,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 79083783657,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5487497817,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20054661104,
  "status": "passed"
});
formatter.after({
  "duration": 17027933006,
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
  "duration": 98969794853,
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
  "duration": 812419751,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 228357064717,
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
  "duration": 53243342722,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 106732895933,
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
  "duration": 22204475106,
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
  "duration": 29652183708,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 44663787901,
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
  "duration": 31636187126,
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
  "duration": 35930623451,
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
  "duration": 67991965016,
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
  "duration": 166082318768,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 74483299418,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5498688427,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20068378718,
  "status": "passed"
});
formatter.after({
  "duration": 17005302043,
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
  "duration": 95481519365,
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
  "duration": 835692989,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 219715928827,
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
  "duration": 52981553783,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 106472370496,
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
  "duration": 22268462572,
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
  "duration": 29678531789,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 41082150945,
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
  "duration": 31746926437,
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
  "duration": 41671555506,
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
  "duration": 63888488138,
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
  "duration": 118643423390,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery_for_GDPR(E2EOrderPlaced_Steps.java:2153)\r\n\tat ✽.And land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR(13_CFA_NewConnection_PAYG_Tablet_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2.feature:19)\r\n",
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
  "duration": 17776984241,
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
  "duration": 101078289329,
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
  "duration": 33259777348,
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
  "duration": 30710604598,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 57911447350,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 28391065489,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 13042221215,
  "error_message": "java.lang.AssertionError: Not able to select Tablets tab\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.click_on_Tablets_tab(E2EOrderPlaced_Steps.java:7884)\r\n\tat ✽.And Click on Tablet section in upgrade options page(14_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_MP_OptIn_B1B2B3.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tablets()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17306100820,
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
  "duration": 93174363258,
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
  "duration": 11711133665,
  "error_message": "java.lang.AssertionError: Unable to do navigate to signin page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page(E2EOrderPlaced_Steps.java:492)\r\n\tat ✽.Given I am an Existing user and Navigates to Signin page(15_CFU_SIMO_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_Preticked_to_MP_ALL.feature:9)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
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
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 17311047876,
  "status": "passed"
});
formatter.uri("16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B2.feature");
formatter.feature({
  "line": 1,
  "name": "16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B3",
  "description": "\r\nThis Scenario ensures that when the upgrade customer with complaint consent status selects \u0027PAYM Tablet\u0027 and lands on\r\ndelivery page then customer should not be displayed with end user question instead the customer should see GDPR consent\r\nand Pre Ticked MP - B3 and place an order as an CC End user then the Order consent profile should be created in CMT as expected",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B3",
  "description": "",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3",
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
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;",
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
      "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;;1"
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
        "Not",
        "Select",
        "Not",
        "Enabled",
        "Connected",
        "Yes",
        "No"
      ],
      "line": 44,
      "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 98259481526,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "16_CFU_Tablets_GDPR_Enabled_CC_EndUser_Complaint_PreTicked_To_MP_B3",
  "description": "",
  "id": "16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;16-cfu-tablets-gdpr-enabled-cc-enduser-complaint-preticked-to-mp-b3;;2",
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
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and Yes",
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
  "duration": 33113817568,
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
  "duration": 30710906677,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 62564532177,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15161776025,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11392813684,
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
  "duration": 21930456198,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 9979339099,
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
  "duration": 5018106591,
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
  "duration": 39633068478,
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
  "duration": 68257022790,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 362416821,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "duration": 360054226,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "duration": 2367933336,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 352562531,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "duration": 431970295,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "duration": 20353989303,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "duration": 20034095208,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_dont_need_a_new_sim_option()"
});
formatter.result({
  "duration": 2757785384,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 410714336,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3471483030,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueUpgrade_extraSection()"
});
formatter.result({
  "duration": 9666932717,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 77052663168,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 367830935,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
});
formatter.result({
  "duration": 380859625,
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
  "duration": 37233332556,
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
  "duration": 35553525887,
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
      "val": "Yes",
      "offset": 150
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 64677163612,
  "status": "passed"
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
  "duration": 120450638378,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 60959987780,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55594842000,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5524495495,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20035776274,
  "status": "passed"
});
formatter.after({
  "duration": 17002450204,
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
  "duration": 92641847000,
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
  "duration": 31533747333,
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
  "duration": 29864506065,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 59007468371,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15168722725,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11445394362,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_tab()"
});
formatter.result({
  "duration": 104430371149,
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
  "duration": 15450638378,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 175518890235,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13875411662,
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
  "duration": 39498185529,
  "status": "passed"
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
  "duration": 68333447301,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 39558022953,
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
  "duration": 32078132316,
  "status": "passed"
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
  "duration": 18704704084,
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
  "duration": 64350096398,
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
  "duration": 82062523716,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_forDD(E2EOrderPlaced_Steps.java:1970)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for DD confirmation(18_CFU_MBB_GDPR_Enabled_Hme_Delivery_complaint_EndUser_MP_OptOut.feature:25)\r\n",
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
  "duration": 17309356001,
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
  "duration": 92960908243,
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
  "duration": 31666281339,
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
  "duration": 29374557476,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 54906278995,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15098395563,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11428097300,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_tab()"
});
formatter.result({
  "duration": 76936166703,
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
  "duration": 15416514726,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 163880864461,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13820181100,
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
  "duration": 39498502970,
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
  "duration": 68302756323,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 40815915573,
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
  "duration": 32424978652,
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
  "duration": 38457609541,
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
  "duration": 67625389617,
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
  "duration": 82103876806,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_forDD(E2EOrderPlaced_Steps.java:1970)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for DD confirmation(19_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3.feature:25)\r\n",
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
  "duration": 17317412603,
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
  "duration": 117202425969,
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
  "duration": 33300885817,
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
  "duration": 33300848270,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 57922645356,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 15163319420,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11406348684,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_tab()"
});
formatter.result({
  "duration": 91372944677,
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
  "duration": 15453579533,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 116117305993,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13824395428,
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
  "duration": 39528555085,
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
  "duration": 68320312798,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 40159552808,
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
  "duration": 38069792975,
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
  "duration": 38978361179,
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
  "duration": 65296924076,
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
  "duration": 82103631615,
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
  "duration": 17319943589,
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
  "duration": 93240327043,
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
  "duration": 33006273136,
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
  "duration": 29785336097,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 58792238424,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 28320014131,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "duration": 5357095436,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.phones_button_should_be_selected_by_default()"
});
formatter.result({
  "duration": 332838021,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.two_contract_length_should_displayed()"
});
formatter.result({
  "duration": 457069096,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.all_the_tariffs_under_twelve_months_should_be_displayed()"
});
formatter.result({
  "duration": 579666324,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "duration": 25342686053,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "duration": 12921530334,
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
  "duration": 39406056276,
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
  "duration": 68144470430,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectILlKeepMyCurrentSimOption()"
});
formatter.result({
  "duration": 5696325491,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnIAgreeToTheTermsAndConditionCheckbox()"
});
formatter.result({
  "duration": 11429922296,
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
  "duration": 91063817938,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5449641685,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20015468653,
  "status": "passed"
});
formatter.after({
  "duration": 17003091911,
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
  "duration": 128669910281,
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
  "duration": 32720420204,
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
  "duration": 29497401601,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 56500144213,
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
  "duration": 27918458334,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 128691033688,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13868608322,
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
  "duration": 39534740613,
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
  "duration": 68357265534,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 40006311251,
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
  "duration": 34264402982,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "duration": 8480731455,
  "error_message": "java.lang.AssertionError: Unable to select existing account\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout(E2EOrderPlaced_Steps.java:3796)\r\n\tat ✽.And Select existing account and begin fast checkout(23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_B3.feature:20)\r\n",
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
  "duration": 17314190986,
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
  "duration": 103593680898,
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
  "duration": 37758082344,
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
  "duration": 33237983221,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 125378430470,
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
  "duration": 15414801233,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 109205775586,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13880276229,
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
  "duration": 39455744155,
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
  "duration": 68260091375,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 39973407865,
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
  "duration": 32677933887,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "duration": 8477676522,
  "error_message": "java.lang.AssertionError: Unable to select existing account\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout(E2EOrderPlaced_Steps.java:3796)\r\n\tat ✽.And Select existing account and begin fast checkout(24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2.feature:20)\r\n",
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
  "duration": 17307697122,
  "status": "passed"
});
});