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
  "duration": 97682531827,
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
  "duration": 4454123701,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10432585018,
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
  "duration": 36090429362,
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
  "duration": 27695876811,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14604954791,
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
  "duration": 3404312401,
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
  "duration": 25216016598,
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
  "duration": 47006498981,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22739061698,
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
  "duration": 14481719909,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43526544902,
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
  "duration": 97705716873,
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
  "duration": 36304834869,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16064279839,
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
  "duration": 89132932154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HomeDelivery",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address(String)"
});
formatter.result({
  "duration": 5000554667,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 56704480679,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5563867394,
  "status": "passed"
});
formatter.after({
  "duration": 20039484269,
  "status": "passed"
});
formatter.uri("04_Reg_AFA_SIMO_Credit_Check_Status_ReferWithSIMO_Show_Referral_Message_Order_Submission.feature");
formatter.feature({
  "line": 1,
  "name": "04_Reg_AFA_SIMO_Credit_Check_Status_ReferWithSIMO_Show_Referral_Message_Order_Submission",
  "description": "This scenario ensures that when agent on acquisition journey selects \u0027SIMO\u0027 and performs credit check status with \u0027RefferWithSIMO\u0027 then agent should see referral message and then should be able to place an order successfully and order submission status should be \u0027Referred\u0027 in log file",
  "id": "04-reg-afa-simo-credit-check-status-referwithsimo-show-referral-message-order-submission",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AFA_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage",
  "description": "",
  "id": "04-reg-afa-simo-credit-check-status-referwithsimo-show-referral-message-order-submission;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage",
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
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Add your Bill Spend Cap \u003cBillCapAmount\u003e in agent deal builder when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate deal summary for applied Bill Spend Cap \u003cBillCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "Then "
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
  "name": "Validate Credit check status for ReferralwithSimo",
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
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "agent should be displayed with updated copy of \u0027Refer with Simo\u0027 response",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "04-reg-afa-simo-credit-check-status-referwithsimo-show-referral-message-order-submission;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;",
  "rows": [
    {
      "cells": [
        "Tariff",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "BSCstatus",
        "BillCapAmount",
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
      "line": 24,
      "id": "04-reg-afa-simo-credit-check-status-referwithsimo-show-referral-message-order-submission;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;;1"
    },
    {
      "cells": [
        "Simo",
        "HomeDelivery",
        "TEST",
        "Referc",
        "Test Referc",
        "Enabled",
        "£20",
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
      "line": 25,
      "id": "04-reg-afa-simo-credit-check-status-referwithsimo-show-referral-message-order-submission;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27142699398,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "AFA_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage",
  "description": "",
  "id": "04-reg-afa-simo-credit-check-status-referwithsimo-show-referral-message-order-submission;afa-allow-referwithsimo-credit-check-status-for-simo-order-and-show-referralmessage;;2",
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
  "name": "Select valid Simo from tariffs tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Enabled",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Add your Bill Spend Cap £20 in agent deal builder when BSC is Enabled",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate deal summary for applied Bill Spend Cap £20 when BSC is Enabled",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "perform the credit checks using valid TEST, Referc, 6, SL11ER and valid Test Referc",
  "matchedColumns": [
    2,
    3,
    4,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate Credit check status for ReferralwithSimo",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register the customer with valid TEST, Referc, 6, SL11ER and other valid details in delivery page",
  "matchedColumns": [
    2,
    3,
    7,
    8
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
  "name": "Choose Business preferences Select Not Select Not and Channel Preferences Select Select Not Not for Me when GDPR Enabled Connected Simo for AFA journey",
  "matchedColumns": [
    16,
    17,
    18,
    20,
    21,
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
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "agent should be displayed with updated copy of \u0027Refer with Simo\u0027 response",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2904527441,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10289884482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simo",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 28140551276,
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
  "duration": 25242626921,
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
  "duration": 53135699226,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22802475689,
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
  "duration": 14450936788,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43449320576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 38
    },
    {
      "val": "Referc",
      "offset": 44
    },
    {
      "val": "6",
      "offset": 52
    },
    {
      "val": "SL11ER",
      "offset": 55
    },
    {
      "val": "Test Referc",
      "offset": 72
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 100735276315,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_Creditcheck_status_for_ReferralwithSimo()"
});
formatter.result({
  "duration": 15680917890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 33
    },
    {
      "val": "Referc",
      "offset": 39
    },
    {
      "val": "6",
      "offset": 47
    },
    {
      "val": "SL11ER",
      "offset": 50
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 36262848629,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16053881696,
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
      "val": "Simo",
      "offset": 131
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 89108061490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HomeDelivery",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address(String)"
});
formatter.result({
  "duration": 5000876088,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.submit_order_button_is_clicked()"
});
formatter.result({
  "duration": 3999076125,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.agent_should_displayed_with_updated_copy_of_Refer_with_Sim0_response()"
});
formatter.result({
  "duration": 120012757891,
  "status": "passed"
});
formatter.after({
  "duration": 17807648590,
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
  "duration": 38956984642,
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
  "duration": 786850031,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 135065951233,
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
  "duration": 28405911547,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 21526371960,
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
  "duration": 115032649,
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
  "duration": 22629186592,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_View_tariff_page()"
});
formatter.result({
  "duration": 102723077641,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13918651803,
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
  "duration": 39599917284,
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
  "duration": 68303957643,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 46047941364,
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
  "duration": 31064979002,
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
  "duration": 42761748398,
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
  "duration": 91845149146,
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
  "duration": 61311411218,
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
  "duration": 153192407160,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 89191217045,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 60255033240,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5505776493,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20039298811,
  "status": "passed"
});
formatter.after({
  "duration": 20021965350,
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
  "duration": 32930983597,
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
  "duration": 765649267,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 164949334230,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectTabletsTab()"
});
formatter.result({
  "duration": 3087132085,
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
  "duration": 17265285747,
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
  "duration": 39619962635,
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
  "duration": 40019326845,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ValidateEditLink()"
});
formatter.result({
  "duration": 12419184851,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ValidateAndClickTariffEditLink()"
});
formatter.result({
  "duration": 12145895982,
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
  "duration": 17970969056,
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
  "duration": 39636599777,
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
  "duration": 68420368708,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 25075138211,
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
  "duration": 31090195550,
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
  "duration": 35758950605,
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
  "duration": 44835899589,
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
  "duration": 20410370495,
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
  "duration": 68093942817,
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
  "duration": 31959469545,
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
  "duration": 117681225089,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 55833739520,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5506147408,
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
  "duration": 19062303520,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_pdf_download()"
});
formatter.result({
  "duration": 15105182346,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20042341226,
  "status": "passed"
});
formatter.after({
  "duration": 19897366274,
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
  "duration": 104524436601,
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
  "duration": 797973506,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 68843320169,
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
  "duration": 28727629317,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 20346901890,
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
  "duration": 118452805,
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
  "duration": 20554236113,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 39777517986,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13888900646,
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
  "duration": 39635159351,
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
  "duration": 68408407260,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 45675293859,
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
  "duration": 36747134794,
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
  "duration": 41613324277,
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
  "duration": 60180549819,
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
  "duration": 235934760447,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 80889160628,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 60155740596,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5497309158,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20023776691,
  "status": "passed"
});
formatter.after({
  "duration": 19990417075,
  "status": "passed"
});
formatter.uri("20_Reg_AFA_PayG_withoutAnyAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "20_Reg_AFA_PayG_withoutAnyAccessory",
  "description": "",
  "id": "20-reg-afa-payg-withoutanyaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successful completion of a PAY G handset acquisition Journey without an accessory",
  "description": "",
  "id": "20-reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory",
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
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is \u003cBSCstatus\u003e",
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
  "name": "Choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e and Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e for \u003cconsumer\u003e when GDPR \u003cstatus\u003e \u003cDeviceType\u003e \u003cDeviceModule\u003e for AFA journey",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "20-reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "DeliveryType",
        "BSCstatus",
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
      "line": 21,
      "id": "20-reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "iPhone Xs Max 64GB Silver",
        "Random",
        "HomeDelivery",
        "Disabled",
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
      "line": 22,
      "id": "20-reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 99703306493,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful completion of a PAY G handset acquisition Journey without an accessory",
  "description": "",
  "id": "20-reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2",
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
  "name": "Select a valid PAYG iPhone Xs Max 64GB Silver",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Random from PAYG tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate Bill Spend Cap in agent deal builder section when BSC is Disabled",
  "matchedColumns": [
    3
  ],
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
  "name": "Register the customer with valid TEST, ACCEPTA, 4, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "validate register status",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose Business preferences Not Not Select Not and Channel Preferences Not Select Not Not for Me when GDPR Enabled Connected Phone for AFA journey",
  "matchedColumns": [
    16,
    17,
    19,
    20,
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
  "line": 16,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2923802518,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 11290860694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone Xs Max 64GB Silver",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_a_valid_PAYG_S_edge_black_GB(String)"
});
formatter.result({
  "duration": 16694359016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_valid_Months_from_PAYG_tariffs_tab(String)"
});
formatter.result({
  "duration": 8479783981,
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
  "duration": 28067493489,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22724508395,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 63427429182,
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
      "val": "SL11UP",
      "offset": 51
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 34364219423,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 12065597953,
  "error_message": "java.lang.AssertionError: Register Status text message is miss matching\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.Agent_RegisterCustomerActions.RegisterStatus(Agent_RegisterCustomerActions.java:1728)\r\n\tat steps.E2EOrderPlaced_Steps.Validate_Register_Status(E2EOrderPlaced_Steps.java:8460)\r\n\tat ✽.And validate register status(20_Reg_AFA_PayG_withoutAnyAccessory.feature:14)\r\n",
  "status": "failed"
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
      "val": "Select",
      "offset": 75
    },
    {
      "val": "Not",
      "offset": 82
    },
    {
      "val": "Not",
      "offset": 86
    },
    {
      "val": "Me",
      "offset": 94
    },
    {
      "val": "Enabled",
      "offset": 107
    },
    {
      "val": "Connected",
      "offset": 115
    },
    {
      "val": "Phone",
      "offset": 125
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HomeDelivery",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
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
  "duration": 18088730094,
  "status": "passed"
});
formatter.uri("31_Reg_Agent_GenerateCCA.feature");
formatter.feature({
  "line": 1,
  "name": "31_Reg_Agent_GenerateCCA",
  "description": "",
  "id": "31-reg-agent-generatecca",
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
  "id": "31-reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement",
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
  "comments": [
    {
      "line": 21,
      "value": "#And Update Device Plan Link Email Address"
    },
    {
      "line": 22,
      "value": "#And Accept O2 Refresh Deal Summary"
    }
  ],
  "line": 23,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Then CCALink Should be generated"
    }
  ],
  "line": 25,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials for New User",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus2\u003e"
    }
  ],
  "line": 29,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus2\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "land on the payment page and input details and click \u0027Continue on next step\u0027 in upgrade journey for CCA Link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#Then Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e"
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
  "id": "31-reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;",
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
        "consumer",
        "username",
        "password",
        "MBBStatus",
        "DeviceType",
        "DeviceModule",
        "PreSelected",
        "KeyEvent"
      ],
      "line": 38,
      "id": "31-reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;1"
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
        "ink_jun8829@stf.ref.o2.co.uk",
        "test123",
        "No",
        "Connected",
        "Phone",
        "Yes",
        "No"
      ],
      "line": 39,
      "id": "31-reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36415242454,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Successful completion of a PAY M Acquistion journey by CCA settlement",
  "description": "",
  "id": "31-reg-agent-generatecca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2",
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
  "name": "Choose Business preferences Select Select Select Not and Channel Preferences Select Select Select Select for Me when GDPR Enabled Connected Phone for AFA journey",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    29,
    14,
    30,
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
  "comments": [
    {
      "line": 21,
      "value": "#And Update Device Plan Link Email Address"
    },
    {
      "line": 22,
      "value": "#And Accept O2 Refresh Deal Summary"
    }
  ],
  "line": 23,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Then CCALink Should be generated"
    }
  ],
  "line": 25,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Signin using valid ink_jun8829@stf.ref.o2.co.uk and test123 credentials for New User",
  "matchedColumns": [
    26,
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus2\u003e"
    }
  ],
  "line": 29,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Select Select with No for Connected in delivery page when GDPR is Disabled and Yes",
  "matchedColumns": [
    16,
    32,
    24,
    29,
    14,
    15,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "land on the payment page and input details and click \u0027Continue on next step\u0027 in upgrade journey for CCA Link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#Then Choose \u003cconsumer\u003e \u003cstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e"
    }
  ],
  "line": 35,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 2651213951,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10022254345,
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
  "duration": 36296461400,
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
  "duration": 27719544275,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination_new()"
});
formatter.result({
  "duration": 16611602251,
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
  "duration": 25273973811,
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
  "duration": 57175825770,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22785555241,
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
  "duration": 14435389068,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43425324294,
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
  "duration": 86056082156,
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
  "duration": 60426280596,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16047471462,
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
      "val": "Phone",
      "offset": 140
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_Your_Preferences_AFA(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 89332571023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HomeDelivery",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address(String)"
});
formatter.result({
  "duration": 4999922631,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "duration": 29103062099,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_CCA_link()"
});
formatter.result({
  "duration": 15840083194,
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
  "duration": 27302231635,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_link_for_the_upgrade_journey()"
});
formatter.result({
  "duration": 17821057860,
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
      "val": "Disabled",
      "offset": 144
    },
    {
      "val": "Yes",
      "offset": 157
    }
  ],
  "location": "E2EOrderPlaced_Steps.gdprConsentValidationIn_DeliveryPage(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 48882032457,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade_CCA_Link()"
});
formatter.result({
  "duration": 111045174291,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_CCA_or_Buyout_or_Trade_In_Agreements_page_and_confirm_all_the_agreement_checks_New()"
});
formatter.result({
  "duration": 41711047358,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
});
formatter.result({
  "duration": 45665438437,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5458477973,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20012351136,
  "status": "passed"
});
formatter.after({
  "duration": 17915089424,
  "status": "passed"
});
formatter.uri("36_Reg_CFA_Basket_page_cross_sell_insurance_no_free_insurance.feature");
formatter.feature({
  "line": 1,
  "name": "36_Reg_CFA_Basket_page_cross_sell_insurance_no_free_insurance",
  "description": "",
  "id": "36-reg-cfa-basket-page-cross-sell-insurance-no-free-insurance",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer has selected a PayM phone having no free insurance and selecting cheapest insurance in basket page",
  "id": "36-reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;",
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
  "name": "verify that the insurance is in a sorted order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify that the cheapest insurance is shown to crossell in the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify if the \u0027Add Now\u0027 button is displayed for the cheapest insurance shown in basket page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on the \u0027Add now\u0027 button and verify Insurance gets added successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "36-reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;",
  "rows": [
    {
      "cells": [
        "handset",
        "BSCstatus",
        "BillCap",
        "CapAmount"
      ],
      "line": 21,
      "id": "36-reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Enabled",
        "CapMyBill",
        "£30"
      ],
      "line": 22,
      "id": "36-reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 129047566466,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "This scenario ensures that when the customer has selected a PayM phone having no free insurance and selecting cheapest insurance in basket page",
  "id": "36-reg-cfa-basket-page-cross-sell-insurance-no-free-insurance;;;2",
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
  "name": "I choose PayM iPhone X",
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose your bill cap CapMyBill £30 when BSC is Enabled",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that the insurance is in a sorted order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify that the cheapest insurance is shown to crossell in the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify if the \u0027Add Now\u0027 button is displayed for the cheapest insurance shown in basket page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on the \u0027Add now\u0027 button and verify Insurance gets added successfully",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 936161050,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 137422839390,
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
  "duration": 28651511480,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 155363703441,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13894625939,
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
  "duration": 39574736007,
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
  "duration": 68247097815,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceSortedForInsurance()"
});
formatter.result({
  "duration": 6730581848,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 42171862893,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.cheapest_insurance_displayed_in_crosssell()"
});
formatter.result({
  "duration": 6692870804,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AddNowbutton_For_Cheapest_Insurance()"
});
formatter.result({
  "duration": 3703424253,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_AddNowbutton_For_Cheapest_Insurance()"
});
formatter.result({
  "duration": 21881134181,
  "status": "passed"
});
formatter.after({
  "duration": 19892458474,
  "status": "passed"
});
formatter.uri("58_Reg_CS_FitnessTrackers.feature");
formatter.feature({
  "line": 1,
  "name": "58_Reg_CS_FitnessTrackers",
  "description": "",
  "id": "58-reg-cs-fitnesstrackers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Fitness Trackers only E2E journey",
  "description": "",
  "id": "58-reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey",
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
  "comments": [
    {
      "line": 13,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 14,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "58-reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;",
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
        "B4",
        "DeviceType",
        "PreSelected",
        "KeyEvent",
        "GDPRstatus",
        "KeyEvent"
      ],
      "line": 21,
      "id": "58-reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Select",
        "Not",
        "Not",
        "Not",
        "NonConnected",
        "No",
        "No",
        "Enabled",
        "No"
      ],
      "line": 22,
      "id": "58-reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34354536372,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Fitness Trackers only E2E journey",
  "description": "",
  "id": "58-reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;;2",
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
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available Random Device Fitness tracker",
  "matchedColumns": [
    0
  ],
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
  "comments": [
    {
      "line": 11,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 12,
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
      "line": 13,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 14,
  "name": "Validate consumer GDPR consent section and choose Business preferences Select Not Not with No for NonConnected in delivery page when GDPR is Enabled and No",
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
  "line": 15,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 823773733,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 205278873647,
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
  "duration": 96965012225,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 35635940435,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 11501021154,
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
  "duration": 36341715335,
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
  "duration": 44893092216,
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
      "val": "NonConnected",
      "offset": 98
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
  "duration": 48841225522,
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
  "duration": 159222150922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 69660766725,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5443636244,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20020844071,
  "status": "passed"
});
formatter.after({
  "duration": 19903320261,
  "status": "passed"
});
formatter.uri("61_Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "61_Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "61-reg-cs-paygphoneshomedeliverywithoutaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA PayG Phones Home delivery E2E journey",
  "description": "",
  "id": "61-reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey",
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
  "comments": [
    {
      "line": 12,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    }
  ],
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
  "comments": [
    {
      "line": 17,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
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
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for GDPR",
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
  "comments": [
    {
      "line": 24,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "61-reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;",
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
      "line": 28,
      "id": "61-reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "iPhone X",
        "Space Grey",
        "TEST",
        "",
        "Disabled",
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
        "Connected",
        "No",
        "No"
      ],
      "line": 29,
      "id": "61-reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94780477343,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "CFA PayG Phones Home delivery E2E journey",
  "description": "",
  "id": "61-reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;2",
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
  "name": "navigate to Pay as you Go Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose PayG iPhone X",
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
  "comments": [
    {
      "line": 12,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    }
  ],
  "line": 13,
  "name": "Select a PayG tariff ",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Validate consumer Bill Spend Caps section when BSC is Disabled",
  "matchedColumns": [
    4
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
  "comments": [
    {
      "line": 17,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page to verify GDPR",
  "matchedColumns": [
    2,
    5
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
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Not with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    16,
    18,
    19,
    20,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for GDPR",
  "matchedColumns": [
    6
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
  "comments": [
    {
      "line": 24,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 25,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 776475213,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 219433580003,
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
  "duration": 122640112093,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 11706305673,
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
  "duration": 107287802,
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
  "duration": 22576498993,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 108596660966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectPayGTariffTariff(String)"
});
formatter.result({
  "duration": 58222116220,
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
  "duration": 29760653288,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 46179497944,
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
  "duration": 35943731817,
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
  "duration": 45039364233,
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
  "duration": 69501277154,
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
  "duration": 161889708467,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 78597080806,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5596616024,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20052281983,
  "status": "passed"
});
formatter.after({
  "duration": 19998714312,
  "status": "passed"
});
formatter.uri("65_Reg_CS_PayMSimOnlyRecommendedTariff.feature");
formatter.feature({
  "line": 1,
  "name": "65_Reg_CS_PayMSimOnlyRecommendedTariff",
  "description": "",
  "id": "65-reg-cs-paymsimonlyrecommendedtariff",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sim Only PayM Recommended Tariff selection E2E validation",
  "description": "",
  "id": "65-reg-cs-paymsimonlyrecommendedtariff;sim-only-paym-recommended-tariff-selection-e2e-validation",
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
  "name": "Validate consumer Bill Spend Caps section when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose your bill cap \u003cBillCap\u003e \u003cCapAmount\u003e when BSC is \u003cBSCstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And Click on SIMO Add to Basket CTA"
    }
  ],
  "line": 12,
  "name": "I Land on the Plan included basket page and choose home delivery option",
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
  "comments": [
    {
      "line": 15,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 16,
  "name": "Validate consumer GDPR consent section and choose Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e with \u003cKeyEvent\u003e for \u003cDeviceType\u003e in delivery page when GDPR is \u003cGDPRstatus\u003e and \u003cPreSelected\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 for SimOnly",
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
  "comments": [
    {
      "line": 21,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 22,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#30 Days"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "65-reg-cs-paymsimonlyrecommendedtariff;sim-only-paym-recommended-tariff-selection-e2e-validation;",
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
      "line": 26,
      "id": "65-reg-cs-paymsimonlyrecommendedtariff;sim-only-paym-recommended-tariff-selection-e2e-validation;;1"
    },
    {
      "cells": [
        "12 Months",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Enabled",
        "CapMyBill",
        "£15",
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
      "line": 27,
      "id": "65-reg-cs-paymsimonlyrecommendedtariff;sim-only-paym-recommended-tariff-selection-e2e-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 95944193754,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Sim Only PayM Recommended Tariff selection E2E validation",
  "description": "",
  "id": "65-reg-cs-paymsimonlyrecommendedtariff;sim-only-paym-recommended-tariff-selection-e2e-validation;;2",
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
  "name": "navigate to PAYM SIMO page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on different 12 Months  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Recommended Tariff in the displayed list of Tariffs under different 12 Months tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate consumer Bill Spend Caps section when BSC is Enabled",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Choose your bill cap CapMyBill £15 when BSC is Enabled",
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
      "line": 11,
      "value": "#And Click on SIMO Add to Basket CTA"
    }
  ],
  "line": 12,
  "name": "I Land on the Plan included basket page and choose home delivery option",
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
  "comments": [
    {
      "line": 15,
      "value": "#And Is this order for You or Someone else \u003cconsumer\u003e when GDPR is \u003cGDPRstatus\u003e"
    }
  ],
  "line": 16,
  "name": "Validate consumer GDPR consent section and choose Business preferences Not Select Select with No for Connected in delivery page when GDPR is Enabled and No",
  "matchedColumns": [
    16,
    18,
    19,
    20,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 18,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 for SimOnly",
  "matchedColumns": [
    3
  ],
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
  "comments": [
    {
      "line": 21,
      "value": "#Then Choose \u003cconsumer\u003e \u003cGDPRstatus\u003e Business preferences \u003cB1\u003e \u003cB2\u003e \u003cB3\u003e \u003cB4\u003e And Channel Preferences \u003cText\u003e \u003cEmail\u003e \u003cPhone\u003e \u003cPost\u003e \u003cMBBStatus\u003e \u003cDeviceType\u003e \u003cPreSelected\u003e"
    }
  ],
  "line": 22,
  "name": "Validate consumer GDPR consent section is hidden in Order confirmation page or not",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 888206033,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 160022817545,
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
  "duration": 11458649778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Months",
      "offset": 75
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_Recommended_Tariff_in_the_displayed_list_of_Tariffs_under_different_Months_tab(String)"
});
formatter.result({
  "duration": 13136144097,
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
  "duration": 39631052546,
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
  "duration": 68383080349,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 26377204869,
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
  "duration": 34672022182,
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
  "duration": 44853863378,
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
  "duration": 68613729325,
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
  "duration": 117672173507,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 54798922980,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5530661378,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20017203755,
  "status": "passed"
});
formatter.after({
  "duration": 19930528486,
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
  "duration": 101536786600,
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
  "duration": 2692483391,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 12794993099,
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
  "duration": 36324033146,
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
  "duration": 27691305793,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14611976011,
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
  "duration": 25231990416,
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
  "duration": 44920428441,
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
  "duration": 27108540494,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22775359623,
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
  "duration": 14454730705,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 43430010798,
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
  "duration": 85927288667,
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
  "duration": 21601435078,
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
  "duration": 36173512669,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 16060341424,
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
  "duration": 88996235666,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 56902805985,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 5537723559,
  "status": "passed"
});
formatter.after({
  "duration": 20175707442,
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
  "duration": 95940146683,
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
  "duration": 4017415380,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10790755449,
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
  "duration": 12225230315,
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
  "duration": 7280820383,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Confirm_Device_and_Tariff_are_added_in_DealBuilder()"
});
formatter.result({
  "duration": 2662153675,
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
  "duration": 26880958395,
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
  "duration": 28066779534,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 22724135774,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 63520215449,
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
  "duration": 34403108634,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Validate_Register_Status()"
});
formatter.result({
  "duration": 12068116422,
  "error_message": "java.lang.AssertionError: Register Status text message is miss matching\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.Agent_RegisterCustomerActions.RegisterStatus(Agent_RegisterCustomerActions.java:1728)\r\n\tat steps.E2EOrderPlaced_Steps.Validate_Register_Status(E2EOrderPlaced_Steps.java:8460)\r\n\tat ✽.And validate register status(75_Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect.feature:17)\r\n",
  "status": "failed"
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
  "duration": 18126639110,
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
  "duration": 97236221238,
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
  "duration": 778452669,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 142325625464,
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
  "duration": 29167785671,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 86123603521,
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
  "duration": 117119900,
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
  "duration": 24621966260,
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
  "duration": 19083344427,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 103388535988,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13941469348,
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
  "duration": 39502436549,
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
  "duration": 39944866749,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 80979317493,
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
  "duration": 47606605704,
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
  "duration": 23715356119,
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
  "duration": 73324023475,
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
  "duration": 234306464734,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 80884172615,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 59445042536,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5530967441,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20043051768,
  "status": "passed"
});
formatter.after({
  "duration": 20002820548,
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
  "duration": 155000509724,
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
  "duration": 1105947501,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 139841387655,
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
  "duration": 28895942916,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 149496405194,
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
  "duration": 101277496,
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
  "duration": 22546595373,
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
  "duration": 21122074918,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 110053013573,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
});
formatter.result({
  "duration": 10275364743,
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
  "duration": 39579241603,
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
  "duration": 68298864954,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ChooseMoreAccessory()"
});
formatter.result({
  "duration": 27123617743,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 88422597044,
  "error_message": "java.lang.AssertionError: Unable to Land on the basket page and choose to collect from store\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store(E2EOrderPlaced_Steps.java:1256)\r\n\tat ✽.And I Land on the basket page and choose to collect from store(77_Reg_FNT_MorethanMaxTransaction_Deny.feature:17)\r\n",
  "status": "failed"
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
      "val": "NINE",
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderDeclinePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20509048738,
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
  "duration": 102718034445,
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
  "duration": 1214985772,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 144418429936,
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
  "duration": 28887744096,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 88160786068,
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
  "duration": 106213172,
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
  "duration": 23017079736,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 53840803976,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 14339103568,
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
  "duration": 40255897950,
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
  "duration": 69779653024,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 84563697866,
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
  "duration": 49057584022,
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
  "duration": 23668818202,
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
  "duration": 60371859594,
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
  "duration": 217402459532,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.EnterValidCardCCV()"
});
formatter.result({
  "duration": 112110102093,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 86260595831,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 62092750997,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5466413397,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20019305228,
  "status": "passed"
});
formatter.after({
  "duration": 20015231418,
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
  "duration": 113641353977,
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
  "duration": 1137585092,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 136714572759,
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
  "duration": 28751352532,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 148199717945,
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
  "duration": 121502047,
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
  "duration": 22601832162,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 105602245175,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13938182311,
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
  "duration": 40247901086,
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
  "duration": 68822093236,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 84861566696,
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
  "duration": 47219555653,
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
  "duration": 23744102619,
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
  "duration": 59993228521,
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
  "duration": 216576996201,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 80956243379,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 61544995090,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 5430275900,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20070487549,
  "status": "passed"
});
formatter.after({
  "duration": 20016919878,
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
  "duration": 97410259561,
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
  "duration": 962637116,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 176376040355,
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
  "duration": 28352469602,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 19813087163,
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
  "duration": 99157817,
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
  "duration": 22646096231,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 127940588139,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13918136390,
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
  "duration": 39576540522,
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
  "duration": 68358342236,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 82034886513,
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
  "duration": 42138212007,
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
  "duration": 23719683084,
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
  "duration": 69078560076,
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
  "duration": 215388480806,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderDeclinePage()"
});
formatter.result({
  "duration": 46769618970,
  "status": "passed"
});
formatter.after({
  "duration": 19972981214,
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
  "duration": 107357827392,
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
  "duration": 2894004144,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 15149477134,
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
  "duration": 36171312209,
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
  "duration": 27676509574,
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
  "duration": 23608922787,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 14541365013,
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
  "duration": 25227831272,
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
  "duration": 53090075514,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 27118255401,
  "error_message": "java.lang.AssertionError: unable to select store\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.select_Store_for_click_and_Collect(E2EOrderPlaced_Steps.java:8405)\r\n\tat ✽.And select a valid store for Click and Collect(89_Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect.feature:18)\r\n",
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
  "status": "skipped"
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
  "duration": 20352197104,
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
  "duration": 107371537603,
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
  "duration": 791359609,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 162295312814,
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
  "duration": 28617433357,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 23711851197,
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
  "duration": 100898047,
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
  "duration": 22639610334,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 108774651357,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 37408961927,
  "error_message": "java.lang.AssertionError: Unable to Land on Tariff and extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page(E2EOrderPlaced_Steps.java:1108)\r\n\tat ✽.And Land on the \u0027Tariffs and extra\u0027 page(91_Reg_CFA_Trustev_PayMPhonesHomeDeliveryWithAccessory.feature:12)\r\n",
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
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20157509270,
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
  "duration": 96948231156,
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
  "duration": 838188796,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 195737567797,
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
  "duration": 28252200176,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 88002256781,
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
  "duration": 123393033,
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
  "duration": 22595011190,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 116834702647,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13874386596,
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
  "duration": 39451091526,
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
  "duration": 39938618648,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
});
formatter.result({
  "duration": 82418120461,
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
  "duration": 38298606678,
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
  "duration": 23742869269,
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
  "duration": 69755129951,
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
  "duration": 215344399351,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 98607369722,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 77002712460,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
});
formatter.result({
  "duration": 831806437,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20060198633,
  "status": "passed"
});
formatter.after({
  "duration": 20049867051,
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
  "duration": 100125225990,
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
  "duration": 801530765,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 136031621093,
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
  "duration": 29337254112,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_color_dropdown()"
});
formatter.result({
  "duration": 95687205813,
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
  "duration": 120418883,
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
  "duration": 24645527343,
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
  "duration": 19033602532,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 105289897566,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 13871162705,
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
  "duration": 39471589713,
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
  "duration": 68412363310,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 7811627965,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 43183549568,
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
  "duration": 33818057542,
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
  "duration": 45012792024,
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
  "duration": 59839100155,
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
  "duration": 153221327740,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "duration": 125223975916,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 59817255978,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationVolte()"
});
formatter.result({
  "duration": 835099163,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.gdprValidationInOrderConfirmationPage()"
});
formatter.result({
  "duration": 20059297514,
  "status": "passed"
});
formatter.after({
  "duration": 19967266161,
  "status": "passed"
});
});