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
  "duration": 50237337934,
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
  "duration": 4337957090,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 12182025570,
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
  "duration": 36275826056,
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
  "duration": 23953232647,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14919285114,
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
  "duration": 3429886486,
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
  "duration": 25671909046,
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
  "duration": 45068796815,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 20754671267,
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
  "duration": 25538013360,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 23477981685,
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
  "duration": 99220640743,
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
  "duration": 37850268170,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16100052201,
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
  "duration": 84920428578,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000424685,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 59026533953,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5690161999,
  "status": "passed"
});
formatter.after({
  "duration": 20292363636,
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
  "duration": 40962005927,
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
  "duration": 668412475,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.a_cookies_pop_up_should_be_displayed()"
});
formatter.result({
  "duration": 681425171,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCookiePolicyLink()"
});
formatter.result({
  "duration": 3961556116,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened()"
});
formatter.result({
  "duration": 17471350232,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "duration": 1656699669,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "duration": 17455212563,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnManageCookiesLink()"
});
formatter.result({
  "duration": 3833589383,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theManageCookiesPageShouldBeOpened()"
});
formatter.result({
  "duration": 5961210705,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "duration": 3001613448,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "duration": 19121672550,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCloseIcon()"
});
formatter.result({
  "duration": 28759731741,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theShopHomePageShouldBeDisplayedWithoutTheCookies()"
});
formatter.result({
  "duration": 23508475116,
  "status": "passed"
});
formatter.after({
  "duration": 20098617120,
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
  "duration": 65749401991,
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
  "duration": 737794647,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 132186542092,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 15366642778,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk_PAYG_sim_journey()"
});
formatter.result({
  "duration": 464182260,
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
  "duration": 5628603937,
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
  "duration": 71549986286,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 23569890910,
  "status": "passed"
});
formatter.after({
  "duration": 20084034151,
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
  "duration": 63119982659,
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
  "duration": 472435656,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 118325020836,
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
  "duration": 38630190135,
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
  "duration": 10127916478,
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
  "duration": 71616990931,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2444502013,
  "status": "passed"
});
formatter.after({
  "duration": 20157847202,
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
  "duration": 61951896306,
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
  "duration": 535436585,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 68346096881,
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
  "duration": 31704158195,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 43249080823,
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
  "duration": 244774519,
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
  "duration": 19748846007,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 131959399071,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16069196727,
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
  "duration": 39887660606,
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
  "duration": 73299522053,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 60049528865,
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
  "duration": 31392820350,
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
  "duration": 48925900287,
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
  "duration": 83379896837,
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
  "duration": 78776614731,
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
  "duration": 170888017695,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51468530325,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 81524665516,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3578433090,
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
  "duration": 96805173723,
  "status": "passed"
});
formatter.after({
  "duration": 20157259013,
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
  "duration": 70502853351,
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
  "duration": 745695908,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 69727841805,
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
  "duration": 77987637071,
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
  "duration": 253123497987,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 51946612873,
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
  "duration": 39218581022,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 382906083,
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
  "duration": 5856737182,
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
  "duration": 38164778058,
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
  "duration": 78948185623,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 7244939792,
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
  "duration": 147681147711,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51670117230,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 67131471091,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3576442026,
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
  "duration": 97467028003,
  "status": "passed"
});
formatter.after({
  "duration": 20217549037,
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
  "duration": 70238822915,
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
  "duration": 748141030,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 71673727405,
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
  "duration": 79066486176,
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
  "duration": 1237714034948,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39404801770,
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
  "duration": 35150780447,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 365542137,
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
  "duration": 5802064676,
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
  "duration": 37518916346,
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
  "duration": 78832133067,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 820499889,
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
  "duration": 124546544216,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51483663969,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54818931033,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3509639106,
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
  "duration": 96859747844,
  "status": "passed"
});
formatter.after({
  "duration": 20342828932,
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
        "iPad Pro 10.5 inch",
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
  "duration": 39864827074,
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
  "name": "select any available iPad Pro 10.5 inch Tablet",
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
  "duration": 713831807,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 61082016899,
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
  "duration": 116002474496,
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
  "duration": 125739732272,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 39822219863,
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
  "duration": 36492855563,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 377089317,
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
  "duration": 5825679628,
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
  "duration": 37566192612,
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
  "duration": 78755855784,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 3480580402,
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
  "duration": 130414641009,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51535091528,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 53382649502,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3621551339,
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
  "duration": 96920140500,
  "status": "passed"
});
formatter.after({
  "duration": 20496998363,
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
  "duration": 43260569255,
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
  "duration": 709389604,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58388962088,
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
  "duration": 64173876576,
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
  "duration": 180513032338,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 38621720504,
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
  "duration": 33716944039,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 634092988,
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
  "duration": 5795131342,
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
  "duration": 38396708693,
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
  "duration": 78798094935,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 1584695775,
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
  "duration": 129367401548,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51515898252,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 56270326742,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3562223579,
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
  "duration": 96743477637,
  "status": "passed"
});
formatter.after({
  "duration": 18765673789,
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
  "duration": 37404935545,
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
  "duration": 714064676,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 58898933157,
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
  "duration": 59476550498,
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
  "duration": 445743711922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 38242570405,
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
  "duration": 33506802920,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 410714444,
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
  "duration": 5907110108,
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
  "duration": 38835390755,
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
  "duration": 78893920106,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 2391332537,
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
  "duration": 131386586331,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51656387879,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 56326537669,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3600242071,
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
  "duration": 97499753506,
  "status": "passed"
});
formatter.after({
  "duration": 20099911701,
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
  "duration": 40197432072,
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
  "duration": 731574430,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 61630259500,
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
  "duration": 65023289714,
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
  "duration": 188219076134,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 40012768857,
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
  "duration": 35501479850,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 384831674,
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
  "duration": 5901030038,
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
  "duration": 37904293033,
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
  "duration": 78939036497,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 2324050431,
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
  "duration": 128605234594,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51695613891,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 59010395576,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3524354081,
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
  "duration": 97007185313,
  "status": "passed"
});
formatter.after({
  "duration": 21628006901,
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
  "duration": 50267263703,
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
  "duration": 748906171,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61287763946,
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
  "duration": 31913565672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 31740764964,
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
  "duration": 300786906,
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
  "duration": 21920012741,
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
  "duration": 62132594736,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 43678439991,
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
  "duration": 40000717718,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 416305773,
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
  "duration": 5849435435,
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
  "duration": 37885128423,
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
  "duration": 78964398673,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 9265098872,
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
  "duration": 141385130723,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 51608139439,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55840988454,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 3745756426,
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
  "duration": 98936076090,
  "status": "passed"
});
formatter.after({
  "duration": 21852643575,
  "status": "passed"
});
formatter.uri("119_FR_All_CFA_Phones_Till_TnE.feature");
formatter.feature({
  "line": 1,
  "name": "119_FR_All_CFA_Phones_Till_TnE",
  "description": "",
  "id": "119-fr-all-cfa-phones-till-tne",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "101_FR_Upfront_CFA_Phones_Till_TnE",
  "description": "",
  "id": "119-fr-all-cfa-phones-till-tne;101-fr-upfront-cfa-phones-till-tne",
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
  "id": "119-fr-all-cfa-phones-till-tne;101-fr-upfront-cfa-phones-till-tne;",
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
      "id": "119-fr-all-cfa-phones-till-tne;101-fr-upfront-cfa-phones-till-tne;;1"
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
      "id": "119-fr-all-cfa-phones-till-tne;101-fr-upfront-cfa-phones-till-tne;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45825891617,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "101_FR_Upfront_CFA_Phones_Till_TnE",
  "description": "",
  "id": "119-fr-all-cfa-phones-till-tne;101-fr-upfront-cfa-phones-till-tne;;2",
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
  "duration": 822449192,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 62342154390,
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
  "duration": 33690201636,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 28724612077,
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
  "duration": 306991197,
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
  "duration": 21871515152,
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
  "duration": 28724610466003,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 33722490068,
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
  "duration": 33493968237,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 400227207,
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
  "duration": 5816569078,
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
  "duration": 37630006105,
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
  "duration": 78775200531,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 356316921,
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
  "duration": 25055665207,
  "error_message": "java.lang.AssertionError: Unable to select the sim free link\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(E2EOrderPlaced_Steps.java:8510)\r\n\tat ✽.And verify asterisk is displayed against mandatory fields of \"Payments page\"(119_FR_All_CFA_Phones_Till_TnE.feature:20)\r\n",
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
  "duration": 21657238310,
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
  "duration": 38806975094,
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
  "duration": 752225791,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57234527229,
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
  "duration": 29831150984,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 21044465560,
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
  "duration": 216139792,
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
  "duration": 17681102057,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 31927635833,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16074189250,
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
  "duration": 39771065870,
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
  "duration": 73419226897,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 37376614023,
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
  "duration": 35997857111,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 401752887,
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
  "duration": 5934134926,
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
  "duration": 38733676266,
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
  "duration": 78835428622,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 394333643,
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
  "duration": 25405331210,
  "error_message": "java.lang.AssertionError: Unable to select the sim free link\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verifyAsteriskIsDisplayedAgainstMandatoryFieldsOf(E2EOrderPlaced_Steps.java:8510)\r\n\tat ✽.And verify asterisk is displayed against mandatory fields of \"Payments page\"(11_Reg_CFA_Phones_SSC_checkout_pages_mark_mandatory_fields_with_asterisk.feature:34)\r\n",
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
  "duration": 20565172661,
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
  "duration": 29362849989,
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
  "duration": 41648161026,
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
  "duration": 27205645831,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 64874304623,
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
  "duration": 55274915461,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 10769635037,
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
  "duration": 337876399,
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
  "duration": 22038983588,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33599488255,
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
  "duration": 74678776200,
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
  "duration": 29068599690,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 79508520770,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_contents()"
});
formatter.result({
  "duration": 13297894094,
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
  "duration": 48000736828,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.scrollToAnElement()"
});
formatter.result({
  "duration": 13703551249,
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
  "duration": 78899705375,
  "status": "passed"
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
  "duration": 117658373281,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 43352548197,
  "error_message": "java.lang.AssertionError: Agreements page is not displayed or unable to enter some information in thie page, Please review the screenshots for failure\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.AgreementsPageConfirmation(E2EOrderPlaced_Steps.java:2226)\r\n\tat ✽.And Continue to Agreements page and confirm all the agreement checks(12_Reg_Consumer_Existing_PAYG_Phone_BigBundle_To_Show_£15_Data_Roll_Over_Copy_On_Basket_Page_Package_summary_CC_Order_confirmation.feature:26)\r\n",
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
  "duration": 20379752444,
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
  "duration": 30924121212,
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
  "duration": 2756715063,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 11067532315,
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
  "duration": 34529750763,
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
  "duration": 23966113338,
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
  "duration": 221659048883,
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
  "duration": 25473509754,
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
  "duration": 57316172882,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 20754020438,
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
  "duration": 25483319973,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 23441682813,
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
  "duration": 79137531343,
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
  "duration": 56016528025,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16077321654,
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
  "duration": 85497546560,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5000493342,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "duration": 32433372439,
  "status": "passed"
});
formatter.after({
  "duration": 18059395355,
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
        "07731885329",
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
  "duration": 33512295510,
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
  "name": "performs Upgrade for 07731885329",
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
  "duration": 2537965583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07731885329",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 100884866887,
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
  "duration": 32822935457,
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
  "duration": 24545940102,
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
  "duration": 189915869941,
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
  "duration": 25470986772,
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
  "duration": 57290580314,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 20845693608,
  "status": "passed"
});
formatter.after({
  "duration": 19733089493,
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
        "07568410956",
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
  "duration": 29247582747,
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
  "name": "performs Upgrade for 07568410956",
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
  "duration": 2540471577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07568410956",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 100738579252,
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
  "duration": 34479085512,
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
  "duration": 24085298297,
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
  "duration": 160549786685,
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
  "duration": 25631461358,
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
  "duration": 47054474320,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 20782916346,
  "status": "passed"
});
formatter.after({
  "duration": 18059571599,
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
  "duration": 31135170449,
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
  "duration": 663112408,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 79766309047,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 10805050564,
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
  "duration": 62676560053,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2447963902,
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
  "duration": 30363776156,
  "status": "passed"
});
formatter.after({
  "duration": 19940398319,
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
  "duration": 30029977438,
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
  "duration": 508872196,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57570355231,
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
  "duration": 31542781155,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 72649356514,
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
  "duration": 355784295,
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
  "duration": 21881274408,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34014715682,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69722450077,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(15_Reg_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others.feature:15)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_gdpr_ClickAndCollect(String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect_CreditCheck(String)"
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
  "duration": 20756859101,
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
        "till99492490@stf.ref.o2.co.uk",
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
  "duration": 29909366954,
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
  "name": "Signin using valid till99492490@stf.ref.o2.co.uk and test123 credentials",
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
  "duration": 39464704269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "till99492490@stf.ref.o2.co.uk",
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
  "duration": 27720459721,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 60293141518,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 11241690600,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 11452067772,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tablets()"
});
formatter.result({
  "duration": 102688962265,
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
  "duration": 29976096969,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 46742667551,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69500688874,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(18_Reg_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others.feature:18)\r\n",
  "status": "failed"
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
  "duration": 20394766468,
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
        "07729000024",
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
  "duration": 28337667242,
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
  "name": "performs Upgrade for 07729000024",
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
  "duration": 2549943110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07729000024",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 100316543419,
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
  "duration": 36018797965,
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
  "duration": 24165107896,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14745727405,
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
  "duration": 25674240920,
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
  "duration": 40949868082,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_email_basket_to_save_the_basket()"
});
formatter.result({
  "duration": 12910502986,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyEmailSentConfirmation()"
});
formatter.result({
  "duration": 33844745853,
  "status": "passed"
});
formatter.after({
  "duration": 18051623977,
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
  "duration": 28259751382,
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
  "duration": 776767618,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 56918606680,
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
  "duration": 28614791418,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 76596521832,
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
  "duration": 257515417,
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
  "duration": 19766196505,
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
  "duration": 19155693342,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 32115995577,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69491138067,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(37_Reg_CFA_Cover_me_copy_update_on_basket_summary.feature:32)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 20516229507,
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
  "duration": 29633569564,
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
  "duration": 39410141119,
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
  "duration": 26483211325,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 41163072949,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickOn_GetStartedCTA()"
});
formatter.result({
  "duration": 11164461667,
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
  "duration": 18996932714,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnDeviceConfirm_CTA()"
});
formatter.result({
  "duration": 10231858792,
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
  "duration": 5239290069,
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
  "duration": 39978977394,
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
  "duration": 41750790356,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_need_a_sim_option()"
});
formatter.result({
  "duration": 11908163681,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "duration": 423329706,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "duration": 3800493342,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 47565185755,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 352947401,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifies_the_basket_page_for_the_upgrade_journey()"
});
formatter.result({
  "duration": 553965937,
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
  "duration": 6282044504,
  "status": "passed"
});
formatter.after({
  "duration": 20219771909,
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
  "duration": 27685595223,
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
  "duration": 660214289,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 68626360540,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10089357929,
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
  "duration": 21265046848,
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
  "duration": 9190948905,
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
  "duration": 62747642734,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 1053618580,
  "status": "passed"
});
formatter.after({
  "duration": 20134592524,
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
  "duration": 28866332227,
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
  "duration": 464807963,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 76872828136,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10041419509,
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
  "duration": 18927806060,
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
  "duration": 9258177218,
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
  "duration": 61936858218,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 850453970,
  "status": "passed"
});
formatter.after({
  "duration": 20156124044,
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
  "duration": 27901981332,
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
  "duration": 670048219,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 68877015528,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10032238885,
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
  "duration": 19038181641,
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
  "duration": 9234907322,
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
  "duration": 62022483167,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 1364510861,
  "status": "passed"
});
formatter.after({
  "duration": 20141148242,
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
  "duration": 26960100509,
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
  "duration": 691449502,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 71203067640,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10064906702,
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
  "duration": 20897962752,
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
  "duration": 9159097191,
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
  "duration": 64078235434,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 885414378,
  "status": "passed"
});
formatter.after({
  "duration": 19882928556,
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
  "duration": 35525522672,
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
  "duration": 472806901,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 78116674364,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10018473435,
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
  "duration": 21245937447,
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
  "duration": 9167799690,
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
  "duration": 61551096483,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 827258394,
  "status": "passed"
});
formatter.after({
  "duration": 19855749082,
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
  "duration": 32275023048,
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
  "duration": 492344171,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 82567253970,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10019652997,
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
  "duration": 20931238576,
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
  "duration": 9145537005,
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
  "duration": 61813613979,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "duration": 836120151,
  "status": "passed"
});
formatter.after({
  "duration": 20134797434,
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
  "duration": 28322639770,
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
  "duration": 471451803,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57034378942,
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
  "duration": 33309324131,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 19836552622,
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
  "duration": 243365273,
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
  "duration": 15749032515,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33078270825,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deliveryInformationSection_OOS_message_validation()"
});
formatter.result({
  "duration": 81588675,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69608114665,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(81_Reg_Jan_CFA_OOSForHomeDeliveryandCnC.feature:18)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.delivery_section_should_show_OOS_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20593849502,
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
        "inavl0wx_700444@o2.com",
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
  "duration": 29383953285,
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
  "name": "Signin using valid inavl0wx_700444@o2.com and test123 credentials",
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
  "duration": 20506544216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inavl0wx_700444@o2.com",
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
  "duration": 35467072949,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 58831589471,
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
  "duration": 33160933953,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 22847001637,
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
  "duration": 229001017,
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
  "duration": 15684838222,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34762067861,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deliveryInformationSection_OOS_message_validation()"
});
formatter.result({
  "duration": 85507101,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 16296016988,
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
  "duration": 40071646803,
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
  "duration": 73353357576,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 55121441805,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.delivery_section_should_show_OOS_message()"
});
formatter.result({
  "duration": 969672550,
  "status": "passed"
});
formatter.after({
  "duration": 20203486662,
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
  "duration": 29995029064,
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
  "duration": 667037912,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 69122394869,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 10011319266,
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
  "duration": 18651222296,
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
  "duration": 9539359257,
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
  "duration": 335584516,
  "status": "passed"
});
formatter.after({
  "duration": 20108302057,
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
  "duration": 31917743862,
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
  "duration": 665047556,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 71012217474,
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
  "duration": 53392772926,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 33793983278,
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
  "duration": 51450891396,
  "error_message": "java.lang.AssertionError: Unable to select PayG tariff\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.selectPayGTariffTariff(E2EOrderPlaced_Steps.java:8402)\r\n\tat ✽.And Select a PayG tariff 1GB Preloaded(87_Reg_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature:9)\r\n",
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
  "duration": 20424029374,
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
  "duration": 28299238221,
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
  "duration": 2763688388,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 12792862464,
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
  "duration": 34593848795,
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
  "duration": 20924137492,
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
  "duration": 27911800398,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 49489686352,
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
  "duration": 25551435523,
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
  "duration": 57434022562,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 13101163106,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 20828622694,
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
  "duration": 25535229905,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 23446243928,
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
  "duration": 79534981818,
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
  "duration": 55783481530,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16080804424,
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
  "duration": 85076784782,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 64334075116,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5720327361,
  "status": "passed"
});
formatter.after({
  "duration": 17984813272,
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
  "duration": 31193162929,
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
  "duration": 463820925,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57062006812,
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
  "duration": 32463173634,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 16922429905,
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
  "duration": 278552178,
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
  "duration": 21884888122,
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
  "duration": 19110197567,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 32833942933,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69555020571,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(92_Reg_Trustev_CFA_PayMPhonesHomeDeliveryWithoutAccessory.feature:16)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 20605513825,
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
  "duration": 28639469851,
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
  "duration": 680864941,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 56832789206,
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
  "duration": 58794030347,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 38925632028,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69501948065,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(93_Reg_Trustev_CFA_PayMTabletsHomeDeliveryWithAccessory.feature:9)\r\n",
  "status": "failed"
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
  "duration": 18941732183,
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
  "duration": 33398624729,
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
  "duration": 700149878,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57201599647,
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
  "duration": 30206387260,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 17008524840,
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
  "duration": 324916081,
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
  "duration": 17685306791,
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
  "duration": 21317442690,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 34253463216,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69461874453,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(96_Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory.feature:13)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
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
  "duration": 20544800530,
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
  "duration": 30349306436,
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
  "duration": 659358902,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 57364774873,
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
  "duration": 31951230258,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 17820193054,
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
  "duration": 318566688,
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
  "duration": 22112142978,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 31104740721,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 69476258173,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1081)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(97_Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory.feature:13)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
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
  "duration": 19589619288,
  "status": "passed"
});
});