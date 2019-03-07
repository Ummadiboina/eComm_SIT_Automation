$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("03_CFA_PAYM_MBB_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList.feature");
formatter.feature({
  "line": 1,
  "name": "03_CFA_PAYM_MBB_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYM MBB\u0027 and lands on delivery page and\r\nenters a postal code, if more than one address is matching corresponding to entered postcode then customer should be\r\nable to select one from the dropdown list",
  "id": "03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "03_CFA_PAYM_MBB_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
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
  "comments": [
    {
      "line": 18,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 19,
  "name": "input \u003cpostcode\u003e \u003cHouseNumber\u003e \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and verify copy text message below home address",
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
formatter.step({
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "postcode",
        "HouseNumber",
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
      "line": 29,
      "id": "03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;1"
    },
    {
      "cells": [
        "Random Device",
        "SL11ER",
        "",
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
      "line": 30,
      "id": "03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96146413671,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "03_CFA_PAYM_MBB_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;03-cfa-paym-mbb-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2",
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
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
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
  "comments": [
    {
      "line": 18,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 19,
  "name": "input SL11ER  TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Select with No for Connected in delivery page when GDPR is Enabled and No",
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
  "line": 21,
  "name": "land on the payment page and verify copy text message below home address",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    5
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
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1032394782,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 149961432779,
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
  "duration": 15441590521,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 166324001857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13990301591,
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
  "duration": 39692527196,
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
  "duration": 40068563568,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 58446577966,
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
  "duration": 35918771269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SL11ER",
      "offset": 6
    },
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "TEST",
      "offset": 14
    },
    {
      "val": "ACCEPTA",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs(String,String,String,String)"
});
formatter.result({
  "duration": 140822496010,
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
  "duration": 60504295676,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyCopyTextinPaymentPage()"
});
formatter.result({
  "duration": 3168270363,
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
  "duration": 163030231299,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 81160227419,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 60124665067,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5577604911,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20029399583,
  "status": "passed"
});
formatter.after({
  "duration": 20093305663,
  "status": "passed"
});
formatter.uri("13_CFA_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList.feature");
formatter.feature({
  "line": 1,
  "name": "13_CFA_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYM MBB SIMO\u0027 and lands on delivery page\r\nand enters a postal code, if more than one address is matching corresponding to entered postcode then customer should\r\nbe able to select one from the dropdown list",
  "id": "13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "13_CFA_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select \u0027MBB\u0027 tab",
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
  "comments": [
    {
      "line": 18,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 19,
  "name": "input \u003cpostcode\u003e \u003cHouseNumber\u003e \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page",
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
  "id": "13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;",
  "rows": [
    {
      "cells": [
        "Contract",
        "postcode",
        "HouseNumber",
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
      "id": "13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;1"
    },
    {
      "cells": [
        "30 Days",
        "SL11ER",
        "",
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
      "id": "13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 95768828784,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "13_CFA_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;13-cfa-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select \u0027MBB\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on different 30 Days  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap CapMyBill £60 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
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
  "comments": [
    {
      "line": 18,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 19,
  "name": "input SL11ER  TEST and ACCEPTA and other valid details in Delivery page",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Not with No for Connected in delivery page when GDPR is Enabled and No",
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
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    5
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
  "duration": 970615777,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 187620229444,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectMBBTab()"
});
formatter.result({
  "duration": 3139646743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30 Days ",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_different_Months_Tariff_in_Tab(String)"
});
formatter.result({
  "duration": 11236275852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30 Days",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_Random_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String)"
});
formatter.result({
  "duration": 17327981231,
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
  "duration": 39761893465,
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
  "duration": 68715808385,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 24935827113,
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
  "duration": 34486267603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SL11ER",
      "offset": 6
    },
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "TEST",
      "offset": 14
    },
    {
      "val": "ACCEPTA",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs(String,String,String,String)"
});
formatter.result({
  "duration": 140560968908,
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
  "duration": 60869347951,
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
  "duration": 118046515729,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 58207429228,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5588389898,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20079924269,
  "status": "passed"
});
formatter.after({
  "duration": 20022108710,
  "status": "passed"
});
formatter.uri("15_CFU_PAYM_Tablets_Validate_Copy_HouseNumberOrNameOptional_And_Send_Blank_HouseNumber_And_PostalCode_In_DeliveryPage.feature");
formatter.feature({
  "line": 1,
  "name": "15_CFU_PAYM_Tablets_Validate_Copy_HouseNumberOrNameOptional_And_Send_Blank_HouseNumber_And_PostalCode_In_DeliveryPage",
  "description": "\r\nThis Scenario ensures that when an upgrade  Customer selects \u0027PAYM Tablets\u0027 and lands on \u0027Payment page\u0027 and clicks on\r\n\u0027Use a different address link\u0027 for billing address then customer should see the copy \u0027House number or name (optional)\u0027\r\ninstead of \u0027House number or name*\u0027 and having blank values for house number and postal code fields and clicks on \u0027Find\r\nAddress\u0027 CTA to search address then validation error should be present only for postal code field and not for house\r\nnumber/name field  as its optional now",
  "id": "15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "15_CFU_PAYM_Tablets_Validate_Copy_HouseNumberOrNameOptional_And_Send_Blank_HouseNumber_And_PostalCode_In_DeliveryPage",
  "description": "",
  "id": "15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a \u003cTablet\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select a tariff \u003ctariff\u003e",
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
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "enter \u003cHouseNumber\u003e and \u003cPostCode\u003e in Delivery section to set different delivery address",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 40,
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey"
    },
    {
      "line": 41,
      "value": "#And Continue to Agreements page and confirm all the agreement checks"
    },
    {
      "line": 42,
      "value": "#And Continue to Review page and review the order"
    },
    {
      "line": 43,
      "value": "#Then order confirmation is displayed"
    },
    {
      "line": 44,
      "value": "#Then Validate consumer GDPR consent section is hidden in Order confirmation page or not"
    }
  ],
  "line": 46,
  "name": "",
  "description": "",
  "id": "15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "HouseNumber",
        "PostCode",
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
      "line": 47,
      "id": "15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;;1"
    },
    {
      "cells": [
        "inavl0ww_555130@o2.com",
        "test123",
        "",
        "",
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
      "line": 48,
      "id": "15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94787884270,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "15_CFU_PAYM_Tablets_Validate_Copy_HouseNumberOrNameOptional_And_Send_Blank_HouseNumber_And_PostalCode_In_DeliveryPage",
  "description": "",
  "id": "15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;15-cfu-paym-tablets-validate-copy-housenumberornameoptional-and-send-blank-housenumber-and-postalcode-in-deliverypage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Signin using valid inavl0ww_555130@o2.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a iPad 9.7 inch 2018 device from Recommended devices section",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select a tariff ",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £10 when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "no option should be selected",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify that Confirm CTA is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify that copy text \u0027Your Sim Card\u0027section",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verfiy that two option are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify that \u0027Sim Swap Form\u0027link is diplayed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \u0027Sim Swap Form\u0027 I should be opned with a new tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Select a \u0027I dont need a new sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \u0027Continue\u0027 button on upgrade page at extra section",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify that the option selected by the user in \u0027Your sim card\u0027 section in upgrade options page is retained",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "perform enterCode in OTAC page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and Yes",
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
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "enter  and  in Delivery section to set different delivery address",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 32918294541,
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
  "duration": 30255281844,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 56713630679,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 28485855159,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 13454992963,
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
  "duration": 21947495583,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 10092008597,
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
  "duration": 11114951866,
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
  "duration": 39728114579,
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
  "duration": 68651422164,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 374903715,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "duration": 440193900,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "duration": 2385050409,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "duration": 376757723,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "duration": 505572830,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "duration": 20406284738,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "duration": 20040401886,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_dont_need_a_new_sim_option()"
});
formatter.result({
  "duration": 2771361475,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 390929871,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3507950785,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnContinueUpgrade_extraSection()"
});
formatter.result({
  "duration": 9713671640,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 41140839133,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 430261108,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
});
formatter.result({
  "duration": 460927038,
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
  "duration": 33908189945,
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
  "duration": 52204866385,
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
  "duration": 68545816566,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Use_a_different_delivery_address_link()"
});
formatter.result({
  "duration": 15444245523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 6
    },
    {
      "val": "",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.enterHouseNumAndPostCode(String,String)"
});
formatter.result({
  "duration": 52827044841,
  "status": "passed"
});
formatter.after({
  "duration": 19936715147,
  "status": "passed"
});
formatter.uri("20_CFA_PAYG_Free_SIM_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList.feature");
formatter.feature({
  "line": 1,
  "name": "20_CFA_PAYG_Free_SIM_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "\r\nThis Scenario ensures that when the Customer in acquisition journey selects \u0027PAYG Free SIM\u0027 and lands on delivery page\r\nand enters a postal code, if more than one address is matching corresponding to entered postcode then customer should be able to select one from the dropdown list",
  "id": "20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "20_CFA_PAYG_Free_SIM_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify asterisk is displayed against mandatory fields of \"PAYG Free sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter delivery details \u003cHouseNumber\u003e \u003cPostCode\u003e in Delivery Page and info \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
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
  "id": "20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "CheckBox",
        "HouseNumber",
        "PostCode"
      ],
      "line": 17,
      "id": "20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "No",
        "",
        "SL11ER"
      ],
      "line": 18,
      "id": "20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45293854185,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "20_CFA_PAYG_Free_SIM_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;20-cfa-payg-free-sim-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify asterisk is displayed against mandatory fields of \"PAYG Free sim\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter delivery details  SL11ER in Delivery Page and info TEST and ACCEPTA for GDPR No",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 820236953,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 166801612115,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 17721303278,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk_PAYG_sim_journey()"
});
formatter.result({
  "duration": 403641114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PAYG Free sim",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 20452294156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "SL11ER",
      "offset": 24
    },
    {
      "val": "TEST",
      "offset": 57
    },
    {
      "val": "ACCEPTA",
      "offset": 66
    },
    {
      "val": "No",
      "offset": 83
    }
  ],
  "location": "E2EOrderPlaced_Steps.setDeliveryAddress_and_ACCEPTA_new(String,String,String,String,String)"
});
formatter.result({
  "duration": 150249433102,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5610446839,
  "status": "passed"
});
formatter.after({
  "duration": 20145647946,
  "status": "passed"
});
formatter.uri("24_CFU_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList.feature");
formatter.feature({
  "line": 1,
  "name": "24_CFU_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "\r\nThis Scenario ensures that When a MBB Streamlined SIMO Upgrade(SSU)  customer lands on \u0027Review page\u0027 and opt for\r\n\u0027I need a new sim\u0027 option and then clicks on \u0027Use a different address link\u0027 for billing address and enters a postal\r\ncode, if more than one address is matching corresponding to entered postcode then customer should be able to select\r\none from the dropdown list",
  "id": "24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "24_CFU_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist",
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
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027MBB\u0027 button",
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
  "name": "Select \u0027I need a new sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "enter \u003cHouseNumber\u003e and \u003cPostCode\u003e in Delivery section to set different delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "line": 30,
  "name": "",
  "description": "",
  "id": "24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;",
  "rows": [
    {
      "cells": [
        "username",
        "BSCstatus",
        "HouseNumber",
        "PostCode",
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
      "line": 31,
      "id": "24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;1"
    },
    {
      "cells": [
        "gby22862_163765@o2.com",
        "Enabled",
        "",
        "SL11ER",
        "CapMyBill",
        "£100",
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
      "line": 32,
      "id": "24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94747193958,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "24_CFU_MBB_SIMO_MoreThanOneAddressMatching_PostCode_Then_Customer_Should_Select_One_From_DropdownList",
  "description": "",
  "id": "24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;24-cfu-mbb-simo-morethanoneaddressmatching-postcode-then-customer-should-select-one-from-dropdownlist;;2",
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
  "name": "Signin using valid gby22862_163765@o2.com and test123 credentials",
  "matchedColumns": [
    0,
    6
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
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027MBB\u0027 button",
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
  "name": "Choose your bill cap CapMyBill £100 when BSC is Enabled",
  "matchedColumns": [
    1,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select \u0027I need a new sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "enter  and SL11ER in Delivery section to set different delivery address",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox in SIMO review page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 34662034777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gby22862_163765@o2.com",
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
  "duration": 29559607558,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 56946097824,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 28380576671,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "duration": 5364686480,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.phones_button_should_be_selected_by_default()"
});
formatter.result({
  "duration": 359583551,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_button()"
});
formatter.result({
  "duration": 6498349655,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "duration": 26234141382,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "duration": 12823029058,
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
  "duration": 39432950243,
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
  "duration": 68255901364,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectINeedNewSimOption()"
});
formatter.result({
  "duration": 2404229913,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Use_a_different_delivery_address_link()"
});
formatter.result({
  "duration": 12986424047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 6
    },
    {
      "val": "SL11ER",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.enterHouseNumAndPostCode(String,String)"
});
formatter.result({
  "duration": 134314131643,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnIAgreeToTheTermsAndConditionCheckbox()"
});
formatter.result({
  "duration": 11462648494,
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
  "duration": 95576752148,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5549058661,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20015436217,
  "status": "passed"
});
formatter.after({
  "duration": 19860821452,
  "status": "passed"
});
});