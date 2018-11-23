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
  "duration": 22474217562,
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
  "duration": 12405884008,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 40288686219,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat actionsPerformed.Agent_HomePagePageActions.NewUser(Agent_HomePagePageActions.java:177)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Acquisition_for_New_user(E2EOrderPlaced_Steps.java:2663)\r\n\tat ✽.And performs Acquisition for New user(01_Reg_AFA_checkout_delivery_validate_10_digit_and_11_contact_number.feature:8)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17296162442,
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
  "duration": 17280127759,
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
  "duration": 485138686,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.a_cookies_pop_up_should_be_displayed()"
});
formatter.result({
  "duration": 20484545543,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCookiePolicyLink()"
});
formatter.result({
  "duration": 20354126255,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened()"
});
formatter.result({
  "duration": 62431852,
  "error_message": "java.lang.AssertionError: Unable to find \u0027cookie policy\u0027 page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened(E2EOrderPlaced_Steps.java:9983)\r\n\tat ✽.Then the \u0027cookie policy\u0027 page should be opened(05_Reg_CFA_ Cookie_pop_up_for_the_Shop_pages.feature:10)\r\n",
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
  "duration": 17388752223,
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
  "duration": 17172254988,
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
  "duration": 417285379,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 61459238221,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 20395071179,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk_PAYG_sim_journey()"
});
formatter.result({
  "duration": 20035367396,
  "error_message": "java.lang.AssertionError: verify copy text ‘You\u0027ll need to give details for all fields marked with an asterisk * is not displayed$\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk_PAYG_sim_journey(E2EOrderPlaced_Steps.java:8651)\r\n\tat ✽.And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey(06_Reg_CFA_PayG_Freesim_Phones_delivery_page_mark_mandatory_fields_with_asterisk.feature:8)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17297785799,
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
  "duration": 7203114355,
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
  "duration": 404314798,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 61331576200,
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
  "duration": 31853747755,
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
  "duration": 3037185756,
  "error_message": "java.lang.AssertionError: Unable to validate Your order section in delivery page , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.validateYourOrderSectionDeliveryPage(E2EOrderPlaced_Steps.java:2983)\r\n\tat ✽.And Validate Your order section in Delivery page £15(07_Reg_CFA_PayG_Freesim_To_Show_BigBundle_DataRollOver_In_DeliveryPage.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17036502013,
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
