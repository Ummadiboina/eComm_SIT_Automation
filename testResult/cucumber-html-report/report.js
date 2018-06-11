$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AFA_Allow_ReferWithSIMO_CreditCheck_Status_For_SIMO_Order_Show_ReferralMessage.feature");
formatter.feature({
  "line": 1,
  "name": "AFA_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage",
  "description": "This scenario ensures that when agent on acquisition journey selects \u0027SIMO\u0027 and performs credit check status with \u0027RefferWithSIMO\u0027 then agent should see referral message and then should be able to place an order successfully and order submission status should be \u0027Referred\u0027 in log file",
  "id": "afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AFA_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage",
  "description": "",
  "id": "afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage",
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
  "name": "Select valid \u003cTariff\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate Credit check status for ReferralwithSimo",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "agent should be displayed with updated copy of \u0027Refer with Simo\u0027 response",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;",
  "rows": [
    {
      "cells": [
        "Tariff",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 21,
      "id": "afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;;1"
    },
    {
      "cells": [
        "SimO",
        "HomeDelivery",
        "TEST",
        "Referc",
        "Test Referc",
        "6",
        "SL11ER",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Me",
        "Enabled",
        "No",
        "Connected",
        "Simo"
      ],
      "line": 22,
      "id": "afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("AFA_Not_Allow_ReferWithSIMO_CreditCheck_Status_For_SIMO_Order_Show_ReferralMessage.feature");
formatter.feature({
  "line": 1,
  "name": "AFA_Not_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage",
  "description": "This scenario ensures that when agent on acquisition journey selects \u0027SIMO\u0027 and device and performs credit check status with \u0027RefferWithSIMO\u0027 then agent should see referral message and then should be able to place an order successfully and order submission status should be \u0027Referred\u0027 in log file",
  "id": "afa-not-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AFA_update_copy_for_Refer_with_Simo_response",
  "description": "",
  "id": "afa-not-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-update-copy-for-refer-with-simo-response",
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
  "name": "Select valid \u003cTariff\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate Credit check status for ReferralwithSimo",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 15,
      "value": "#And Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page"
    },
    {
      "line": 16,
      "value": "#And Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "afa-not-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-update-copy-for-refer-with-simo-response;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariff",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 20,
      "id": "afa-not-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-update-copy-for-refer-with-simo-response;;1"
    },
    {
      "cells": [
        "iphone",
        "Refresh",
        "HomeDelivery",
        "TEST",
        "referc",
        "Test Referc",
        "6",
        "SL11ER",
        "Select",
        "Not",
        "Select",
        "Select",
        "Select",
        "Select",
        "Not",
        "Not",
        "SomeOne else",
        "Enabled",
        "No",
        "Connected",
        "simo"
      ],
      "line": 21,
      "id": "afa-not-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;afa-update-copy-for-refer-with-simo-response;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("CFA_PayG_Freesim_Phones_delivery_page_mark_mandatory_fields_with_asterisk.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayG_Freesim_Phones_delivery_page_mark_mandatory_fields_with_asterisk.feature",
  "description": "",
  "id": "cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_PAYG_sims_Asterisk validation",
  "description": "",
  "id": "cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk.feature;cfa-payg-sims-asterisk-validation",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify asterisk is displayed against mandatory fields of \"PAYG Free sim\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Add url redirection step above"
    },
    {
      "line": 11,
      "value": "#And I enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e"
    }
  ],
  "line": 12,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 15,
      "value": "#Close the browser"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk.feature;cfa-payg-sims-asterisk-validation;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "CheckBox"
      ],
      "line": 17,
      "id": "cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk.feature;cfa-payg-sims-asterisk-validation;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "No"
      ],
      "line": 18,
      "id": "cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk.feature;cfa-payg-sims-asterisk-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("CFA_PayG_Simo_To_Show_BigBundle_DataRollOver_In_DeliveryPage.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayG_Simo_To_Show_BigBundle_DataRollOver_In_Delivery_Page",
  "description": "This scenario ensures that when the customer on acquisition journey selects Big Bundle \u0027Pay As You Go\u0027 Sim\r\nthen Data Roll over copy text is displayed in the tile info and Delivery page",
  "id": "cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_PayG_Simo_To_Show_BigBundle_DataRollOver_In_Delivery_Page",
  "description": "",
  "id": "cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a pay as you go data roll over \u003cFreeSim_Type\u003e and validate Data Roll over copy for \u003cTariff_Value\u003e and \u003cData\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate Your order section in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "FreeSim_Type",
        "Tariff_Value",
        "Data",
        "CheckBox"
      ],
      "line": 15,
      "id": "cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "Big_Bundle",
        "£20",
        "5GB",
        "No"
      ],
      "line": 16,
      "id": "cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("CFA_Phones_Colour_Dropdowns_With_ColourNames_Beside_the_Colour_Multiple_Colour_variant.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_Colour_Dropdowns_With_ColourNames_Beside_the_Colour_Multiple_Colour_variant.feature",
  "description": "",
  "id": "cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_Colour_Dropdowns_With_ColourNames_Beside_the_Colour_Multiple_Colour_variant",
  "description": "",
  "id": "cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant.feature;cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant",
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
  "name": "Navigate to device details page for color selection",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And select a color"
    }
  ],
  "line": 12,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "rows": [
    {
      "comments": [
        {
          "line": 22,
          "value": "#And input the below details in Delivery page"
        }
      ],
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 23
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 24
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 25
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 26
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 27
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 28
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 29
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Date",
        "25"
      ],
      "line": 31
    },
    {
      "cells": [
        "Date of Birth - Month",
        "01"
      ],
      "line": 32
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1957"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant.feature;cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "Firstname",
        "Surname",
        "color",
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
      "line": 41,
      "id": "cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant.feature;cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant;;1"
    },
    {
      "cells": [
        "iPhone X",
        "TEST ACCEPTA",
        "Test",
        "Accepta",
        "Silver",
        "Me",
        "Select",
        "Select",
        "Not",
        "Not",
        "Select",
        "Select",
        "Select",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 42,
      "id": "cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant.feature;cfa-phones-colour-dropdowns-with-colournames-beside-the-colour-multiple-colour-variant;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk.feature",
  "description": "",
  "id": "cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk",
  "description": "",
  "id": "cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk.feature;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# And click on the color dropdown"
    }
  ],
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And verify copy text You will need to give details for all fields marked with an asterisk is displayed"
    },
    {
      "line": 14,
      "value": "#And verify asterisk is displayed against mandatory fields of \"Delivery page\""
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
  "comments": [
    {
      "line": 17,
      "value": "#And input the below details in Delivery page"
    },
    {
      "line": 18,
      "value": "#| HouseNumber           | 5            |"
    },
    {
      "line": 19,
      "value": "#| Post Code             | BS7 0NP      |"
    },
    {
      "line": 20,
      "value": "#| Title                 | Mr           |"
    },
    {
      "line": 21,
      "value": "#| FirstName             | Test         |"
    },
    {
      "line": 22,
      "value": "#| Surname               | Accepta      |"
    },
    {
      "line": 23,
      "value": "#| Contact Number        | 07822837733  |"
    },
    {
      "line": 24,
      "value": "#| Password              | TesterSit123 |"
    },
    {
      "line": 25,
      "value": "#| Security Answer       | Sit Testers  |"
    },
    {
      "line": 26,
      "value": "#| Date of Birth - Date  | 22           |"
    },
    {
      "line": 27,
      "value": "#| Date of Birth - Month | 10           |"
    },
    {
      "line": 28,
      "value": "#| Date of Birth - Year  | 1990         |"
    },
    {
      "line": 29,
      "value": "#And verify copy text You will need to give details for all fields marked with an asterisk is displayed"
    }
  ],
  "line": 30,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk.feature;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
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
      "line": 37,
      "id": "cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk.feature;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;1"
    },
    {
      "cells": [
        "Galaxy S8",
        "Test",
        "Accepta",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 38,
      "id": "cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk.feature;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("CFA_Phones_customers_moved_to_new_address_Payment_page_Home_Address_copy_update.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_customers_moved_to_new_address_Payment_page_Home_Address_copy_update.feature",
  "description": "\r\nThis scenario ensures that when the customer in acquisition journey who have moved address recently selects \u0027PayM Phone\u0027, then the customer should be prompted with updated copy of \u0027Home Address\u0027 to ensure that their address is up to date",
  "id": "cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate",
  "description": "",
  "id": "cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update.feature;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate",
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
  "id": "cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update.feature;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;",
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
      "id": "cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update.feature;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;1"
    },
    {
      "cells": [
        "Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Someone",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 27,
      "id": "cfa-phones-customers-moved-to-new-address-payment-page-home-address-copy-update.feature;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("CFU_New_PayG_To_Show_DataRollover_In_Basket_Page.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_New_PayG_To_Show_DataRollover_In_Basket_Page",
  "description": "This scenario ensures that when the customer on Existing customer new aquisition journey selects \u0027Freesim\u0027 for Phones then\r\nData Roll over copy text is displayed in the tile info, Your package section and Basket page",
  "id": "cfu-new-payg-to-show-datarollover-in-basket-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_New_PayG_To_Show_DataRollover_In_Basket_Page",
  "description": "",
  "id": "cfu-new-payg-to-show-datarollover-in-basket-page;cfu-new-payg-to-show-datarollover-in-basket-page",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayG \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Land on the \u0027Tariffs and extra\u0027 page and validate Data Roll over copy for \u003cTariff_Value\u003e and \u003cData\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket contents",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "cfu-new-payg-to-show-datarollover-in-basket-page;cfu-new-payg-to-show-datarollover-in-basket-page;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "Tariff_Value",
        "Data",
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
      "line": 24,
      "id": "cfu-new-payg-to-show-datarollover-in-basket-page;cfu-new-payg-to-show-datarollover-in-basket-page;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST ACCEPTA",
        "£15",
        "5GB",
        "Me",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 25,
      "id": "cfu-new-payg-to-show-datarollover-in-basket-page;cfu-new-payg-to-show-datarollover-in-basket-page;;2"
    },
    {
      "cells": [
        "Random Device",
        "TEST ACCEPTA",
        "£20",
        "6GB",
        "Me",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 26,
      "id": "cfu-new-payg-to-show-datarollover-in-basket-page;cfu-new-payg-to-show-datarollover-in-basket-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Feb_AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement.feature");
formatter.feature({
  "line": 1,
  "name": "Feb_AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "This scenario ensures that when the Retention Agent in Upgrade selects a \u0027Phone\u0027 and tariff eligible for eComm Promotion and adds another Bolton, then the customer should be displayed with error message",
  "id": "feb-afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "feb-afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement",
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
  "name": "performs Upgrade for \u003cuser\u003e",
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
  "name": "Click on \u0027Extras\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Bolton1 for reference)"
    }
  ],
  "line": 12,
  "name": "Select a Bolton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that the deal has already some offers Bolton \u003cBolton\u003e promotions applied",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#   since both Bolton1 and Bolton2 cannot be sold together"
    }
  ],
  "line": 15,
  "name": "Verify that the error \u003cErrorMsg\u003e is displayed in the deal about the conflict",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#which added Bolton2"
    }
  ],
  "line": 17,
  "name": "Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify that the \u0027Checkout\u0027 CTA is not enabled",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Since Bolton1 is better for customer"
    }
  ],
  "line": 20,
  "name": "To remove the Bolton2 applied by Promotion, Click on \u0027Remove\u0027 button in front of Bolton2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verify that the removed promotions is displayed as separate \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on \u0027re-apply\u0027 button shown in front of the promotion under \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify that the error \u003cErrorMsg\u003e is displayed in the deal about the conflict",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Remove\u0027 button in front of \u003cButton\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "# Then Click on \u0027Checkout\u0027 CTA and Proceed till Order placement"
    }
  ],
  "line": 28,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e for AFU journey",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "#When submit order button is clicked"
    }
  ],
  "line": 33,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "feb-afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "ErrorMsg",
        "Button",
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
      "line": 36,
      "id": "feb-afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;1"
    },
    {
      "cells": [
        "07521114790",
        "Random",
        "Refresh",
        "incompatible with each other",
        "Bolton",
        "Someone",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 37,
      "id": "feb-afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Feb_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "Feb_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "This scenario ensures that when the customer on acquisition journey selects \u0027Freesim\u0027 for Phones  and enters the postcode in Delivery page, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "feb-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "feb-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    }
  ],
  "line": 10,
  "name": "I enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 12,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "feb-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
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
        "DeviceType",
        "CheckBox"
      ],
      "line": 17,
      "id": "feb-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "Me",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Disiabled",
        "No",
        "Connected",
        "Yes"
      ],
      "line": 18,
      "id": "feb-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Feb_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "Feb_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "This scenario ensures that when the customer on acquisition journey selects \u0027Phones\u0027 with click and collect enters the postcode in payment page, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "feb-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "feb-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others",
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
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "feb-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;",
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
      "line": 25,
      "id": "feb-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;1"
    },
    {
      "cells": [
        "iPhone",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Yes",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 26,
      "id": "feb-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Feb_CFU_Buyout_with_Recycle_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Feb_CFU_Buyout_with_Recycle_Order_placement",
  "description": "This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed with Recycle in  \u0027Your package\u0027 summary",
  "id": "feb-cfu-buyout-with-recycle-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "",
  "id": "feb-cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that the buyout offer section is displayed with \u0027Take offer and Upgrade\u0027 CTA under \u0027Your Options\u0027 heading",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that \u0027£XXX.XX left to pay on your current Device Plan\u0027 panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on \u0027Take Offer and Upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that the customer is able to do recycle and buyout together",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on any one of the recycle option then Click on  \u0027Yes get an accurate quote\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Answer the Questions in the questionnaire",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Accept and continue to upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select a Device from the recommended section",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select a Tariff",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed with Recycle",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \u0027Add and Go to Basket\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed with Recycle",
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
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#And Click on the \u0027Continue button\u0027 in delivery page"
    },
    {
      "line": 26,
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue\u0027 on next step for otac"
    }
  ],
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "feb-cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;",
  "rows": [
    {
      "cells": [
        "Tablet",
        "Action",
        "Surname",
        "Username",
        "filtername",
        "sortoption",
        "username",
        "password",
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
      "line": 34,
      "id": "feb-cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;1"
    },
    {
      "cells": [
        "Random Device",
        "skip",
        "ACCEPTA",
        "TEST ACCEPTA",
        "low",
        "Monthly data (Low to High)",
        "e2ed43365255@stf.ref.co.uk",
        "test123",
        "SomeOne else",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 35,
      "id": "feb-cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Feb_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Feb_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement",
  "description": "\r\nThis scenario ensures that when the customer on upgrade journey selects \u0027Tablet\u0027 proceeds till Delivery page, then the customer should be displayed with \u0027Go to click and collect’ under the Home delivery tab and should be able to place order with Click and collect",
  "id": "feb-cfu-tablet-cnc-changes-on-delivery-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement",
  "description": "",
  "id": "feb-cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a \u003cTablet\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And I Land on the basket page by clicking on Add to Basket button"
    }
  ],
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 19,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 21,
      "value": "#And Enter details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 22,
      "value": "#And Enter cardDetails in payment page input \u003cusername\u003e and click \u0027Continue on next step\u0027"
    }
  ],
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "feb-cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;",
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
        "tariff",
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
      "line": 29,
      "id": "feb-cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;;1"
    },
    {
      "cells": [
        "inl_feb4914@stf.ref.o2.co.uk",
        "test123",
        "Test",
        "Accepta",
        "Samsung",
        "TEST ACCEPTA",
        "skip",
        "",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 30,
      "id": "feb-cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Feb_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "Feb_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "This scenario ensures that when the customer on upgrade journey selects \u0027Tablet\u0027 proceeds till Delivery page and enters the postcode, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "feb-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes",
  "description": "",
  "id": "feb-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a \u003cTablet\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e"
    },
    {
      "line": 19,
      "value": "#And enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e in Delivery section"
    },
    {
      "line": 20,
      "value": "#And land on the payment page and input and other details and click \u0027Continue\u0027 on next step for otac"
    }
  ],
  "line": 21,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#And Click on \u0027I agree to the terms and condition\u0027 checkbox"
    }
  ],
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "feb-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Tablet",
        "tariff",
        "houseNumber",
        "PostCode",
        "Username",
        "Action",
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
      "line": 27,
      "id": "feb-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;1"
    },
    {
      "cells": [
        "inl_feb4914@stf.ref.o2.co.uk",
        "test123",
        "Random Device",
        "9.99upfront60.00amonth",
        "111",
        "SL11Er",
        "Test Accepta",
        "enterCode",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 28,
      "id": "feb-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFA_PAYM_Acquistion.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_PAYM_Acquistion",
  "description": "",
  "id": "reg-afa-paym-acquistion",
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
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey",
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cconfirmPassword\u003e, \u003cSecurityAnswer\u003e  in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 23,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Password",
        "confirmPassword",
        "SecurityAnswer",
        "Consumer",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 25,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "Galaxy S8 Plus 64GB",
        "Random",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
        "test1234",
        "test1234",
        "vinudeep",
        "Me",
        "Select",
        "Select",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 26,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFA_PayG_withoutAnyAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_PayG_withoutAnyAccessory",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successful completion of a PAY G handset acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory",
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
  "name": "Select a valid PAYG \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid \u003cTariffs\u003e from PAYG tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "DeliveryType",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 20,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "iPhone 6s 32GB Gold",
        "Random",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "4",
        "SL11UP",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 21,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFA_PayMSimO_withoutAnyAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_PayMSimO_withoutAnyAccessory",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory",
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
  "name": "Successful completion of a PAY M SIMO acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory",
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
  "name": "Select valid \u003cTariff\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;",
  "rows": [
    {
      "cells": [
        "Tariff",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Consumer",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 20,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "SimO",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "6",
        "SL11UP",
        "Me",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Select",
        "Select",
        "Enabled",
        "No",
        "Connected",
        "Simo"
      ],
      "line": 21,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFA_Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_Tablet",
  "description": "",
  "id": "reg-afa-tablet",
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
  "name": "Successful completion of a Tablet Journey",
  "description": "",
  "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey",
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 19,
      "value": "#  Then CCALink Should be generated"
    }
  ],
  "line": 20,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Consumer",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 24,
      "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;1"
    },
    {
      "cells": [
        "tablet",
        "Random",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "18",
        "SL11UP",
        "Me",
        "Select",
        "Select",
        "Select",
        "Not",
        "Select",
        "Select",
        "Select",
        "Select",
        "Enabled",
        "No",
        "Connected",
        "Tablet"
      ],
      "line": 25,
      "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFA_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFA_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer",
  "description": "",
  "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that when the Agent in acquisition journey access the \u0027Tariffs\u0027 tab, then the agent should be able to see \u0027Base Comms\u0027 tariff  highlighted or tagged differently along with normal tariffs and should be able to place order",
  "description": "",
  "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order",
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
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify that Basecomms is displayed in the offers section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Consumer",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 23,
      "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order;;1"
    },
    {
      "cells": [
        "Samsung Galaxy Book 10.6",
        "Base",
        "Base",
        "Test",
        "Accepta",
        "Test Accepta",
        "2",
        "SL11UP",
        "Me",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected",
        "Tablet"
      ],
      "line": 24,
      "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFU_PAYM_Dongle_payByCard.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFU_PAYM_Dongle_PayByCard",
  "description": "",
  "id": "reg-afu-paym-dongle-paybycard",
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
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey",
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
  "comments": [
    {
      "line": 7,
      "value": "#And performs Acquisition for New user"
    }
  ],
  "line": 8,
  "name": "performs Upgrade for \u003cuser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e for AFU journey",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
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
      "line": 19,
      "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07521101029",
        "dongle",
        "Random",
        "Me",
        "Select",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 20,
      "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFU_PAYM_Dongle_submitOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFU_PAYM_Dongle_SubmitOrder",
  "description": "",
  "id": "reg-afu-paym-dongle-submitorder",
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
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey",
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
  "comments": [
    {
      "line": 7,
      "value": "#And performs Acquisition for New user"
    }
  ],
  "line": 8,
  "name": "performs Upgrade for \u003cuser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e for AFU journey",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
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
      "line": 19,
      "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07521116469",
        "dongle",
        "Random",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 20,
      "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFU_SavedBasket.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFU_SavedBasket",
  "description": "",
  "id": "reg-afu-savedbasket",
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
  "name": "AFU_Saved Basket functionality",
  "description": "",
  "id": "reg-afu-savedbasket;afu-saved-basket-functionality",
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
  "name": "performs Upgrade for \u003cuser\u003e",
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And Select a valid Accessory \u003cDevice\u003e"
    }
  ],
  "line": 12,
  "name": "choose to email basket to save the basket",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify email is sent successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "reg-afu-savedbasket;afu-saved-basket-functionality;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs"
      ],
      "line": 16,
      "id": "reg-afu-savedbasket;afu-saved-basket-functionality;;1"
    },
    {
      "cells": [
        "07521119357",
        "dongle",
        "Refresh"
      ],
      "line": 17,
      "id": "reg-afu-savedbasket;afu-saved-basket-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_AFU_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFU_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer",
  "description": "",
  "id": "reg-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that when the Agent in upgrade journey access the \u0027Tariffs\u0027 tab,",
  "description": "then the agent should be able to see \u0027Base Comms\u0027 tariff  highlighted or tagged differently along with normal tariffs and should be able to place order",
  "id": "reg-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,",
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
  "line": 7,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "performs Upgrade for \u003cuser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that Basecomms is displayed in the offers section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e for AFU journey",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
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
      "line": 20,
      "id": "reg-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;;1"
    },
    {
      "cells": [
        "07521119685",
        "Random",
        "Refresh",
        "Me",
        "Select",
        "Select",
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
      "line": 21,
      "id": "reg-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Agent_Buyout.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Agent_Buyout",
  "description": "",
  "id": "reg-agent-buyout",
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
  "name": "Successful completion of a BuyOut Journey",
  "description": "",
  "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey",
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
  "comments": [
    {
      "line": 7,
      "value": "#And performs Acquisition for New user"
    }
  ],
  "line": 8,
  "name": "performs Upgrade for \u003cUser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination_new",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clicks on \u0027Buyout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And Validate all the Basket content and checkout"
    }
  ],
  "line": 14,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e for AFU journey",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "perform all the advisory checks_new",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 19,
      "value": "#And Click on \u0027Continue\u0027 button on upgrade page"
    },
    {
      "line": 20,
      "value": "#And Click on the \u0027Continue button\u0027 in delivery page"
    },
    {
      "line": 21,
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey"
    },
    {
      "line": 22,
      "value": "#And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks"
    },
    {
      "line": 23,
      "value": "#And Continue to Review page, check order contract text and review the order"
    },
    {
      "line": 24,
      "value": "#Then order confirmation is displayed"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey;",
  "rows": [
    {
      "cells": [
        "User",
        "Device",
        "Tariffs",
        "username",
        "DeliveryType",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
        "Username",
        "password",
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
      "line": 27,
      "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey;;1"
    },
    {
      "cells": [
        "07568413508",
        "iPhone 8 Plus 64GB Gold",
        "Refresh",
        "erto@1234.com",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Flat 9",
        "SL11EL",
        "Test Accepta",
        "test123",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Select",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 28,
      "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Agent_DelayedDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Agent_DelayedDelivery",
  "description": "",
  "id": "reg-agent-delayeddelivery",
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
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey",
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
  "name": "Search for \u003cStatus\u003e device",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 24,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;",
  "rows": [
    {
      "cells": [
        "Status",
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Consumer",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 26,
      "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "Delayed",
        "Random",
        "Refresh",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 27,
      "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Agent_GenerateCCA.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Agent_GenerateCCA",
  "description": "",
  "id": "reg-agent-generatecca",
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
  "id": "reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement",
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
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cconfirmPassword\u003e, \u003cSecurityAnswer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Update Device Plan Link Email Address"
    },
    {
      "line": 19,
      "value": "#And Accept O2 Refresh Deal Summary"
    }
  ],
  "line": 20,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Then CCALink Should be generated"
    }
  ],
  "line": 22,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials for New User",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "land on the payment page and input details and click \u0027Continue on next step\u0027 in upgrade journey for CCA Link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 28,
      "value": "#And Continue to Review page, check order contract text and review the order"
    },
    {
      "line": 29,
      "value": "#Then order confirmation is displayed"
    },
    {
      "line": 30,
      "value": "#Then Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e"
    }
  ],
  "line": 32,
  "name": "",
  "description": "",
  "id": "reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
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
        "status",
        "status2",
        "consumer",
        "username",
        "password",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 33,
      "id": "reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;1"
    },
    {
      "cells": [
        "Galaxy S8 Plus 64GB",
        "Refresh",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
        "test1234",
        "test1234",
        "vinudeep",
        "Select",
        "Select",
        "Select",
        "Not",
        "Select",
        "Select",
        "Select",
        "Select",
        "Me",
        "Enabled",
        "Disabled",
        "Me",
        "",
        "test1234",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 34,
      "id": "reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Agent_PreOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Agent_PreOrder",
  "description": "",
  "id": "reg-agent-preorder",
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
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-agent-preorder;successful-completion-of-a-pay-m-acquistion-journey",
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
  "name": "Search for \u003cStatus\u003e device",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And Update Device Plan Link Email Address"
    }
  ],
  "line": 22,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "#Then CCALink Should be generated"
    },
    {
      "line": 25,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 26,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "reg-agent-preorder;successful-completion-of-a-pay-m-acquistion-journey;",
  "rows": [
    {
      "cells": [
        "Status",
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "Consumer",
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
        "DeviceType",
        "DeviceModule"
      ],
      "line": 28,
      "id": "reg-agent-preorder;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "preorder",
        "Random",
        "Random",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 29,
      "id": "reg-agent-preorder;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Agent_TradeIn.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Agent_TradeIn",
  "description": "",
  "id": "reg-agent-tradein",
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
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey",
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
  "comments": [
    {
      "line": 7,
      "value": "#And performs Acquisition for New user"
    }
  ],
  "line": 8,
  "name": "performs Upgrade for \u003cUser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination_new",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicks on \u0027Trade In\u0027button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e for AFU journey",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 20,
      "value": "#And Click on the \u0027Continue button\u0027 in delivery page"
    },
    {
      "line": 21,
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey"
    },
    {
      "line": 22,
      "value": "#And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks"
    },
    {
      "line": 23,
      "value": "#And Continue to Review page, check order contract text and review the order"
    },
    {
      "line": 24,
      "value": "#Then order confirmation is displayed"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "User",
        "Device",
        "Tariffs",
        "username",
        "user",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "password",
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
      "line": 28,
      "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07801056602",
        "Galaxy S7 Edge 32GB Pink",
        "Refresh",
        "23oc84050507@stf.ref.o2.co.uk",
        "TEST ACCEPTA",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Flat 6",
        "SL11EL",
        "test123",
        "Me",
        "Not",
        "Select",
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
      "line": 29,
      "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_Accessories_Confirmation_Page_changes.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_Accessories_Confirmation_Page_changes",
  "description": "",
  "id": "reg-cfa-accessories-confirmation-page-changes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Accessories confirmation page changes",
  "description": "This scenario ensures that when the customer selects a accessory and tries to place an order,\r\nthen the customer should be able to see the changes in Confirmation page",
  "id": "reg-cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes",
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
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select an \"Random\" Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
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
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Verify contents of order confirmation page for Accessories containing \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Step 9 and Step 10 of ALM clubbed together"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "Status",
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
      "line": 24,
      "id": "reg-cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "In Stock",
        "Me",
        "Yes",
        "Select",
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
      "line": 25,
      "id": "reg-cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_Basket page cross sell insurance.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_Basket page cross sell insurance",
  "description": "",
  "id": "reg-cfa-basket-page-cross-sell-insurance",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Basket page cross sell insurance",
  "description": "This scenario ensures that when the customer\r\nhas selected a PayM phone having one associated tariffs which had free insurance and has selected that  tariff\r\nin the tariff and extras page without selecting the free insurance then free insurance is displayed as cross sell on basket page",
  "id": "reg-cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance",
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
  "line": 9,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select a \u003ctariff\u003e which has free insurance",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "deselect if any insurance is autoselected",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify that the insurance is in a sorted order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify that the cheapest insurance is shown to crossell in the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify if the \u0027Add Now\u0027 button is displayed for the cheapest insurance shown in basket page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on the \u0027Add now\u0027 button and verify Insurance gets added successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "reg-cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariff"
      ],
      "line": 22,
      "id": "reg-cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;;1"
    },
    {
      "cells": [
        "Apple",
        "9.99upfront44.00amonth"
      ],
      "line": 23,
      "id": "reg-cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_Basket_page_cross_sell_insurance_no_free_insurance.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_Basket_page_cross_sell_insurance_no_free_insurance",
  "description": "",
  "id": "reg-cfa-basket-page-cross-sell-insurance-no-free-insurance",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer has selected a PayM phone having no free insurance and selecting cheapest insurance in basket page",
  "id": "reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;",
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
  "name": "verify that the insurance is in a sorted order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that the cheapest insurance is shown to crossell in the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify if the \u0027Add Now\u0027 button is displayed for the cheapest insurance shown in basket page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027Add now\u0027 button and verify Insurance gets added successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;",
  "rows": [
    {
      "cells": [
        "handset"
      ],
      "line": 19,
      "id": "reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;;1"
    },
    {
      "cells": [
        "iPhone 8"
      ],
      "line": 20,
      "id": "reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_Cover_me_copy_update_on_basket_summary.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_Cover_me_copy_update_on_basket_summary",
  "description": "",
  "id": "reg-cfa-cover-me-copy-update-on-basket-summary",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on acquisition journey selects insurance,\r\nthen the customer should be able to see \u0027Insurance\u0027 copy text in the SSC checkout Your order section instead of \u0027Cover Me\u0027\r\n\r\nselect tablet\r\nand view tariff\r\nselect insurance\r\ngo to basket\r\ngo to checkout\r\nverify insurance copy text is displayed on delivery page\r\ncontinue to payment page\r\nverify insurance copy text is displayed on payment page\r\ncontinue to next step\r\nverify insurance copy text is displayed on the agreement page\r\ncontinue to next step\r\nverify insurance copy text is displayed on your order section\r\ncontinue to next step\r\ndownload pdf and  verify insurance copy text is displayed on pdf",
  "id": "reg-cfa-cover-me-copy-update-on-basket-summary;",
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
  "line": 23,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "select an insurance",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#And Click on \"Buy Now\" button for \u003ctabletname\u003e"
    }
  ],
  "line": 32,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify cover me is present in Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 38,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 48,
      "value": "#And pdf content"
    }
  ],
  "line": 49,
  "name": "",
  "description": "",
  "id": "reg-cfa-cover-me-copy-update-on-basket-summary;;",
  "rows": [
    {
      "cells": [
        "tabletname",
        "color",
        "capacity",
        "Status",
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
      "line": 50,
      "id": "reg-cfa-cover-me-copy-update-on-basket-summary;;;1"
    },
    {
      "cells": [
        "Random Device",
        "Black",
        "32GB",
        "In Stock",
        "Samsung",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 51,
      "id": "reg-cfa-cover-me-copy-update-on-basket-summary;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_MBB_Data filters.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_MBB_Data filters",
  "description": "This scenario ensures that when a customer in acquisition journey selects \u0027MBB\u0027 and navigates to tariff page ,\r\nthen the customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "reg-cfa-mbb-data-filters",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_MBB_Data filters",
  "description": "",
  "id": "reg-cfa-mbb-data-filters;cfa-mbb-data-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
    },
    {
      "line": 5,
      "name": "@OctoberReleasePhase1"
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
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose MBB PayM \u003cDevice_Name\u003e",
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
  "comments": [
    {
      "line": 12,
      "value": "##New functionality starts"
    }
  ],
  "line": 13,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Verification point - A - More than 2 should be displayed"
    }
  ],
  "line": 15,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "##New functionality ends"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "reg-cfa-mbb-data-filters;cfa-mbb-data-filters;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "Firstname",
        "Surname",
        "Username",
        "filtername",
        "sortoption"
      ],
      "line": 25,
      "id": "reg-cfa-mbb-data-filters;cfa-mbb-data-filters;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "high",
        "Monthly data (Low to High)"
      ],
      "line": 26,
      "id": "reg-cfa-mbb-data-filters;cfa-mbb-data-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_PayG_SIM_ipad.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_PayG_SIM_ipad",
  "description": "",
  "id": "reg-cfa-payg-sim-ipad",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Ordering a free sim",
  "description": "",
  "id": "reg-cfa-payg-sim-ipad;ordering-a-free-sim",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    }
  ],
  "line": 9,
  "name": "I enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "reg-cfa-payg-sim-ipad;ordering-a-free-sim;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname"
      ],
      "line": 13,
      "id": "reg-cfa-payg-sim-ipad;ordering-a-free-sim;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA"
      ],
      "line": 14,
      "id": "reg-cfa-payg-sim-ipad;ordering-a-free-sim;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "\r\nThis scenario ensures that when a customer in acquisition journey selects \u0027Phone\u0027 and navigated to tariff page ,then\r\nthe customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "reg-cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "reg-cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I search for a PayM \u003chandset\u003e device",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#select handset with more tariff and less tariff  -- \u003e ask kanban team to set handset with 2 tariff and handset with more than 3 tariff"
    }
  ],
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
  "comments": [
    {
      "line": 14,
      "value": "##New functionality starts"
    }
  ],
  "line": 15,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "##New functionality ends"
    }
  ],
  "line": 24,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 29,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "reg-cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;",
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
      "line": 36,
      "id": "reg-cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "Samsung Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "low",
        "Monthly data (High to low)",
        "Me",
        "Select",
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
      "line": 37,
      "id": "reg-cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_PayM_Tablet_Data_filters_options_tariff_and_extras_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_PayM_Tablet_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "\r\nThis scenario ensures that when a customer in acquisition journey selects \u0027Phone\u0027 and navigated to tariff page ,then\r\nthe customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "reg-cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "CFA_PayM_Tablet_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "reg-cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement",
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
  "name": "navigate to PAYM Tablets page",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "reg-cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "filtername",
        "sortoption",
        "Device"
      ],
      "line": 31,
      "id": "reg-cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "low",
        "Monthly data (High to low)",
        "Random Device"
      ],
      "line": 32,
      "id": "reg-cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-tablet-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box",
  "description": "",
  "id": "reg-cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer selects a delayed delivery Phone and opts for home delivery,\r\nthen the customer should be able to see the changes in \u0027Confirmation Page formatting box\u0027",
  "id": "reg-cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;",
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
  "line": 8,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select \u003ccolor\u003e color of the connected device",
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
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify contents of order confirmation page for Phones containing \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "#Step 12 and Step 13 of ALM clubbed together"
    },
    {
      "line": 24,
      "value": "#Close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "reg-cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "Status",
        "color"
      ],
      "line": 26,
      "id": "reg-cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Delayed Delivery",
        "Black"
      ],
      "line": 27,
      "id": "reg-cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_iPad_Show_basecomms_tariffs_on_T\u0026E_page_for_my_offers_journey.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_iPad_Show_basecomms_tariffs_on_T\u0026E_page_for_my_offers_journey",
  "description": "",
  "id": "reg-cfa-ipad-show-basecomms-tariffs-on-t\u0026e-page-for-my-offers-journey",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that when the customer in Acquisition Journey lands on My offers page and clicks on \u0027iPads\u0027 tab, then the customer should be able to see \u0027iPad\u0027 devices associated with Bascom tariffs in device tile and Tariff and extras page",
  "description": "",
  "id": "reg-cfa-ipad-show-basecomms-tariffs-on-t\u0026e-page-for-my-offers-journey;this-scenario-ensures-that-when-the-customer-in-acquisition-journey-lands-on-my-offers-page-and-clicks-on-\u0027ipads\u0027-tab,-then-the-customer-should-be-able-to-see-\u0027ipad\u0027-devices-associated-with-bascom-tariffs-in-device-tile-and-tariff-and-extras-page",
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
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 9,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And Verify that promotion ribbon is displayed for \u003cdevice_name\u003e"
    }
  ],
  "line": 11,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Basecomms page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Tariffs and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And LogOut from the Upgrade Journey"
    },
    {
      "line": 18,
      "value": "#And close Ready to checkout pop up if displayed"
    }
  ],
  "line": 19,
  "name": "I navigate to iPad landing page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select the same basecomms iPad \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that the Basecomms tariff is not displayed in the Tariff and Extras page",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "reg-cfa-ipad-show-basecomms-tariffs-on-t\u0026e-page-for-my-offers-journey;this-scenario-ensures-that-when-the-customer-in-acquisition-journey-lands-on-my-offers-page-and-clicks-on-\u0027ipads\u0027-tab,-then-the-customer-should-be-able-to-see-\u0027ipad\u0027-devices-associated-with-bascom-tariffs-in-device-tile-and-tariff-and-extras-page;",
  "rows": [
    {
      "cells": [
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity"
      ],
      "line": 25,
      "id": "reg-cfa-ipad-show-basecomms-tariffs-on-t\u0026e-page-for-my-offers-journey;this-scenario-ensures-that-when-the-customer-in-acquisition-journey-lands-on-my-offers-page-and-clicks-on-\u0027ipads\u0027-tab,-then-the-customer-should-be-able-to-see-\u0027ipad\u0027-devices-associated-with-bascom-tariffs-in-device-tile-and-tariff-and-extras-page;;1"
    },
    {
      "cells": [
        "iPad Pro 10.5 inch",
        "Gold",
        "32GB",
        "In Stock",
        "Silver",
        "128GB"
      ],
      "line": 26,
      "id": "reg-cfa-ipad-show-basecomms-tariffs-on-t\u0026e-page-for-my-offers-journey;this-scenario-ensures-that-when-the-customer-in-acquisition-journey-lands-on-my-offers-page-and-clicks-on-\u0027ipads\u0027-tab,-then-the-customer-should-be-able-to-see-\u0027ipad\u0027-devices-associated-with-bascom-tariffs-in-device-tile-and-tariff-and-extras-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_morethan12Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_morethan12Tablet",
  "description": "",
  "id": "reg-cfa-morethan12tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "E11522_CFA_MoreThan12Accessory_Tablet: Removing previously selected standalone non-connected items from my basket if the amount exceeds 12 when more non-connected items are added in a device led journey",
  "description": "",
  "id": "reg-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet:-removing-previously-selected-standalone-non-connected-items-from-my-basket-if-the-amount-exceeds-12-when-more-non-connected-items-are-added-in-a-device-led-journey",
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
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "add quantity of accessories to basket within \u003climit1\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the device \u003caccessoryname\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "add quantity of FitnessTracker to basket within \u003climit2\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the devices \u003caccessoryname\u003e and \u003cfitnesstrackername\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "calculate the total quantity of devices added to basket",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 27,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "reg-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet:-removing-previously-selected-standalone-non-connected-items-from-my-basket-if-the-amount-exceeds-12-when-more-non-connected-items-are-added-in-a-device-led-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "limit1",
        "tabletname",
        "limit2",
        "accessoryname",
        "fitnesstrackername",
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
      "line": 36,
      "id": "reg-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet:-removing-previously-selected-standalone-non-connected-items-from-my-basket-if-the-amount-exceeds-12-when-more-non-connected-items-are-added-in-a-device-led-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "6",
        "Random Device",
        "6",
        "Random",
        "Fitbit Ionic",
        "Someone",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 37,
      "id": "reg-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet:-removing-previously-selected-standalone-non-connected-items-from-my-basket-if-the-amount-exceeds-12-when-more-non-connected-items-are-added-in-a-device-led-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons",
  "description": "",
  "id": "reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;",
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
  "line": 9,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify whether promotional ribbons are displayed for \u003ctariff\u003e on the Tariff tile in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for \u003ctariff\u003e in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027Overlay icon\u0027 for \u003ctariff\u003e in the Tariff and Extras page and verify pop up gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify that the tariff ribbons are displayed in tariff upsell config of \u0027Your package\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on the \u0027Overlay icon\u0027 in tariff upsell config of \u0027Your package\u0027 section and verify pop up gets displayed in the Tariff and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify Promotional ribbons are displayed under Tariff section in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on the \u0027Overlay icon\u0027 in the Basket page and verify pop gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariff",
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
      "line": 34,
      "id": "reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;1"
    },
    {
      "cells": [
        "Samsung Galaxy J3 2017",
        "9.99upfront35.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Yes",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 35,
      "id": "reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFD2064_ECOM11810_11811_CFU_ordering choice on upgrade options page_Phone_Option_selected.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFD2064_ECOM11810_11811_CFU_ordering choice on upgrade options page_Phone_Option selected",
  "description": "",
  "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-selected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This test ensures that customer is given a choice to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey",
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
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Select a \u0027I need a sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
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
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "Username",
        "Action",
        "tariff"
      ],
      "line": 33,
      "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;1"
    },
    {
      "cells": [
        "ash@o2.com",
        "test123",
        "Samsung Galaxy S8",
        "TEST ACCEPTA",
        "skip",
        ""
      ],
      "line": 34,
      "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFD2064_ECOM11810_11811_CFU_ordering choice on upgrade options page_Phone_option_not selected.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFD2064_ECOM11810_11811_CFU_ordering choice on upgrade options page_Phone_option_not selected",
  "description": "",
  "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey",
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
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
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
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "Username",
        "Action",
        "tariff"
      ],
      "line": 33,
      "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;1"
    },
    {
      "cells": [
        "6172test2@test.com",
        "test123",
        "Samsung Galaxy S8",
        "TEST ACCEPTA",
        "skip",
        "129.99upfront37.00amonth"
      ],
      "line": 34,
      "id": "reg-cfd2064-ecom11810-11811-cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFU_Phones_Data_filters_options_tariff_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFU_Phones_Data_filters_options_tariff_and_extras_page",
  "description": "\r\nThis scenario ensures that when a customer in upgrade journey selects handset and navigated to tariff page ,\r\nthen the customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "reg-cfu-phones-data-filters-options-tariff-and-extras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Reg_CFU_Phones_Data_filters_options_tariff_and_extras_page",
  "description": "",
  "id": "reg-cfu-phones-data-filters-options-tariff-and-extras-page;reg-cfu-phones-data-filters-options-tariff-and-extras-page",
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
  "name": "Verify that in the recycle value is displayed in the Recycle panel",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And Select \u003cMake\u003e, \u003cModel\u003e and \u003cNetwork\u003e"
    },
    {
      "line": 14,
      "value": "#And perform update device"
    }
  ],
  "line": 15,
  "name": "Select any one recycle option and click on \u0027Continue to Upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Verification point - A - More than 2 should be displayed"
    }
  ],
  "line": 20,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "reg-cfu-phones-data-filters-options-tariff-and-extras-page;reg-cfu-phones-data-filters-options-tariff-and-extras-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "filtername",
        "sortoption",
        "Make",
        "Model",
        "Network"
      ],
      "line": 29,
      "id": "reg-cfu-phones-data-filters-options-tariff-and-extras-page;reg-cfu-phones-data-filters-options-tariff-and-extras-page;;1"
    },
    {
      "cells": [
        "ini_jan6238",
        "test123",
        "Samsung Galaxy S8",
        "medium",
        "Monthly data (Low to High)",
        "Apple",
        "Iphone7",
        "Orange"
      ],
      "line": 30,
      "id": "reg-cfu-phones-data-filters-options-tariff-and-extras-page;reg-cfu-phones-data-filters-options-tariff-and-extras-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFU_Recycle_Phones_DD_Confirmation_Page_changes.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFU_Recycle_Phones_DD_Confirmation_Page_changes.feature",
  "description": "",
  "id": "reg-cfu-recycle-phones-dd-confirmation-page-changes.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone,\r\nthen the customer should be able to see the changes in \u0027Confirmation Page formatting box\u0027",
  "id": "reg-cfu-recycle-phones-dd-confirmation-page-changes.feature;",
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
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that in the recycle value is displayed in the Recycle panel",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select \u003cMake\u003e, \u003cModel\u003e and \u003cNetwork\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform update device",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select any one recycle option and click on \u0027Continue to Upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on \u0027Yes,get an accurate quote\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "answer the questionnaire and click on \u0027Accept and continue to upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select ribboned tariff \u003ctariff\u003e in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 20,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#And Click on the \u0027Continue button\u0027 in delivery page"
    }
  ],
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
  "name": "Verify contents of order confirmation page for Phones containing \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "reg-cfu-recycle-phones-dd-confirmation-page-changes.feature;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "tariff",
        "Firstname",
        "Surname",
        "Username",
        "Action",
        "Status",
        "Make",
        "Model",
        "Network",
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
      "line": 33,
      "id": "reg-cfu-recycle-phones-dd-confirmation-page-changes.feature;;;1"
    },
    {
      "cells": [
        "evolutionpayg@mailinator.com",
        "test123",
        "Apple iPhone 7",
        "9.99upfront84.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "skip",
        "Delayed Delivery",
        "Apple",
        "Iphone7",
        "Orange",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 34,
      "id": "reg-cfu-recycle-phones-dd-confirmation-page-changes.feature;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "reg-cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that when a customer in upgrade journey selects \u0027Tablet\u0027 and navigated to tariff page ,",
  "description": "then the customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "reg-cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;this-scenario-ensures-that-when-a-customer-in-upgrade-journey-selects-\u0027tablet\u0027-and-navigated-to-tariff-page-,",
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
  "line": 7,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a \u003cTablet\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Verification point - A - More than 2 should be displayed"
    }
  ],
  "line": 15,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#And Click on the \u0027Continue button\u0027 in delivery page"
    },
    {
      "line": 28,
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue\u0027 on next step for otac"
    }
  ],
  "line": 29,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "reg-cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;this-scenario-ensures-that-when-a-customer-in-upgrade-journey-selects-\u0027tablet\u0027-and-navigated-to-tariff-page-,;",
  "rows": [
    {
      "cells": [
        "Tablet",
        "Action",
        "Surname",
        "Username",
        "filtername",
        "sortoption",
        "username",
        "password",
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
      "line": 35,
      "id": "reg-cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;this-scenario-ensures-that-when-a-customer-in-upgrade-journey-selects-\u0027tablet\u0027-and-navigated-to-tariff-page-,;;1"
    },
    {
      "cells": [
        "Random Device",
        "skip",
        "ACCEPTA",
        "TEST ACCEPTA",
        "low",
        "Monthly data (Low to High)",
        "identityref01@mailinator.com",
        "test123",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 36,
      "id": "reg-cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;this-scenario-ensures-that-when-a-customer-in-upgrade-journey-selects-\u0027tablet\u0027-and-navigated-to-tariff-page-,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons",
  "description": "",
  "id": "reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on upgrade journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;",
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
  "line": 11,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose upgrade PayM handset \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify whether promotional ribbons are displayed for \u003ctariff\u003e on the Tariff tile in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for \u003ctariff\u003e in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on the \u0027Overlay icon\u0027 for \u003ctariff\u003e in the Tariff and Extras page and verify pop up gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify that the tariff ribbons are displayed in tariff upsell config of \u0027Your package\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Overlay icon\u0027 in tariff upsell config of \u0027Your package\u0027 section and verify pop up gets displayed in the Tariff and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify Promotional ribbons are displayed under Tariff section in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on the \u0027Overlay icon\u0027 in the Basket page and verify pop gets displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "tariff"
      ],
      "line": 26,
      "id": "reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;1"
    },
    {
      "cells": [
        "in04962f_901133@o2.com",
        "test123",
        "Galaxy",
        "9.99upfront84.00amonth"
      ],
      "line": 27,
      "id": "reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_AccessoriesOnly.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_AccessoriesOnly",
  "description": "",
  "id": "reg-cs-accessoriesonly",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey",
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
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_CFA_MBBPayG.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_CFA_MBBPayG",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PAYG MBB only E2E journey",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to PayG MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose MBB PayG \"Random Device\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;",
  "rows": [
    {
      "cells": [
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
      "line": 22,
      "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 23,
      "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_CFU_SavedBasket.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_CFU_SavedBasket",
  "description": "",
  "id": "reg-cs-cfu-savedbasket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU to Verify is user can upgrade phone to refresh Tariff",
  "description": "",
  "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a \u0027I need a sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verifies the basket page for the upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "choose to email basket to save the basket in CFU for \u003cusername\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status",
        "consumer",
        "handset",
        "tariff"
      ],
      "line": 21,
      "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;1"
    },
    {
      "cells": [
        "inl_feb4914@stf.ref.o2.co.uk",
        "test123",
        "Enabled",
        "Me",
        "Samsung Galaxy S8",
        "Random"
      ],
      "line": 22,
      "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_FitnessTrackers.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_FitnessTrackers",
  "description": "",
  "id": "reg-cs-fitnesstrackers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Fitness Trackers only E2E journey",
  "description": "",
  "id": "reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \u003cDevice\u003e Fitness tracker",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add FitnessTracker to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_Free_Sim.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_Free_Sim",
  "description": "",
  "id": "reg-cs-free-sim",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Light surfer iPad Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim;light-surfer-ipad-sim-entering-delivery-details-manually",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim;light-surfer-ipad-sim-entering-delivery-details-manually;",
  "rows": [
    {
      "cells": [
        "Surfer_Type",
        "sim_type",
        "Flatnumber",
        "Housename",
        "Address1",
        "Town",
        "Postcode",
        "Firstname",
        "Lastname",
        "Contact_number",
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
      "line": 14,
      "id": "reg-cs-free-sim;light-surfer-ipad-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Light surfer",
        "iPad",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789",
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
      "line": 15,
      "id": "reg-cs-free-sim;light-surfer-ipad-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_Free_Sim_Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_Free_Sim_Tablet",
  "description": "",
  "id": "reg-cs-free-sim-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Light surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;",
  "rows": [
    {
      "cells": [
        "Surfer_Type",
        "sim_type",
        "Flatnumber",
        "Housename",
        "Address1",
        "Town",
        "Postcode",
        "Firstname",
        "Lastname",
        "Contact_number"
      ],
      "line": 14,
      "id": "reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Light surfer",
        "Tablet",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789"
      ],
      "line": 15,
      "id": "reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "reg-cs-paygphoneshomedeliverywithoutaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayG Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose PayG \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;",
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
      "line": 21,
      "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Select",
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
      "line": 22,
      "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_PayMPhonesHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayMPhonesHomeDeliveryWithAccessory",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "comments": [
    {
      "line": 8,
      "value": "#edit the above"
    }
  ],
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose some Accesssory",
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
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
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
      "line": 24,
      "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 25,
      "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayMPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithoutaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Close the browser"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;",
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
      "line": 24,
      "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "iPhone X",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Select",
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
      "line": 25,
      "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_PayMSimOnly.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayMSimOnly",
  "description": "",
  "id": "reg-cs-paymsimonly",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sim Only PayM 30Days E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonly;sim-only-paym-30days-e2e-validation",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-cs-paymsimonly;sim-only-paym-30days-e2e-validation;",
  "rows": [
    {
      "cells": [
        "Contract",
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
      "line": 20,
      "id": "reg-cs-paymsimonly;sim-only-paym-30days-e2e-validation;;1"
    },
    {
      "cells": [
        "30 Days",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 21,
      "id": "reg-cs-paymsimonly;sim-only-paym-30days-e2e-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_PayMSimOnlyRecommended.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayMSimOnlyRecommended",
  "description": "",
  "id": "reg-cs-paymsimonlyrecommended",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sim Only PayM Recommended Tariff selection E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Recommended Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 18,
      "value": "#30 Days"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;",
  "rows": [
    {
      "cells": [
        "Contract",
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
      "line": 20,
      "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;;1"
    },
    {
      "cells": [
        "12 Months",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 21,
      "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_PayMTabletsHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_PayMTabletsHomeDeliveryWithAccessory",
  "description": "",
  "id": "reg-cs-paymtabletshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PayM Tablets Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \u003cDevice\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
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
      "line": 24,
      "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 25,
      "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_Recycle.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_Recycle.feature",
  "description": "",
  "id": "reg-cs-recycle.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "This scenario ensures that the customer is able to recycle and upgrade",
  "description": "",
  "id": "reg-cs-recycle.feature;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade",
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
  "line": 6,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# Then Verify that in the recycle value is displayed in the Recycle panel"
    }
  ],
  "line": 10,
  "name": "Select \u0027Not your device\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select \u003cMake\u003e, \u003cModel\u003e and \u003cNetwork\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "perform update device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select any one refundable recycle option",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \u0027Yes,get an accurate quote\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \u0027Yes,get an accurate quote\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "answer the questionnaire and click on \u0027Accept and continue to upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "##And Select ribboned tariff \u003ctariff\u003e in upgrade journey"
    }
  ],
  "line": 19,
  "name": "Select tariff in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "##Then choose appropriately in \u0027Your Sim Card\u0027section"
    },
    {
      "line": 21,
      "value": "##And select \u003cNeedSim\u003e action and confirm"
    }
  ],
  "line": 22,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#And Click on the \u0027Continue button\u0027 in delivery page"
    },
    {
      "line": 26,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 27,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "reg-cs-recycle.feature;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "tariff",
        "Firstname",
        "Surname",
        "Username",
        "Action",
        "Make",
        "Model",
        "Network",
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
      "line": 35,
      "id": "reg-cs-recycle.feature;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;;1"
    },
    {
      "cells": [
        "inq_jan3955",
        "test123",
        "Apple iPhone 7",
        "29.99upfront46.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "skip",
        "Apple",
        "Iphone7",
        "Orange",
        "Me",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 36,
      "id": "reg-cs-recycle.feature;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CS_SmartWatch.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_SmartWatch",
  "description": "",
  "id": "reg-cs-smartwatch",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Smart Watches only E2E journey",
  "description": "",
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey",
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
  "name": "select any available \u003cDevice\u003e Smartwatch",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add SmartWatch to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Non Phone related basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "Device",
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
      "line": 20,
      "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Pebble Original",
        "Me",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Non Connected"
      ],
      "line": 21,
      "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CVOSDelayedDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CVOSDelayedDelivery",
  "description": "",
  "id": "reg-cvosdelayeddelivery",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Delayed Delivery_CVS",
  "description": "",
  "id": "reg-cvosdelayeddelivery;delayed-delivery-cvs",
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
  "name": "I am a Supply Chain Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Login with Supply Chain Credential \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on  \u0027Stockpot\u0027 tab in Supply Chain and search for \u003cSKUID\u003e in SkU desciption",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the uploaded stock for the SKU ID",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on Online \u0027Stockpot\u0027 and move the delivery date to a past date",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Stock Merchandise",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to move the Launch date to a past date\u003cSearch_by_model\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I login as a Trading Admin",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Login with Trading Admin Credentials \u003cTradeUser\u003e and \u003cTradePassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Stockpot\u0027 tab in Trading admin and search for \u003cSKUID\u003e in SkU desciption",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "# And when I click on All shops I should be able to allocate to different stockspots using \u003cSearch_by_model\u003e"
    },
    {
      "line": 17,
      "value": "#  And I click on \u0027Stockpot\u0027 tab and search using \u003cSKUID\u003e to see the stock status then I should see them in Delayed Delivery status"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-cvosdelayeddelivery;delayed-delivery-cvs;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "SKUID",
        "Search_by_model",
        "TradeUser",
        "TradePassword"
      ],
      "line": 20,
      "id": "reg-cvosdelayeddelivery;delayed-delivery-cvs;;1"
    },
    {
      "cells": [
        "SupplyChainAdmin1",
        "SupplyChainAdmin1",
        "1AMFI32N",
        "Amazon Fire phone 64GB",
        "TradingAdmin",
        "TradingAdmin1"
      ],
      "line": 21,
      "id": "reg-cvosdelayeddelivery;delayed-delivery-cvs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_CVOSPreOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CVOSPreOrder",
  "description": "",
  "id": "reg-cvospreorder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PreOrder_CVS",
  "description": "",
  "id": "reg-cvospreorder;preorder-cvs",
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
  "name": "I am a Supply Chain Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Login with Supply Chain Credential \u003cusername\u003e and \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on  \u0027Stockpot\u0027 tab in Supply Chain and search for \u003cSKUID\u003e in SkU desciption",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the uploaded stock for the SKU ID",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on Online \u0027Stockpot\u0027 and move the delivery date to a past date",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Stock Merchandise",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to move the Launch date to a past date\u003cSearch_by_model\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I login as a Trading Admin",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Login with Trading Admin Credentials \u003cUsername1\u003e and \u003cPassword1\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 15,
      "value": "# Then I click on  \u0027Stockpot\u0027 tab in Trading admin and search for \u003cSKUID\u003e in SkU desciption"
    },
    {
      "line": 16,
      "value": "# And when I click on All shops I should be able to allocate to different stockspots using \u003cSearch_by_model\u003e"
    },
    {
      "line": 17,
      "value": "# And I click on \u0027Stockpot\u0027 tab and search using \u003cSKUID\u003e to see the stock status then I should see them in Pre Order status"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-cvospreorder;preorder-cvs;",
  "rows": [
    {
      "cells": [
        "username",
        "Password",
        "SKUID",
        "Search_by_model",
        "Username1",
        "Password1"
      ],
      "line": 20,
      "id": "reg-cvospreorder;preorder-cvs;;1"
    },
    {
      "cells": [
        "SupplyChainAdmin1",
        "SupplyChainAdmin1",
        "1AMFI32N",
        "Amazon Fire phone 64GB",
        "TradingAdmin",
        "TradingAdmin1"
      ],
      "line": 21,
      "id": "reg-cvospreorder;preorder-cvs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Consumer_Buyout.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Consumer_Buyout.feature",
  "description": "",
  "id": "reg-consumer-buyout.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that the customer is able to successully Buyout the device",
  "description": "",
  "id": "reg-consumer-buyout.feature;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on \u0027Take offer and upgrade\u0027button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select any random tariff from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a \u0027I need a sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify if the buyout offer is displayed in My Package section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page by clicking on Add to Basket button in the BuyOut Journey",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify if the buyout offer is displayed in Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify if buyout offer is displayed under Order Summary section in \u003cOTAC\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify if buyout offer is displayed under Order Summary section in \u003cDelivery\u003e page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Then Click on the \u0027Continue button\u0027 in delivery page"
    }
  ],
  "line": 22,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify if buyout offer is displayed under Order Summary section in \u003cPayment\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify if buyout offer is displayed under Order Summary section in \u003cAgreement\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify if buyout offer is displayed under Order Summary section in \u003cReview\u003e page",
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
formatter.step({
  "line": 30,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "reg-consumer-buyout.feature;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "Action",
        "Username",
        "OTAC",
        "Delivery",
        "Payment",
        "Agreement",
        "Review",
        "Username",
        "Action",
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
      "line": 33,
      "id": "reg-consumer-buyout.feature;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;;1"
    },
    {
      "cells": [
        "in01808o_490350@o2.com",
        "test123",
        "iPhone 8",
        "skip",
        "TEST ACCEPTA",
        "OTAC",
        "Delivery",
        "Payment",
        "Agreement",
        "Review",
        "TEST ACCEPTA",
        "enterCode",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 34,
      "id": "reg-consumer-buyout.feature;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Consumer_DelayedDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Consumer_DelayedDelivery",
  "description": "",
  "id": "reg-consumer-delayeddelivery",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Delayed Delivery Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey",
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
  "name": "I search for a PayM \u003cDD_handset\u003e device",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check the status \u003cStatus\u003e of the device",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Close the browser"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey;",
  "rows": [
    {
      "cells": [
        "DD_handset",
        "Firstname",
        "Surname",
        "Username",
        "Status",
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
      "line": 24,
      "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Apple iPhone 7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Delayed Delivery",
        "Me",
        "Select",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Select",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 25,
      "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Consumer_PreOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Consumer_PreOrder",
  "description": "",
  "id": "reg-consumer-preorder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Pre Order Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey",
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
  "name": "I search for a PayM \u003chandset\u003e device",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check the status \u003cStatus\u003e of the device",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Close the browser"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "Status",
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
      "line": 24,
      "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Apple iPhone x",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Pre Order",
        "Me",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 25,
      "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Consumer_TradeIn.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Consumer_TradeIn",
  "description": "",
  "id": "reg-consumer-tradein",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that the customer is able to successully Trade In the device",
  "description": "",
  "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify trade in message is displayed under \u0027Get your latest phone on us today\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Answer appropriate questionaire in \u0027your device\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \u0027upgrade now\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select ribboned tariff \u003ctariff\u003e in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "choose appropriately in \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify if the tradein offer is displayed in My Package section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify if the trade in offer is displayed in Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select a Click and Collect store for Trade In",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify if trade in offer is displayed under Order Summary section in \u003cOTAC\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter code \u003cAction\u003e in OTAC page to verify account in TadeIn journey",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify if trade in offer is displayed under Order Summary section in \u003cDelivery\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select check box to bring the trade in device and Continue to delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify if trade in offer is displayed under Order Summary section in \u003cPayment\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify if trade in offer is displayed under Order Summary section in \u003cAgreement\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify if trade in offer is displayed under Order Summary section in \u003cReview\u003e page",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "tariff",
        "OTAC",
        "Delivery",
        "Payment",
        "Agreement",
        "Review",
        "Username",
        "Action",
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
      "line": 34,
      "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device;;1"
    },
    {
      "cells": [
        "23oc30086819@stf.ref.o2.co.uk",
        "test123",
        "iPhone X",
        "19.99upfront45.00amonth",
        "OTAC",
        "Delivery",
        "Payment",
        "Agreement",
        "Review",
        "TEST ACCEPTA",
        "enterCode",
        "Me",
        "Select",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 35,
      "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Current_MBB_URL_no_change_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Current_MBB_URL_no_change_Order_placement.feature",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement.feature;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order",
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
  "name": "I launch the OldMBBURL",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"random\" MBBtariff",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And I Land on the basket page and choose home delivery option"
    }
  ],
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select continue button in delivery page for existing customer",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "#Modify the above step to include pdf download"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement.feature;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "user",
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
      "line": 25,
      "id": "reg-current-mbb-url-no-change-order-placement.feature;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;1"
    },
    {
      "cells": [
        "12342015@gmail.com",
        "test123",
        "TEST ACCEPTA",
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
      "line": 26,
      "id": "reg-current-mbb-url-no-change-order-placement.feature;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page.feature",
  "description": "\r\nThis scenario ensures that when a customer in Existing customer journey selects \u0027Tablet\u0027 and navigated to tariff page ,then the customer\r\nshould be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "reg-existing-customer-tablets-data-filters-options-tariff-and-extras-page.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page",
  "description": "",
  "id": "reg-existing-customer-tablets-data-filters-options-tariff-and-extras-page.feature;existing-customer-tablets-data-filters-options-tariff-and-extras-page",
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
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# And select \u003ccolor\u003e color of the connected device"
    },
    {
      "line": 14,
      "value": "# And select \u003ccapacity\u003e capacity of the connected device"
    }
  ],
  "line": 15,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Verification point - A - More than 2 should be displayed"
    }
  ],
  "line": 18,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "reg-existing-customer-tablets-data-filters-options-tariff-and-extras-page.feature;existing-customer-tablets-data-filters-options-tariff-and-extras-page;",
  "rows": [
    {
      "cells": [
        "tabletname",
        "color",
        "capacity",
        "filtername",
        "sortoption",
        "username",
        "password"
      ],
      "line": 27,
      "id": "reg-existing-customer-tablets-data-filters-options-tariff-and-extras-page.feature;existing-customer-tablets-data-filters-options-tariff-and-extras-page;;1"
    },
    {
      "cells": [
        "Random Device",
        "Rose Gold",
        "32GB",
        "low",
        "Monthly data (Low to High)",
        "27fe76531842@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 28,
      "id": "reg-existing-customer-tablets-data-filters-options-tariff-and-extras-page.feature;existing-customer-tablets-data-filters-options-tariff-and-extras-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license.feature",
  "description": "",
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license.feature",
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
  "name": "This test scenario ensures that a CC order is successful which accepts additional information like Passport details Driver License details and additional card details but is finally in Referred status",
  "description": "",
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license.feature;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status",
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a valid store using \u003cpostCode\u003e for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "input additional card details Driving license \u003cLicense_postcode\u003e and \u003cLicense_Number\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And input additional card details passport details \u003ccountry\u003e and \u003cPassport_number\u003e"
    },
    {
      "line": 20,
      "value": "#And Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page"
    }
  ],
  "line": 21,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#Step number 16 and 17 need to be defined to carry out end to end journey#"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license.feature;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "License_postcode",
        "License_Number",
        "country",
        "Passport_number",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "postCode",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "Password",
        "confirmPassword",
        "SecurityAnswer",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 27,
      "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license.feature;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;1"
    },
    {
      "cells": [
        "S8",
        "Random",
        "sl11el",
        "122SS23ERT",
        "IND",
        "G02DSRE£",
        "TEST",
        "ADDINFOI",
        "TEST ADDINFOI",
        "14",
        "SL11UP",
        "TQ13DG",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Not",
        "Post",
        "Me",
        "Enabled",
        "test123",
        "test123",
        "Jkhan",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 28,
      "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license.feature;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect",
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
  "name": "This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now",
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
  "name": "Select a PAYG device in stock which is less than 50 GBP",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Select a valid PAYG \u003cDevice\u003e"
    }
  ],
  "line": 10,
  "name": "Select valid tariff from PAYG tariffs tab which is less than 50 GBP",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Confirm Device and Tariff are added in Deal Builder",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select a valid store using \u003cPostCode\u003e for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;",
  "rows": [
    {
      "cells": [
        "Device",
        "Device",
        "Tariffs",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "Password",
        "confirmPassword",
        "SecurityAnswer",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 22,
      "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;1"
    },
    {
      "cells": [
        "Galaxy Trend 2 Lite Perfect Like New",
        "In stock",
        "50",
        "TEST",
        "ACCEPTA",
        "4",
        "sl11er",
        "Select",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Select",
        "Not",
        "Me",
        "Enabled",
        "test123",
        "test123",
        "Jkhan",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 23,
      "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_DifferentStoreAddressthanBillingAddres.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_DifferentStoreAddressthanBillingAddres",
  "description": "",
  "id": "reg-fnt-differentstoreaddressthanbillingaddres",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT PayM Different store address than billing address",
  "description": "",
  "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 15,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;",
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
      "line": 23,
      "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;1"
    },
    {
      "cells": [
        "Samsung",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 24,
      "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_MorethanMaxTransaction_Deny.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_MorethanMaxTransaction_Deny",
  "description": "",
  "id": "reg-fnt-morethanmaxtransaction-deny",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM Phones Click and collect scenario for More than Max Transaction",
  "description": "",
  "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 16,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 17,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;",
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
      "line": 23,
      "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;1"
    },
    {
      "cells": [
        "Galaxy S",
        "TEST",
        "NINE",
        "TEST NINE",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 24,
      "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_PayMPhonesAdditionalDepositConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_PayMPhonesAdditionalDepositConfirmation",
  "description": "",
  "id": "reg-fnt-paymphonesadditionaldepositconfirmation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM phones Additional information and Order confirmed",
  "description": "",
  "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 15,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Additional information page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "upon entering Valid details with valid new \u003cUsername2\u003e and card number",
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
  "line": 24,
  "name": "",
  "description": "",
  "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "handset",
        "Username2",
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
      "line": 25,
      "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;1"
    },
    {
      "cells": [
        "TEST",
        "ADDINFOI",
        "TEST ADDINFOI",
        "Galaxy",
        "TEST ACCEPTA",
        "Me",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 26,
      "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_PayMPhonesClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_PayMPhonesClickAndCollect",
  "description": "",
  "id": "reg-fnt-paymphonesclickandcollect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM Phones Click and collect scenario with E2E journey",
  "description": "",
  "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;",
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
      "line": 22,
      "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;1"
    },
    {
      "cells": [
        "Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Select",
        "Select",
        "Select",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 23,
      "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect",
  "description": "",
  "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM phones Straight Order Declined",
  "description": "",
  "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 15,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;",
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
      "line": 21,
      "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;1"
    },
    {
      "cells": [
        "Samsung",
        "TEST",
        "DECLINEA",
        "TEST DECLINEA",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 22,
      "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_AgentShopToAcceptApostrophe.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_AgentShopToAcceptApostrophe",
  "description": "\r\nThis scenario ensures that the Agent shop accepts Apostrophe in First Name and Last Name fields",
  "id": "reg-jan-agentshoptoacceptapostrophe",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "ConsumerShopToAcceptApostrophe",
  "description": "",
  "id": "reg-jan-agentshoptoacceptapostrophe;consumershoptoacceptapostrophe",
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
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
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
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 25,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "reg-jan-agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 27,
      "id": "reg-jan-agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;;1"
    },
    {
      "cells": [
        "Galaxy S8 Plus 64GB Midnight Black",
        "Standard",
        "Base",
        "HomeDelivery",
        "TEST\u0027One",
        "ACCEPTA\u0027Two",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
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
        "No",
        "Connected",
        "Phone"
      ],
      "line": 28,
      "id": "reg-jan-agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_AgentToAcceptTenDigitsPhoneNumber.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_AgentToAcceptTenDigitsPhoneNumber",
  "description": "\r\nThis scenario ensures that the Agent shop accepts 10 digit home number",
  "id": "reg-jan-agenttoaccepttendigitsphonenumber",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "AgentToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "reg-jan-agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber",
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
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select valid \u003cExtras\u003e from extras tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "enter ten digit contact number perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 24,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "reg-jan-agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 26,
      "id": "reg-jan-agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "Galaxy S8 Plus 64GB Midnight Black",
        "Standard",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Me",
        "Enabled",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 27,
      "id": "reg-jan-agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_CFU_MbbSimo30days.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_CFU_MbbSimo30days.feature",
  "description": "\r\nThis scenario ensures that an upgrade customer is able to select a 12 months tablets tariff under the simo tab in upgrade options page",
  "id": "reg-jan-cfu-mbbsimo30days.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_MbbSimo30days",
  "description": "",
  "id": "reg-jan-cfu-mbbsimo30days.feature;cfu-mbbsimo30days",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027Sim only Tariff\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on the \u0027MBB\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the data filters is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the \u0027sorting dropdown\u0027 is displayed just below the toggle buttons sections",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify that the upfront sort options is not present in the \u0027sorting dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see data filters buttons next to existing sort drop-down in Upgrade SIMO MBB/Tablet journey \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on respective \u003cfiltername\u003e data filter in Upgrade SIMO MBB/Tablet journey",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I should see appropriate tariffs based on selected data filter in the Upgrade SIMO MBB/Tablet journey \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see tariffs relevant to the selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e in Upgrade SIMO MBB/Tablet journey",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see appropriate tariffs based on the selected sort option in the Upgrade SIMO MBB/Tablet journey \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on \u0027Place your order\u0027 CTA",
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
  "id": "reg-jan-cfu-mbbsimo30days.feature;cfu-mbbsimo30days;",
  "rows": [
    {
      "cells": [
        "Contract",
        "username",
        "password",
        "filtername",
        "sortoption"
      ],
      "line": 36,
      "id": "reg-jan-cfu-mbbsimo30days.feature;cfu-mbbsimo30days;;1"
    },
    {
      "cells": [
        "30 Days",
        "12342015@gmail.com",
        "test123",
        "low",
        "Monthly data (High to low)"
      ],
      "line": 37,
      "id": "reg-jan-cfu-mbbsimo30days.feature;cfu-mbbsimo30days;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_CFU_PhonesSimo30day.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_CFU_PhonesSimo30day",
  "description": "This scenario ensures that an upgrade customer is able to select a 30 day tariff under the simo tab in upgrade options page",
  "id": "reg-jan-cfu-phonessimo30day",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_PhonesSimo30day",
  "description": "",
  "id": "reg-jan-cfu-phonessimo30day;cfu-phonessimo30day",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Sim only Tariff\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "if Timer is configured then it should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "if \u003cGiftBlock\u003e is configured then display the banner",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify that \u0027Why choose an O2 Pay Monthly sim\u0027 is not displayed in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the data filters is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should see appropriate tariffs based on the selected data filter \u003cTariffsortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the \u0027sorting dropdown\u0027 is displayed just below the toggle buttons sections",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify that the upfront sort options is not present in the \u0027sorting dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "reg-jan-cfu-phonessimo30day;cfu-phonessimo30day;",
  "rows": [
    {
      "cells": [
        "Contract",
        "GiftBlock",
        "username",
        "password",
        "filtername",
        "sortoption",
        "GiftBlock"
      ],
      "line": 33,
      "id": "reg-jan-cfu-phonessimo30day;cfu-phonessimo30day;;1"
    },
    {
      "cells": [
        "12 Days",
        "Configured",
        "in01808o_894013@o2.com",
        "test123",
        "high",
        "Monthly data (Low to High)",
        "dfdf"
      ],
      "line": 34,
      "id": "reg-jan-cfu-phonessimo30day;cfu-phonessimo30day;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_ConsumerToAcceptTenDigitsPhoneNumber.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_ConsumerToAcceptTenDigitsPhoneNumber.feature",
  "description": "\r\nThis scenario ensures that the consumer shop accepts 10 digit home number",
  "id": "reg-jan-consumertoaccepttendigitsphonenumber.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "ConsumerToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "reg-jan-consumertoaccepttendigitsphonenumber.feature;consumertoaccepttendigitsphonenumber",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#provide handset which is already set as delayed delivery"
    }
  ],
  "line": 12,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
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
  "comments": [
    {
      "line": 17,
      "value": "#The below statement also checks for 0 in case of a mobile number"
    }
  ],
  "line": 18,
  "name": "enter a \u003cFirstname\u003e and \u003cSurname\u003e and ten digit home number",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 20,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 26,
      "value": "#Then Verify contents of order confirmation page for Phones containing \u003cStatus\u003e"
    },
    {
      "line": 28,
      "value": "#Step 12 and Step 13 of ALM clubbed together"
    },
    {
      "line": 29,
      "value": "#Close the browser"
    }
  ],
  "line": 30,
  "name": "",
  "description": "",
  "id": "reg-jan-consumertoaccepttendigitsphonenumber.feature;consumertoaccepttendigitsphonenumber;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "Status",
        "color",
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
      "line": 31,
      "id": "reg-jan-consumertoaccepttendigitsphonenumber.feature;consumertoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "iPhone X",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Delayed Delivery",
        "Space Grey",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 32,
      "id": "reg-jan-consumertoaccepttendigitsphonenumber.feature;consumertoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_DrupalPageCookiesPopUp.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_DrupalPageCookiesPopUp.feature",
  "description": "This scenario ensures that when the pop up is displayed then the links in the pop up should launch the respective pages",
  "id": "reg-jan-drupalpagecookiespopup.feature",
  "keyword": "Feature"
});
formatter.uri("Reg_Jan_Existing_OOSForHomeDeliveryandCnC.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_Existing_OOSForHomeDeliveryandCnC.feature",
  "description": "\r\nThis scenario ensures that when an existing customer has selected a device which is out of stock for both Home delivery and click and collect then the updated\r\nerror messages should be displayed",
  "id": "reg-jan-existing-oosforhomedeliveryandcnc.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Existing_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "reg-jan-existing-oosforhomedeliveryandcnc.feature;existing-oosforhomedeliveryandcnc",
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
  "line": 10,
  "name": "I am existing user and I click on Signin button",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-jan-existing-oosforhomedeliveryandcnc.feature;existing-oosforhomedeliveryandcnc;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "username",
        "password"
      ],
      "line": 24,
      "id": "reg-jan-existing-oosforhomedeliveryandcnc.feature;existing-oosforhomedeliveryandcnc;;1"
    },
    {
      "cells": [
        "3T",
        "Soft Gold",
        "01ma92047305@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 25,
      "id": "reg-jan-existing-oosforhomedeliveryandcnc.feature;existing-oosforhomedeliveryandcnc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_FreeSim_CommercialAddress.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_FreeSim_CommercialAddress.feature",
  "description": "",
  "id": "reg-jan-freesim-commercialaddress.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Error message displayed on entering commercial address while doing address lookup for Free Sim Order",
  "description": "",
  "id": "reg-jan-freesim-commercialaddress.feature;error-message-displayed-on-entering-commercial-address-while-doing-address-lookup-for-free-sim-order",
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
  "line": 7,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e in Delivery section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "respective \u003cerror\u003e message displayed in address look up section for using commercial address",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "reg-jan-freesim-commercialaddress.feature;error-message-displayed-on-entering-commercial-address-while-doing-address-lookup-for-free-sim-order;",
  "rows": [
    {
      "cells": [
        "Surfer_Type",
        "sim_type",
        "PostCode",
        "houseNumber",
        "error"
      ],
      "line": 15,
      "id": "reg-jan-freesim-commercialaddress.feature;error-message-displayed-on-entering-commercial-address-while-doing-address-lookup-for-free-sim-order;;1"
    },
    {
      "cells": [
        "Light surfer",
        "iPad",
        "SL1 1XW",
        "10",
        "Looking for a business address? Please use your home address instead."
      ],
      "line": 16,
      "id": "reg-jan-freesim-commercialaddress.feature;error-message-displayed-on-entering-commercial-address-while-doing-address-lookup-for-free-sim-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_FreeSim_InvalidPostCode_DeliverySection_AddressLookUp.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_FreeSim_InvalidPostCode_DeliverySection_AddressLookUp.feature",
  "description": "\r\nThis ensures that a valid error message should get displayed when user enters invalid postcode while doing address look up in the Delivery section",
  "id": "reg-jan-freesim-invalidpostcode-deliverysection-addresslookup.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "This ensures that a valid error message should get displayed when user enters invalid postcode while doing address look up in the Delivery section",
  "description": "",
  "id": "reg-jan-freesim-invalidpostcode-deliverysection-addresslookup.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-while-doing-address-look-up-in-the-delivery-section",
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
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e in Delivery section",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the respective \u003cerror\u003e message should be displayed in address look up section",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "reg-jan-freesim-invalidpostcode-deliverysection-addresslookup.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-while-doing-address-look-up-in-the-delivery-section;",
  "rows": [
    {
      "cells": [
        "Surfer_Type",
        "sim_type",
        "houseNumber",
        "PostCode",
        "error"
      ],
      "line": 16,
      "id": "reg-jan-freesim-invalidpostcode-deliverysection-addresslookup.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-while-doing-address-look-up-in-the-delivery-section;;1"
    },
    {
      "cells": [
        "Light surfer",
        "iPad",
        "100",
        "SL111ER1232",
        "Enter a valid UK postcode"
      ],
      "line": 17,
      "id": "reg-jan-freesim-invalidpostcode-deliverysection-addresslookup.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-while-doing-address-look-up-in-the-delivery-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Jan_FreeSim_InvalidPostCode_EnteredManually.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Jan_FreeSim_InvalidPostCode_EnteredManually.feature",
  "description": "\r\nThis ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section",
  "id": "reg-jan-freesim-invalidpostcode-enteredmanually.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "This ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section",
  "description": "",
  "id": "reg-jan-freesim-invalidpostcode-enteredmanually.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section",
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
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the respective \u003cerror\u003e message should be displayed in enter manually section",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "reg-jan-freesim-invalidpostcode-enteredmanually.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;",
  "rows": [
    {
      "cells": [
        "Surfer_Type",
        "sim_type",
        "Flatnumber",
        "Housename",
        "Address1",
        "Town",
        "PostCode",
        "error"
      ],
      "line": 16,
      "id": "reg-jan-freesim-invalidpostcode-enteredmanually.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;;1"
    },
    {
      "cells": [
        "Light surfer",
        "iPad",
        "26",
        "100",
        "High Street",
        "Slough",
        "SL111ER1232",
        "Enter a valid UK postcode"
      ],
      "line": 17,
      "id": "reg-jan-freesim-invalidpostcode-enteredmanually.feature;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature",
  "description": "",
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \u003cDevice\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 15,
      "value": "#And Verify the copytext of marketing message in \u003cPaymentSectionName\u003e"
    }
  ],
  "line": 16,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And Verify the copytext of marketing message in \u003cAgreementSectionName\u003e"
    }
  ],
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Verify the copytext of marketing message in \u003cReviewSectionName\u003e"
    }
  ],
  "line": 20,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username",
        "tariff",
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
      "line": 24,
      "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Device with 1GB preloaded data sim",
        "Me",
        "Select",
        "Select",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 25,
      "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_October2Release_Reg_October2Release_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_October2Release_Reg_October2Release_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature",
  "description": "",
  "id": "reg-october2release-reg-october2release-cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "reg-october2release-reg-october2release-cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour.feature;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And select a color"
    }
  ],
  "line": 12,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the basket page and choose home delivery option",
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
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 22
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 23
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 24
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 25
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 26
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 27
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 28
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 29
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 31
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 33,
      "value": "# And Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 34,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 40,
      "value": "#Close the browser"
    }
  ],
  "line": 41,
  "name": "",
  "description": "",
  "id": "reg-october2release-reg-october2release-cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour.feature;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "color",
        "CFATariffColour",
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
      "line": 42,
      "id": "reg-october2release-reg-october2release-cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour.feature;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;1"
    },
    {
      "cells": [
        "iPhone X",
        "TEST ACCEPTA",
        "Gold",
        "Gold",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 43,
      "id": "reg-october2release-reg-october2release-cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour.feature;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_TrustevPayMPhones_ClickandCollectE2EjourneyWithAccessoryInAgentShop.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_TrustevPayMPhones_ClickandCollectE2EjourneyWithAccessoryInAgentShop.feature",
  "description": "",
  "id": "reg-trustevpaymphones-clickandcollecte2ejourneywithaccessoryinagentshop.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 6,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustevpaymphones-clickandcollecte2ejourneywithaccessoryinagentshop.feature;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
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
  "line": 7,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Random"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "reg-trustevpaymphones-clickandcollecte2ejourneywithaccessoryinagentshop.feature;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Accessory",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
        "Username",
        "Password",
        "Confirm_Password",
        "Security_Answer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 24,
      "id": "reg-trustevpaymphones-clickandcollecte2ejourneywithaccessoryinagentshop.feature;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "Random",
        "Standard",
        "iPhone 7 Evo Elite Brushed Black",
        "TEST",
        "ACCEPTA",
        "32",
        "SL11ER",
        "TEST ACCEPTA",
        "test123",
        "test123",
        "Anything",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Not",
        "Not",
        "Me",
        "Enabled",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 25,
      "id": "reg-trustevpaymphones-clickandcollecte2ejourneywithaccessoryinagentshop.feature;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    },
    {
      "line": 5,
      "value": "#@AgentsRegression"
    }
  ],
  "line": 8,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
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
  "line": 10,
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "performs Acquisition for New user",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Accessory",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
        "Username",
        "Password",
        "Confirm_Password",
        "Security_Answer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "Password",
        "confirmPassword",
        "SecurityAnswer",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 27,
      "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "Galaxy S8 Plus 64GB Midnight Black",
        "Random",
        "iPhone 7 Evo Elite Brushed Black",
        "TEST",
        "ACCEPTA",
        "32",
        "SL11ER",
        "TEST ACCEPTA",
        "test123",
        "test123",
        "Anything",
        "Select",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Me",
        "Enabled",
        "test123",
        "test123",
        "Jkhan",
        "No",
        "Connected",
        "Phone"
      ],
      "line": 28,
      "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Accessory",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode",
        "Username",
        "Password",
        "Confirm_Password",
        "Security_Answer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "Consumer",
        "status",
        "Password",
        "confirmPassword",
        "SecurityAnswer",
        "MBBStatus",
        "DeviceType",
        "DeviceModule"
      ],
      "line": 23,
      "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "tablet",
        "Random",
        "iPhone 7 Evo Elite Brushed Black",
        "TEST",
        "ACCEPTA",
        "32",
        "SL11ER",
        "TEST ACCEPTA",
        "test123",
        "test123",
        "Anything",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Select",
        "Me",
        "Enabled",
        "test123",
        "test123",
        "Jkhan",
        "No",
        "Connected",
        "Tablet"
      ],
      "line": 24,
      "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Trustev_PayMPhonesHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_PayMPhonesHomeDeliveryWithAccessory.feature",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Trustev PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory.feature;trustev-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory.feature;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;",
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
      "line": 23,
      "id": "reg-trustev-paymphoneshomedeliverywithaccessory.feature;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Galaxy S9",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Someone",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 24,
      "id": "reg-trustev-paymphoneshomedeliverywithaccessory.feature;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Trustev_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_PayMPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 6,
  "name": "Trustev PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 16,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "name": "Continue to Review page and review the order for Trustev details",
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
  "comments": [
    {
      "line": 24,
      "value": "#Close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;",
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
      "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "iPhone X",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Select",
        "Select",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 27,
      "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_Trustev_PayMTabletsHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_PayMTabletsHomeDeliveryWithAccessory",
  "description": "",
  "id": "reg-trustev-paymtabletshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Trustev PayM Tablets Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available \u003cDevice\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
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
      "line": 23,
      "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 24,
      "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_VOLTE_PayMPhonesClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_VOLTE_PayMPhonesClickAndCollect.feature",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Volte PayM Phones Click and collect scenario with E2E journey Click and collect",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect.feature;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect.feature;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;",
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
      "line": 22,
      "id": "reg-volte-paymphonesclickandcollect.feature;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;1"
    },
    {
      "cells": [
        "Galaxy",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Someone",
        "Select",
        "Not",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 23,
      "id": "reg-volte-paymphonesclickandcollect.feature;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose some Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
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
      "line": 23,
      "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Sony",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Someone",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Not",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 24,
      "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory.feature",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory.feature",
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
  "name": "Volte PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory.feature;volte-paym-phones-home-delivery-e2e-journey-without-accessory",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory.feature;volte-paym-phones-home-delivery-e2e-journey-without-accessory;",
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
      "line": 23,
      "id": "reg-volte-paymphoneshomedeliverywithoutaccessory.feature;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "Galaxy",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Not",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected"
      ],
      "line": 24,
      "id": "reg-volte-paymphoneshomedeliverywithoutaccessory.feature;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
});