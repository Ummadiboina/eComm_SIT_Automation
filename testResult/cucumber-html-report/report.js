$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_Reg_AFA_checkout_delivery_validate_10_digit_and_11_contact_number.feature");
formatter.feature({
  "line": 1,
  "name": "01_Reg_AFA_checkout_delivery_validate_10_digit_and_11_contact_number",
  "description": "\r\nThis scenario ensures that the Agent shop accepts 10 digit home number",
  "id": "01-reg-afa-checkout-delivery-validate-10-digit-and-11-contact-number",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "AgentToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "01-reg-afa-checkout-delivery-validate-10-digit-and-11-contact-number;agenttoaccepttendigitsphonenumber",
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
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Add your Bill Spend Cap \u003cBillCapAmount\u003e in agent deal builder when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Dont cap my bill when BSC is \u003cBSCstatus\u003e"
    }
  ],
  "line": 16,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "enter ten digit contact number perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 28,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 30,
  "name": "",
  "description": "",
  "id": "01-reg-afa-checkout-delivery-validate-10-digit-and-11-contact-number;agenttoaccepttendigitsphonenumber;",
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
      "line": 31,
      "id": "01-reg-afa-checkout-delivery-validate-10-digit-and-11-contact-number;agenttoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "iPhone 8 Plus 64GB Space Grey",
        "Refresh",
        "Base",
        "Enabled",
        "£5",
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
      "line": 32,
      "id": "01-reg-afa-checkout-delivery-validate-10-digit-and-11-contact-number;agenttoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40123158191,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "AgentToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "01-reg-afa-checkout-delivery-validate-10-digit-and-11-contact-number;agenttoaccepttendigitsphonenumber;;2",
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
  "name": "Select a valid PayM iPhone 8 Plus 64GB Space Grey",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select valid Base from extras tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Add your Bill Spend Cap £5 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Dont cap my bill when BSC is \u003cBSCstatus\u003e"
    }
  ],
  "line": 16,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate deal summary for applied Bill Spend Cap £5 when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "enter ten digit contact number perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA",
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
  "line": 20,
  "name": "Register the customer with valid TEST, ACCEPTA, 14, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    6,
    7,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose Business preferences Select Not Select Not and Channel Preferences Select Select Not Not for Me when GDPR Enabled Connected Phone for AFA journey",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    22,
    23,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3204606922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 11538053622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus 64GB Space Grey",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 35323810579,
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
  "duration": 23858250478,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14735190673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Base",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_valid_Random_from_extras_tab(String)"
});
formatter.result({
  "duration": 3407076965,
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
  "duration": 20589618625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£5",
      "offset": 24
    },
    {
      "val": "Enabled",
      "offset": 61
    }
  ],
  "location": "E2EOrderPlaced_Steps.addBillCap_AgentDealBuilder(String,String)"
});
formatter.result({
  "duration": 41115937823,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 18772466413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£5",
      "offset": 49
    },
    {
      "val": "Enabled",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourCapInAgentDealSummary(String,String)"
});
formatter.result({
  "duration": 17540455929,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 23485180587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 69
    },
    {
      "val": "ACCEPTA",
      "offset": 75
    },
    {
      "val": "14",
      "offset": 84
    },
    {
      "val": "SL11UP",
      "offset": 88
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 105
    }
  ],
  "location": "E2EOrderPlaced_Steps.enter_ten_digit_contact_number_perform_the_credit_checks(String,String,String,String,String)"
});
formatter.result({
  "duration": 98064853777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 33
    },
    {
      "val": "ACCEPTA",
      "offset": 39
    },
    {
      "val": "14",
      "offset": 48
    },
    {
      "val": "SL11UP",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 36725506420,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16079989935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 28
    },
    {
      "val": "Not",
      "offset": 35
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Select",
      "offset": 74
    },
    {
      "val": "Select",
      "offset": 81
    },
    {
      "val": "Not",
      "offset": 88
    },
    {
      "val": "Not",
      "offset": 92
    },
    {
      "val": "Me",
      "offset": 100
    },
    {
      "val": "Enabled",
      "offset": 113
    },
    {
      "val": "Connected",
      "offset": 121
    },
    {
      "val": "Phone",
      "offset": 131
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 85174568537,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000512454,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 57420932341,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5814936768,
  "status": "passed"
});
formatter.after({
  "duration": 20222194578,
  "status": "passed"
});
formatter.uri("05_Reg_CFA_ Cookie_pop_up_for_the_Shop_pages.feature");
formatter.feature({
  "line": 1,
  "name": "05_Reg_CFA_ Cookie_pop_up_for_the_Shop_pages",
  "description": "This scenario ensures that when the pop up is displayed then the links in the pop up should launch the respective pages",
  "id": "05-reg-cfa--cookie-pop-up-for-the-shop-pages",
  "keyword": "Feature"
});
formatter.before({
  "duration": 42982694759,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "DrupalPageCookiesPopUp",
  "description": "",
  "id": "05-reg-cfa--cookie-pop-up-for-the-shop-pages;drupalpagecookiespopup",
  "type": "scenario",
  "keyword": "Scenario",
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
  "name": "a cookies pop up should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027cookie policy\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the \u0027cookie policy\u0027 page should be opened",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "launch the shop phones page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \u0027manage cookies\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the \u0027manage cookies\u0027 page should be opened",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "launch the shop phones page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \u0027close icon\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The Shop home page should be displayed without the cookies",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 962696656,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.a_cookies_pop_up_should_be_displayed()"
});
formatter.result({
  "duration": 917252085,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCookiePolicyLink()"
});
formatter.result({
  "duration": 20770552849,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened()"
});
formatter.result({
  "duration": 28474479,
  "error_message": "java.lang.AssertionError: Unable to find \u0027cookie policy\u0027 page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened(E2EOrderPlaced_Steps.java:9980)\r\n\tat ✽.Then the \u0027cookie policy\u0027 page should be opened(05_Reg_CFA_ Cookie_pop_up_for_the_Shop_pages.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnManageCookiesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theManageCookiesPageShouldBeOpened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCloseIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theShopHomePageShouldBeDisplayedWithoutTheCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20811341448,
  "status": "passed"
});
formatter.uri("06_Reg_CFA_PayG_Freesim_Phones_delivery_page_mark_mandatory_fields_with_asterisk.feature");
formatter.feature({
  "line": 1,
  "name": "06_Reg_CFA_PayG_Freesim_Phones_delivery_page_mark_mandatory_fields_with_asterisk",
  "description": "",
  "id": "06-reg-cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_PAYG_sims_Asterisk validation",
  "description": "",
  "id": "06-reg-cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk;cfa-payg-sims-asterisk-validation",
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
  "id": "06-reg-cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk;cfa-payg-sims-asterisk-validation;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "CheckBox"
      ],
      "line": 17,
      "id": "06-reg-cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk;cfa-payg-sims-asterisk-validation;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "No"
      ],
      "line": 18,
      "id": "06-reg-cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk;cfa-payg-sims-asterisk-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39340909139,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "CFA_PAYG_sims_Asterisk validation",
  "description": "",
  "id": "06-reg-cfa-payg-freesim-phones-delivery-page-mark-mandatory-fields-with-asterisk;cfa-payg-sims-asterisk-validation;;2",
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
  "name": "Enter details in Delivery Page TEST and ACCEPTA for GDPR No",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 910923203,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 92393124973,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 45390686568,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk_PAYG_sim_journey()"
});
formatter.result({
  "duration": 530330356,
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
  "duration": 604607912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 31
    },
    {
      "val": "ACCEPTA",
      "offset": 40
    },
    {
      "val": "No",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 71629265527,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 23807967319,
  "status": "passed"
});
formatter.after({
  "duration": 22077141709,
  "status": "passed"
});
formatter.uri("07_Reg_CFA_PayG_Freesim_To_Show_BigBundle_DataRollOver_In_DeliveryPage.feature");
formatter.feature({
  "line": 1,
  "name": "07_Reg_CFA_PayG_Freesim_To_Show_BigBundle_DataRollOver_In_DeliveryPage",
  "description": "This scenario ensures that when the customer on acquisition journey selects Big Bundle \u0027Pay As You Go\u0027 Sim\r\nthen Data Roll over copy text is displayed in the tile info and Delivery page",
  "id": "07-reg-cfa-payg-freesim-to-show-bigbundle-datarollover-in-deliverypage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_PayG_Simo_To_Show_BigBundle_DataRollOver_In_Delivery_Page",
  "description": "",
  "id": "07-reg-cfa-payg-freesim-to-show-bigbundle-datarollover-in-deliverypage;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page",
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
  "name": "Validate Your order section in Delivery page \u003cTariff_Value\u003e",
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
  "id": "07-reg-cfa-payg-freesim-to-show-bigbundle-datarollover-in-deliverypage;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;",
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
      "id": "07-reg-cfa-payg-freesim-to-show-bigbundle-datarollover-in-deliverypage;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "BigBundle",
        "£15",
        "5GB",
        "No"
      ],
      "line": 16,
      "id": "07-reg-cfa-payg-freesim-to-show-bigbundle-datarollover-in-deliverypage;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 52366241296,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CFA_PayG_Simo_To_Show_BigBundle_DataRollOver_In_Delivery_Page",
  "description": "",
  "id": "07-reg-cfa-payg-freesim-to-show-bigbundle-datarollover-in-deliverypage;cfa-payg-simo-to-show-bigbundle-datarollover-in-delivery-page;;2",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a pay as you go data roll over BigBundle and validate Data Roll over copy for £15 and 5GB",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate Your order section in Delivery page £15",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter details in Delivery Page TEST and ACCEPTA for GDPR No",
  "matchedColumns": [
    0,
    1,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 904171760,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 90373126516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BigBundle",
      "offset": 38
    },
    {
      "val": "£15",
      "offset": 85
    },
    {
      "val": "5GB",
      "offset": 93
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundleHavingDataRollOver(String,String,String)"
});
formatter.result({
  "duration": 35642865030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£15",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.validateYourOrderSectionDeliveryPage(String)"
});
formatter.result({
  "duration": 10163846988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 31
    },
    {
      "val": "ACCEPTA",
      "offset": 40
    },
    {
      "val": "No",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 70970616339,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2437792724,
  "status": "passed"
});
formatter.after({
  "duration": 20094364136,
  "status": "passed"
});
formatter.uri("08_Reg_CFA_Phones_checkout_delivery_validate_10_digit_contact_number.feature");
formatter.feature({
  "line": 1,
  "name": "08_Reg_CFA_Phones_checkout_delivery_validate_10_digit_contact_number",
  "description": "\r\nThis scenario ensures that the consumer shop accepts 10 digit home number",
  "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "ConsumerToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber",
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
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
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate Basket Page for applied Bill Spend Cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#The below statement also checks for 0 in case of a mobile number"
    }
  ],
  "line": 23,
  "name": "enter a \u003cFirstname\u003e and \u003cSurname\u003e and ten digit home number",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 25,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 32,
      "value": "#Step 12 and Step 13 of ALM clubbed together"
    },
    {
      "line": 33,
      "value": "#Close the browser"
    }
  ],
  "line": 34,
  "name": "",
  "description": "",
  "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "line": 35,
      "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "Galaxy J3 2017",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£5",
        "Black",
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
      "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38709633078,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "ConsumerToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM Galaxy J3 2017",
  "matchedColumns": [
    0
  ],
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select Black color of the connected device",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to View tariff page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap CapMyBill £5 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate Basket Page for applied Bill Spend Cap CapMyBill £5 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#The below statement also checks for 0 in case of a mobile number"
    }
  ],
  "line": 23,
  "name": "enter a TEST and ACCEPTA and ten digit home number",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 25,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    17,
    8
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
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Choose Me Enabled Business preferences Not Not Select Not And Channel Preferences Not Select Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
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
  "duration": 763930227,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 59924039980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy J3 2017",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 31391678210,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 22292076636,
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
  "duration": 315074437,
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
  "duration": 19670159590,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 29513057321,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16183186121,
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
  "duration": 37969098441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£5",
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
  "duration": 70693588801,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40632927027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " CapMyBill",
      "offset": 47
    },
    {
      "val": "£5",
      "offset": 58
    },
    {
      "val": "Enabled",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_BasketPage(String,String,String)"
});
formatter.result({
  "duration": 26349790736,
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
  "duration": 34994968889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 8
    },
    {
      "val": "ACCEPTA",
      "offset": 17
    }
  ],
  "location": "E2EOrderPlaced_Steps.enter_a_digit_home_number(String,String)"
});
formatter.result({
  "duration": 84032065551,
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
  "duration": 78822972886,
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
  "duration": 165485229426,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51494361233,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 58760903986,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3492253023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 43
    },
    {
      "val": "Select",
      "offset": 47
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "Select",
      "offset": 86
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96701114588,
  "status": "passed"
});
formatter.after({
  "duration": 20116528137,
  "status": "passed"
});
formatter.uri("102_FR_Upfront_CFA_PayMTablets_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "102_FR_Upfront_CFA_PayMTablets_Till_TnE.feature",
  "description": "",
  "id": "102-fr-upfront-cfa-paymtablets-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "102_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "102-fr-upfront-cfa-paymtablets-till-tne.feature;102-fr-upfront-cfa-paymtablets-till-tne",
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
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "102-fr-upfront-cfa-paymtablets-till-tne.feature;102-fr-upfront-cfa-paymtablets-till-tne;",
  "rows": [
    {
      "cells": [
        "Device",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 24,
      "id": "102-fr-upfront-cfa-paymtablets-till-tne.feature;102-fr-upfront-cfa-paymtablets-till-tne;;1"
    },
    {
      "cells": [
        "Galaxy Tab A 2016 7.0",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "avg",
        "avg",
        "avg"
      ],
      "line": 25,
      "id": "102-fr-upfront-cfa-paymtablets-till-tne.feature;102-fr-upfront-cfa-paymtablets-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40932649778,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "102_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "102-fr-upfront-cfa-paymtablets-till-tne.feature;102-fr-upfront-cfa-paymtablets-till-tne;;2",
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
  "name": "select any available Galaxy Tab A 2016 7.0 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Build your plan with avg avg and avg",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 869478464,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 62582324645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Tab A 2016 7.0",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 61778420508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 21
    },
    {
      "val": "avg",
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
  "duration": 261108033357,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 37624277946,
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
  "duration": 35729867944,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 539231771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 1099649351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37457757205,
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
  "duration": 78810220985,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 2058918084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 128080496018,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51381583073,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 57538034512,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3482677064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96849402856,
  "status": "passed"
});
formatter.after({
  "duration": 19999883211,
  "status": "passed"
});
formatter.uri("111_FR_Upfront_CFA_PayMTablets_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "111_FR_Upfront_CFA_PayMTablets_Till_TnE.feature",
  "description": "",
  "id": "111-fr-upfront-cfa-paymtablets-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "111_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "111-fr-upfront-cfa-paymtablets-till-tne.feature;111-fr-upfront-cfa-paymtablets-till-tne",
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
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "111-fr-upfront-cfa-paymtablets-till-tne.feature;111-fr-upfront-cfa-paymtablets-till-tne;",
  "rows": [
    {
      "cells": [
        "Device",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 24,
      "id": "111-fr-upfront-cfa-paymtablets-till-tne.feature;111-fr-upfront-cfa-paymtablets-till-tne;;1"
    },
    {
      "cells": [
        "Galaxy Tab A 2016 7.0",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "max",
        "min",
        "max"
      ],
      "line": 25,
      "id": "111-fr-upfront-cfa-paymtablets-till-tne.feature;111-fr-upfront-cfa-paymtablets-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34155882360,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "111_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "111-fr-upfront-cfa-paymtablets-till-tne.feature;111-fr-upfront-cfa-paymtablets-till-tne;;2",
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
  "name": "select any available Galaxy Tab A 2016 7.0 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Build your plan with max min and max",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 886057846,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 57167808600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Tab A 2016 7.0",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 70761076692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "max",
      "offset": 21
    },
    {
      "val": "min",
      "offset": 25
    },
    {
      "val": "max",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "duration": 1251617971361,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39354667900,
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
  "duration": 33770979659,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 369802642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 780854666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37664343163,
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
  "duration": 78802592212,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 1635299251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 121160138065,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51507425278,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55465664857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3509609933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96669044789,
  "status": "passed"
});
formatter.after({
  "duration": 20292888848,
  "status": "passed"
});
formatter.uri("112_FR_Term_CFA_PayMTablets_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "112_FR_Upfront_CFA_PayMTablets_Till_TnE.feature",
  "description": "",
  "id": "112-fr-upfront-cfa-paymtablets-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "112_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "112-fr-upfront-cfa-paymtablets-till-tne.feature;112-fr-upfront-cfa-paymtablets-till-tne",
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
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "112-fr-upfront-cfa-paymtablets-till-tne.feature;112-fr-upfront-cfa-paymtablets-till-tne;",
  "rows": [
    {
      "cells": [
        "Device",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 24,
      "id": "112-fr-upfront-cfa-paymtablets-till-tne.feature;112-fr-upfront-cfa-paymtablets-till-tne;;1"
    },
    {
      "cells": [
        "Galaxy Tab A 2016 7.0",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "min",
        "max",
        "max"
      ],
      "line": 25,
      "id": "112-fr-upfront-cfa-paymtablets-till-tne.feature;112-fr-upfront-cfa-paymtablets-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39536951917,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "112_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "112-fr-upfront-cfa-paymtablets-till-tne.feature;112-fr-upfront-cfa-paymtablets-till-tne;;2",
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
  "name": "select any available Galaxy Tab A 2016 7.0 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Build your plan with min max and max",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 884971712,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58311588120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Tab A 2016 7.0",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 60180326569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "min",
      "offset": 21
    },
    {
      "val": "max",
      "offset": 25
    },
    {
      "val": "max",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "duration": 131671822235,
  "error_message": "java.lang.AssertionError:  Not Matched \u003d \u003d\u003dThe Monthly upfront price from the PD page and TnE FR Calc Upfront value are not matched  + ie, ::: £0.00\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.ConnectedDeviceDetailsPageAction.flexibleReressh_CFA(ConnectedDeviceDetailsPageAction.java:909)\r\n\tat steps.E2EOrderPlaced_Steps.fr_PDpage(E2EOrderPlaced_Steps.java:11193)\r\n\tat ✽.And Build your plan with min max and max(112_FR_Term_CFA_PayMTablets_Till_TnE.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
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
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
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
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20244548980,
  "status": "passed"
});
formatter.uri("113_FR_Term_CFA_PayMTablets_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "113_FR_Upfront_CFA_PayMTablets_Till_TnE.feature",
  "description": "",
  "id": "113-fr-upfront-cfa-paymtablets-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "113_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "113-fr-upfront-cfa-paymtablets-till-tne.feature;113-fr-upfront-cfa-paymtablets-till-tne",
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
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "113-fr-upfront-cfa-paymtablets-till-tne.feature;113-fr-upfront-cfa-paymtablets-till-tne;",
  "rows": [
    {
      "cells": [
        "Device",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 24,
      "id": "113-fr-upfront-cfa-paymtablets-till-tne.feature;113-fr-upfront-cfa-paymtablets-till-tne;;1"
    },
    {
      "cells": [
        "Galaxy Tab A 2016 7.0",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "avg",
        "avg",
        "min"
      ],
      "line": 25,
      "id": "113-fr-upfront-cfa-paymtablets-till-tne.feature;113-fr-upfront-cfa-paymtablets-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39672081647,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "113_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "113-fr-upfront-cfa-paymtablets-till-tne.feature;113-fr-upfront-cfa-paymtablets-till-tne;;2",
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
  "name": "select any available Galaxy Tab A 2016 7.0 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Build your plan with avg avg and min",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 916779975,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58152198210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Tab A 2016 7.0",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 61616545124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 21
    },
    {
      "val": "avg",
      "offset": 25
    },
    {
      "val": "min",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "duration": 200688343931,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 41667741358,
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
  "duration": 34583231704,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 377334445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 826711537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37692875683,
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
  "duration": 78842937014,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 4360244733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 118509339196,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51386284345,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54911786378,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3617135438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96536720109,
  "status": "passed"
});
formatter.after({
  "duration": 20167011252,
  "status": "passed"
});
formatter.uri("114_FR_Term_CFA_PayMTablets_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "114_FR_Upfront_CFA_PayMTablets_Till_TnE.feature",
  "description": "",
  "id": "114-fr-upfront-cfa-paymtablets-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "114_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "114-fr-upfront-cfa-paymtablets-till-tne.feature;114-fr-upfront-cfa-paymtablets-till-tne",
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
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "114-fr-upfront-cfa-paymtablets-till-tne.feature;114-fr-upfront-cfa-paymtablets-till-tne;",
  "rows": [
    {
      "cells": [
        "Device",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 24,
      "id": "114-fr-upfront-cfa-paymtablets-till-tne.feature;114-fr-upfront-cfa-paymtablets-till-tne;;1"
    },
    {
      "cells": [
        "Galaxy Tab A 2016 7.0",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "max",
        "max",
        "min"
      ],
      "line": 25,
      "id": "114-fr-upfront-cfa-paymtablets-till-tne.feature;114-fr-upfront-cfa-paymtablets-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39394201552,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "114_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "114-fr-upfront-cfa-paymtablets-till-tne.feature;114-fr-upfront-cfa-paymtablets-till-tne;;2",
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
  "name": "select any available Galaxy Tab A 2016 7.0 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Build your plan with max max and min",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 962958900,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 59271197664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Tab A 2016 7.0",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 65350317700,
  "status": "passed"
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
      "val": "min",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "duration": 462336859052,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40695600396,
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
  "duration": 33091058310,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 342769971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 726601756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37251788458,
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
  "duration": 78700043672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 1631700393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 125004979087,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 43756757636,
  "error_message": "java.lang.AssertionError: Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.AgreementsPageConfirmation(E2EOrderPlaced_Steps.java:2225)\r\n\tat ✽.And Continue to Agreements page and confirm all the agreement checks(114_FR_Term_CFA_PayMTablets_Till_TnE.feature:18)\r\n",
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
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20827274954,
  "status": "passed"
});
formatter.uri("115_FR_Data_CFA_PayMTablets_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "115_FR_Upfront_CFA_PayMTablets_Till_TnE.feature",
  "description": "",
  "id": "115-fr-upfront-cfa-paymtablets-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "115_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "115-fr-upfront-cfa-paymtablets-till-tne.feature;115-fr-upfront-cfa-paymtablets-till-tne",
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
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "115-fr-upfront-cfa-paymtablets-till-tne.feature;115-fr-upfront-cfa-paymtablets-till-tne;",
  "rows": [
    {
      "cells": [
        "Device",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 24,
      "id": "115-fr-upfront-cfa-paymtablets-till-tne.feature;115-fr-upfront-cfa-paymtablets-till-tne;;1"
    },
    {
      "cells": [
        "Galaxy Tab A 2016 7.0",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "avg",
        "max",
        "avg"
      ],
      "line": 25,
      "id": "115-fr-upfront-cfa-paymtablets-till-tne.feature;115-fr-upfront-cfa-paymtablets-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35818568186,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "115_FR_Upfront_CFA_PayMTablets_Till_TnE",
  "description": "",
  "id": "115-fr-upfront-cfa-paymtablets-till-tne.feature;115-fr-upfront-cfa-paymtablets-till-tne;;2",
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
  "name": "select any available Galaxy Tab A 2016 7.0 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Build your plan with avg max and avg",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 847469120,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 173430296311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Tab A 2016 7.0",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 41305349485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
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
  "duration": 324197959526,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 36962329303,
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
  "duration": 33580857002,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 373645694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 768327141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37434949098,
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
  "duration": 78737122640,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 3463250871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 116832021880,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51370685634,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 52954802453,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3457845328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96452835804,
  "status": "passed"
});
formatter.after({
  "duration": 18481201280,
  "status": "passed"
});
formatter.uri("116_FR_UpfrontAndTerm_CFA_Phones_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "116_FR_Upfront_CFA_Phones_Till_TnE.feature",
  "description": "",
  "id": "116-fr-upfront-cfa-phones-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "116_FR_Upfront_CFA_Phones_Till_TnE",
  "description": "",
  "id": "116-fr-upfront-cfa-phones-till-tne.feature;116-fr-upfront-cfa-phones-till-tne",
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
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "line": 15,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
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
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "116-fr-upfront-cfa-phones-till-tne.feature;116-fr-upfront-cfa-phones-till-tne;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 27,
      "id": "116-fr-upfront-cfa-phones-till-tne.feature;116-fr-upfront-cfa-phones-till-tne;;1"
    },
    {
      "cells": [
        "iPhone 8 Plus",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "min",
        "max",
        "min"
      ],
      "line": 28,
      "id": "116-fr-upfront-cfa-phones-till-tne.feature;116-fr-upfront-cfa-phones-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37299334163,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "116_FR_Upfront_CFA_Phones_Till_TnE",
  "description": "",
  "id": "116-fr-upfront-cfa-phones-till-tne.feature;116-fr-upfront-cfa-phones-till-tne;;2",
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
  "name": "I choose PayM iPhone 8 Plus",
  "matchedColumns": [
    0
  ],
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
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Build your plan with min max and min",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "line": 15,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
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
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 853411891,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61374669541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 30794683146,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 26172045903,
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
  "duration": 264231046,
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
  "duration": 21924480238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "min",
      "offset": 21
    },
    {
      "val": "max",
      "offset": 25
    },
    {
      "val": "min",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "duration": 79849775519,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 36919373391,
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
  "duration": 32981872284,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 364971132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 764375793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37457505933,
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
  "duration": 78975087928,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 3385461162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 122459085765,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51294972286,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54024118972,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3492298322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 97323977622,
  "status": "passed"
});
formatter.after({
  "duration": 19960085192,
  "status": "passed"
});
formatter.uri("119_FR_All_CFA_Phones_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "101_FR_Upfront_CFA_Phones_Till_TnE.feature",
  "description": "",
  "id": "101-fr-upfront-cfa-phones-till-tne.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "101_FR_Upfront_CFA_Phones_Till_TnE",
  "description": "",
  "id": "101-fr-upfront-cfa-phones-till-tne.feature;101-fr-upfront-cfa-phones-till-tne",
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
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "line": 15,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
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
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "101-fr-upfront-cfa-phones-till-tne.feature;101-fr-upfront-cfa-phones-till-tne;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
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
        "upFront",
        "term",
        "data"
      ],
      "line": 27,
      "id": "101-fr-upfront-cfa-phones-till-tne.feature;101-fr-upfront-cfa-phones-till-tne;;1"
    },
    {
      "cells": [
        "iPhone 8 Plus",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
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
        "Connected",
        "max",
        "max",
        "max"
      ],
      "line": 28,
      "id": "101-fr-upfront-cfa-phones-till-tne.feature;101-fr-upfront-cfa-phones-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38265343723,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "101_FR_Upfront_CFA_Phones_Till_TnE",
  "description": "",
  "id": "101-fr-upfront-cfa-phones-till-tne.feature;101-fr-upfront-cfa-phones-till-tne;;2",
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
  "name": "I choose PayM iPhone 8 Plus",
  "matchedColumns": [
    0
  ],
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
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Build your plan with max max and max",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
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
  "line": 15,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    16,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
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
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    6,
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
  "duration": 835006359,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 60443891212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 30992862092,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 76545848731,
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
  "duration": 331763175,
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
  "duration": 22047558092,
  "status": "passed"
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
      "val": "max",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.fr_PDpage(String,String,String)"
});
formatter.result({
  "duration": 1816991187060,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39411035745,
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
  "duration": 33278724867,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 371169068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 748347795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 37886717879,
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
  "duration": 78885495846,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 1939583836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 120010220065,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51168696901,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55539717683,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3456380161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96745519742,
  "status": "passed"
});
formatter.after({
  "duration": 20175341465,
  "status": "passed"
});
formatter.uri("11_Reg_CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk.feature");
formatter.feature({
  "line": 1,
  "name": "11_Reg_CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk",
  "description": "",
  "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk",
  "description": "",
  "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk",
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
  "name": "select \u003ccolor\u003e color of the connected device",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
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
  "comments": [
    {
      "line": 21,
      "value": "#And input the below details in Delivery page"
    },
    {
      "line": 22,
      "value": "#| HouseNumber           | 5            |"
    },
    {
      "line": 23,
      "value": "#| Post Code             | BS7 0NP      |"
    },
    {
      "line": 24,
      "value": "#| Title                 | Mr           |"
    },
    {
      "line": 25,
      "value": "#| FirstName             | Test         |"
    },
    {
      "line": 26,
      "value": "#| Surname               | Accepta      |"
    },
    {
      "line": 27,
      "value": "#| Contact Number        | 07822837733  |"
    },
    {
      "line": 28,
      "value": "#| Password              | TesterSit123 |"
    },
    {
      "line": 29,
      "value": "#| Security Answer       | Sit Testers  |"
    },
    {
      "line": 30,
      "value": "#| Date of Birth - Date  | 22           |"
    },
    {
      "line": 31,
      "value": "#| Date of Birth - Month | 10           |"
    },
    {
      "line": 32,
      "value": "#| Date of Birth - Year  | 1990         |"
    }
  ],
  "line": 33,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariffAmt",
        "dataValue",
        "color",
        "Firstname",
        "Surname",
        "consumer",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;1"
    },
    {
      "cells": [
        "iPhone X",
        "£39",
        "8GB",
        "Space Grey",
        "Test",
        "Accepta",
        "Me",
        "Enabled",
        "CapMyBill",
        "£10",
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
      "line": 42,
      "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42630495347,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk",
  "description": "",
  "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;2",
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
  "name": "I choose PayM iPhone X",
  "matchedColumns": [
    0
  ],
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
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    3
  ],
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap CapMyBill £10 when BSC is Enabled",
  "matchedColumns": [
    7,
    8,
    9
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify asterisk is displayed against mandatory fields of \"Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    18,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And input the below details in Delivery page"
    },
    {
      "line": 22,
      "value": "#| HouseNumber           | 5            |"
    },
    {
      "line": 23,
      "value": "#| Post Code             | BS7 0NP      |"
    },
    {
      "line": 24,
      "value": "#| Title                 | Mr           |"
    },
    {
      "line": 25,
      "value": "#| FirstName             | Test         |"
    },
    {
      "line": 26,
      "value": "#| Surname               | Accepta      |"
    },
    {
      "line": 27,
      "value": "#| Contact Number        | 07822837733  |"
    },
    {
      "line": 28,
      "value": "#| Password              | TesterSit123 |"
    },
    {
      "line": 29,
      "value": "#| Security Answer       | Sit Testers  |"
    },
    {
      "line": 30,
      "value": "#| Date of Birth - Date  | 22           |"
    },
    {
      "line": 31,
      "value": "#| Date of Birth - Month | 10           |"
    },
    {
      "line": 32,
      "value": "#| Date of Birth - Year  | 1990         |"
    }
  ],
  "line": 33,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
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
  "name": "Choose Me Enabled Business preferences Select Not Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    6,
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
  "duration": 966283482,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 58035184869,
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
  "duration": 30822655434,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 24090623007,
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
  "duration": 218628633,
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
  "duration": 17717238495,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34236741838,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16069394731,
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
  "duration": 37845931403,
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
  "duration": 70395257250,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 41367470054,
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
  "duration": 32684695171,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 383994227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 761328672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 6
    },
    {
      "val": "Accepta",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 38103169643,
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
  "duration": 78852562519,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 1948231855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payments page",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(String)"
});
formatter.result({
  "duration": 118425905413,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51496911826,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54822480604,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3817028700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96811950872,
  "status": "passed"
});
formatter.after({
  "duration": 19994739204,
  "status": "passed"
});
formatter.uri("12_Reg_Consumer_Existing_PAYG_Phone_BigBundle_To_Show_£15_Data_Roll_Over_Copy_On_Basket_Page_Package_summary_CC_Order_confirmation.feature");
formatter.feature({
  "line": 1,
  "name": "12_Reg_Consumer_Existing_PAYG_Phone_BigBundle_To_Show_£15_Data_Roll_Over_Copy_On_Basket_Page_Package_summary_CC_Order_confirmation",
  "description": "This scenario ensures that when the customer on Existing customer new aquisition journey selects \u0027Freesim\u0027 for Phones then\r\nData Roll over copy text is displayed in the tile info, Your package section and Basket page",
  "id": "12-reg-consumer-existing-payg-phone-bigbundle-to-show-£15-data-roll-over-copy-on-basket-page-package-summary-cc-order-confirmation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_New_PayG_To_Show_DataRollover_In_Basket_Page",
  "description": "",
  "id": "12-reg-consumer-existing-payg-phone-bigbundle-to-show-£15-data-roll-over-copy-on-basket-page-package-summary-cc-order-confirmation;cfu-new-payg-to-show-datarollover-in-basket-page",
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
  "comments": [
    {
      "line": 11,
      "value": "#And I choose PayM \u003chandset\u003e"
    }
  ],
  "line": 12,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page and validate Data Roll over copy for \u003cTariff_Value\u003e and \u003cData\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
  "line": 19,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate all the Basket contents",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "scroll to an element in DeliveryPage for taking screenshots",
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
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027"
    }
  ],
  "line": 25,
  "name": "land on the existing customer payment page and input \u003cUsername\u003e and other details for Click and collect order",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "12-reg-consumer-existing-payg-phone-bigbundle-to-show-£15-data-roll-over-copy-on-basket-page-package-summary-cc-order-confirmation;cfu-new-payg-to-show-datarollover-in-basket-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "color",
        "Username",
        "Tariff_Value",
        "Data",
        "consumer",
        "BSCstatus",
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
      "line": 32,
      "id": "12-reg-consumer-existing-payg-phone-bigbundle-to-show-£15-data-roll-over-copy-on-basket-page-package-summary-cc-order-confirmation;cfu-new-payg-to-show-datarollover-in-basket-page;;1"
    },
    {
      "cells": [
        "ina_feb3593@stf.ref.o2.co.uk",
        "test123",
        "iPhone 8 Plus",
        "Space Grey",
        "TEST ACCEPTA",
        "£15",
        "5GB",
        "Me",
        "Disabled",
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
      "line": 33,
      "id": "12-reg-consumer-existing-payg-phone-bigbundle-to-show-£15-data-roll-over-copy-on-basket-page-package-summary-cc-order-confirmation;cfu-new-payg-to-show-datarollover-in-basket-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43573782443,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "CFU_New_PayG_To_Show_DataRollover_In_Basket_Page",
  "description": "",
  "id": "12-reg-consumer-existing-payg-phone-bigbundle-to-show-£15-data-roll-over-copy-on-basket-page-package-summary-cc-order-confirmation;cfu-new-payg-to-show-datarollover-in-basket-page;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid ina_feb3593@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayG iPhone 8 Plus",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And I choose PayM \u003chandset\u003e"
    }
  ],
  "line": 12,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    3
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page and validate Data Roll over copy for £15 and 5GB",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Click on Dont Select Cap My Bill CTA when BSC is \u003cBSCstatus\u003e"
    }
  ],
  "line": 19,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate all the Basket contents",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "scroll to an element in DeliveryPage for taking screenshots",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    17,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#And land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027"
    }
  ],
  "line": 25,
  "name": "land on the existing customer payment page and input TEST ACCEPTA and other details for Click and collect order",
  "matchedColumns": [
    4
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
  "name": "Choose Me Enabled Business preferences Select Not Select Not And Channel Preferences Select Select Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    7,
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
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 50233750634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ina_feb3593@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 29313240501,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 70893069410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYG_Handset(String)"
});
formatter.result({
  "duration": 115315382334,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 10830036473,
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
  "duration": 271157318,
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
  "duration": 22349546187,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 37935152947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£15",
      "offset": 74
    },
    {
      "val": "5GB",
      "offset": 82
    }
  ],
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_validate_Data_Roll_Over(String,String)"
});
formatter.result({
  "duration": 19188145036,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_validate_Data_Roll_Over(E2EOrderPlaced_Steps.java:1100)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page and validate Data Roll over copy for £15 and 5GB(12_Reg_Consumer_Existing_PAYG_Phone_BigBundle_To_Show_£15_Data_Roll_Over_Copy_On_Basket_Page_Package_summary_CC_Order_confirmation.feature:16)\r\n",
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_contents()"
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
  "location": "E2EOrderPlaced_Steps.scrollToAnElement()"
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
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.existingCustomerPaymentPage_ClickAndCollect(String)"
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
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Select",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 57
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "Select",
      "offset": 92
    },
    {
      "val": "Not",
      "offset": 99
    },
    {
      "val": "Not",
      "offset": 103
    },
    {
      "val": "No",
      "offset": 107
    },
    {
      "val": "Connected",
      "offset": 110
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20554492504,
  "status": "passed"
});
formatter.uri("130_FR_UpFront_AFA_Tablets_E2E.feature");
formatter.feature({
  "line": 1,
  "name": "130_FR_UpFront_AFA_Tablets_E2E",
  "description": "",
  "id": "130-fr-upfront-afa-tablets-e2e",
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
  "id": "130-fr-upfront-afa-tablets-e2e;successful-completion-of-a-tablet-journey",
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
  "name": "In Agent Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
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
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "130-fr-upfront-afa-tablets-e2e;successful-completion-of-a-tablet-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "upFront",
        "term",
        "data",
        "DeliveryType",
        "BSCstatus",
        "BillCapAmount",
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
        "DeviceModule",
        "Password",
        "confirmPassword",
        "SecurityAnswer"
      ],
      "line": 24,
      "id": "130-fr-upfront-afa-tablets-e2e;successful-completion-of-a-tablet-journey;;1"
    },
    {
      "cells": [
        "iPad Pro 10.5 inch 256GB Space Grey",
        "Refresh",
        "avg",
        "avg",
        "avg",
        "HomeDelivery",
        "Enabled",
        "£100",
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
        "Tablet",
        "test123",
        "test123",
        "vinudeep"
      ],
      "line": 25,
      "id": "130-fr-upfront-afa-tablets-e2e;successful-completion-of-a-tablet-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38448765545,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Successful completion of a Tablet Journey",
  "description": "",
  "id": "130-fr-upfront-afa-tablets-e2e;successful-completion-of-a-tablet-journey;;2",
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
  "name": "Select a valid PayM iPad Pro 10.5 inch 256GB Space Grey",
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
  "name": "In Agent Build your plan with avg avg and avg",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add your Bill Spend Cap £100 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    6,
    7
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
  "name": "Validate deal summary for applied Bill Spend Cap £100 when BSC is Enabled",
  "matchedColumns": [
    6,
    7
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 18, SL11UP and valid TEST ACCEPTA",
  "matchedColumns": [
    8,
    9,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Register customer with valid test123, test123, vinudeep in delivery page",
  "matchedColumns": [
    26,
    27,
    28
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
  "name": "Choose Business preferences Select Select Select Not and Channel Preferences Select Select Select Select for Me when GDPR Enabled Connected Tablet for AFA journey",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    24,
    25,
    13,
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3679249283,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 13373701258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad Pro 10.5 inch 256GB Space Grey",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 34807612707,
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
  "duration": 23891254585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 30
    },
    {
      "val": "avg",
      "offset": 34
    },
    {
      "val": "avg",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.Agent_fr_DealBuilder(String,String,String)"
});
formatter.result({
  "duration": 221855645385,
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
  "duration": 20560206298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£100",
      "offset": 24
    },
    {
      "val": "Enabled",
      "offset": 63
    }
  ],
  "location": "E2EOrderPlaced_Steps.addBillCap_AgentDealBuilder(String,String)"
});
formatter.result({
  "duration": 53322416194,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 18780633122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£100",
      "offset": 49
    },
    {
      "val": "Enabled",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourCapInAgentDealSummary(String,String)"
});
formatter.result({
  "duration": 17543420944,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 23485677116,
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
      "val": "18",
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
  "duration": 87714125901,
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
  "duration": 56054972753,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16079195419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select",
      "offset": 28
    },
    {
      "val": "Select",
      "offset": 35
    },
    {
      "val": "Select",
      "offset": 42
    },
    {
      "val": "Not",
      "offset": 49
    },
    {
      "val": "Select",
      "offset": 77
    },
    {
      "val": "Select",
      "offset": 84
    },
    {
      "val": "Select",
      "offset": 91
    },
    {
      "val": "Select",
      "offset": 98
    },
    {
      "val": "Me",
      "offset": 109
    },
    {
      "val": "Enabled",
      "offset": 122
    },
    {
      "val": "Connected",
      "offset": 130
    },
    {
      "val": "Tablet",
      "offset": 140
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 85356679140,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000365937,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "duration": 30576466458,
  "status": "passed"
});
formatter.after({
  "duration": 18295663108,
  "status": "passed"
});
formatter.uri("133_FR_UpFront_AFU_PAYM_Dongle_payByCard.feature");
formatter.feature({
  "line": 1,
  "name": "133_FR_UpFront_AFU_PAYM_Dongle_payByCard",
  "description": "",
  "id": "133-fr-upfront-afu-paym-dongle-paybycard",
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
  "id": "133-fr-upfront-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey",
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
  "name": "In Agent Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
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
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "133-fr-upfront-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "upFront",
        "term",
        "data",
        "BSCstatus",
        "BillCapAmount",
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
      "line": 17,
      "id": "133-fr-upfront-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07731705509",
        "dongle",
        "Refresh",
        "max",
        "avg",
        "avg",
        "Enabled",
        "£100",
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
      "line": 18,
      "id": "133-fr-upfront-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40045474300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "133-fr-upfront-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2",
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
  "name": "performs Upgrade for 07731705509",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a valid PayM dongle",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "In Agent Build your plan with max avg and avg",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add your Bill Spend Cap £100 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3171382685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07731705509",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 95719206913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dongle",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 32754421865,
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
  "duration": 24024024125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "max",
      "offset": 30
    },
    {
      "val": "avg",
      "offset": 34
    },
    {
      "val": "avg",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.Agent_fr_DealBuilder(String,String,String)"
});
formatter.result({
  "duration": 189691753096,
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
  "duration": 20505111094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£100",
      "offset": 24
    },
    {
      "val": "Enabled",
      "offset": 63
    }
  ],
  "location": "E2EOrderPlaced_Steps.addBillCap_AgentDealBuilder(String,String)"
});
formatter.result({
  "duration": 53369050947,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 18824156698,
  "status": "passed"
});
formatter.after({
  "duration": 17958697177,
  "status": "passed"
});
formatter.uri("134_FR_UpFront_AFU_PAYM_Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "134_FR_UpFront_AFU_PAYM_Tablet",
  "description": "",
  "id": "134-fr-upfront-afu-paym-tablet",
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
  "name": "Successful completion of a PAY M Tablet Acqusistion Journey",
  "description": "",
  "id": "134-fr-upfront-afu-paym-tablet;successful-completion-of-a-pay-m-tablet-acqusistion-journey",
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
  "name": "In Agent Build your plan with \u003cupFront\u003e \u003cterm\u003e and \u003cdata\u003e",
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
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "134-fr-upfront-afu-paym-tablet;successful-completion-of-a-pay-m-tablet-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "upFront",
        "term",
        "data",
        "BSCstatus",
        "BillCapAmount",
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
      "line": 17,
      "id": "134-fr-upfront-afu-paym-tablet;successful-completion-of-a-pay-m-tablet-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07743800890",
        "iPad Pro 10.5 inch 256GB Space Grey",
        "Refresh",
        "avg",
        "avg",
        "min",
        "Enabled",
        "£10",
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
      "line": 18,
      "id": "134-fr-upfront-afu-paym-tablet;successful-completion-of-a-pay-m-tablet-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44083837589,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful completion of a PAY M Tablet Acqusistion Journey",
  "description": "",
  "id": "134-fr-upfront-afu-paym-tablet;successful-completion-of-a-pay-m-tablet-acqusistion-journey;;2",
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
  "name": "performs Upgrade for 07743800890",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a valid PayM iPad Pro 10.5 inch 256GB Space Grey",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "In Agent Build your plan with avg avg and min",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add your Bill Spend Cap £10 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3403846167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07743800890",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 95778696200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad Pro 10.5 inch 256GB Space Grey",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 34688851784,
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
  "duration": 23878307684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 30
    },
    {
      "val": "avg",
      "offset": 34
    },
    {
      "val": "min",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.Agent_fr_DealBuilder(String,String,String)"
});
formatter.result({
  "duration": 160905149953,
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
  "duration": 20432702156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£10",
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
  "duration": 43095604572,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 18769692152,
  "status": "passed"
});
formatter.after({
  "duration": 18896228011,
  "status": "passed"
});
formatter.uri("14_Reg_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "14_Reg_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "\r\nThis scenario ensures that when the customer on acquisition journey selects \u0027Freesim\u0027 for Phones  and enters the postcode in Delivery page, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others",
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
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    },
    {
      "line": 11,
      "value": "#And I enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e"
    },
    {
      "line": 12,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 13,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;",
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
      "line": 18,
      "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;1"
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
        "Disabled",
        "No",
        "Connected",
        "Yes"
      ],
      "line": 19,
      "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40482246008,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;2",
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
  "name": "navigate to PayG SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a pay as you go bundle",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    },
    {
      "line": 11,
      "value": "#And I enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e"
    },
    {
      "line": 12,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 13,
  "name": "Enter details in Delivery Page TEST and ACCEPTA for GDPR Yes",
  "matchedColumns": [
    0,
    1,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Choose Me Disabled Business preferences Not Not Not Not And Channel Preferences Not Not Not Not No Connected",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 1086386765,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 110527299515,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 12256452217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 31
    },
    {
      "val": "ACCEPTA",
      "offset": 40
    },
    {
      "val": "Yes",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 67671019579,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2433506581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Disabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 40
    },
    {
      "val": "Not",
      "offset": 44
    },
    {
      "val": "Not",
      "offset": 48
    },
    {
      "val": "Not",
      "offset": 52
    },
    {
      "val": "Not",
      "offset": 80
    },
    {
      "val": "Not",
      "offset": 84
    },
    {
      "val": "Not",
      "offset": 88
    },
    {
      "val": "Not",
      "offset": 92
    },
    {
      "val": "No",
      "offset": 96
    },
    {
      "val": "Connected",
      "offset": 99
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30431787312,
  "status": "passed"
});
formatter.after({
  "duration": 19897034914,
  "status": "passed"
});
formatter.uri("15_Reg_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "15_Reg_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "\r\nThis scenario ensures that when the customer on acquisition journey selects \u0027Phones\u0027 with click and collect enters the postcode in payment page, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others",
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select \u003ccolor\u003e color of the connected device",
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
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 21,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR to click and collect",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
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
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Firstname",
        "Surname",
        "Username",
        "consumer",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "line": 30,
      "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;1"
    },
    {
      "cells": [
        "iPhone 8 Plus",
        "Space Grey",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Enabled",
        "CapMyBill",
        "£15",
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
      "line": 31,
      "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41658113376,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM iPhone 8 Plus",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    1
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
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
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
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR"
    }
  ],
  "line": 21,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR to click and collect",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    17,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "matchedColumns": [
    4
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
  "name": "Choose Me Enabled Business preferences Select Select Select Not And Channel Preferences Select Select Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    5,
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
  "duration": 984983462,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 59352946860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 31046353753,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 23440959818,
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
  "duration": 270671761,
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
  "duration": 21881762857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 32552008446,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16124483564,
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
  "duration": 37819906654,
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
  "duration": 70342258224,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40326310208,
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
  "duration": 32926106430,
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
  "duration": 36795442625,
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
  "duration": 78975318674,
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
  "duration": 159021219074,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51408604772,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 56952904815,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3577770243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Select",
      "offset": 46
    },
    {
      "val": "Select",
      "offset": 53
    },
    {
      "val": "Not",
      "offset": 60
    },
    {
      "val": "Select",
      "offset": 88
    },
    {
      "val": "Select",
      "offset": 95
    },
    {
      "val": "Not",
      "offset": 102
    },
    {
      "val": "Not",
      "offset": 106
    },
    {
      "val": "No",
      "offset": 110
    },
    {
      "val": "Connected",
      "offset": 113
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 97292676505,
  "status": "passed"
});
formatter.after({
  "duration": 20051344520,
  "status": "passed"
});
formatter.uri("18_Reg_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "18_Reg_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "\r\nThis scenario ensures that when the customer on upgrade journey selects \u0027Tablet\u0027 proceeds till Delivery page and enters the postcode, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "18-reg-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes",
  "description": "",
  "id": "18-reg-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes",
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tablets link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select PayM Tablet \u003cTablet\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Select a \u003cTablet\u003e device from Recommended devices section"
    },
    {
      "line": 16,
      "value": "#And Click on device \u0027Confirm CTA\u0027"
    },
    {
      "line": 17,
      "value": "#And Click on View all Tariffs link in upgrade options page"
    }
  ],
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
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e in Delivery section",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select the Home address",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter cardDetails in payment page input \u003cUsername\u003e and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And land on the payment page and input and other details and click \u0027Continue\u0027 on next step for otac"
    }
  ],
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
  "comments": [
    {
      "line": 32,
      "value": "#And Click on \u0027I agree to the terms and condition\u0027 checkbox"
    }
  ],
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
  "id": "18-reg-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Tablet",
        "BSCstatus",
        "BillCap",
        "CapAmount",
        "color",
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
      "line": 37,
      "id": "18-reg-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;1"
    },
    {
      "cells": [
        "rbmuatlokesh_donotusee5798@stf.ref.o2.co.uk",
        "test123",
        "iPad 9.7 inch 2018",
        "Enabled",
        "CapMyBill",
        "£60",
        "Gold",
        "9.99upfront60.00amonth",
        "11",
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
      "line": 38,
      "id": "18-reg-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39248967482,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes",
  "description": "",
  "id": "18-reg-cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid rbmuatlokesh_donotusee5798@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tablets link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select PayM Tablet iPad 9.7 inch 2018",
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
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Select a \u003cTablet\u003e device from Recommended devices section"
    },
    {
      "line": 16,
      "value": "#And Click on device \u0027Confirm CTA\u0027"
    },
    {
      "line": 17,
      "value": "#And Click on View all Tariffs link in upgrade options page"
    }
  ],
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap CapMyBill £60 when BSC is Enabled",
  "matchedColumns": [
    3,
    4,
    5
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
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enter a 11 and an SL11Er in Delivery section",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    21,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select the Home address",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter cardDetails in payment page input Test Accepta and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And land on the payment page and input and other details and click \u0027Continue\u0027 on next step for otac"
    }
  ],
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
  "comments": [
    {
      "line": 32,
      "value": "#And Click on \u0027I agree to the terms and condition\u0027 checkbox"
    }
  ],
  "line": 33,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Choose Me Enabled Business preferences Not Not Select Not And Channel Preferences Not Select Not Select No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 46948492684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rbmuatlokesh_donotusee5798@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 28932726221,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 61041845359,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 8072581290,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11375986068,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tablets()"
});
formatter.result({
  "duration": 75165879819,
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
  "duration": 28808448983,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 114849507258,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16238982056,
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
  "duration": 37843974310,
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
  "duration": 70258746936,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 91816004145,
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
  "duration": 98626466139,
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
  "duration": 17060188249,
  "error_message": "java.lang.AssertionError: Unable to perform action in OTAC Page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(E2EOrderPlaced_Steps.java:6090)\r\n\tat ✽.And perform enterCode in OTAC page(18_Reg_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Use_a_different_delivery_address_link()"
});
formatter.result({
  "status": "skipped"
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
  "location": "E2EOrderPlaced_Steps.selectTheHomeAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Accepta",
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
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 43
    },
    {
      "val": "Select",
      "offset": 47
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "Select",
      "offset": 86
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Select",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 104
    },
    {
      "val": "Connected",
      "offset": 107
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18628271054,
  "status": "passed"
});
formatter.uri("27_Reg_AFU_SavedBasket.feature");
formatter.feature({
  "line": 1,
  "name": "27_Reg_AFU_SavedBasket",
  "description": "",
  "id": "27-reg-afu-savedbasket",
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
  "id": "27-reg-afu-savedbasket;afu-saved-basket-functionality",
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
  "comments": [
    {
      "line": 13,
      "value": "# And Select a valid Accessory \u003cDevice\u003e"
    }
  ],
  "line": 14,
  "name": "choose to email basket to save the basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify email is sent successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "27-reg-afu-savedbasket;afu-saved-basket-functionality;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "BSCstatus",
        "BillCapAmount"
      ],
      "line": 18,
      "id": "27-reg-afu-savedbasket;afu-saved-basket-functionality;;1"
    },
    {
      "cells": [
        "07801801173",
        "Samsung Galaxy S8 Plus 64GB Midnight Black",
        "Refresh",
        "Enabled",
        "No Spend Cap"
      ],
      "line": 19,
      "id": "27-reg-afu-savedbasket;afu-saved-basket-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44135170430,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "AFU_Saved Basket functionality",
  "description": "",
  "id": "27-reg-afu-savedbasket;afu-saved-basket-functionality;;2",
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
  "name": "performs Upgrade for 07801801173",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a valid PayM Samsung Galaxy S8 Plus 64GB Midnight Black",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
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
  "name": "Add your Bill Spend Cap No Spend Cap in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# And Select a valid Accessory \u003cDevice\u003e"
    }
  ],
  "line": 14,
  "name": "choose to email basket to save the basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify email is sent successfully",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3280623920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07801801173",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 97426777080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy S8 Plus 64GB Midnight Black",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 35198318386,
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
  "duration": 23939219668,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14881744100,
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
  "duration": 20574369217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Spend Cap",
      "offset": 24
    },
    {
      "val": "Enabled",
      "offset": 71
    }
  ],
  "location": "E2EOrderPlaced_Steps.addBillCap_AgentDealBuilder(String,String)"
});
formatter.result({
  "duration": 36875743997,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_email_basket_to_save_the_basket()"
});
formatter.result({
  "duration": 12910779872,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyEmailSentConfirmation()"
});
formatter.result({
  "duration": 30740905883,
  "status": "passed"
});
formatter.after({
  "duration": 19830807278,
  "status": "passed"
});
formatter.uri("37_Reg_CFA_Cover_me_copy_update_on_basket_summary.feature");
formatter.feature({
  "line": 1,
  "name": "37_Reg_CFA_Cover_me_copy_update_on_basket_summary",
  "description": "",
  "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on acquisition journey selects insurance,\r\nthen the customer should be able to see \u0027Insurance\u0027 copy text in the SSC checkout Your order section instead of \u0027Cover Me\u0027\r\n\r\nselect tablet\r\nand view tariff\r\nselect insurance\r\ngo to basket\r\ngo to checkout\r\nverify insurance copy text is displayed on delivery page\r\ncontinue to payment page\r\nverify insurance copy text is displayed on payment page\r\ncontinue to next step\r\nverify insurance copy text is displayed on the agreement page\r\ncontinue to next step\r\nverify insurance copy text is displayed on your order section\r\ncontinue to next step\r\ndownload pdf and  verify insurance copy text is displayed on pdf",
  "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary;",
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
  "comments": [
    {
      "line": 25,
      "value": "#And I choose \u003ctabletname\u003e Tablet"
    }
  ],
  "line": 26,
  "name": "Select PayM Tablet \u003ctabletname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select an insurance",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#And Click on \"Buy Now\" button for \u003ctabletname\u003e"
    }
  ],
  "line": 37,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "verify cover me is present in Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 43,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 53,
      "value": "#And pdf content"
    }
  ],
  "line": 54,
  "name": "",
  "description": "",
  "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary;;",
  "rows": [
    {
      "cells": [
        "tabletname",
        "color",
        "capacity",
        "Status",
        "handset",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "line": 55,
      "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary;;;1"
    },
    {
      "cells": [
        "iPad 9.7 inch 2018",
        "Space Grey",
        "32GB",
        "In Stock",
        "Samsung",
        "Enabled",
        "CapMyBill",
        "£60",
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
      "line": 56,
      "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44530197996,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "",
  "description": "This scenario ensures that when the customer on acquisition journey selects insurance,\r\nthen the customer should be able to see \u0027Insurance\u0027 copy text in the SSC checkout Your order section instead of \u0027Cover Me\u0027\r\n\r\nselect tablet\r\nand view tariff\r\nselect insurance\r\ngo to basket\r\ngo to checkout\r\nverify insurance copy text is displayed on delivery page\r\ncontinue to payment page\r\nverify insurance copy text is displayed on payment page\r\ncontinue to next step\r\nverify insurance copy text is displayed on the agreement page\r\ncontinue to next step\r\nverify insurance copy text is displayed on your order section\r\ncontinue to next step\r\ndownload pdf and  verify insurance copy text is displayed on pdf",
  "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary;;;2",
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
  "comments": [
    {
      "line": 25,
      "value": "#And I choose \u003ctabletname\u003e Tablet"
    }
  ],
  "line": 26,
  "name": "Select PayM Tablet iPad 9.7 inch 2018",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "select 32GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Choose your bill cap CapMyBill £60 when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select an insurance",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#And Click on \"Buy Now\" button for \u003ctabletname\u003e"
    }
  ],
  "line": 37,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "verify cover me is present in Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    20,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 43,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Choose Me Enabled Business preferences Not Select Select Not And Channel Preferences Not Select Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
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
  "duration": 908297583,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58380316094,
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
  "duration": 28565251920,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 24959284305,
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
  "duration": 221597187,
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
  "duration": 19751868794,
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
  "duration": 19247326426,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34882648681,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16036122363,
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
  "duration": 38025139279,
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
  "duration": 70349125041,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_an_insurance()"
});
formatter.result({
  "duration": 10515615345,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 43044462132,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_Basket_page()"
});
formatter.result({
  "duration": 7477518193,
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
  "duration": 34304674588,
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
  "duration": 37439989765,
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
  "duration": 78771462384,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_payment_page()"
});
formatter.result({
  "duration": 12397861282,
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
  "duration": 154981614641,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_agreements_page()"
});
formatter.result({
  "duration": 15018488345,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51618004628,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_review_page()"
});
formatter.result({
  "duration": 10404056033,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 41697237206,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3564002636,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_pdf_download()"
});
formatter.result({
  "duration": 15180916174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 39
    },
    {
      "val": "Select",
      "offset": 43
    },
    {
      "val": "Select",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 57
    },
    {
      "val": "Not",
      "offset": 85
    },
    {
      "val": "Select",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 96
    },
    {
      "val": "Not",
      "offset": 100
    },
    {
      "val": "No",
      "offset": 104
    },
    {
      "val": "Connected",
      "offset": 107
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96800893822,
  "status": "passed"
});
formatter.after({
  "duration": 18165081409,
  "status": "passed"
});
formatter.uri("44_Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature");
formatter.feature({
  "line": 1,
  "name": "44_Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons",
  "description": "",
  "id": "44-reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "44-reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;",
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify whether promotional ribbons are displayed for \u003ctariff\u003e on the Tariff tile in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for \u003ctariff\u003e in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on the \u0027Overlay icon\u0027 for \u003ctariff\u003e in the Tariff and Extras page and verify pop up gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify that the tariff ribbons are displayed in tariff upsell config of \u0027Your package\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027Overlay icon\u0027 in tariff upsell config of \u0027Your package\u0027 section and verify pop up gets displayed in the Tariff and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify Promotional ribbons are displayed under Tariff section in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on the \u0027Overlay icon\u0027 in the Basket page and verify pop gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 30,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
formatter.step({
  "line": 36,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "44-reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "tariff",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "line": 39,
      "id": "44-reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;1"
    },
    {
      "cells": [
        "Xperia XZ2 Compact",
        "Black",
        "19.99upfront31.00amonth",
        "Enabled",
        "CapMyBill",
        "£5",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Select",
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
      "line": 40,
      "id": "44-reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39502749841,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "44-reg-cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2",
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
  "name": "I choose PayM Xperia XZ2 Compact",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select Black color of the connected device",
  "matchedColumns": [
    1
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
  "name": "Verify whether promotional ribbons are displayed for 19.99upfront31.00amonth on the Tariff tile in the Tariff and Extras page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for 19.99upfront31.00amonth in the Tariff and Extras page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on the \u0027Overlay icon\u0027 for 19.99upfront31.00amonth in the Tariff and Extras page and verify pop up gets displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify that the tariff ribbons are displayed in tariff upsell config of \u0027Your package\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027Overlay icon\u0027 in tariff upsell config of \u0027Your package\u0027 section and verify pop up gets displayed in the Tariff and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Choose your bill cap CapMyBill £5 when BSC is Enabled",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify Promotional ribbons are displayed under Tariff section in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on the \u0027Overlay icon\u0027 in the Basket page and verify pop gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 30,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    18,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
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
formatter.step({
  "line": 36,
  "name": "Choose Me Enabled Business preferences Select Select Not Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
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
  "duration": 858112809,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 59972697655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xperia XZ2 Compact",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 34265934036,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 22963343594,
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
  "duration": 198385628,
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
  "duration": 17735703835,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34038717194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99upfront31.00amonth",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_on_the_Tariff_tile_in_the_Tariff_and_Extras_page(String)"
});
formatter.result({
  "duration": 40045273282,
  "error_message": "java.lang.AssertionError: Failed to select the Tariff in the Extras\u0026Tariff page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat actionsPerformed.UpgradeCustomerPageActions.verifyPromotionalRibbonDisplayedTEpage(UpgradeCustomerPageActions.java:622)\r\n\tat steps.E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_on_the_Tariff_tile_in_the_Tariff_and_Extras_page(E2EOrderPlaced_Steps.java:5766)\r\n\tat ✽.And Verify whether promotional ribbons are displayed for 19.99upfront31.00amonth on the Tariff tile in the Tariff and Extras page(44_Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99upfront31.00amonth",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_Overlay_icon_is_displayed_on_the_promotional_ribbons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99upfront31.00amonth",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.Click_Overlay_icon_on_the_promotional_ribbons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_that_the_tariff_ribbons_are_displayed_in_Your_package_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_the_Overlay_icon_in_Your_package_section_and_verify_pop_up_gets_displayed_in_the_Tariff_and_Extras_Page()"
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
      "val": "£5",
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_in_the_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_whether_overlay_icon_are_displayed_in_the_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_overlay_icon_in_the_Basket_page()"
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
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Select",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 53
    },
    {
      "val": "Not",
      "offset": 57
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "Not",
      "offset": 92
    },
    {
      "val": "Not",
      "offset": 96
    },
    {
      "val": "Not",
      "offset": 100
    },
    {
      "val": "No",
      "offset": 104
    },
    {
      "val": "Connected",
      "offset": 107
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20168432888,
  "status": "passed"
});
formatter.uri("49_Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature");
formatter.feature({
  "line": 1,
  "name": "49_Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons",
  "description": "",
  "id": "49-reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on upgrade journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "49-reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;",
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose upgrade PayM handset \u003chandset\u003e",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify whether promotional ribbons are displayed for \u003ctariff\u003e on the Tariff tile in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for \u003ctariff\u003e in the Tariff and Extras page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027Overlay icon\u0027 for \u003ctariff\u003e in the Tariff and Extras page and verify pop up gets displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify that the tariff ribbons are displayed in tariff upsell config of \u0027Your package\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on the \u0027Overlay icon\u0027 in tariff upsell config of \u0027Your package\u0027 section and verify pop up gets displayed in the Tariff and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Promotional ribbons are displayed under Tariff section in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on the \u0027Overlay icon\u0027 in the Basket page and verify pop gets displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "49-reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "tariff",
        "color",
        "BSCstatus",
        "BillCap",
        "CapAmount"
      ],
      "line": 32,
      "id": "49-reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;1"
    },
    {
      "cells": [
        "ins_nov1474@stf.ref.o2.co.uk",
        "test123",
        "iPhone 8 Plus",
        "9.99upfront84.00amonth",
        "Space Grey",
        "Enabled",
        "CapMyBill",
        "£10"
      ],
      "line": 33,
      "id": "49-reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40251903477,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "",
  "description": "This scenario ensures that when the customer on upgrade journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "49-reg-cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2",
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
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid ins_nov1474@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose upgrade PayM handset iPhone 8 Plus",
  "matchedColumns": [
    2
  ],
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
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    4
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
  "name": "Verify whether promotional ribbons are displayed for 9.99upfront84.00amonth on the Tariff tile in the Tariff and Extras page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for 9.99upfront84.00amonth in the Tariff and Extras page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on the \u0027Overlay icon\u0027 for 9.99upfront84.00amonth in the Tariff and Extras page and verify pop up gets displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select a tariff 9.99upfront84.00amonth",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Choose your bill cap CapMyBill £10 when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify that the tariff ribbons are displayed in tariff upsell config of \u0027Your package\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on the \u0027Overlay icon\u0027 in tariff upsell config of \u0027Your package\u0027 section and verify pop up gets displayed in the Tariff and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Promotional ribbons are displayed under Tariff section in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons in the Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on the \u0027Overlay icon\u0027 in the Basket page and verify pop gets displayed",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 32391086127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ins_nov1474@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 30229945450,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 50683546749,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 8355704132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
});
formatter.result({
  "duration": 6110408059,
  "error_message": "java.lang.AssertionError: Unable to choose upgrade paym Device\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(E2EOrderPlaced_Steps.java:4003)\r\n\tat ✽.And I choose upgrade PayM handset iPhone 8 Plus(49_Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature:13)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront84.00amonth",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_on_the_Tariff_tile_in_the_Tariff_and_Extras_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront84.00amonth",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_Overlay_icon_is_displayed_on_the_promotional_ribbons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront84.00amonth",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.Click_Overlay_icon_on_the_promotional_ribbons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront84.00amonth",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_that_the_tariff_ribbons_are_displayed_in_Your_package_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_the_Overlay_icon_in_Your_package_section_and_verify_pop_up_gets_displayed_in_the_Tariff_and_Extras_Page()"
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
  "location": "E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_in_the_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_whether_overlay_icon_are_displayed_in_the_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_overlay_icon_in_the_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20198041986,
  "status": "passed"
});
formatter.uri("57_Reg_CS_CFU_SavedBasket.feature");
formatter.feature({
  "line": 1,
  "name": "57_Reg_CS_CFU_SavedBasket",
  "description": "",
  "id": "57-reg-cs-cfu-savedbasket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU to Verify is user can upgrade phone to refresh Tariff",
  "description": "",
  "id": "57-reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff",
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
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a \u0027I need a sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verifies the basket page for the upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "choose to email basket to save the basket in CFU for \u003cusername\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "57-reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status",
        "consumer",
        "handset",
        "tariff",
        "BSCstatus",
        "BillCap",
        "CapAmount"
      ],
      "line": 25,
      "id": "57-reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;1"
    },
    {
      "cells": [
        "inavl0wx_104860@o2.com",
        "test123",
        "Enabled",
        "Me",
        "iPhone X",
        "Random",
        "Enabled",
        "DontCapMyBill",
        "Nill"
      ],
      "line": 26,
      "id": "57-reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40800894530,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CFU to Verify is user can upgrade phone to refresh Tariff",
  "description": "",
  "id": "57-reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid inavl0wx_104860@o2.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "choose to upgrade any Phone in My upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on \u0027Get Started\u0027 CTA",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a iPhone X device from Recommended devices section",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on device \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a tariff Random",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a \u0027I need a sim\u0027option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that \u0027Confirm CTA\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Confirm CTA\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify that \u0027Go to checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verifies the basket page for the upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "choose to email basket to save the basket in CFU for inavl0wx_104860@o2.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 63326630847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inavl0wx_104860@o2.com",
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
  "duration": 31249193274,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 49259387858,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 8041001296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone X",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "duration": 26645526395,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 4785925061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 5169728534,
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
  "duration": 38146313479,
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
  "duration": 41734509760,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_need_a_sim_option()"
});
formatter.result({
  "duration": 11885417279,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 366204136,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3621762389,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 93138416446,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 384048729,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifies_the_basket_page_for_the_upgrade_journey()"
});
formatter.result({
  "duration": 641729703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inavl0wx_104860@o2.com",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.choose_to_email_basket_to_save_the_basket_CFU(String)"
});
formatter.result({
  "duration": 6403829887,
  "status": "passed"
});
formatter.after({
  "duration": 19944152749,
  "status": "passed"
});
formatter.uri("60_Reg_CS_Free_Sim_Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "60_Reg_CS_Free_Sim_Tablet",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Light surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually",
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
  "comments": [
    {
      "line": 10,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 11,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;",
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
        "Surname",
        "CheckBox",
        "Firstname",
        "Lastname",
        "Contact_number"
      ],
      "line": 15,
      "id": "60-reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;;1"
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
        "Accepta",
        "Yes",
        "Test",
        "Accepta",
        "07123456789"
      ],
      "line": 16,
      "id": "60-reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49456371314,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Light surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;;2",
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
  "name": "I select Light surfer surfer and Tablet sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, Sl11er",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 11,
  "name": "Enter details in Delivery Page Test and Accepta for GDPR Yes",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 941711158,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 82182612441,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10149358123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Light surfer",
      "offset": 9
    },
    {
      "val": "Tablet",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 31860482556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "slough",
      "offset": 45
    },
    {
      "val": "Berks",
      "offset": 53
    },
    {
      "val": "Sl11er",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9140165798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 31
    },
    {
      "val": "Accepta",
      "offset": 40
    },
    {
      "val": "Yes",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 69484904895,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 1169749414,
  "status": "passed"
});
formatter.after({
  "duration": 19887005604,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Light surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 26,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;",
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
        "Surname",
        "CheckBox"
      ],
      "line": 30,
      "id": "60-reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Light surfer",
        "Dongle",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789",
        "Accepta",
        "Yes"
      ],
      "line": 31,
      "id": "60-reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39990460140,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Light surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Light surfer surfer and Dongle sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, Sl11er",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 26,
  "name": "Enter details in Delivery Page Test and Accepta for GDPR Yes",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 908249806,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 87012814542,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10045286022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Light surfer",
      "offset": 9
    },
    {
      "val": "Dongle",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 25099783835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "slough",
      "offset": 45
    },
    {
      "val": "Berks",
      "offset": 53
    },
    {
      "val": "Sl11er",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9211890638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 31
    },
    {
      "val": "Accepta",
      "offset": 40
    },
    {
      "val": "Yes",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 68748951557,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 1064472267,
  "status": "passed"
});
formatter.after({
  "duration": 19869384326,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Steady surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 42,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;",
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
        "Surname",
        "CheckBox"
      ],
      "line": 46,
      "id": "60-reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Steady surfer",
        "Tablet",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789",
        "Accepta",
        "No"
      ],
      "line": 47,
      "id": "60-reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46687986841,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Steady surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select Steady surfer surfer and Tablet sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, Sl11er",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 42,
  "name": "Enter details in Delivery Page Test and Accepta for GDPR No",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 871091563,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 85842435531,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10051881394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steady surfer",
      "offset": 9
    },
    {
      "val": "Tablet",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 24456212411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "slough",
      "offset": 45
    },
    {
      "val": "Berks",
      "offset": 53
    },
    {
      "val": "Sl11er",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9487129541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 31
    },
    {
      "val": "Accepta",
      "offset": 40
    },
    {
      "val": "No",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 69191608703,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 1182657387,
  "status": "passed"
});
formatter.after({
  "duration": 19883789316,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Steady surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 57,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;",
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
        "Surname",
        "CheckBox"
      ],
      "line": 61,
      "id": "60-reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Steady surfer",
        "Dongle",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789",
        "Accepta",
        "Yes"
      ],
      "line": 62,
      "id": "60-reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39941335312,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Steady surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select Steady surfer surfer and Dongle sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, Sl11er",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 57,
  "name": "Enter details in Delivery Page Test and Accepta for GDPR Yes",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 872401365,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 81372313597,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10037398898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steady surfer",
      "offset": 9
    },
    {
      "val": "Dongle",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 26710440335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "slough",
      "offset": 45
    },
    {
      "val": "Berks",
      "offset": 53
    },
    {
      "val": "Sl11er",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9184821515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 31
    },
    {
      "val": "Accepta",
      "offset": 40
    },
    {
      "val": "Yes",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 69593643585,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 824139710,
  "status": "passed"
});
formatter.after({
  "duration": 19879465660,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "Ultimate surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 72,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 73,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;",
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
        "Surname",
        "CheckBox"
      ],
      "line": 77,
      "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Ultimate surfer",
        "Tablet",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789",
        "Accepta",
        "No"
      ],
      "line": 78,
      "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45848043861,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Ultimate surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I select Ultimate surfer surfer and Tablet sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, Sl11er",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 72,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 73,
  "name": "Enter details in Delivery Page Test and Accepta for GDPR No",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 934541400,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 80333619761,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10038315158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ultimate surfer",
      "offset": 9
    },
    {
      "val": "Tablet",
      "offset": 36
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 30073674148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "slough",
      "offset": 45
    },
    {
      "val": "Berks",
      "offset": 53
    },
    {
      "val": "Sl11er",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9275300129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 31
    },
    {
      "val": "Accepta",
      "offset": 40
    },
    {
      "val": "No",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 69617722919,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 833321772,
  "status": "passed"
});
formatter.after({
  "duration": 19877849023,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "Ultimate surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 87,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 88,
  "name": "Enter details in Delivery Page \u003cFirstname\u003e and \u003cSurname\u003e for GDPR \u003cCheckBox\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 91,
  "name": "",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;",
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
        "Surname",
        "CheckBox"
      ],
      "line": 92,
      "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;;1"
    },
    {
      "cells": [
        "Ultimate surfer",
        "Dongle",
        "26",
        "100",
        "slough",
        "Berks",
        "Sl11er",
        "Test",
        "Accepta",
        "07123456789",
        "Accepta",
        "Yes"
      ],
      "line": 93,
      "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38098214267,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Ultimate surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "60-reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I select Ultimate surfer surfer and Dongle sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, Sl11er",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 87,
      "value": "#And I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section"
    }
  ],
  "line": 88,
  "name": "Enter details in Delivery Page Test and Accepta for GDPR Yes",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 838264408,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 81129892646,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10070486173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ultimate surfer",
      "offset": 9
    },
    {
      "val": "Dongle",
      "offset": 36
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 25629687381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "slough",
      "offset": 45
    },
    {
      "val": "Berks",
      "offset": 53
    },
    {
      "val": "Sl11er",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9096892432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 31
    },
    {
      "val": "Accepta",
      "offset": 40
    },
    {
      "val": "Yes",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA_new(String,String,String)"
});
formatter.result({
  "duration": 68614320124,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 832742784,
  "status": "passed"
});
formatter.after({
  "duration": 19877474238,
  "status": "passed"
});
formatter.uri("81_Reg_Jan_CFA_OOSForHomeDeliveryandCnC.feature");
formatter.feature({
  "line": 1,
  "name": "81_Reg_Jan_CFA_OOSForHomeDeliveryandCnC",
  "description": "\r\nThis scenario ensures that when customer on aquisition journey has selected a device which is out of stock for both Home delivery and click and collect then the updated\r\nerror messages should be displayed",
  "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Aquisition_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose PayM \u003chandset\u003e",
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
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
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
  "comments": [
    {
      "line": 21,
      "value": "#And the Delivery section should show \u0027OOS message\u0027"
    }
  ],
  "line": 22,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "username",
        "password",
        "BSCstatus",
        "BillCap",
        "CapAmount"
      ],
      "line": 27,
      "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc;;1"
    },
    {
      "cells": [
        "iPhone 5s Like New",
        "Silver",
        "dasdasdkjaskd@sdsd.com",
        "test123",
        "Enabled",
        "DontCapMyBill",
        "Nill"
      ],
      "line": 28,
      "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37829530035,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Aquisition_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc;;2",
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
  "line": 10,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose PayM iPhone 5s Like New",
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
  "name": "select Silver color of the connected device",
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
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
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
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And the Delivery section should show \u0027OOS message\u0027"
    }
  ],
  "line": 22,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 837580310,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61440161409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 5s Like New",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 32427977525,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 24863069247,
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
  "duration": 212842288,
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
  "duration": 15806141523,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33665427174,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deliveryInformationSection_OOS_message_validation()"
});
formatter.result({
  "duration": 153707614,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16134201792,
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
  "duration": 37938629001,
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
  "duration": 41770662559,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 58043334591,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.delivery_section_should_show_OOS_message()"
});
formatter.result({
  "duration": 909580489,
  "status": "passed"
});
formatter.after({
  "duration": 19928803185,
  "status": "passed"
});
formatter.uri("83_ Reg_Jan_Existing_OOSForHomeDeliveryandCnC.feature");
formatter.feature({
  "line": 1,
  "name": "83_ Reg_Jan_Existing_OOSForHomeDeliveryandCnC",
  "description": "\r\nThis scenario ensures that when an existing customer has selected a device which is out of stock for both Home delivery and click and collect then the updated\r\nerror messages should be displayed",
  "id": "83--reg-jan-existing-oosforhomedeliveryandcnc",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Existing_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "83--reg-jan-existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc",
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
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And select \u003ccolor\u003e color of the connected device"
    }
  ],
  "line": 19,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
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
  "comments": [
    {
      "line": 23,
      "value": "#And the Delivery section should show \u0027OOS message\u0027"
    }
  ],
  "line": 24,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "83--reg-jan-existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "username",
        "password",
        "BSCstatus",
        "BillCap",
        "CapAmount"
      ],
      "line": 29,
      "id": "83--reg-jan-existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;;1"
    },
    {
      "cells": [
        "iPhone 5s Like New",
        "Silver",
        "inl_feb4914@stf.ref.o2.co.uk",
        "test123",
        "Enabled",
        "CapMyBill",
        "£10"
      ],
      "line": 30,
      "id": "83--reg-jan-existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48181322811,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Existing_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "83--reg-jan-existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;;2",
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
  "line": 10,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Signin using valid inl_feb4914@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    2,
    3
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
  "name": "I choose PayM iPhone 5s Like New",
  "matchedColumns": [
    0
  ],
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
  "name": "select Silver color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And select \u003ccolor\u003e color of the connected device"
    }
  ],
  "line": 19,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
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
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Choose your bill cap CapMyBill £10 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#And the Delivery section should show \u0027OOS message\u0027"
    }
  ],
  "line": 24,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 34136624271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inl_feb4914@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 31339960674,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 60742304162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 5s Like New",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 32204283453,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 22581920486,
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
  "duration": 255862965,
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
  "duration": 15822512810,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 36409460161,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deliveryInformationSection_OOS_message_validation()"
});
formatter.result({
  "duration": 102910231,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16080599359,
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
  "duration": 37911920508,
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
  "duration": 70197954571,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 56295476954,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.delivery_section_should_show_OOS_message()"
});
formatter.result({
  "duration": 896243937,
  "status": "passed"
});
formatter.after({
  "duration": 20218614830,
  "status": "passed"
});
formatter.uri("86_Reg_Jan_FreeSim_InvalidPostCode_EnteredManually.feature");
formatter.feature({
  "line": 1,
  "name": "86_Reg_Jan_FreeSim_InvalidPostCode_EnteredManually",
  "description": "\r\nThis ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section",
  "id": "86-reg-jan-freesim-invalidpostcode-enteredmanually",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "This ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section",
  "description": "",
  "id": "86-reg-jan-freesim-invalidpostcode-enteredmanually;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section",
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
  "id": "86-reg-jan-freesim-invalidpostcode-enteredmanually;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;",
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
      "id": "86-reg-jan-freesim-invalidpostcode-enteredmanually;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;;1"
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
      "id": "86-reg-jan-freesim-invalidpostcode-enteredmanually;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45193176501,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "This ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section",
  "description": "",
  "id": "86-reg-jan-freesim-invalidpostcode-enteredmanually;this-ensures-that-a-valid-error-message-should-get-displayed-when-user-enters-invalid-postcode-in-the-enter-manually-section;;2",
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
  "name": "I select Light surfer surfer and iPad sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, High Street, Slough, SL111ER1232",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the respective Enter a valid UK postcode message should be displayed in enter manually section",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 908299706,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 77594788821,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10028033868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Light surfer",
      "offset": 9
    },
    {
      "val": "iPad",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_surfer_type_and_simtype(String,String)"
});
formatter.result({
  "duration": 24924986675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 40
    },
    {
      "val": "High Street",
      "offset": 45
    },
    {
      "val": "Slough",
      "offset": 58
    },
    {
      "val": "SL111ER1232",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 9199909188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter a valid UK postcode",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.respective_Error_messageShould_Be_Displayed_Enter_Manually_section(String)"
});
formatter.result({
  "duration": 90897637,
  "status": "passed"
});
formatter.after({
  "duration": 19874036405,
  "status": "passed"
});
formatter.uri("87_Reg_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature");
formatter.feature({
  "line": 1,
  "name": "87_Reg_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary",
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
  "name": "Select a PayG tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Click on Dont Select Cap My Bill CTA"
    },
    {
      "line": 12,
      "value": "#And Verify the copytext of marketing message"
    }
  ],
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the copytext of marketing message",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
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
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Verify the copytext of marketing message in \u003cAgreementSectionName\u003e"
    }
  ],
  "line": 20,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And Verify the copytext of marketing message in \u003cReviewSectionName\u003e"
    }
  ],
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "PaymentSectionName",
        "AgreementSectionName",
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
      "line": 26,
      "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;1"
    },
    {
      "cells": [
        "A3 10",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Disabled",
        "Payment Page",
        "Order Summary",
        "1GB Preloaded",
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
      "line": 27,
      "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39065899920,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2",
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
  "name": "select any available A3 10 Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a PayG tariff 1GB Preloaded",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Click on Dont Select Cap My Bill CTA"
    },
    {
      "line": 12,
      "value": "#And Verify the copytext of marketing message"
    }
  ],
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the copytext of marketing message",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    17,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Verify the copytext of marketing message in \u003cAgreementSectionName\u003e"
    }
  ],
  "line": 20,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And Verify the copytext of marketing message in \u003cReviewSectionName\u003e"
    }
  ],
  "line": 22,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Choose Me Enabled Business preferences Select Select Select Not And Channel Preferences Select Select Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
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
  "duration": 826968826,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 80651422803,
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
  "duration": 38527360033,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 51129587226,
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
  "duration": 22379270659,
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
  "duration": 5094477739,
  "error_message": "java.lang.AssertionError: Bill spend cap section is enabled it suppose to be in disabled mode for disabled status\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.PAYMandPAYGTariffAndExtrasPageActions.Validate_BillSpendCap(PAYMandPAYGTariffAndExtrasPageActions.java:1437)\r\n\tat steps.E2EOrderPlaced_Steps.ValidateBillSpendCap(E2EOrderPlaced_Steps.java:10868)\r\n\tat ✽.And Validate consumer Bill Spend Caps section when BSC is Disabled(87_Reg_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessage()"
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
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.NonCreditCheckPaymentPage_HomeDelivery(String)"
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
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Select",
      "offset": 46
    },
    {
      "val": "Select",
      "offset": 53
    },
    {
      "val": "Not",
      "offset": 60
    },
    {
      "val": "Select",
      "offset": 88
    },
    {
      "val": "Select",
      "offset": 95
    },
    {
      "val": "Not",
      "offset": 102
    },
    {
      "val": "Not",
      "offset": 106
    },
    {
      "val": "No",
      "offset": 110
    },
    {
      "val": "Connected",
      "offset": 113
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20268430481,
  "status": "passed"
});
formatter.uri("90_Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect.feature");
formatter.feature({
  "line": 1,
  "name": "90_Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect",
  "description": "",
  "id": "90-reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "90-reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
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
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Add your Bill Spend Cap \u003cBillCapAmount\u003e in agent deal builder when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "90-reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "BSCstatus",
        "BillCapAmount",
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
      "line": 26,
      "id": "90-reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "iPad Pro 10.5 inch 256GB Space Grey",
        "Random",
        "Enabled",
        "£100",
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
      "line": 27,
      "id": "90-reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41043130388,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "90-reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2",
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
  "name": "Select a valid PayM iPad Pro 10.5 inch 256GB Space Grey",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Random from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a valid Accessory iPhone 7 Evo Elite Brushed Black",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Add your Bill Spend Cap £100 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate deal summary for applied Bill Spend Cap £100 when BSC is Enabled",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "perform the credit checks using valid TEST, ACCEPTA, 32, SL11ER and valid TEST ACCEPTA",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Register customer with valid test123, test123, Anything in delivery page",
  "matchedColumns": [
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose Business preferences Not Not Select Not and Channel Preferences Not Not Select Select for Me when GDPR Enabled Connected Tablet for AFA journey",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    27,
    28,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 3351885499,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 12502136878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad Pro 10.5 inch 256GB Space Grey",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 35168249212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 20880998776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Evo Elite Brushed Black",
      "offset": 25
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_Accessory(String)"
});
formatter.result({
  "duration": 27337076350,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 49556678574,
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
  "duration": 20662242384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£100",
      "offset": 24
    },
    {
      "val": "Enabled",
      "offset": 63
    }
  ],
  "location": "E2EOrderPlaced_Steps.addBillCap_AgentDealBuilder(String,String)"
});
formatter.result({
  "duration": 53346088184,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 13096963921,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 18787336434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£100",
      "offset": 49
    },
    {
      "val": "Enabled",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourCapInAgentDealSummary(String,String)"
});
formatter.result({
  "duration": 17502376825,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 23452915079,
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
      "val": "32",
      "offset": 53
    },
    {
      "val": "SL11ER",
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
  "duration": 89766052240,
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
      "val": "Anything",
      "offset": 47
    }
  ],
  "location": "E2EOrderPlaced_Steps.Register_Customer_Phones(String,String,String)"
});
formatter.result({
  "duration": 55758152729,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16081992683,
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
      "val": "Select",
      "offset": 36
    },
    {
      "val": "Not",
      "offset": 43
    },
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
      "val": "Select",
      "offset": 86
    },
    {
      "val": "Me",
      "offset": 97
    },
    {
      "val": "Enabled",
      "offset": 110
    },
    {
      "val": "Connected",
      "offset": 118
    },
    {
      "val": "Tablet",
      "offset": 128
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 84853996542,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 57875789650,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5654265722,
  "status": "passed"
});
formatter.after({
  "duration": 18102365571,
  "status": "passed"
});
formatter.uri("92_Reg_Trustev_CFA_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "92_Reg_Trustev_CFA_PayMPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory",
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
  "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory",
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select \u003cCapacity\u003e capacity of the connected device",
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
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 22,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 30,
      "value": "#Close the browser"
    }
  ],
  "line": 31,
  "name": "",
  "description": "",
  "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Capacity",
        "Firstname",
        "Surname",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "line": 32,
      "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "iPhone 8 Plus",
        "Space Grey",
        "64GB",
        "TEST",
        "ACCEPTA",
        "Enabled",
        "CapMyBill",
        "DontCapMyBillLink",
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
      "line": 33,
      "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40881801786,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Trustev PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM iPhone 8 Plus",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select 64GB capacity of the connected device",
  "matchedColumns": [
    2
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
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
  "comments": [
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 22,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    18,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Choose Me Enabled Business preferences Select Not Select Not And Channel Preferences Select Select Select Select No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
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
  "duration": 934480528,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 58884119156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 31149532244,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 28188216170,
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
  "duration": 283141599,
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
  "duration": 21934507779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
});
formatter.result({
  "duration": 19176125718,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34810498093,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16081073592,
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
  "duration": 37746865287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 31
    },
    {
      "val": "Enabled",
      "offset": 61
    }
  ],
  "location": "E2EOrderPlaced_Steps.ChooseBillSpendCap(String,String,String)"
});
formatter.result({
  "duration": 60800859847,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40289889504,
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
  "duration": 34384767863,
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
  "duration": 37933780503,
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
  "duration": 78938396131,
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
  "duration": 170875047512,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51317220516,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmationwithTrustev()"
});
formatter.result({
  "duration": 45867199671,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3443866793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Select",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Select",
      "offset": 50
    },
    {
      "val": "Not",
      "offset": 57
    },
    {
      "val": "Select",
      "offset": 85
    },
    {
      "val": "Select",
      "offset": 92
    },
    {
      "val": "Select",
      "offset": 99
    },
    {
      "val": "Select",
      "offset": 106
    },
    {
      "val": "No",
      "offset": 113
    },
    {
      "val": "Connected",
      "offset": 116
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 97158701211,
  "status": "passed"
});
formatter.after({
  "duration": 20031321290,
  "status": "passed"
});
formatter.uri("93_Reg_Trustev_CFA_PayMTabletsHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "93_Reg_Trustev_CFA_PayMTabletsHomeDeliveryWithAccessory",
  "description": "",
  "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Trustev PayM Tablets Home delivery E2E journey with Accessory",
  "description": "",
  "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
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
  "line": 24,
  "name": "",
  "description": "",
  "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
        "color",
        "Capacity",
        "Firstname",
        "Surname",
        "Username",
        "consumer",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "A3 10",
        "Gold",
        "64GB",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Enabled",
        "CapMyBill",
        "£15",
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
      "line": 26,
      "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41006555026,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Trustev PayM Tablets Home delivery E2E journey with Accessory",
  "description": "",
  "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "select any available A3 10 Tablet",
  "matchedColumns": [
    0
  ],
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose some Accesssory",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    18,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    5
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
  "name": "Choose Me Enabled Business preferences Not Not Select Not And Channel Preferences Not Select Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    6,
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
  "duration": 920550478,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 57822363462,
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
  "duration": 57391722448,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33590648134,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 15986706979,
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
  "duration": 37714861669,
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
  "duration": 70268021721,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 20643685381,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 38769630573,
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
  "duration": 32912965234,
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
  "duration": 75387554511,
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
  "duration": 135845495039,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@id\u003d\u0027btn-continue\u0027 or @id\u003d\u0027change-delivery-confirm\u0027 or @id\u003d\u0027change-delivery-confirm-label\u0027 or @id\u003d\u0027btn-continue-label\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.59.222\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\khanj6\\AppData\\Local\\Temp\\1\\scoped_dir11568_26856}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 10b594ac9b374e27cedc159022edbe94\n*** Element info: {Using\u003dxpath, value\u003d//button[@id\u003d\u0027btn-continue\u0027 or @id\u003d\u0027change-delivery-confirm\u0027 or @id\u003d\u0027change-delivery-confirm-label\u0027 or @id\u003d\u0027btn-continue-label\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat actionsPerformed.DeliveryPageActions.clickOnSubmitBtn(DeliveryPageActions.java:344)\r\n\tat steps.E2EOrderPlaced_Steps.isThisOrder4UorSomeoneElse(E2EOrderPlaced_Steps.java:10536)\r\n\tat ✽.And Is this order for You or Someone else Me when GDPR is Enabled(93_Reg_Trustev_CFA_PayMTabletsHomeDeliveryWithAccessory.feature:17)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmationwithTrustev()"
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
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 43
    },
    {
      "val": "Select",
      "offset": 47
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "Select",
      "offset": 86
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20663213498,
  "status": "passed"
});
formatter.uri("96_Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "96_Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory",
  "description": "",
  "id": "96-reg-volte-paymphoneshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select \u003cCapacity\u003e capacity of the connected device",
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
  "name": "Choose some Accesssory",
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
  "comments": [
    {
      "line": 19,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 20,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cstatus\u003e",
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
  "name": "order confirmation is displayed with Volte message",
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
  "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Capacity",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "256GB",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£20",
        "Me",
        "Not",
        "Not",
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
      "line": 30,
      "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37848281685,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "I choose PayM iPhone X",
  "matchedColumns": [
    0
  ],
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
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select 256GB capacity of the connected device",
  "matchedColumns": [
    2
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
  "name": "Choose your bill cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose some Accesssory",
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
  "comments": [
    {
      "line": 19,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 20,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    18,
    9
  ],
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
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Choose Me Enabled Business preferences Not Not Select Not And Channel Preferences Select Not Not Not No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
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
  "duration": 823998856,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 59182942988,
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
  "duration": 30319506742,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 27867439619,
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
  "duration": 184266238,
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
  "duration": 17634712831,
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
  "duration": 21561791439,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 35359559219,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16024732289,
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
  "duration": 37872118241,
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
  "duration": 70611025624,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 7899926671,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 42723052090,
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
  "duration": 34741318536,
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
  "duration": 37628150019,
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
  "duration": 78714082371,
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
  "duration": 166690808524,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51545265142,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55097665006,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
});
formatter.result({
  "duration": 984292993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 43
    },
    {
      "val": "Select",
      "offset": 47
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Select",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 89
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Not",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 101
    },
    {
      "val": "Connected",
      "offset": 104
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96592051013,
  "status": "passed"
});
formatter.after({
  "duration": 20025935566,
  "status": "passed"
});
formatter.uri("97_Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "97_Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory",
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
  "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory",
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
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
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
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
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
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Firstname",
        "Surname",
        "Username",
        "consumer",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
      "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "iPhone 8 Plus",
        "Space Grey",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Enabled",
        "CapMyBill",
        "£5",
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
      "line": 29,
      "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38470272344,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Volte PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;2",
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
  "name": "I choose PayM iPhone 8 Plus",
  "matchedColumns": [
    0
  ],
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
  "line": 11,
  "name": "select Space Grey color of the connected device",
  "matchedColumns": [
    1
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
  "name": "Choose your bill cap CapMyBill £5 when BSC is Enabled",
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
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 19,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Is this order for You or Someone else Me when GDPR is Enabled",
  "matchedColumns": [
    17,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    4
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
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Choose Me Enabled Business preferences Not Not Select Not And Channel Preferences Not Select Not Select No Connected",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    5,
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
  "duration": 935516761,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 59592324936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 31281151947,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 25473180734,
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
  "duration": 258378167,
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
  "duration": 22120349247,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33931897376,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16088641140,
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
  "duration": 37807315073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 21
    },
    {
      "val": "£5",
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
  "duration": 70216566075,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 41102818923,
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
  "duration": 33282474489,
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
  "duration": 37378219562,
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
  "duration": 78840842959,
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
  "duration": 155200849867,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51615273190,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 53774196300,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
});
formatter.result({
  "duration": 1068045291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Me",
      "offset": 7
    },
    {
      "val": "Enabled",
      "offset": 10
    },
    {
      "val": "Not",
      "offset": 39
    },
    {
      "val": "Not",
      "offset": 43
    },
    {
      "val": "Select",
      "offset": 47
    },
    {
      "val": "Not",
      "offset": 54
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "Select",
      "offset": 86
    },
    {
      "val": "Not",
      "offset": 93
    },
    {
      "val": "Select",
      "offset": 97
    },
    {
      "val": "No",
      "offset": 104
    },
    {
      "val": "Connected",
      "offset": 107
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 96659583850,
  "status": "passed"
});
formatter.after({
  "duration": 20105931163,
  "status": "passed"
});
});