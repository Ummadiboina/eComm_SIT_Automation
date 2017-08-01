$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Reg_AFA_PAYM_Acquistion.feature");
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
      "name": "@AgentsRegression"
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
  "name": "perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 19,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 20,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 22,
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
        "Username"
      ],
      "line": 23,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "S7 edge black 32 GB",
        "Random",
        "Random",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Test Accepta"
      ],
      "line": 24,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30372350569,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "Select a valid PayM S7 edge black 32 GB",
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
  "name": "Select valid Random from extras tab",
  "matchedColumns": [
    2
  ],
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
  "name": "perform the credit checks using valid Test and Accepta and valid Test Accepta",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid Test and Accepta and other valid details in delivery page",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Pay by card for PAYM device",
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
  "duration": 5929012850,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 14152130952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S7 edge black 32 GB",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 15279560556,
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
  "duration": 11410755798,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 24622233361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_valid_Random_from_extras_tab(String)"
});
formatter.result({
  "duration": 6375076028,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15264805147,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 40107219226,
  "error_message": "junit.framework.AssertionFailedError: Unable to perform advisory checks , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.advisory_checks(E2EOrderPlaced_Steps.java:1551)\r\n\tat ✽.Then perform all the advisory checks(Reg_AFA_PAYM_Acquistion.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    },
    {
      "val": "Accepta",
      "offset": 47
    },
    {
      "val": "Test Accepta",
      "offset": 65
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    },
    {
      "val": "Accepta",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
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
  "duration": 15272107077,
  "status": "passed"
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
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 5,
  "name": "Successful completion of a PAY G handset acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
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
        "Username"
      ],
      "line": 18,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 128GB Jet Black",
        "Random",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 19,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41726900558,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful completion of a PAY G handset acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "Select a valid PAYG iPhone 7 Plus 128GB Jet Black",
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
  "name": "Register customer with valid TEST and ACCEPTA and other valid details in delivery page",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 5293154624,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10401480079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Plus 128GB Jet Black",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_a_valid_PAYG_S_edge_black_GB(String)"
});
formatter.result({
  "duration": 19693060047,
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
  "duration": 8488977613,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15280965427,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 9208946605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 29
    },
    {
      "val": "ACCEPTA",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
});
formatter.result({
  "duration": 28118321642,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 87526,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
});
formatter.result({
  "duration": 82569608415,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 40237367399,
  "error_message": "java.lang.AssertionError: Payment didnt go through, and the text in the screen is Status: Card payment has been unsuccessful.\nTry again\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat actionsPerformed.Agent_ConfirmationPageActions.confirmation(Agent_ConfirmationPageActions.java:69)\r\n\tat actionsPerformed.Agent_ConfirmationPageActions.Confirmationdetails(Agent_ConfirmationPageActions.java:51)\r\n\tat steps.E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed(E2EOrderPlaced_Steps.java:1676)\r\n\tat ✽.Then Order confirmation message should be displayed(Reg_AFA_PayG_withoutAnyAccessory.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 13312014429,
  "status": "passed"
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
      "name": "@AgentsRegression"
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
  "name": "perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
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
        "Username"
      ],
      "line": 18,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "SimO",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Test Accepta"
      ],
      "line": 19,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43627495450,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful completion of a PAY M SIMO acquisition Journey without an accessory",
  "description": "",
  "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "Select valid SimO from tariffs tab",
  "matchedColumns": [
    0
  ],
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
  "name": "perform the credit checks using valid Test and Accepta and valid Test Accepta",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Register customer with valid Test and Accepta and other valid details in delivery page",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 5955529550,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 18709220732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SimO",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 21409434806,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15612071037,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 9276573328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    },
    {
      "val": "Accepta",
      "offset": 47
    },
    {
      "val": "Test Accepta",
      "offset": 65
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String)"
});
formatter.result({
  "duration": 122919408098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    },
    {
      "val": "Accepta",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
});
formatter.result({
  "duration": 20347118798,
  "error_message": "junit.framework.AssertionFailedError: Unable to Register customer , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.register_customer(E2EOrderPlaced_Steps.java:1601)\r\n\tat ✽.And Register customer with valid Test and Accepta and other valid details in delivery page(Reg_AFA_PayMSimO_withoutAnyAccessory.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
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
  "duration": 13006345628,
  "status": "passed"
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
      "name": "@AgentsRegression"
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
  "name": "perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;1"
    },
    {
      "cells": [
        "tablet",
        "Random",
        "Random",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Test Accepta"
      ],
      "line": 21,
      "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43512964571,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful completion of a Tablet Journey",
  "description": "",
  "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "Select a valid PayM tablet",
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
  "name": "perform the credit checks using valid Test and Accepta and valid Test Accepta",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register customer with valid Test and Accepta and other valid details in delivery page",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 6265218870,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 15074023002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tablet",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 7078817476,
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
  "duration": 11584738239,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 4325345920,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15277813684,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 9159523243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    },
    {
      "val": "Accepta",
      "offset": 47
    },
    {
      "val": "Test Accepta",
      "offset": 65
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String)"
});
formatter.result({
  "duration": 119376614620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    },
    {
      "val": "Accepta",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
});
formatter.result({
  "duration": 20398685734,
  "error_message": "junit.framework.AssertionFailedError: Unable to Register customer , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.register_customer(E2EOrderPlaced_Steps.java:1601)\r\n\tat ✽.And Register customer with valid Test and Accepta and other valid details in delivery page(Reg_AFA_Tablet.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.updatedeviceplan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ccaLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14740869448,
  "status": "passed"
});
formatter.uri("Reg_AFU_PAYM_Dongle.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_AFU_PAYM_Dongle",
  "description": "",
  "id": "reg-afu-paym-dongle",
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
  "id": "reg-afu-paym-dongle;successful-completion-of-a-pay-m-dongle-acqusistion-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "perform the credit checks using valid \u003cFirstname\u003e and \u003cSurname\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register customer with valid \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-afu-paym-dongle;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Extras",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-afu-paym-dongle;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "dongle",
        "Random",
        "Random",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Test Accepta"
      ],
      "line": 21,
      "id": "reg-afu-paym-dongle;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35702524190,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-afu-paym-dongle;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "Select a valid PayM dongle",
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
  "name": "perform the credit checks using valid Test and Accepta and valid Test Accepta",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register customer with valid Test and Accepta and other valid details in delivery page",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 4655915433,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 18276008868,
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
  "duration": 7682280179,
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
  "duration": 11381653032,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 4364122729,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 15320484180,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 9260751807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 38
    },
    {
      "val": "Accepta",
      "offset": 47
    },
    {
      "val": "Test Accepta",
      "offset": 65
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String)"
});
formatter.result({
  "duration": 123081165278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 29
    },
    {
      "val": "Accepta",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_customer(String,String)"
});
formatter.result({
  "duration": 20373210025,
  "error_message": "junit.framework.AssertionFailedError: Unable to Register customer , please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.register_customer(E2EOrderPlaced_Steps.java:1601)\r\n\tat ✽.And Register customer with valid Test and Accepta and other valid details in delivery page(Reg_AFU_PAYM_Dongle.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.updatedeviceplan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ccaLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41448799984,
  "status": "passed"
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
      "name": "@AgentsRegression"
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
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
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
        "07521113738",
        "Random",
        "Refresh"
      ],
      "line": 17,
      "id": "reg-afu-savedbasket;afu-saved-basket-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38279535837,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "AFU_Saved Basket functionality",
  "description": "",
  "id": "reg-afu-savedbasket;afu-saved-basket-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
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
  "name": "performs Upgrade for 07521113738",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid Refresh from tariffs tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM Random",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 7081465540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521113738",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 28644617299,
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
  "duration": 12381220265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 9603828610,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 24037187971,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_email_basket_to_save_the_basket()"
});
formatter.result({
  "duration": 27937912937,
  "error_message": "junit.framework.AssertionFailedError: Unable to email basket, please see the failure screenshot\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.choose_to_email_basket_to_save_the_basket(E2EOrderPlaced_Steps.java:1429)\r\n\tat ✽.And choose to email basket to save the basket(Reg_AFU_SavedBasket.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyEmailSentConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13233094838,
  "status": "passed"
});
});