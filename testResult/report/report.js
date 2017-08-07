$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CVOS_Features/CVOSDelayedDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "To set a device in Delayed Delivery in CVOS",
  "description": "",
  "id": "to-set-a-device-in-delayed-delivery-in-cvos",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Delayed Delivery_CVS",
  "description": "",
  "id": "to-set-a-device-in-delayed-delivery-in-cvos;delayed-delivery-cvs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
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
  "name": "I click on  \u0027Stockpot\u0027 tab in Trading admin and search for \u003cSKUID\u003e in SkU desciption",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "when I click on All shops I should be able to allocate to different stockspots using \u003cSearch_by_model\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Stockpot\u0027 tab and search using \u003cSKUID\u003e to see the stock status then I should see them in Delayed Delivery status",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-set-a-device-in-delayed-delivery-in-cvos;delayed-delivery-cvs;",
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
      "id": "to-set-a-device-in-delayed-delivery-in-cvos;delayed-delivery-cvs;;1"
    },
    {
      "cells": [
        "SupplyChainAdmin1",
        "SupplyChainAdmin1",
        "1AMFI32N",
        "Amazon Fire phone 32GB",
        "TradingAdmin",
        "TradingAdmin1"
      ],
      "line": 21,
      "id": "to-set-a-device-in-delayed-delivery-in-cvos;delayed-delivery-cvs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 116384844891,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Delayed Delivery_CVS",
  "description": "",
  "id": "to-set-a-device-in-delayed-delivery-in-cvos;delayed-delivery-cvs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
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
  "name": "I Login with Supply Chain Credential SupplyChainAdmin1 and SupplyChainAdmin1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on  \u0027Stockpot\u0027 tab in Supply Chain and search for 1AMFI32N in SkU desciption",
  "matchedColumns": [
    2
  ],
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
  "name": "I should be able to move the Launch date to a past dateAmazon Fire phone 32GB",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I login as a Trading Admin",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Login with Trading Admin Credentials TradingAdmin and TradingAdmin1",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on  \u0027Stockpot\u0027 tab in Trading admin and search for 1AMFI32N in SkU desciption",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "when I click on All shops I should be able to allocate to different stockspots using Amazon Fire phone 32GB",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Stockpot\u0027 tab and search using 1AMFI32N to see the stock status then I should see them in Delayed Delivery status",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_a_Supply_Chain_Admin()"
});
formatter.result({
  "duration": 13065346187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SupplyChainAdmin1",
      "offset": 37
    },
    {
      "val": "SupplyChainAdmin1",
      "offset": 59
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_Login_with_Supply_Chain_Credential(String,String)"
});
formatter.result({
  "duration": 35204644464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1AMFI32N",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_in_Supply_Chain_and_search_for_SKU_ID_in_SkU_desciption(String)"
});
formatter.result({
  "duration": 12266375346,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 332651901,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_the_uploaded_stock_for_the_SKU_ID()"
});
formatter.result({
  "duration": 1917745106,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Online_Stockpot_and_move_the_delivery_date_to_a_past_date()"
});
formatter.result({
  "duration": 13434373608,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Stock_Merchandise()"
});
formatter.result({
  "duration": 3869687715,
  "error_message": "junit.framework.AssertionFailedError: The Stock Merchandise tab is not clicked\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.i_click_on_Stock_Merchandise(E2EOrderPlaced_Steps.java:2996)\r\n\tat ✽.And I click on Stock Merchandise(CVOS_Features/CVOSDelayedDelivery.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_should_be_able_to_move_the_Launch_date_to_a_past_dateAmazon_Fire_phone_GB(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_login_as_a_Trading_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_Login_with_Trading_Admin_Credentials_SupplyChainAdmin_and_SupplyChainAd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    },
    {
      "val": "32",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_in_Trading_admin_and_search_for_SKU_ID_in_SkU_desciption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 103
    }
  ],
  "location": "E2EOrderPlaced_Steps.when_I_click_on_All_shops_I_should_be_able_to_allocate_to_different_stockspots_using_Amazon_Fire_phone_GB(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 43
    },
    {
      "val": "32",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_and_search_using_SKU_ID_to_see_the_stock_status_then_I_should_see_them_in_Delayed_Delivery_status()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7593771236,
  "status": "passed"
});
formatter.uri("CVOS_Features/CVOSPreOrder.feature");
formatter.feature({
  "line": 1,
  "name": "To set a device in Pre Order in CVOS",
  "description": "",
  "id": "to-set-a-device-in-pre-order-in-cvos",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PreOrder_CVS",
  "description": "",
  "id": "to-set-a-device-in-pre-order-in-cvos;preorder-cvs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
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
  "name": "I Login with Trading Admin Credentials \u003cUsername1\u003e and \u003cPassword1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on  \u0027Stockpot\u0027 tab in Trading admin and search for \u003cSKUID\u003e in SkU desciption",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "when I click on All shops I should be able to allocate to different stockspots using \u003cSearch_by_model\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Stockpot\u0027 tab and search using \u003cSKUID\u003e to see the stock status then I should see them in Pre Order status",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-set-a-device-in-pre-order-in-cvos;preorder-cvs;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "SKUID",
        "Search_by_model",
        "Username1",
        "Password1"
      ],
      "line": 20,
      "id": "to-set-a-device-in-pre-order-in-cvos;preorder-cvs;;1"
    },
    {
      "cells": [
        "SupplyChainAdmin2",
        "SupplyChainAdmin1",
        "1AMFI32N",
        "Amazon Fire phone 32GB",
        "TradingAdmin",
        "TradingAdmin1"
      ],
      "line": 21,
      "id": "to-set-a-device-in-pre-order-in-cvos;preorder-cvs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 65920341708,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "PreOrder_CVS",
  "description": "",
  "id": "to-set-a-device-in-pre-order-in-cvos;preorder-cvs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
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
  "name": "I click on  \u0027Stockpot\u0027 tab in Supply Chain and search for 1AMFI32N in SkU desciption",
  "matchedColumns": [
    2
  ],
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
  "name": "I should be able to move the Launch date to a past dateAmazon Fire phone 32GB",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I login as a Trading Admin",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Login with Trading Admin Credentials TradingAdmin and TradingAdmin1",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on  \u0027Stockpot\u0027 tab in Trading admin and search for 1AMFI32N in SkU desciption",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "when I click on All shops I should be able to allocate to different stockspots using Amazon Fire phone 32GB",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Stockpot\u0027 tab and search using 1AMFI32N to see the stock status then I should see them in Pre Order status",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_a_Supply_Chain_Admin()"
});
formatter.result({
  "duration": 10912444117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 37
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_Login_with_Supply_Chain_Credential(String,String)"
});
formatter.result({
  "duration": 36496456214,
  "error_message": "junit.framework.AssertionFailedError: Unable to Validate the CVOS SupplyChain Home Page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.i_Login_with_Supply_Chain_Credential(E2EOrderPlaced_Steps.java:2920)\r\n\tat ✽.And I Login with Supply Chain Credential \u003cusername\u003e and \u003cpassword\u003e(CVOS_Features/CVOSPreOrder.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1AMFI32N",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_in_Supply_Chain_and_search_for_SKU_ID_in_SkU_desciption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_the_uploaded_stock_for_the_SKU_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Online_Stockpot_and_move_the_delivery_date_to_a_past_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Stock_Merchandise()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_should_be_able_to_move_the_Launch_date_to_a_past_dateAmazon_Fire_phone_GB(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_login_as_a_Trading_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_Login_with_Trading_Admin_Credentials_SupplyChainAdmin_and_SupplyChainAd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    },
    {
      "val": "32",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_in_Trading_admin_and_search_for_SKU_ID_in_SkU_desciption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 103
    }
  ],
  "location": "E2EOrderPlaced_Steps.when_I_click_on_All_shops_I_should_be_able_to_allocate_to_different_stockspots_using_Amazon_Fire_phone_GB(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 43
    },
    {
      "val": "32",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_and_search_using_SKU_ID_to_see_the_stock_status_then_I_should_see_them_in_Pre_Order_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2885513694,
  "status": "passed"
});
});