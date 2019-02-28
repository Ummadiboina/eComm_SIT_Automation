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
  "duration": 96257232140,
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
  "duration": 2892047107,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10090406090,
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
  "duration": 35974084843,
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
  "duration": 27687334204,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14607652805,
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
  "duration": 3417761161,
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
  "duration": 25212229629,
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
  "duration": 47019072564,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22722367510,
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
  "duration": 14441490648,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43479249499,
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
  "duration": 97438453920,
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
  "duration": 36336114251,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16061216978,
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
  "duration": 89125803485,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000507449,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 58366261371,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5499845546,
  "status": "passed"
});
formatter.after({
  "duration": 17008810948,
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
  "duration": 100379187661,
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
  "duration": 816903732,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.a_cookies_pop_up_should_be_displayed()"
});
formatter.result({
  "duration": 792845428,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCookiePolicyLink()"
});
formatter.result({
  "duration": 4143870252,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened()"
});
formatter.result({
  "duration": 6141444511,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "duration": 138899872,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "duration": 118595396097,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnManageCookiesLink()"
});
formatter.result({
  "duration": 3556362366,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theManageCookiesPageShouldBeOpened()"
});
formatter.result({
  "duration": 5542358601,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "duration": 241545033,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "duration": 82108501872,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCloseIcon()"
});
formatter.result({
  "duration": 28443121083,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theShopHomePageShouldBeDisplayedWithoutTheCookies()"
});
formatter.result({
  "duration": 23398487211,
  "status": "passed"
});
formatter.after({
  "duration": 17001545671,
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
  "duration": 95783595297,
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
  "duration": 792649161,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 256336594393,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 18636372583,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk_PAYG_sim_journey()"
});
formatter.result({
  "duration": 376940551,
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
  "duration": 20455749274,
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
  "duration": 50567158168,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 25280008738,
  "status": "passed"
});
formatter.after({
  "duration": 17002595839,
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
  "duration": 107110824075,
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
  "duration": 763045898,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 92512472601,
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
  "duration": 41219749768,
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
  "duration": 10079932280,
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
  "duration": 64888655391,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2421169373,
  "status": "passed"
});
formatter.after({
  "duration": 17002186240,
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
    },
    {
      "line": 25,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 32,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "#Step 12 and Step 13 of ALM clubbed together"
    },
    {
      "line": 35,
      "value": "#Close the browser"
    }
  ],
  "line": 36,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 37,
      "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "iPhone X",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£5",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 38,
      "id": "08-reg-cfa-phones-checkout-delivery-validate-10-digit-contact-number;consumertoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38944244923,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
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
  "name": "I choose PayM iPhone X",
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
  "name": "select Space Grey color of the connected device",
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
    },
    {
      "line": 25,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 26,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
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
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 32,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 758015216,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 131271690447,
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
  "duration": 28315912444,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 28298873089,
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
  "duration": 110382048,
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
  "duration": 17577356067,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 99280789253,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13906649342,
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
  "duration": 39542879704,
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
  "duration": 68372843414,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 45424131577,
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
  "duration": 31053311701,
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
  "duration": 36009412264,
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
  "duration": 90397549114,
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
  "duration": 59910053572,
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
  "duration": 153088621486,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 93813161013,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 79024180047,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5473115172,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20032030710,
  "status": "passed"
});
formatter.after({
  "duration": 17001757866,
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And input the below details in Delivery page"
    },
    {
      "line": 23,
      "value": "#| HouseNumber           | 5            |"
    },
    {
      "line": 24,
      "value": "#| Post Code             | BS7 0NP      |"
    },
    {
      "line": 25,
      "value": "#| Title                 | Mr           |"
    },
    {
      "line": 26,
      "value": "#| FirstName             | Test         |"
    },
    {
      "line": 27,
      "value": "#| Surname               | Accepta      |"
    },
    {
      "line": 28,
      "value": "#| Contact Number        | 07822837733  |"
    },
    {
      "line": 29,
      "value": "#| Password              | TesterSit123 |"
    },
    {
      "line": 30,
      "value": "#| Security Answer       | Sit Testers  |"
    },
    {
      "line": 31,
      "value": "#| Date of Birth - Date  | 22           |"
    },
    {
      "line": 32,
      "value": "#| Date of Birth - Month | 10           |"
    },
    {
      "line": 33,
      "value": "#| Date of Birth - Year  | 1990         |"
    }
  ],
  "line": 34,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 40,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 43,
      "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;1"
    },
    {
      "cells": [
        "Galaxy S9",
        "£39",
        "8GB",
        "Lilac Purple",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 44,
      "id": "11-reg-cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;cfa-phones-ssc-checkout-pages-mark-mandatory-fields-with-asterisk;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96782603724,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
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
  "name": "I choose PayM Galaxy S9",
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
  "name": "select Lilac Purple color of the connected device",
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And input the below details in Delivery page"
    },
    {
      "line": 23,
      "value": "#| HouseNumber           | 5            |"
    },
    {
      "line": 24,
      "value": "#| Post Code             | BS7 0NP      |"
    },
    {
      "line": 25,
      "value": "#| Title                 | Mr           |"
    },
    {
      "line": 26,
      "value": "#| FirstName             | Test         |"
    },
    {
      "line": 27,
      "value": "#| Surname               | Accepta      |"
    },
    {
      "line": 28,
      "value": "#| Contact Number        | 07822837733  |"
    },
    {
      "line": 29,
      "value": "#| Password              | TesterSit123 |"
    },
    {
      "line": 30,
      "value": "#| Security Answer       | Sit Testers  |"
    },
    {
      "line": 31,
      "value": "#| Date of Birth - Date  | 22           |"
    },
    {
      "line": 32,
      "value": "#| Date of Birth - Month | 10           |"
    },
    {
      "line": 33,
      "value": "#| Date of Birth - Year  | 1990         |"
    }
  ],
  "line": 34,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 40,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 799044039,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 131967045982,
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
  "duration": 28707931390,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 93124177031,
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
  "duration": 119013229,
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
  "duration": 15566007305,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 106918584628,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13963688401,
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
  "duration": 39513045472,
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
  "duration": 68254222719,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 43420129445,
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
  "duration": 34284270852,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 357168823,
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
  "duration": 20546869889,
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
  "duration": 44931471095,
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
  "duration": 59809385868,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 3613291061,
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
  "duration": 156790724610,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 80860065889,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 61602560114,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5412223029,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20028578125,
  "status": "passed"
});
formatter.after({
  "duration": 17002702222,
  "status": "passed"
});
formatter.uri("124_BSC_CFA_Tablet_Simo_Edit_and_Validate_BSC_Component_In_Tariff_Listing_and_Basket_Page.feature");
formatter.feature({
  "line": 1,
  "name": "124_BSC_CFA_Tablet_Simo_Edit_and_Validate_BSC_Component_In_Tariff_Listing_and_Basket_Page",
  "description": "\r\nThis scenario ensures when customer on Tablet SIMO acquisition journey lands on Tariff listing page should be able to edit tariff and BSC components, select cap my bill and submit the order successfully",
  "id": "124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "124_BSC_CFA_Tablet_Simo_Edit_and_Validate_BSC_Component_In_Tariff_Listing_and_Basket_Page",
  "description": "",
  "id": "124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \u0027Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate BSC \u0027Edit\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate and click on Tariff \u0027Edit\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate Basket Page for applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
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
  "name": "Validate applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
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
  "name": "Validate order confirmation page for applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 32,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username",
        "BillCap",
        "CapAmount",
        "NewBillCap",
        "NewCapAmount",
        "BSCstatus",
        "consumer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 35,
      "id": "124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;;1"
    },
    {
      "cells": [
        "30 Days",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "DontCapMyBill",
        "Nill",
        "CapMyBill",
        "£20",
        "Enabled",
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
        "No",
        "No"
      ],
      "line": 36,
      "id": "124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 118959883674,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "124_BSC_CFA_Tablet_Simo_Edit_and_Validate_BSC_Component_In_Tariff_Listing_and_Basket_Page",
  "description": "",
  "id": "124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;124-bsc-cfa-tablet-simo-edit-and-validate-bsc-component-in-tariff-listing-and-basket-page;;2",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \u0027Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate BSC \u0027Edit\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate and click on Tariff \u0027Edit\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose your bill cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate Basket Page for applied Bill Spend Cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
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
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate applied Bill Spend Cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate applied Bill Spend Cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    3
  ],
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
  "name": "Validate order confirmation page for applied Bill Spend Cap CapMyBill £20 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 32,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 793643010,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 98072946326,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectTabletsTab()"
});
formatter.result({
  "duration": 3085403851,
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
  "duration": 17491246794,
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
  "duration": 39642770875,
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
  "duration": 39927503666,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ValidateEditLink()"
});
formatter.result({
  "duration": 12415742175,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ValidateAndClickTariffEditLink()"
});
formatter.result({
  "duration": 12135009242,
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
  "duration": 17231041641,
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
  "duration": 39656530018,
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
  "duration": 68340350197,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 26406919848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " CapMyBill",
      "offset": 47
    },
    {
      "val": "£20",
      "offset": 58
    },
    {
      "val": "Enabled",
      "offset": 74
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_BasketPage(String,String,String)"
});
formatter.result({
  "duration": 31073247268,
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
  "duration": 35327865364,
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
  "duration": 44787018869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "£20",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 20421951027,
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
  "duration": 67754267377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "£20",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 23020387266,
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
  "duration": 117606571916,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55240262758,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5478519046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 60
    },
    {
      "val": "£20",
      "offset": 70
    },
    {
      "val": "Enabled",
      "offset": 86
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_OrderConfirmationPage(String,String,String)"
});
formatter.result({
  "duration": 19082796065,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_pdf_download()"
});
formatter.result({
  "duration": 15106393570,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20047030600,
  "status": "passed"
});
formatter.after({
  "duration": 17000892586,
  "status": "passed"
});
formatter.uri("125_BSC_CFA_MBB_Simo_Select_Cap_My_Bill_and_Validate_BSC_Component_In_Tariff_Listing_and_Edit_BSC_From_Basket_Page_to_Cap_My_Bill.feature");
formatter.feature({
  "line": 1,
  "name": "125_BSC_CFA_MBB_Simo_Select_Cap_My_Bill_and_Validate_BSC_Component_In_Tariff_Listing_and_Edit_BSC_From_Basket_Page_to_Cap_My_Bill",
  "description": "\r\nThis scenario ensures when customer on MBB SIMO acquisition journey lands on Tariff listing page should be able to edit tariff and verify BSC components, edit BSC to cap my bill from basket page and submit the order successfully",
  "id": "125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "125_BSC_CFA_MBB_Simo_Select_Cap_My_Bill_and_Validate_BSC_Component_In_Tariff_Listing_and_Edit_BSC_From_Basket_Page_to_Cap_My_Bill",
  "description": "",
  "id": "125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \u0027MBB\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate and click on BSC \u0027Edit\u0027 link to change \u003cBillCap\u003e \u003cCapAmount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate Basket Page for applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate and click on BSC \u0027Edit\u0027 link at basket page to change \u003cNewBillCap\u003e \u003cNewCapAmount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose your bill cap \u003cNextNewBillCap\u003e \u003cNextNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Commented below step because of package option page changes, once we select BSC bolton it will directly land on basket page"
    },
    {
      "line": 21,
      "value": "#And I Land on the Plan included basket page and choose home delivery option"
    }
  ],
  "line": 22,
  "name": "Validate Basket Page for applied Bill Spend Cap \u003cNextNewBillCap\u003e \u003cNextNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate applied Bill Spend Cap \u003cNextNewBillCap\u003e \u003cNextNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Validate applied Bill Spend Cap \u003cNextNewBillCap\u003e \u003cNextNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
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
  "name": "Validate order confirmation page for applied Bill Spend Cap \u003cNextNewBillCap\u003e \u003cNextNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 35,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username",
        "BillCap",
        "CapAmount",
        "NewBillCap",
        "NewCapAmount",
        "NextNewBillCap",
        "NextNewCapAmount",
        "BSCstatus",
        "consumer",
        "B1",
        "B2",
        "B3",
        "B4",
        "Text",
        "Email",
        "Phone",
        "Post",
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 38,
      "id": "125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;;1"
    },
    {
      "cells": [
        "30 Days",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "DontCapMyBill",
        "Nill",
        "CapMyBill",
        "DontCapMyBillLink",
        "CapMyBill",
        "£0",
        "Enabled",
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
        "No",
        "No"
      ],
      "line": 39,
      "id": "125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 117686405209,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "125_BSC_CFA_MBB_Simo_Select_Cap_My_Bill_and_Validate_BSC_Component_In_Tariff_Listing_and_Edit_BSC_From_Basket_Page_to_Cap_My_Bill",
  "description": "",
  "id": "125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;125-bsc-cfa-mbb-simo-select-cap-my-bill-and-validate-bsc-component-in-tariff-listing-and-edit-bsc-from-basket-page-to-cap-my-bill;;2",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select \u0027MBB\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate and click on BSC \u0027Edit\u0027 link to change DontCapMyBill Nill",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the Plan included basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate Basket Page for applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate and click on BSC \u0027Edit\u0027 link at basket page to change CapMyBill DontCapMyBillLink",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Choose your bill cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Commented below step because of package option page changes, once we select BSC bolton it will directly land on basket page"
    },
    {
      "line": 21,
      "value": "#And I Land on the Plan included basket page and choose home delivery option"
    }
  ],
  "line": 22,
  "name": "Validate Basket Page for applied Bill Spend Cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate applied Bill Spend Cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    20,
    22,
    23,
    24,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Validate applied Bill Spend Cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    3
  ],
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
  "name": "Validate order confirmation page for applied Bill Spend Cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 35,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 832768332,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 157317413172,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectMBBTab()"
});
formatter.result({
  "duration": 3116843487,
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
  "duration": 17234958440,
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
  "duration": 39561261636,
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
  "duration": 39910038212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DontCapMyBill",
      "offset": 48
    },
    {
      "val": "Nill",
      "offset": 62
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateAndClickEditLink(String,String)"
});
formatter.result({
  "duration": 39706174662,
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
  "duration": 58913591491,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 24687528195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " CapMyBill",
      "offset": 47
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 58
    },
    {
      "val": "Enabled",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_BasketPage(String,String,String)"
});
formatter.result({
  "duration": 31118572339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 63
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateAndClickEditLink_BasketPage(String,String)"
});
formatter.result({
  "duration": 30212970891,
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
  "duration": 39484385996,
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
  "duration": 95720043600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " CapMyBill",
      "offset": 47
    },
    {
      "val": "£0",
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
  "duration": 31048976768,
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
  "duration": 34158365537,
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
  "duration": 44851774335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "£0",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 20433154152,
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
  "duration": 67890401311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "£0",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 27934920267,
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
  "duration": 117563451857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 56607915063,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5521961664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 60
    },
    {
      "val": "£0",
      "offset": 70
    },
    {
      "val": "Enabled",
      "offset": 85
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_OrderConfirmationPage(String,String,String)"
});
formatter.result({
  "duration": 19096497751,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_pdf_download()"
});
formatter.result({
  "duration": 15113170741,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20050236857,
  "status": "passed"
});
formatter.after({
  "duration": 17005089847,
  "status": "passed"
});
formatter.uri("129_BSC_CFA_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Don\u0027t_Cap_My_Bill_and_Validate_Values.feature");
formatter.feature({
  "line": 1,
  "name": "129_BSC_CFA_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Don\u0027t_Cap_My_Bill_and_Validate_Values",
  "description": "\r\nThis scenario ensures that consumer in acquisition journey of MBB with tariff is able to edit the BSC component from Basket page and select don\u0027t cap my bill and place the order successfully",
  "id": "129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "129_BSC_CFA_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Don\u0027t_Cap_My_Bill_and_Validate_Values",
  "description": "",
  "id": "129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values",
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
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate Basket Page for applied Bill Spend Cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate and click on BSC \u0027Edit\u0027 link at basket page to change \u003cBillCap\u003e \u003cCapAmount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate Basket Page for applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 25,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Validate applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Validate applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
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
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate order confirmation page for applied Bill Spend Cap \u003cNewBillCap\u003e \u003cNewCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 36,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;",
  "rows": [
    {
      "cells": [
        "Device_Name",
        "Firstname",
        "Surname",
        "Username",
        "BillCap",
        "CapAmount",
        "NewBillCap",
        "NewCapAmount",
        "BSCstatus",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 39,
      "id": "129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "CapMyBill",
        "£5",
        "CapMyBill",
        "DontCapMyBillLink",
        "Enabled",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 40,
      "id": "129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94754135395,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "129_BSC_CFA_MBB_Edit_BSC_Component_from_Basket_Page_and_Select_Don\u0027t_Cap_My_Bill_and_Validate_Values",
  "description": "",
  "id": "129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;129-bsc-cfa-mbb-edit-bsc-component-from-basket-page-and-select-don\u0027t-cap-my-bill-and-validate-values;;2",
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
  "name": "Navigate to PayM MBB page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose MBB PayM Random Device",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose your bill cap CapMyBill £5 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate Basket Page for applied Bill Spend Cap CapMyBill £5 when BSC is Enabled",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate and click on BSC \u0027Edit\u0027 link at basket page to change CapMyBill £5",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose your bill cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
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
  "name": "Validate Basket Page for applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Validate applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
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
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 25,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    19,
    21,
    22,
    23,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Validate applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Validate applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
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
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate order confirmation page for applied Bill Spend Cap CapMyBill DontCapMyBillLink when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 36,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 815587892,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 126469045911,
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
  "duration": 15459123354,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 114611732875,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13866519931,
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
  "duration": 39430366028,
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
  "duration": 68445645242,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 44686479164,
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
  "duration": 31057663699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 63
    },
    {
      "val": "£5",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateAndClickEditLink_BasketPage(String,String)"
});
formatter.result({
  "duration": 34035855919,
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
  "duration": 39446833651,
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
  "duration": 41688169333,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39878150292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " CapMyBill",
      "offset": 47
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 58
    },
    {
      "val": "Enabled",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_BasketPage(String,String,String)"
});
formatter.result({
  "duration": 31026731513,
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
  "duration": 34980950761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 72
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 20436273370,
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
  "duration": 44814636711,
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
  "duration": 68983753107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 72
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 23893236652,
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
  "duration": 152983701338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 72
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 20406396471,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 81010016424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 32
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 42
    },
    {
      "val": "Enabled",
      "offset": 72
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateYourAppliedCap(String,String,String)"
});
formatter.result({
  "duration": 21045877463,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 58915997891,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5516904813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CapMyBill",
      "offset": 60
    },
    {
      "val": "DontCapMyBillLink",
      "offset": 70
    },
    {
      "val": "Enabled",
      "offset": 100
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCapIn_OrderConfirmationPage(String,String,String)"
});
formatter.result({
  "duration": 19077463872,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_pdf_download()"
});
formatter.result({
  "duration": 15108328360,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20033515511,
  "status": "passed"
});
formatter.after({
  "duration": 17002665813,
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
  "duration": 26115359824,
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
  "duration": 2821087909,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10149313380,
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
  "duration": 35602125482,
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
  "duration": 27634618130,
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
  "duration": 220954533844,
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
  "duration": 25153569805,
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
  "duration": 59115574296,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22724054265,
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
  "duration": 14432990312,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43466524596,
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
  "duration": 91800597105,
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
  "duration": 60416604041,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16055687949,
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
  "duration": 89237059915,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000150186,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "duration": 29661230177,
  "status": "passed"
});
formatter.after({
  "duration": 17002763662,
  "status": "passed"
});
formatter.uri("131_FR_UpFront_AFA_PAYM_Phones_Acquistion.feature");
formatter.feature({
  "line": 1,
  "name": "131_FR_UpFront_AFA_PAYM_Phones_Acquistion",
  "description": "",
  "id": "131-fr-upfront-afa-paym-phones-acquistion",
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
  "id": "131-fr-upfront-afa-paym-phones-acquistion;successful-completion-of-a-pay-m-acquistion-journey",
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
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#Then Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e"
    },
    {
      "line": 15,
      "value": "#Then perform all the advisory checks"
    },
    {
      "line": 16,
      "value": "#And perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e"
    },
    {
      "line": 17,
      "value": "#And Register customer with valid \u003cPassword\u003e, \u003cconfirmPassword\u003e, \u003cSecurityAnswer\u003e  in delivery page"
    },
    {
      "line": 18,
      "value": "#And validate register status"
    },
    {
      "line": 19,
      "value": "#And Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey"
    },
    {
      "line": 20,
      "value": "#And Choose \u003cDeliveryType\u003e delivery address and delivery time"
    },
    {
      "line": 21,
      "value": "#When Pay by card for PAYM device"
    },
    {
      "line": 22,
      "value": "#Then Order confirmation message should be displayed"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "131-fr-upfront-afa-paym-phones-acquistion;successful-completion-of-a-pay-m-acquistion-journey;",
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
      "id": "131-fr-upfront-afa-paym-phones-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 128GB Black",
        "Refresh",
        "min",
        "avg",
        "min",
        "HomeDelivery",
        "Enabled",
        "£30",
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
      "id": "131-fr-upfront-afa-paym-phones-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 153650326286,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "131-fr-upfront-afa-paym-phones-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2",
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
  "name": "Select a valid PayM iPhone 7 Plus 128GB Black",
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
  "name": "In Agent Build your plan with min avg and min",
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
  "name": "Add your Bill Spend Cap £30 in agent deal builder when BSC is Enabled",
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
  "duration": 2934273440,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10140301613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Plus 128GB Black",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 36222106106,
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
  "duration": 27675565603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "min",
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
  "duration": 102493507557,
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
  "duration": 25111239364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£30",
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
  "duration": 55057101638,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22746360961,
  "status": "passed"
});
formatter.after({
  "duration": 17002507093,
  "status": "passed"
});
formatter.uri("136_Reg_CFA_Phones_Click_And_Collect_Now.feature");
formatter.feature({
  "line": 1,
  "name": "136_Reg_CFA_Phones_Click_And_Collect_Now",
  "description": "",
  "id": "136-reg-cfa-phones-click-and-collect-now",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "136_Reg_CFA_Phones_Click_And_Collect_Now",
  "description": "",
  "id": "136-reg-cfa-phones-click-and-collect-now;136-reg-cfa-phones-click-and-collect-now",
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
  "comments": [
    {
      "line": 9,
      "value": "#And click on the color dropdown"
    },
    {
      "line": 10,
      "value": "#And verify the name of the colour is next to the colour tile in CFAPhoneColour"
    },
    {
      "line": 11,
      "value": "#And select \u003ccolor\u003e color of the connected device"
    }
  ],
  "line": 12,
  "name": "Check the availability to collect from store now in product details page",
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "136-reg-cfa-phones-click-and-collect-now;136-reg-cfa-phones-click-and-collect-now;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "Firstname",
        "Surname",
        "color",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 30,
      "id": "136-reg-cfa-phones-click-and-collect-now;136-reg-cfa-phones-click-and-collect-now;;1"
    },
    {
      "cells": [
        "G7 ThinQ",
        "TEST ACCEPTA",
        "Test",
        "Accepta",
        "Lilac Purple",
        "Me",
        "Enabled",
        "CapMyBill",
        "£0",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 31,
      "id": "136-reg-cfa-phones-click-and-collect-now;136-reg-cfa-phones-click-and-collect-now;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94824420459,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "136_Reg_CFA_Phones_Click_And_Collect_Now",
  "description": "",
  "id": "136-reg-cfa-phones-click-and-collect-now;136-reg-cfa-phones-click-and-collect-now;;2",
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
  "name": "I choose PayM G7 ThinQ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to device details page for color selection",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And click on the color dropdown"
    },
    {
      "line": 10,
      "value": "#And verify the name of the colour is next to the colour tile in CFAPhoneColour"
    },
    {
      "line": 11,
      "value": "#And select \u003ccolor\u003e color of the connected device"
    }
  ],
  "line": 12,
  "name": "Check the availability to collect from store now in product details page",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose your bill cap CapMyBill £0 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
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
  "name": "input Test and Accepta and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    1
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
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 791430601,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 131402458054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G7 ThinQ",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 27927062207,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page_For_Color_Selection()"
});
formatter.result({
  "duration": 27442371857,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Land_on_the_productDetails_page_and_choose_collect_from_store_now()"
});
formatter.result({
  "duration": 69486016430,
  "error_message": "java.lang.AssertionError: Unable to Land on the product details page and choose to collect from store now\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Land_on_the_productDetails_page_and_choose_collect_from_store_now(E2EOrderPlaced_Steps.java:1273)\r\n\tat ✽.And Check the availability to collect from store now in product details page(136_Reg_CFA_Phones_Click_And_Collect_Now.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17383578913,
  "status": "passed"
});
formatter.uri("137_Reg_AFA_Phones_Click_And_Collect_Now.feature");
formatter.feature({
  "line": 1,
  "name": "137_Reg_AFA_Phones_Click_And_Collect_Now",
  "description": "",
  "id": "137-reg-afa-phones-click-and-collect-now",
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
  "name": "137_Reg_AFA_Phones_Click_And_Collect_Now",
  "description": "",
  "id": "137-reg-afa-phones-click-and-collect-now;137-reg-afa-phones-click-and-collect-now",
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
  "name": "Choose a valid store for Click and Collect Now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Validating Click and Collect Now details in checkout pages",
  "keyword": "And "
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
  "name": "Register customer with valid \u003cPassword\u003e, \u003cconfirmPassword\u003e, \u003cSecurityAnswer\u003e  in delivery page",
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
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
formatter.step({
  "line": 25,
  "name": "Validating Click and Collect Now details in checkout pages",
  "keyword": "And "
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
  "line": 29,
  "name": "",
  "description": "",
  "id": "137-reg-afa-phones-click-and-collect-now;137-reg-afa-phones-click-and-collect-now;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "DeliveryType",
        "BSCstatus",
        "BillCapAmount",
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
      "line": 30,
      "id": "137-reg-afa-phones-click-and-collect-now;137-reg-afa-phones-click-and-collect-now;;1"
    },
    {
      "cells": [
        "Huawei P20 Pro",
        "Random",
        "HomeDelivery",
        "Enabled",
        "£30",
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
      "line": 31,
      "id": "137-reg-afa-phones-click-and-collect-now;137-reg-afa-phones-click-and-collect-now;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40070762362,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "137_Reg_AFA_Phones_Click_And_Collect_Now",
  "description": "",
  "id": "137-reg-afa-phones-click-and-collect-now;137-reg-afa-phones-click-and-collect-now;;2",
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
  "name": "Select a valid PayM Huawei P20 Pro",
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
  "name": "Add your Bill Spend Cap £30 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose a valid store for Click and Collect Now",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate deal summary for applied Bill Spend Cap £30 when BSC is Enabled",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Validating Click and Collect Now details in checkout pages",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA",
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
  "name": "Register customer with valid test1234, test1234, vinudeep  in delivery page",
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
  "name": "Choose Business preferences Select Select Select Not and Channel Preferences Select Select Not Not for Me when GDPR Enabled Connected Phone for AFA journey",
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
  "line": 22,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    2
  ],
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
formatter.step({
  "line": 25,
  "name": "Validating Click and Collect Now details in checkout pages",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2863855256,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10196817295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Huawei P20 Pro",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 34559202828,
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
  "duration": 24796757675,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14598789518,
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
  "duration": 25211365487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£30",
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
  "duration": 55118698633,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.chooseStore_for_click_and_Collect_Now()"
});
formatter.result({
  "duration": 39728506957,
  "error_message": "java.lang.AssertionError: Device is not available for click and collect now in provided store\n\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.Agent_DealBuilderPageActions.clickAndCollectNowStore(Agent_DealBuilderPageActions.java:752)\r\n\tat steps.E2EOrderPlaced_Steps.chooseStore_for_click_and_Collect_Now(E2EOrderPlaced_Steps.java:8415)\r\n\tat ✽.And Choose a valid store for Click and Collect Now(137_Reg_AFA_Phones_Click_And_Collect_Now.feature:13)\r\n",
  "status": "failed"
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
      "val": "£30",
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOutDetailsFor_clickandCollectNow()"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 29
    },
    {
      "val": "test1234",
      "offset": 39
    },
    {
      "val": "vinudeep ",
      "offset": 49
    }
  ],
  "location": "E2EOrderPlaced_Steps.Register_Customer_Phones(String,String,String)"
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
      "val": "Not",
      "offset": 91
    },
    {
      "val": "Not",
      "offset": 95
    },
    {
      "val": "Me",
      "offset": 103
    },
    {
      "val": "Enabled",
      "offset": 116
    },
    {
      "val": "Connected",
      "offset": 124
    },
    {
      "val": "Phone",
      "offset": 134
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkOutDetailsFor_clickandCollectNow()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17274743104,
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
formatter.examples({
  "comments": [
    {
      "line": 15,
      "value": "#Then Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
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
        "CheckBox",
        "PreSelected"
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
        "Yes",
        "No"
      ],
      "line": 19,
      "id": "14-reg-cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 95147397362,
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 804102598,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 163665141855,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 17359270867,
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
  "duration": 50410625021,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2453830413,
  "status": "passed"
});
formatter.after({
  "duration": 17002486613,
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
  "comments": [
    {
      "line": 22,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 32,
      "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;1"
    },
    {
      "cells": [
        "Galaxy S9",
        "Lilac Purple",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 33,
      "id": "15-reg-cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 106887461294,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
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
  "name": "I choose PayM Galaxy S9",
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
  "name": "select Lilac Purple color of the connected device",
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
  "comments": [
    {
      "line": 22,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 23,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "matchedColumns": [
    4
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
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 29,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 830180457,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61441456514,
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
  "duration": 28811611929,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 89666553268,
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
  "duration": 132840068,
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
  "duration": 15568422807,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 107978103473,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13893793595,
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
  "duration": 39494583895,
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
  "duration": 68244877014,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 42435876854,
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
  "duration": 33937369902,
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
  "duration": 41703249435,
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
  "duration": 70357477161,
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
  "duration": 163973080754,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(E2EOrderPlaced_Steps.java:2109)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments(15_Reg_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others.feature:24)\r\n",
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
  "duration": 17318990700,
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
  "comments": [
    {
      "line": 41,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 42,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 44,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 53,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 55,
      "value": "#And pdf content"
    }
  ],
  "line": 56,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 57,
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
        "Connected",
        "No",
        "No"
      ],
      "line": 58,
      "id": "37-reg-cfa-cover-me-copy-update-on-basket-summary;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94301969549,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
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
  "comments": [
    {
      "line": 41,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 42,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    20,
    22,
    23,
    24,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 44,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 53,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 901038393,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58445108780,
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
  "duration": 35339209575,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PayMTablet(E2EOrderPlaced_Steps.java:522)\r\n\tat ✽.And Select PayM Tablet iPad 9.7 inch 2018(37_Reg_CFA_Cover_me_copy_update_on_basket_summary.feature:26)\r\n",
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
  "location": "E2EOrderPlaced_Steps.select_an_insurance()"
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
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_Basket_page()"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_payment_page()"
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
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_agreements_page()"
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
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_review_page()"
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
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_pdf_download()"
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
  "duration": 17328036031,
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
  "duration": 94565977155,
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
  "duration": 793373356,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 144511397401,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9922523613,
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
  "duration": 23486184252,
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
  "duration": 8754443732,
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
  "duration": 49569074184,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 848351901,
  "status": "passed"
});
formatter.after({
  "duration": 17001996231,
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
  "duration": 95559023059,
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
  "duration": 797683827,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 154784295030,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9928675007,
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
  "duration": 18538392309,
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
  "duration": 8722290142,
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
  "duration": 55802089301,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 848357589,
  "status": "passed"
});
formatter.after({
  "duration": 17002304000,
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
  "duration": 97002031502,
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
  "duration": 969892702,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 157937558773,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9851820985,
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
  "duration": 29203619498,
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
  "duration": 8769138697,
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
  "duration": 54655594764,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 883462007,
  "status": "passed"
});
formatter.after({
  "duration": 17002312532,
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
  "duration": 95354533730,
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
  "duration": 836959336,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 164858296076,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9864307523,
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
  "duration": 19877568319,
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
  "duration": 8728990513,
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
  "duration": 52291421215,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 831106608,
  "status": "passed"
});
formatter.after({
  "duration": 17002144142,
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
  "duration": 28084325238,
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
  "duration": 793953623,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 144232173729,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9874843911,
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
  "duration": 18986050848,
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
  "duration": 8725144825,
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
  "duration": 49765674733,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 846210035,
  "status": "passed"
});
formatter.after({
  "duration": 17001821012,
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
  "duration": 28591790480,
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
  "duration": 776749291,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 116052142065,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9861303222,
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
  "duration": 21639857027,
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
  "duration": 8747048179,
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
  "duration": 50770405043,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 847838763,
  "status": "passed"
});
formatter.after({
  "duration": 17003539057,
  "status": "passed"
});
formatter.uri("74_Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license.feature");
formatter.feature({
  "line": 1,
  "name": "74_Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license",
  "description": "",
  "id": "74-reg-fnt-afa-handset-click-and-collect-passport-and-driving-license",
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
  "id": "74-reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status",
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
  "name": "Select a valid store using \u003cpostCode\u003e for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "input additional card details Driving license \u003cLicense_postcode\u003e and \u003cLicense_Number\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
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
  "comments": [
    {
      "line": 22,
      "value": "#And input additional card details passport details \u003ccountry\u003e and \u003cPassport_number\u003e"
    },
    {
      "line": 23,
      "value": "#And Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page"
    }
  ],
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
      "line": 28,
      "value": "#Step number 16 and 17 need to be defined to carry out end to end journey#"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "74-reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "License_postcode",
        "License_Number",
        "BSCstatus",
        "BillCapAmount",
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
      "line": 30,
      "id": "74-reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 32GB Rose Gold",
        "Refresh",
        "sl11el",
        "122SS23ERT",
        "Enabled",
        "£0",
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
      "line": 31,
      "id": "74-reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94950029383,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "This test scenario ensures that a CC order is successful which accepts additional information like Passport details Driver License details and additional card details but is finally in Referred status",
  "description": "",
  "id": "74-reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;2",
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Add your Bill Spend Cap £0 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select a valid store using TQ13DG for Click and Collect",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate deal summary for applied Bill Spend Cap £0 when BSC is Enabled",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "perform the credit checks using valid TEST, ADDINFOI, 14, SL11UP and valid TEST ADDINFOI",
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
  "line": 18,
  "name": "input additional card details Driving license sl11el and 122SS23ERT",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Register the customer with valid TEST, ADDINFOI, 14, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    8,
    9,
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
  "name": "Choose Business preferences Not Not Select Not and Channel Preferences Not Not Not Post for Me when GDPR Enabled Connected Phone for AFA journey",
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
  "comments": [
    {
      "line": 22,
      "value": "#And input additional card details passport details \u003ccountry\u003e and \u003cPassport_number\u003e"
    },
    {
      "line": 23,
      "value": "#And Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page"
    }
  ],
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
  "duration": 3124891556,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10292952663,
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
  "duration": 36321735020,
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
  "duration": 27658319742,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14699545401,
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
  "duration": 25138690521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£0",
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
  "duration": 44889624779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TQ13DG",
      "offset": 27
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_valid_store_using_postCodefor_Click_and_Collect(String)"
});
formatter.result({
  "duration": 26626818666,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22723215723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£0",
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
  "duration": 14419224911,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43457393933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 38
    },
    {
      "val": "ADDINFOI",
      "offset": 44
    },
    {
      "val": "14",
      "offset": 54
    },
    {
      "val": "SL11UP",
      "offset": 58
    },
    {
      "val": "TEST ADDINFOI",
      "offset": 75
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 86479318334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sl11el",
      "offset": 46
    },
    {
      "val": "122SS23ERT",
      "offset": 57
    }
  ],
  "location": "E2EOrderPlaced_Steps.AFADrivingLicenseLicense(String,String)"
});
formatter.result({
  "duration": 21606580450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 33
    },
    {
      "val": "ADDINFOI",
      "offset": 39
    },
    {
      "val": "14",
      "offset": 49
    },
    {
      "val": "SL11UP",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 37661107865,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16044450689,
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
      "val": "Not",
      "offset": 79
    },
    {
      "val": "Post",
      "offset": 83
    },
    {
      "val": "Me",
      "offset": 92
    },
    {
      "val": "Enabled",
      "offset": 105
    },
    {
      "val": "Connected",
      "offset": 113
    },
    {
      "val": "Phone",
      "offset": 123
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 88884606042,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 57608560752,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5507742860,
  "status": "passed"
});
formatter.after({
  "duration": 17002467840,
  "status": "passed"
});
formatter.uri("75_Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "75_Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect",
  "description": "",
  "id": "75-reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect",
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
  "id": "75-reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now",
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
  "name": "Select valid tariff from PAYG tariffs tab which is less than \u003cTariffs\u003e GBP",
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
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
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
  "id": "75-reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;",
  "rows": [
    {
      "cells": [
        "Device",
        "Device",
        "BSCstatus",
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
      "line": 23,
      "id": "75-reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;1"
    },
    {
      "cells": [
        "Galaxy Trend 2 Lite Perfect Like New",
        "In stock",
        "Disabled",
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
      "line": 24,
      "id": "75-reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 106203238911,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now",
  "description": "",
  "id": "75-reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2",
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
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Confirm Device and Tariff are added in Deal Builder",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select a valid store using sl11er for Click and Collect",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Disabled",
  "matchedColumns": [
    2
  ],
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
  "name": "Register the customer with valid TEST, ACCEPTA, 4, sl11er and other valid details in delivery page",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Choose Business preferences Select Not Select Not and Channel Preferences Not Select Select Not for Me when GDPR Enabled Connected Phone for AFA journey",
  "matchedColumns": [
    16,
    17,
    22,
    23,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2636901081,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10364811843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "device",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_PAYG_Device_InStock_lessThan50GBP(String)"
});
formatter.result({
  "duration": 12494541797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 61
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_valid_Tariffs_from_PAYG_tariffs_tab_LessThan50GBP(int)"
});
formatter.result({
  "duration": 7231281143,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Confirm_Device_and_Tariff_are_added_in_DealBuilder()"
});
formatter.result({
  "duration": 1066206701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sl11er",
      "offset": 27
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_valid_store_using_postCodefor_Click_and_Collect(String)"
});
formatter.result({
  "duration": 27030841734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.ValidateBillCap_AgentDealBuilder(String)"
});
formatter.result({
  "duration": 28026662108,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22702862591,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 63449915890,
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
      "val": "4",
      "offset": 48
    },
    {
      "val": "sl11er",
      "offset": 51
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 34382104922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16048026724,
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
      "val": "Not",
      "offset": 74
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
  "duration": 89027253183,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 89838745077,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5487783399,
  "status": "passed"
});
formatter.after({
  "duration": 17001788018,
  "status": "passed"
});
formatter.uri("76_Reg_FNT_DifferentStoreAddressthanBillingAddres.feature");
formatter.feature({
  "line": 1,
  "name": "76_Reg_FNT_DifferentStoreAddressthanBillingAddres",
  "description": "",
  "id": "76-reg-fnt-differentstoreaddressthanbillingaddres",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT PayM Different store address than billing address",
  "description": "",
  "id": "76-reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address",
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
  "name": "I Land on the basket page and choose to collect from store",
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
  "comments": [
    {
      "line": 19,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 22,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
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
  "comments": [
    {
      "line": 27,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 28,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "76-reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
        "Capacity",
        "Firstname",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 31,
      "id": "76-reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;1"
    },
    {
      "cells": [
        "Galaxy Note9",
        "Midnight Black",
        "128GB",
        "TEST",
        "Enabled",
        "DontCapMyBill",
        "Nill",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Me",
        "Select",
        "Not",
        "Select",
        "Not",
        "Select",
        "Not",
        "Not",
        "Select",
        "Enabled",
        "No",
        "Connected",
        "No",
        "No"
      ],
      "line": 32,
      "id": "76-reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96341296259,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "FNT PayM Different store address than billing address",
  "description": "",
  "id": "76-reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;2",
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
  "name": "I choose PayM Galaxy Note9",
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
  "name": "select Midnight Black color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select 128GB capacity of the connected device",
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
  "name": "I Land on the basket page and choose to collect from store",
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
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 22,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 23,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "matchedColumns": [
    8
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
  "comments": [
    {
      "line": 27,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 28,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 805532785,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 130493196376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Note9",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 29239079470,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 90885246041,
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
  "duration": 124710080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Black",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 19626087644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
});
formatter.result({
  "duration": 19029660721,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 106806313299,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13928369513,
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
  "duration": 39429341460,
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
  "duration": 39963795353,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 81368778135,
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
  "duration": 43617774473,
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
  "duration": 23786625767,
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
  "duration": 59787005216,
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
  "duration": 161228849144,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(E2EOrderPlaced_Steps.java:2109)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments(76_Reg_FNT_DifferentStoreAddressthanBillingAddres.feature:23)\r\n",
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
  "duration": 17319084567,
  "status": "passed"
});
formatter.uri("77_Reg_FNT_MorethanMaxTransaction_Deny.feature");
formatter.feature({
  "line": 1,
  "name": "77_Reg_FNT_MorethanMaxTransaction_Deny",
  "description": "",
  "id": "77-reg-fnt-morethanmaxtransaction-deny",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM Phones Click and collect scenario for More than Max Transaction",
  "description": "",
  "id": "77-reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
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
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the basket page and choose to collect from store",
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 23,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 24,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "77-reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;",
  "rows": [
    {
      "cells": [
        "handset",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "KeyEvent",
        "PreSelected"
      ],
      "line": 30,
      "id": "77-reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "256GB",
        "TEST",
        "NINE",
        "TEST NINE",
        "Me",
        "Enabled",
        "CapMyBill",
        "£15",
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
        "No",
        "No"
      ],
      "line": 31,
      "id": "77-reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 95567185474,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "FNT CFA PayM Phones Click and collect scenario for More than Max Transaction",
  "description": "",
  "id": "77-reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;2",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page selecting pay device in full",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose all Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input TEST and NINE and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 23,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 24,
  "name": "land on the payment page and input TEST NINE and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 867130917,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 133759494326,
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
  "duration": 28337291282,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 21235362919,
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
  "duration": 107939810,
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
  "duration": 17571577295,
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
  "duration": 21098749981,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 107341001574,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
});
formatter.result({
  "duration": 10457237488,
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
  "duration": 39485743364,
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
  "duration": 68247493334,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ChooseMoreAccessory()"
});
formatter.result({
  "duration": 18820484887,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 94770512563,
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
  "duration": 43893754910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 6
    },
    {
      "val": "NINE",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 23818558060,
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
  "duration": 59817564212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST NINE",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(String)"
});
formatter.result({
  "duration": 161054088803,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(E2EOrderPlaced_Steps.java:2109)\r\n\tat ✽.And land on the payment page and input TEST NINE and other details for Click and collect order and click \u0027Continue on next step\u0027 for payments(77_Reg_FNT_MorethanMaxTransaction_Deny.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderDeclinePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17319523180,
  "status": "passed"
});
formatter.uri("78_Reg_FNT_PayMPhonesAdditionalDepositConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "78_Reg_FNT_PayMPhonesAdditionalDepositConfirmation",
  "description": "",
  "id": "78-reg-fnt-paymphonesadditionaldepositconfirmation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM phones Additional information and Order confirmed",
  "description": "",
  "id": "78-reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed",
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
  "name": "I Land on the basket page and choose to collect from store",
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
  "comments": [
    {
      "line": 18,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then Additional information page should be displayed"
    },
    {
      "line": 24,
      "value": "#And upon entering Valid details with valid new \u003cUsername2\u003e and card number"
    }
  ],
  "line": 25,
  "name": "upon entering Valid details for card number",
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
  "comments": [
    {
      "line": 29,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 30,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "78-reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "handset",
        "color",
        "BSCstatus",
        "BillCap",
        "CapAmount",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 33,
      "id": "78-reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;1"
    },
    {
      "cells": [
        "test",
        "acceptb",
        "test acceptb",
        "iPhone X",
        "Space Grey",
        "Enabled",
        "CapMyBill",
        "£200",
        "TEST ACCEPTB",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 34,
      "id": "78-reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29757963447,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "FNT CFA PayM phones Additional information and Order confirmed",
  "description": "",
  "id": "78-reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;2",
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
    3
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
    4
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
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap CapMyBill £200 when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input test and acceptb and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 22,
  "name": "land on the payment page and input test acceptb and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then Additional information page should be displayed"
    },
    {
      "line": 24,
      "value": "#And upon entering Valid details with valid new \u003cUsername2\u003e and card number"
    }
  ],
  "line": 25,
  "name": "upon entering Valid details for card number",
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
  "comments": [
    {
      "line": 29,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 30,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 819320372,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 140847127083,
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
  "duration": 28523339514,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 20897432207,
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
  "duration": 101431154,
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
  "duration": 17599119474,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 115580611817,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13956557381,
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
  "duration": 39447294451,
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
  "duration": 68313874115,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 83606963312,
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
  "duration": 42635259268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 6
    },
    {
      "val": "acceptb",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 23753709297,
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
  "duration": 59766158858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test acceptb",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
});
formatter.result({
  "duration": 57270732439,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(E2EOrderPlaced_Steps.java:2059)\r\n\tat ✽.And land on the payment page and input test acceptb and other details for Click and collect order and click \u0027Continue on next step\u0027(78_Reg_FNT_PayMPhonesAdditionalDepositConfirmation.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.EnterValidCardCCV()"
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
  "duration": 17321714540,
  "status": "passed"
});
formatter.uri("79_Reg_FNT_PayMPhonesClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "79_Reg_FNT_PayMPhonesClickAndCollect",
  "description": "",
  "id": "79-reg-fnt-paymphonesclickandcollect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM Phones Click and collect scenario with E2E journey",
  "description": "",
  "id": "79-reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey",
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
  "name": "I Land on the basket page and choose to collect from store",
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
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
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
  "comments": [
    {
      "line": 25,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "79-reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 29,
      "id": "79-reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£30",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 30,
      "id": "79-reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 97711639407,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "FNT CFA PayM Phones Click and collect scenario with E2E journey",
  "description": "",
  "id": "79-reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;2",
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
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap CapMyBill £30 when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose to collect from store",
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
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027",
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
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 862130386,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 59402631565,
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
  "duration": 28701113827,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 86480596627,
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
  "duration": 108896680,
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
  "duration": 17583444314,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 105545138192,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13973343012,
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
  "duration": 39490073176,
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
  "duration": 68344150942,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 83288305411,
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
  "duration": 45142806999,
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
  "duration": 23757217065,
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
  "duration": 59904335672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
});
formatter.result({
  "duration": 57535027333,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(E2EOrderPlaced_Steps.java:2059)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027(79_Reg_FNT_PayMPhonesClickAndCollect.feature:21)\r\n",
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
  "duration": 17301848945,
  "status": "passed"
});
formatter.uri("80_Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect.feature");
formatter.feature({
  "line": 1,
  "name": "80_Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect",
  "description": "",
  "id": "80-reg-fnt-paymphonesorderstraightdecline-clickandcollect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FNT CFA PayM phones Straight Order Declined",
  "description": "",
  "id": "80-reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined",
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
  "name": "I Land on the basket page and choose to collect from store",
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
  "comments": [
    {
      "line": 18,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e"
    }
  ],
  "line": 26,
  "name": "",
  "description": "",
  "id": "80-reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "KeyEvent",
        "PreSelected"
      ],
      "line": 27,
      "id": "80-reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "TEST",
        "DECLINEA",
        "TEST DECLINEA",
        "Enabled",
        "CapMyBill",
        "£200",
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
        "No",
        "No"
      ],
      "line": 28,
      "id": "80-reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 97305276500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "FNT CFA PayM phones Straight Order Declined",
  "description": "",
  "id": "80-reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;2",
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
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap CapMyBill £200 when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose to collect from store",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input TEST and DECLINEA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 19,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    },
    {
      "line": 21,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 22,
  "name": "land on the payment page and input TEST DECLINEA and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 848442354,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 154432352019,
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
  "duration": 28576317845,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 86981081605,
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
  "duration": 115458242,
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
  "duration": 17570068602,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 105863874030,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13943831909,
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
  "duration": 39489499737,
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
  "duration": 68295681623,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 82071187891,
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
  "duration": 45050014421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 6
    },
    {
      "val": "DECLINEA",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr(String,String)"
});
formatter.result({
  "duration": 23766269790,
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
  "duration": 59810744943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST DECLINEA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
});
formatter.result({
  "duration": 57094104435,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(E2EOrderPlaced_Steps.java:2059)\r\n\tat ✽.And land on the payment page and input TEST DECLINEA and other details for Click and collect order and click \u0027Continue on next step\u0027(80_Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderDeclinePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17340256898,
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
  "comments": [
    {
      "line": 13,
      "value": "#And click on the color dropdown"
    },
    {
      "line": 14,
      "value": "#And verify the name of the colour is next to the colour tile in CFAPhoneColour"
    },
    {
      "line": 15,
      "value": "#And select \u003ccolor\u003e color of the connected device"
    }
  ],
  "line": 16,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#And the Delivery section should show \u0027OOS message\u0027"
    }
  ],
  "line": 23,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
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
      "line": 28,
      "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc;;1"
    },
    {
      "cells": [
        "P20 Pro Like New",
        "Silver",
        "dasdasdkjaskd@sdsd.com",
        "test123",
        "Enabled",
        "DontCapMyBill",
        "Nill"
      ],
      "line": 29,
      "id": "81-reg-jan-cfa-oosforhomedeliveryandcnc;aquisition-oosforhomedeliveryandcnc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96787521767,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
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
  "name": "I choose PayM P20 Pro Like New",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And click on the color dropdown"
    },
    {
      "line": 14,
      "value": "#And verify the name of the colour is next to the colour tile in CFAPhoneColour"
    },
    {
      "line": 15,
      "value": "#And select \u003ccolor\u003e color of the connected device"
    }
  ],
  "line": 16,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the Delivery information section should show the \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
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
      "line": 22,
      "value": "#And the Delivery section should show \u0027OOS message\u0027"
    }
  ],
  "line": 23,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 818114896,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 134987178386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P20 Pro Like New",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 29215014339,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deliveryInformationSection_OOS_message_validation()"
});
formatter.result({
  "duration": 19769455568,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 32597577217,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deliveryInformationSection_OOS_message_validation()"
});
formatter.result({
  "duration": 47396964,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13874194810,
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
  "duration": 39451022947,
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
  "duration": 39942914860,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 60089391761,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.delivery_section_should_show_OOS_message()"
});
formatter.result({
  "duration": 758728033,
  "status": "passed"
});
formatter.after({
  "duration": 17001655466,
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
  "duration": 31435868321,
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
  "duration": 851770922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 140287011190,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 9905264667,
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
  "duration": 22089980561,
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
  "duration": 8810269921,
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
  "duration": 54966029,
  "status": "passed"
});
formatter.after({
  "duration": 17002339839,
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
  "line": 11,
  "name": "Verify the copytext of marketing message",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the copytext of marketing message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 17,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "comments": [
    {
      "line": 23,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 24,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 27,
      "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;1"
    },
    {
      "cells": [
        "iPad 9.7 inch 2018",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 28,
      "id": "87-reg-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29957478981,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
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
  "name": "select any available iPad 9.7 inch 2018 Tablet",
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
  "line": 11,
  "name": "Verify the copytext of marketing message",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the copytext of marketing message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 17,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
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
  "comments": [
    {
      "line": 23,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 24,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 801152341,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 81543822921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad 9.7 inch 2018",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 125024680669,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 130836638482,
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
  "duration": 22151429646,
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
  "duration": 29703048618,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessage()"
});
formatter.result({
  "duration": 8365483131,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 43346099955,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessage()"
});
formatter.result({
  "duration": 8458725132,
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
  "duration": 33174768306,
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
  "duration": 44885182895,
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
  "duration": 59969761858,
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
  "duration": 127775503992,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 62637724263,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5475106851,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20031088631,
  "status": "passed"
});
formatter.after({
  "duration": 17001776071,
  "status": "passed"
});
formatter.uri("89_Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect.feature");
formatter.feature({
  "line": 1,
  "name": "89_Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect",
  "description": "",
  "id": "89-reg-trustev-afa-paym-phones-withaccessoryclick-and-collect",
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
  "id": "89-reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
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
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Add your Bill Spend Cap \u003cBillCapAmount\u003e in agent deal builder when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cConsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "89-reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
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
      "line": 30,
      "id": "89-reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 128GB Black",
        "Refresh",
        "Enabled",
        "£20",
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
      "line": 31,
      "id": "89-reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96579938822,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "89-reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2",
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
  "name": "Select a valid PayM iPhone 7 Plus 128GB Black",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a valid Accessory iPhone 7 Evo Elite Brushed Black",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Add your Bill Spend Cap £20 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select a valid store for Click and Collect",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate deal summary for applied Bill Spend Cap £20 when BSC is Enabled",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
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
  "line": 23,
  "name": "Register customer with valid test123, test123, Anything in delivery page",
  "matchedColumns": [
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Choose Business preferences Select Select Not Not and Channel Preferences Not Select Not Select for Me when GDPR Enabled Connected Phone for AFA journey",
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
  "line": 26,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2701137152,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10219422089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Plus 128GB Black",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 36301695914,
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
  "duration": 27699535161,
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
  "duration": 23755583785,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14693619856,
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
  "duration": 25210261274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£20",
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
  "duration": 53016732724,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 33074927765,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22746950330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£20",
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
  "duration": 14425880341,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43436032729,
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
  "duration": 87637699800,
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
  "duration": 60452130005,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16044075224,
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
      "val": "Not",
      "offset": 42
    },
    {
      "val": "Not",
      "offset": 46
    },
    {
      "val": "Not",
      "offset": 74
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
      "val": "Select",
      "offset": 89
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
  "duration": 89032021609,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 57639661329,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5509675375,
  "status": "passed"
});
formatter.after({
  "duration": 17002195341,
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
        "iPad Pro 10.5 inch 512GB Space Grey",
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
  "duration": 100492332233,
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
  "name": "Select a valid PayM iPad Pro 10.5 inch 512GB Space Grey",
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
  "duration": 2856269125,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10286872950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPad Pro 10.5 inch 512GB Space Grey",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 35569770504,
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
  "duration": 24798897835,
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
  "duration": 23681092357,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 49482301018,
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
  "duration": 25142492404,
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
  "duration": 59082475781,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 32901176633,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22761522983,
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
  "duration": 14430008198,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43472719226,
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
  "duration": 86492560358,
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
  "duration": 60463012277,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16051681834,
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
  "duration": 89024945202,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 57009173331,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5526953095,
  "status": "passed"
});
formatter.after({
  "duration": 17001455218,
  "status": "passed"
});
formatter.uri("91_Reg_CFA_Trustev_PayMPhonesHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "91_Reg_CFA_Trustev_PayMPhonesHomeDeliveryWithAccessory",
  "description": "",
  "id": "91-reg-cfa-trustev-paymphoneshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Trustev PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "91-reg-cfa-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "name": "Choose some Accesssory",
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "91-reg-cfa-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 30,
      "id": "91-reg-cfa-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Someone",
        "Enabled",
        "CapMyBill",
        "£5",
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
        "No",
        "No"
      ],
      "line": 31,
      "id": "91-reg-cfa-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32383763802,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Trustev PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "91-reg-cfa-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap CapMyBill £5 when BSC is Enabled",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose some Accesssory",
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    4
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
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 834707673,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 140514794236,
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
  "duration": 28406720169,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 88249874134,
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
  "duration": 116973763,
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
  "duration": 17596371172,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 67816403679,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13920458547,
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
  "duration": 39557391486,
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
  "duration": 68331885132,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 7775965930,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 47612876910,
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
  "duration": 39227531029,
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
  "duration": 45010915268,
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
  "duration": 59842033823,
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
  "duration": 153097295332,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 96811488480,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmationwithTrustev()"
});
formatter.result({
  "duration": 48416833304,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5444670736,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20053571113,
  "status": "passed"
});
formatter.after({
  "duration": 17001999643,
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
  "comments": [
    {
      "line": 23,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 30,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 32,
      "value": "#Close the browser"
    }
  ],
  "line": 33,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 34,
      "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Silver",
        "256GB",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 35,
      "id": "92-reg-trustev-cfa-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38786922158,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
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
  "name": "I choose PayM iPhone X",
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
  "name": "select Silver color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select 256GB capacity of the connected device",
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
  "comments": [
    {
      "line": 23,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 24,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
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
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 30,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 932943379,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 144416225730,
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
  "duration": 28483743720,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 89524165540,
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
  "duration": 109729533,
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
  "duration": 15541332894,
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
  "duration": 21056981602,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 112723497892,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13917736415,
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
  "duration": 39504178203,
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
  "duration": 58792859650,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 48524192847,
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
  "duration": 40356944112,
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
  "duration": 44940268959,
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
  "duration": 60083709132,
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
  "duration": 153030296169,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 98555018082,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmationwithTrustev()"
});
formatter.result({
  "duration": 52152285824,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5427468679,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20020220581,
  "status": "passed"
});
formatter.after({
  "duration": 17002567395,
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
  "comments": [
    {
      "line": 21,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
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
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 28,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 31,
      "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "iPad Pro 10.5 inch",
        "Space Grey",
        "512GB",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 32,
      "id": "93-reg-trustev-cfa-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 98919409516,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
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
  "name": "select any available iPad Pro 10.5 inch Tablet",
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
  "name": "select 512GB capacity of the connected device",
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
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
  "matchedColumns": [
    7,
    8,
    9
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
  "comments": [
    {
      "line": 21,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 22,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    5
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
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 28,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 869104392,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 144277332117,
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
  "duration": 160081848297,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 11700609792,
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
  "duration": 142592528,
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
  "duration": 21734435347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "512GB",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_capacity_of_the_device(String)"
});
formatter.result({
  "duration": 23276964615,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 112234909515,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13919904449,
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
  "duration": 39482090529,
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
  "duration": 68254576568,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 20649580473,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 46692317670,
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
  "duration": 34411366852,
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
  "duration": 44914816877,
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
  "duration": 72255015750,
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
  "duration": 153059324285,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 89697923499,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmationwithTrustev()"
});
formatter.result({
  "duration": 45959471798,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5557707788,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20011556974,
  "status": "passed"
});
formatter.after({
  "duration": 17002066773,
  "status": "passed"
});
formatter.uri("95_Reg_VOLTE_PayMPhonesClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "95_Reg_VOLTE_PayMPhonesClickAndCollect",
  "description": "",
  "id": "95-reg-volte-paymphonesclickandcollect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Volte PayM Phones Click and collect scenario with E2E journey Click and collect",
  "description": "",
  "id": "95-reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect",
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
  "name": "I Land on the basket page and choose to collect from store",
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
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page to verify GDPR",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
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
  "comments": [
    {
      "line": 25,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "95-reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;",
  "rows": [
    {
      "cells": [
        "handset",
        "color",
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 29,
      "id": "95-reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "DontCapMyBill",
        "Nill",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 30,
      "id": "95-reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 98396137132,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Volte PayM Phones Click and collect scenario with E2E journey Click and collect",
  "description": "",
  "id": "95-reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;2",
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
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Choose your bill cap DontCapMyBill Nill when BSC is Enabled",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page and choose to collect from store",
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
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 20,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027",
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
  "comments": [
    {
      "line": 25,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 26,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 856519437,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 64604639402,
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
  "duration": 28567320870,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 95035359279,
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
  "duration": 115556092,
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
  "duration": 17617039469,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 93143344599,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13943498541,
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
  "duration": 39481517090,
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
  "duration": 39944622664,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 90879487750,
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
  "duration": 46890640245,
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
  "duration": 23833448154,
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
  "duration": 59719649929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
});
formatter.result({
  "duration": 57309834437,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(E2EOrderPlaced_Steps.java:2059)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027(95_Reg_VOLTE_PayMPhonesClickAndCollect.feature:21)\r\n",
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
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
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
  "duration": 17338532597,
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
  "comments": [
    {
      "line": 21,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
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
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 28,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 31,
      "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Galaxy Note9",
        "Midnight Black",
        "128GB",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 32,
      "id": "96-reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 144020220012,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
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
  "name": "I choose PayM Galaxy Note9",
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
  "name": "select Midnight Black color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select 128GB capacity of the connected device",
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
  "comments": [
    {
      "line": 21,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 22,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    18,
    20,
    21,
    22,
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    5
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
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 28,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 854315562,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 339183655485,
  "error_message": "java.lang.AssertionError: unable to do mousehover to phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page(E2EOrderPlaced_Steps.java:265)\r\n\tat ✽.And navigate to PAYM Phones page(96_Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy Note9",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
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
      "val": "Midnight Black",
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
      "val": "128GB",
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
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
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
  "duration": 317005019874,
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
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
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
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
        "GDPRstatus",
        "MBBStatus",
        "DeviceType",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 30,
      "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "iPhone 7",
        "Black",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 31,
      "id": "97-reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 304742764446,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST278806\u0027, ip: \u002710.172.63.240\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\khanj6\\AppData\\Local\\Temp\\1\\scoped_dir47652_18124}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.119, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 50d4a0c9be095315d03f3123c3786d1c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat steps.Hooks.openBrowser(Hooks.java:66)\r\n\tat sun.reflect.GeneratedMethodAccessor45.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor44.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
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
  "name": "I choose PayM iPhone 7",
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
  "name": "select Black color of the connected device",
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
  "comments": [
    {
      "line": 20,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 21,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Not Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    17,
    19,
    20,
    21,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    4
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
  "comments": [
    {
      "line": 26,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 27,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
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
      "val": "Black",
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
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
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
  "duration": 18108711791,
  "status": "passed"
});
});