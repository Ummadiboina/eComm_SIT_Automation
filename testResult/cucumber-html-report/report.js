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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#When Pay by card for PAYM device"
    }
  ],
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
  "comments": [
    {
      "line": 21,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 22,
      "value": "# Then CCALink Should be generated"
    }
  ],
  "line": 23,
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
        "SecurityAnswer"
      ],
      "line": 24,
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
        "vinudeep"
      ],
      "line": 25,
      "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27658507608,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-afa-paym-acquistion;successful-completion-of-a-pay-m-acquistion-journey;;2",
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
  "name": "Select a valid PayM Galaxy S8 Plus 64GB",
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
  "name": "Select valid Base from extras tab",
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid test1234, test1234, vinudeep  in delivery page",
  "matchedColumns": [
    9,
    10,
    11
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
  "comments": [
    {
      "line": 17,
      "value": "#When Pay by card for PAYM device"
    }
  ],
  "line": 18,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 5453777093,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 9955066018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S8 Plus 64GB",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 13728663738,
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
  "duration": 11553926371,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 20551535031,
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
  "duration": 3548993634,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12449223390,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13081719641,
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
  "duration": 49882482450,
  "status": "passed"
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
  "duration": 27769038707,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 4998712491,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 35168923051,
  "error_message": "java.lang.AssertionError: Unable to Pay by card , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.pay_by_card_payn_device(E2EOrderPlaced_Steps.java:2068)\r\n\tat ✽.When Pay by card for PAYM device(Reg_AFA_PAYM_Acquistion.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20367820494,
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
        "HouseNumber",
        "PostCode"
      ],
      "line": 18,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;1"
    },
    {
      "cells": [
        "iPhone 7 Plus 128GB Jet Black",
        "Random",
        "HomeDelivery",
        "TESTER",
        "ACCEPTA",
        "4",
        "SL11UP"
      ],
      "line": 19,
      "id": "reg-afa-payg-withoutanyaccessory;successful-completion-of-a-pay-g-handset-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29223387712,
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
  "name": "Register the customer with valid TESTER, ACCEPTA, 4, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    3,
    4,
    5,
    6
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
  "duration": 5978009366,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 11973735601,
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
  "duration": 21712024156,
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
  "duration": 8832079564,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12480206059,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13063107744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TESTER",
      "offset": 33
    },
    {
      "val": "ACCEPTA",
      "offset": 41
    },
    {
      "val": "4",
      "offset": 50
    },
    {
      "val": "SL11UP",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 29702987883,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5008550007,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
});
formatter.result({
  "duration": 69252764357,
  "error_message": "java.lang.AssertionError: Unable to Pay by card , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.pay_by_card(E2EOrderPlaced_Steps.java:2053)\r\n\tat ✽.When Pay by card(Reg_AFA_PayG_withoutAnyAccessory.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20366417611,
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit order button is clicked",
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
        "Username",
        "HouseNumber",
        "PostCode"
      ],
      "line": 18,
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
        "SL11UP"
      ],
      "line": 19,
      "id": "reg-afa-paymsimo-withoutanyaccessory;successful-completion-of-a-pay-m-simo-acquisition-journey-without-an-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31124265469,
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 6, SL11UP and valid TEST ACCEPTA",
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
  "line": 12,
  "name": "Register the customer with valid TEST, ACCEPTA, 6, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    2,
    3,
    5,
    6
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
  "name": "submit order button is clicked",
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
  "duration": 4530588772,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10502264288,
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
  "duration": 13207851963,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12805236175,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13071368610,
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
      "val": "6",
      "offset": 53
    },
    {
      "val": "SL11UP",
      "offset": 56
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 45015714118,
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
      "val": "6",
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
  "duration": 50766153314,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5003226912,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.submit_order_button_is_clicked()"
});
formatter.result({
  "duration": 9843712441,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 451547488,
  "status": "passed"
});
formatter.after({
  "duration": 17845939924,
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 17,
      "value": "#  Then CCALink Should be generated"
    }
  ],
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
        "PostCode"
      ],
      "line": 22,
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
        "SL11UP"
      ],
      "line": 23,
      "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27896018986,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to normal, current state is maximized\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.50.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir2480_18476}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c89160a800667fd257a4886f03fc3702\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:877)\r\n\tat steps.Hooks.openBrowser(Hooks.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful completion of a Tablet Journey",
  "description": "",
  "id": "reg-afa-tablet;successful-completion-of-a-tablet-journey;;2",
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 18, SL11UP and valid TEST ACCEPTA",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Register the customer with valid TEST, ACCEPTA, 18, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    3,
    4,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# And Update Device Plan Link Email Address"
    },
    {
      "line": 17,
      "value": "#  Then CCALink Should be generated"
    }
  ],
  "line": 18,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
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
      "val": "18",
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
  "duration": 20908325701,
  "status": "passed"
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
  "name": "Choose HomeDelivery delivery address and delivery time",
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
        "PostCode"
      ],
      "line": 21,
      "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order;;1"
    },
    {
      "cells": [
        "Random",
        "Base",
        "Base",
        "Test",
        "Accepta",
        "Test Accepta",
        "2",
        "SL11UP"
      ],
      "line": 22,
      "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23584702358,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "This scenario ensures that when the Agent in acquisition journey access the \u0027Tariffs\u0027 tab, then the agent should be able to see \u0027Base Comms\u0027 tariff  highlighted or tagged differently along with normal tariffs and should be able to place order",
  "description": "",
  "id": "reg-afa-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-acquisition-journey-access-the-\u0027tariffs\u0027-tab,-then-the-agent-should-be-able-to-see-\u0027base-comms\u0027-tariff--highlighted-or-tagged-differently-along-with-normal-tariffs-and-should-be-able-to-place-order;;2",
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
  "name": "Select valid Base from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify that Basecomms is displayed in the offers section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM Random",
  "matchedColumns": [
    0
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
  "name": "Select valid Base from extras tab",
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
  "name": "perform the credit checks using valid Test, Accepta, 2, SL11UP and valid Test Accepta",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register the customer with valid Test, Accepta, 2, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    3,
    4,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Choose HomeDelivery delivery address and delivery time",
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
  "duration": 4480596416,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 10046698556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Base",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 14621806887,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Basecomms_is_displayed_in_the_offers_section()"
});
formatter.result({
  "duration": 2468858074,
  "error_message": "java.lang.AssertionError: Unable to Validate basecomms offer link\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verify_that_Basecomms_is_displayed_in_the_offers_section(E2EOrderPlaced_Steps.java:4346)\r\n\tat ✽.And Verify that Basecomms is displayed in the offers section(Reg_AFA_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
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
      "val": "Test",
      "offset": 38
    },
    {
      "val": "Accepta",
      "offset": 44
    },
    {
      "val": "2",
      "offset": 53
    },
    {
      "val": "SL11UP",
      "offset": 56
    },
    {
      "val": "Test Accepta",
      "offset": 73
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
      "val": "Test",
      "offset": 33
    },
    {
      "val": "Accepta",
      "offset": 39
    },
    {
      "val": "2",
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
  "status": "skipped"
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
  "duration": 20333639225,
  "status": "passed"
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
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#  And perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e"
    },
    {
      "line": 15,
      "value": "#  And Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page"
    },
    {
      "line": 16,
      "value": "#  And Choose \u003cDeliveryType\u003e delivery address and delivery time"
    },
    {
      "line": 17,
      "value": "#And Update Device Plan Link Email Address"
    },
    {
      "line": 18,
      "value": "#Then CCALink Should be generated"
    }
  ],
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
  "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs"
      ],
      "line": 23,
      "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07521124369",
        "dongle",
        "Random"
      ],
      "line": 24,
      "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26864352573,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-afu-paym-dongle-paybycard;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2",
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
  "comments": [
    {
      "line": 7,
      "value": "#And performs Acquisition for New user"
    }
  ],
  "line": 8,
  "name": "performs Upgrade for 07521124369",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM dongle",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid Random from tariffs tab",
  "matchedColumns": [
    2
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
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#  And perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e"
    },
    {
      "line": 15,
      "value": "#  And Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page"
    },
    {
      "line": 16,
      "value": "#  And Choose \u003cDeliveryType\u003e delivery address and delivery time"
    },
    {
      "line": 17,
      "value": "#And Update Device Plan Link Email Address"
    },
    {
      "line": 18,
      "value": "#Then CCALink Should be generated"
    }
  ],
  "line": 19,
  "name": "Pay by card",
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
  "duration": 4448600162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521124369",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 63087254726,
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
  "duration": 10792453458,
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
  "duration": 11835146156,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 19726009445,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12422753372,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13091462310,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
});
formatter.result({
  "duration": 72130469789,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 473956792,
  "status": "passed"
});
formatter.after({
  "duration": 20016576586,
  "status": "passed"
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
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs"
      ],
      "line": 17,
      "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07521001633",
        "dongle",
        "Random"
      ],
      "line": 18,
      "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26133839678,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-afu-paym-dongle-submitorder;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2",
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
  "comments": [
    {
      "line": 7,
      "value": "#And performs Acquisition for New user"
    }
  ],
  "line": 8,
  "name": "performs Upgrade for 07521001633",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM dongle",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid Random from tariffs tab",
  "matchedColumns": [
    2
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
  "name": "Validate all the Basket content and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "submit order button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 4546950536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521001633",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
