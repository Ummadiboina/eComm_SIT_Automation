$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feb_AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement.feature");
formatter.feature({
  "line": 1,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "This scenario ensures that when the Retention Agent in Upgrade selects a \u0027Phone\u0027 and tariff eligible for eComm Promotion and adds another Bolton, then the customer should be displayed with error message",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement",
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
  "line": 27,
  "name": "Click on \u0027Checkout\u0027 CTA and Proceed till Order placement",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "ErrorMsg",
        "Button"
      ],
      "line": 30,
      "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;1"
    },
    {
      "cells": [
        "07521101029",
        "Random",
        "Refresh",
        "incompatible with each other",
        "Bolton"
      ],
      "line": 31,
      "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 54552132239,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;2",
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
  "name": "performs Upgrade for 07521101029",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select a valid PayM Random",
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
  "name": "Verify that the error incompatible with each other is displayed in the deal about the conflict",
  "matchedColumns": [
    3
  ],
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
  "name": "Verify that the error incompatible with each other is displayed in the deal about the conflict",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Remove\u0027 button in front of Bolton",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \u0027Checkout\u0027 CTA and Proceed till Order placement",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 11405155042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521101029",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 91666637293,
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
  "duration": 14009155153,
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
  "duration": 12426308260,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Extras_tab()"
});
formatter.result({
  "duration": 153594,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Bolton()"
});
formatter.result({
  "duration": 112895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBolton\u003e",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_that_the_deal_has_already_some_offers_Bolton_promotions(String)"
});
formatter.result({
  "duration": 130591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incompatible with each other",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_ErrorMsg_is_displayed_in_the_deal_about_conflict(String)"
});
formatter.result({
  "duration": 104048,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_incompatible_boltons_Bolton1_and_the_Offers_Bolton()"
});
formatter.result({
  "duration": 124575,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_not_enabled()"
});
formatter.result({
  "duration": 104402,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.remove_Bolton_applied_by_Promotion_Click_Remove_button_in_front_Bolton()"
});
formatter.result({
  "duration": 103694,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 111480,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_removed_promotions_displayed_separate_Promotions_removed_list()"
});
formatter.result({
  "duration": 110418,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Reapply_button_shown_front_of_the_promotion_under_Promotions_removed_list()"
});
formatter.result({
  "duration": 109003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incompatible with each other",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_ErrorMsg_is_displayed_in_the_deal_about_conflict(String)"
});
formatter.result({
  "duration": 170936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bolton",
      "offset": 37
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_Remove_button_in_front_Button(String)"
});
formatter.result({
  "duration": 147932,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_enabled()"
});
formatter.result({
  "duration": 88476,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Checkout_CTA_and_Proceed_till_Order_placement()"
});
formatter.result({
  "duration": 102278,
  "status": "passed"
});
formatter.after({
  "duration": 20229601837,
  "status": "passed"
});
formatter.uri("Feb_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "This scenario ensures that when the customer on acquisition journey selects \u0027Freesim\u0027 for Phones  and enters the postcode in Delivery page, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others",
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
  "name": "I enter details in Delivery Page\u003cFirstname\u003e and \u003cSurname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname"
      ],
      "line": 14,
      "id": "cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA"
      ],
      "line": 15,
      "id": "cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53083291749,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;cfa-payg-freesim-delivery-page-more-than-one-address-select-one-compress-others;;2",
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
  "name": "I enter details in Delivery PageTEST and ACCEPTA",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 12750982969,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 16089507726,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027nav-consumer\u0027]/ul/li/a[contains(@href, \u0027/shop\u0027)]\"}\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir8576_6387}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b26aba7fc38e2d59091b3fc9b89b127d\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027nav-consumer\u0027]/ul/li/a[contains(@href, \u0027/shop\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getLocation(Unknown Source)\r\n\tat GlobalActions.MouseHoverAction.PayGSimoNavigation(MouseHoverAction.java:910)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page(E2EOrderPlaced_Steps.java:5481)\r\n\tat ✽.And navigate to PayG SIMO page(Feb_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 32
    },
    {
      "val": "ACCEPTA",
      "offset": 41
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA(String,String)"
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
  "duration": 20385094326,
  "status": "passed"
});
formatter.uri("Feb_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "This scenario ensures that when the customer on acquisition journey selects \u0027Phones\u0027 with click and collect enters the postcode in payment page, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others",
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
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
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 21,
      "id": "cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;1"
    },
    {
      "cells": [
        "Apple iPhone 6",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 22,
      "id": "cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 54146332383,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others",
  "description": "",
  "id": "cfa-phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;phones-cnc-delivery-page-payment-page-more-than-one-address-select-one-compress-others;;2",
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
  "name": "I choose PayM Apple iPhone 6",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11820047055,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 153075198664,
  "error_message": "java.lang.AssertionError: unable to do mousehover to phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page(E2EOrderPlaced_Steps.java:118)\r\n\tat ✽.And navigate to PAYM Phones page(Feb_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 6",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
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
formatter.after({
  "duration": 20429673537,
  "status": "passed"
});
formatter.uri("Feb_CFU_Buyout_with_Recycle_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed with Recycle in  \u0027Your package\u0027 summary",
  "id": "cfu-buyout-with-recycle-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "",
  "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement",
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
  "name": "Click on \u0027Go to checkout\u0027 and proceed till order confirmation",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;1"
    },
    {
      "cells": [
        "q31020046@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 26,
      "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45552820228,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "",
  "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid q31020046@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "Click on \u0027Go to checkout\u0027 and proceed till order confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 17630122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q31020046@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 50
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 35355844837,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 39374116212,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now(E2EOrderPlaced_Steps.java:2770)\r\n\tat ✽.And Navigate to upgrade \u003e upgrade now(Feb_CFU_Buyout_with_Recycle_Order_placement.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_buyout_offer_section_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_XXXXX_left_to_pay_on_your_current()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Take_Offer_and_Upgrade_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_same_recycle_section_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_customer_is_able_to_drecycle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_any_one_of_the_recycle_option_then_Click_on_Yes_get_an_accurate_quote()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.answerthe_Questions_in_the_questionnaire()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_accept_and_continue_to_upgrade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_Device_from_the_recommended_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_Tariff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_in_Your_package_summarr_Buyout_is_displayed_with_Recycle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Add_and_Go_to_Basket_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_in_Your_package_summarr_Buyout_is_displayed_with_Recycle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Goto_checkout_and_proceed_till_order_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20201650469,
  "status": "passed"
});
formatter.uri("Feb_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement",
  "description": "\r\nThis scenario ensures that when the customer on upgrade journey selects \u0027Tablet\u0027 proceeds till Delivery page, then the customer should be displayed with \u0027Go to click and collect’ under the Home delivery tab and should be able to place order with Click and collect",
  "id": "cfu-tablet-cnc-changes-on-delivery-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement",
  "description": "",
  "id": "cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement",
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
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
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Tablet",
        "tariff",
        "houseNumber",
        "Postcode",
        "Username"
      ],
      "line": 24,
      "id": "cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;;1"
    },
    {
      "cells": [
        "6172test2@test.com",
        "test123",
        "Random Device",
        "9.99upfront60.00amonth",
        "111",
        "SL11Er",
        "Test Accepta"
      ],
      "line": 25,
      "id": "cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 55277681516,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement",
  "description": "",
  "id": "cfu-tablet-cnc-changes-on-delivery-page-order-placement;cfu-tablet-cnc-changes-on-delivery-page-order-placement;;2",
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
  "name": "Signin using valid 6172test2@test.com and test123 credentials",
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
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a Random Device device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs link in upgrade options page",
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and input Test Accepta and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    6
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 19465537145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6172test2@test.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 45064842360,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 39329246092,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now(E2EOrderPlaced_Steps.java:2770)\r\n\tat ✽.And Navigate to upgrade \u003e upgrade now(Feb_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tariffs()"
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
      "val": "\u003cAction\u003e",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cFirstname\u003e",
      "offset": 6
    },
    {
      "val": "\u003cSurname\u003e",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Accepta",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
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
formatter.after({
  "duration": 20391742066,
  "status": "passed"
});
formatter.uri("Feb_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others",
  "description": "This scenario ensures that when the customer on upgrade journey selects \u0027Tablet\u0027 proceeds till Delivery page and enters the postcode, then all the other addresses in the drop down should be compressed on selecting one of the address",
  "id": "cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes",
  "description": "",
  "id": "cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes",
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
  "comments": [
    {
      "line": 15,
      "value": "# And perform \u003cAction\u003e in OTAC page"
    }
  ],
  "line": 16,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e",
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
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Place your order\u0027 CTA",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Tablet",
        "tariff",
        "houseNumber",
        "Postcode",
        "Username"
      ],
      "line": 25,
      "id": "cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;1"
    },
    {
      "cells": [
        "6172test2@test.com",
        "test123",
        "Random Device",
        "9.99upfront60.00amonth",
        "111",
        "SL11Er",
        "Test Accepta"
      ],
      "line": 26,
      "id": "cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47212943558,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes",
  "description": "",
  "id": "cfu-tablet-delivery-page-more-than-one-address-select-one-compress-others;cfu-user-with-direct-debit-details-simo-order-tablets-user-review-page-changes;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid 6172test2@test.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "Select a Random Device device from Recommended devices section",
  "matchedColumns": [
    2
  ],
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
  "comments": [
    {
      "line": 15,
      "value": "# And perform \u003cAction\u003e in OTAC page"
    }
  ],
  "line": 16,
  "name": "Click on \u0027Use a different delivery address\u0027link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter a 111 and an \u003cPostCode\u003e",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "land on the payment page and input Test Accepta and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    6
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
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Place your order\u0027 CTA",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 22856697393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6172test2@test.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 24966638142,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 39396758306,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now(E2EOrderPlaced_Steps.java:2770)\r\n\tat ✽.And Navigate to upgrade \u003e upgrade now(Feb_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tariffs()"
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
  "location": "E2EOrderPlaced_Steps.click_on_Use_a_different_delivery_address_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 8
    },
    {
      "val": "\u003cPostCode\u003e",
      "offset": 19
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
      "val": "Test Accepta",
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
  "location": "E2EOrderPlaced_Steps.clickOnIAgreeToTheTermsAndConditionCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnPlaceYourOrderCTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20364859136,
  "status": "passed"
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
  "duration": 47336494761,
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
  "duration": 7453032642,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 19850885929,
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
  "duration": 15352423997,
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
  "duration": 11720832086,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 21116223967,
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
  "duration": 3633097067,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12611429272,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13372322979,
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
  "duration": 87992075019,
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
  "duration": 22195094743,
  "error_message": "java.lang.AssertionError: Unable to Register customer\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Register_Customer_Phones(E2EOrderPlaced_Steps.java:6449)\r\n\tat ✽.And Register customer with valid test1234, test1234, vinudeep  in delivery page(Reg_AFA_PAYM_Acquistion.feature:15)\r\n",
  "status": "failed"
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
  "duration": 20682182896,
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
  "duration": 48001153020,
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
  "duration": 9674828409,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 18783482009,
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
  "duration": 19348348081,
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
  "duration": 8664673123,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12412539610,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13055573959,
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
  "duration": 28886416159,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 4999545940,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
});
formatter.result({
  "duration": 85510648628,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 477833907,
  "status": "passed"
});
formatter.after({
  "duration": 18576781324,
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
  "duration": 45949613572,
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
  "duration": 10352149367,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 13564546851,
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
  "duration": 13140106497,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12378449417,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13051919542,
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
  "duration": 63399944508,
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
  "duration": 20180196077,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid TEST, ACCEPTA, 6, SL11UP and other valid details in delivery page(Reg_AFA_PayMSimO_withoutAnyAccessory.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.submit_order_button_is_clicked()"
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
  "duration": 20429827132,
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
  "duration": 44515223197,
  "status": "passed"
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
  "duration": 9350189798,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 17596954228,
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
  "duration": 10868806585,
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
  "duration": 11517494555,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 23616875152,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12421245659,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13092475214,
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
  "duration": 61895663680,
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
  "duration": 20257661145,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid TEST, ACCEPTA, 18, SL11UP and other valid details in delivery page(Reg_AFA_Tablet.feature:14)\r\n",
  "status": "failed"
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
  "duration": 20483115930,
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
  "duration": 41114852588,
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
  "duration": 8687182503,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 15105870141,
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
  "duration": 14284611671,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Basecomms_is_displayed_in_the_offers_section()"
});
formatter.result({
  "duration": 3754134488,
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
  "duration": 13545721260,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 19640882256,
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
  "duration": 3402338671,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12403532390,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13068037763,
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
  "duration": 66033502004,
  "status": "passed"
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
  "duration": 20172984214,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid Test, Accepta, 2, SL11UP and other valid details in delivery page(Reg_AFA_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer.feature:15)\r\n",
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
  "duration": 18107222410,
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
        "07801427798",
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
  "duration": 49614674221,
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
  "name": "performs Upgrade for 07801427798",
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
  "duration": 9139611031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07801427798",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 115907597336,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027sectionHeading\u0027]/strong\"}\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir10924_31559}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 0234d6611d41d1083241540f5421620d\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027sectionHeading\u0027]/strong}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat actionsPerformed.Agent_HomePagePageActions.upgradeUser(Agent_HomePagePageActions.java:102)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Upgrade(E2EOrderPlaced_Steps.java:1734)\r\n\tat ✽.And performs Upgrade for 07801427798(Reg_AFU_PAYM_Dongle_payByCard.feature:8)\r\n",
  "status": "failed"
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
  "duration": 20064514291,
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
        "07521116469",
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
  "duration": 41817265367,
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
  "name": "performs Upgrade for 07521116469",
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
  "duration": 8342269065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521116469",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 116425028542,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027sectionHeading\u0027]/strong\"}\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir8052_12676}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 73006f93780f006a540dc8ebe396a7a2\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027sectionHeading\u0027]/strong}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat actionsPerformed.Agent_HomePagePageActions.upgradeUser(Agent_HomePagePageActions.java:102)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Upgrade(E2EOrderPlaced_Steps.java:1734)\r\n\tat ✽.And performs Upgrade for 07521116469(Reg_AFU_PAYM_Dongle_submitOrder.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.submit_order_button_is_clicked()"
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
  "duration": 20489107177,
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
        "07521116469",
        "dongle",
        "Refresh"
      ],
      "line": 17,
      "id": "reg-afu-savedbasket;afu-saved-basket-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41395025945,
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
  "name": "performs Upgrade for 07521116469",
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
  "duration": 7974573739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521116469",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 113283774687,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027sectionHeading\u0027]/strong\"}\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir6556_7387}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8497902fca5c26e5a63298b58255df75\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027sectionHeading\u0027]/strong}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat actionsPerformed.Agent_HomePagePageActions.upgradeUser(Agent_HomePagePageActions.java:102)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Upgrade(E2EOrderPlaced_Steps.java:1734)\r\n\tat ✽.And performs Upgrade for 07521116469(Reg_AFU_SavedBasket.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.choose_to_email_basket_to_save_the_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyEmailSentConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20086125816,
  "status": "passed"
});
formatter.uri("Reg_AFU_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer.feature");
formatter.feature({
  "line": 1,
  "name": "C1960_E11522_TC1_AFU_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer",
  "description": "",
  "id": "c1960-e11522-tc1-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that when the Agent in upgrade journey access the \u0027Tariffs\u0027 tab,",
  "description": "then the agent should be able to see \u0027Base Comms\u0027 tariff  highlighted or tagged differently along with normal tariffs and should be able to place order",
  "id": "c1960-e11522-tc1-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,",
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
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a valid PayM \u003cDevice\u003e",
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
  "id": "c1960-e11522-tc1-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs"
      ],
      "line": 19,
      "id": "c1960-e11522-tc1-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;;1"
    },
    {
      "cells": [
        "07521119232",
        "Random",
        "Base"
      ],
      "line": 20,
      "id": "c1960-e11522-tc1-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53071432413,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "This scenario ensures that when the Agent in upgrade journey access the \u0027Tariffs\u0027 tab,",
  "description": "then the agent should be able to see \u0027Base Comms\u0027 tariff  highlighted or tagged differently along with normal tariffs and should be able to place order",
  "id": "c1960-e11522-tc1-afu-verify-base-comms-tariff-under-offer-column-order-placement-o2-offer;this-scenario-ensures-that-when-the-agent-in-upgrade-journey-access-the-\u0027tariffs\u0027-tab,;;2",
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
  "name": "I login to Agent shop",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "performs Upgrade for 07521119232",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Base from tariffs tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a valid PayM Random",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 12162064848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521119232",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 67365120317,
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
  "duration": 14311150607,
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
  "duration": 13716419252,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Basecomms_is_displayed_in_the_offers_section()"
});
formatter.result({
  "duration": 433209750,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 19630301222,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12466232568,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 15799476363,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card()"
});
formatter.result({
  "duration": 64459048662,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 40397673857,
  "status": "passed"
});
formatter.after({
  "duration": 17781176675,
  "status": "passed"
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
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "clicks on \u0027Buyout\u0027 button",
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
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
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
        "password"
      ],
      "line": 26,
      "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey;;1"
    },
    {
      "cells": [
        "07801427798",
        "Galaxy S7 Edge 32GB Pink",
        "Refresh",
        "erto@1234.com",
        "HomeDelivery",
        "Test",
        "Accepta",
        "Flat 9",
        "SL11EL",
        "Test Accepta",
        "test123"
      ],
      "line": 27,
      "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43115108107,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful completion of a BuyOut Journey",
  "description": "",
  "id": "reg-agent-buyout;successful-completion-of-a-buyout-journey;;2",
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
  "name": "performs Upgrade for 07801427798",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM Galaxy S7 Edge 32GB Pink",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid Refresh from tariffs tab",
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
  "name": "clicks on \u0027Buyout\u0027 button",
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
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Signin using valid erto@1234.com and test123 credentials",
  "matchedColumns": [
    3,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input Test Accepta and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 9575522486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07801427798",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 116763855180,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027sectionHeading\u0027]/strong\"}\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir7716_16442}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 32e7637ce7a9a28b0802168c86ff1051\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027sectionHeading\u0027]/strong}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat actionsPerformed.Agent_HomePagePageActions.upgradeUser(Agent_HomePagePageActions.java:102)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Upgrade(E2EOrderPlaced_Steps.java:1734)\r\n\tat ✽.And performs Upgrade for 07801427798(Reg_Agent_Buyout.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S7 Edge 32GB Pink",
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
  "location": "E2EOrderPlaced_Steps.clicks_on_Buyout_button()"
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
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_CCA_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "erto@1234.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 37
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_link_for_the_upgrade_journey()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Accepta",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_CCA_or_Buyout_or_Trade_In_Agreements_page_and_confirm_all_the_agreement_checks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
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
  "duration": 18109078992,
  "status": "passed"
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#When Pay by card for PAYM device"
    }
  ],
  "line": 19,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Then Order confirmation message should be displayed"
    }
  ],
  "line": 21,
  "name": "CCALink Should be generated",
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
        "PostCode"
      ],
      "line": 26,
      "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;1"
    },
    {
      "cells": [
        "Delayed",
        "Random",
        "Random",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP"
      ],
      "line": 27,
      "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39103895001,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;2",
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
  "name": "Search for Delayed device",
  "matchedColumns": [
    0
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
  "name": "Select valid Base from extras tab",
  "matchedColumns": [
    3
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
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
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
  "line": 16,
  "name": "Register the customer with valid TEST, ACCEPTA, 14, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    5,
    6,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#When Pay by card for PAYM device"
    }
  ],
  "line": 19,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Then Order confirmation message should be displayed"
    }
  ],
  "line": 21,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 8624181154,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 14288372614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delayed",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_Delayed_device(String)"
});
formatter.result({
  "duration": 25246561288,
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
  "duration": 13433097209,
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
  "duration": 11539608271,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 21597843944,
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
  "duration": 3341170545,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12418886178,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13075634674,
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
  "duration": 64514481767,
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
  "duration": 20217034338,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid TEST, ACCEPTA, 14, SL11UP and other valid details in delivery page(Reg_Agent_DelayedDelivery.feature:16)\r\n",
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
  "duration": 18126771733,
  "status": "passed"
});
formatter.uri("Reg_Agent_GenerateCCA.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Agent_Generate CCA",
  "description": "",
  "id": "reg-agent-generate-cca",
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
  "id": "reg-agent-generate-cca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement",
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
  "name": "select a valid Handset and Tariff combination such that there is monthly",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And Select valid \u003cExtras\u003e from extras tab"
    }
  ],
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
  "name": "get the emailid",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Signin using CCA valid emailid and \u003cpassword1\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "reg-agent-generate-cca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "DeliveryType",
        "Firstname",
        "Surname",
        "Username",
        "HouseNumber",
        "PostCode",
        "emailid",
        "password1"
      ],
      "line": 28,
      "id": "reg-agent-generate-cca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;1"
    },
    {
      "cells": [
        "07521000051",
        "Galaxy S7 Edge 32GB Pink",
        "Refresh",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Flat 6",
        "SL11EL",
        "tester@tes.com",
        "SitTester123"
      ],
      "line": 29,
      "id": "reg-agent-generate-cca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44618768540,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Successful completion of a PAY M Acquistion journey by CCA settlement",
  "description": "",
  "id": "reg-agent-generate-cca;successful-completion-of-a-pay-m-acquistion-journey-by-cca-settlement;;2",
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
  "name": "Select a valid PayM Galaxy S7 Edge 32GB Pink",
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
  "name": "select a valid Handset and Tariff combination such that there is monthly",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And Select valid \u003cExtras\u003e from extras tab"
    }
  ],
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, Flat 6, SL11EL and valid TEST ACCEPTA",
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
  "name": "Register the customer with valid TEST, ACCEPTA, Flat 6, SL11EL and other valid details in delivery page",
  "matchedColumns": [
    4,
    5,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "get the emailid",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Signin using CCA valid emailid and SitTester123 credentials",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "matchedColumns": [
    6
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
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 8582003892,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 20983657049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S7 Edge 32GB Pink",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 11895339858,
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
  "duration": 11743979909,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination_such_that_there_is_monthly()"
});
formatter.result({
  "duration": 9981221479,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12392493759,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13098270753,
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
      "val": "Flat 6",
      "offset": 53
    },
    {
      "val": "SL11EL",
      "offset": 61
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 78
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 63849271064,
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
      "val": "Flat 6",
      "offset": 48
    },
    {
      "val": "SL11EL",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 20227634481,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid TEST, ACCEPTA, Flat 6, SL11EL and other valid details in delivery page(Reg_Agent_GenerateCCA.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.update_the_emailid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_CCA_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SitTester123",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_CCA_valid_emailid_and_test_credentials(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_link_for_the_upgrade_journey()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade(String)"
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
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
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
  "duration": 18301357718,
  "status": "passed"
});
formatter.uri("Reg_Agent_PreOrder.feature");
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#When Pay by card for PAYM device"
    }
  ],
  "line": 19,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Then Order confirmation message should be displayed"
    }
  ],
  "line": 21,
  "name": "CCALink Should be generated",
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
        "PostCode"
      ],
      "line": 26,
      "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;1"
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
        "SL11UP"
      ],
      "line": 27,
      "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45920276668,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful completion of a PAY M Acquistion journey",
  "description": "",
  "id": "reg-agent-delayeddelivery;successful-completion-of-a-pay-m-acquistion-journey;;2",
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
  "name": "Search for preorder device",
  "matchedColumns": [
    0
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
  "name": "Select valid Base from extras tab",
  "matchedColumns": [
    3
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
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
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
  "line": 16,
  "name": "Register the customer with valid TEST, ACCEPTA, 14, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    5,
    6,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#When Pay by card for PAYM device"
    }
  ],
  "line": 19,
  "name": "Update Device Plan Link Email Address",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Then Order confirmation message should be displayed"
    }
  ],
  "line": 21,
  "name": "CCALink Should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 8652696291,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 15410468916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "preorder",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_Delayed_device(String)"
});
formatter.result({
  "duration": 18730500754,
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
  "duration": 13485950704,
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
  "duration": 11586985095,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 20064404581,
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
  "duration": 3390841025,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12398560034,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13074880504,
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
  "duration": 113004649596,
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
  "duration": 20172178727,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid TEST, ACCEPTA, 14, SL11UP and other valid details in delivery page(Reg_Agent_PreOrder.feature:16)\r\n",
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
  "duration": 20215818677,
  "status": "passed"
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
  "name": "select a valid Handset and Tariff combination",
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
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
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
        "password"
      ],
      "line": 27,
      "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;1"
    },
    {
      "cells": [
        "07521000506",
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
        "test123"
      ],
      "line": 28,
      "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 97533786189,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successful completion of a PAY M dongle Acqusistion Journey",
  "description": "",
  "id": "reg-agent-tradein;successful-completion-of-a-pay-m-dongle-acqusistion-journey;;2",
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
  "name": "performs Upgrade for 07521000506",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid PayM Galaxy S7 Edge 32GB Pink",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid Refresh from tariffs tab",
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
  "name": "perform all the advisory checks",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on \u0027Generate CCA\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \u0027CCA\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Signin using valid 23oc84050507@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    3,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on \u0027Continue\u0027 button on upgrade page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 in upgrade journey",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page, check order contract text and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 8587790582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521000506",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 76534018351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S7 Edge 32GB Pink",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 11735745617,
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
  "duration": 11710927364,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 24342268003,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clicks_on_Trade_In_button()"
});
formatter.result({
  "duration": 21326786103,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12409764647,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 14278613346,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Generate_CCA_button()"
});
formatter.result({
  "duration": 100842929,
  "error_message": "java.lang.AssertionError: Unable to enter the CCA email id\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.click_on_Generate_CCA_button(E2EOrderPlaced_Steps.java:6173)\r\n\tat ✽.And Click on \u0027Generate CCA\u0027 button(Reg_Agent_TradeIn.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_CCA_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "23oc84050507@stf.ref.o2.co.uk",
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_link_for_the_upgrade_journey()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_CCA_or_Buyout_or_Trade_In_Agreements_page_and_confirm_all_the_agreement_checks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageOrderContractTextConfirmation()"
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
  "duration": 18168555808,
  "status": "passed"
});
formatter.uri("Reg_CFA_Accessories_Confirmation_Page_changes.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Accessories_Confirmation_Page_changes",
  "description": "",
  "id": "cfa-accessories-confirmation-page-changes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA Accessories confirmation page changes",
  "description": "This scenario ensures that when the customer selects a accessory and tries to place an order,\r\nthen the customer should be able to see the changes in Confirmation page",
  "id": "cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes",
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
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
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify contents of order confirmation page for Accessories containing \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 20,
      "value": "#Step 9 and Step 10 of ALM clubbed together"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "Status"
      ],
      "line": 22,
      "id": "cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "In Stock"
      ],
      "line": 23,
      "id": "cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42896399448,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "CFA Accessories confirmation page changes",
  "description": "This scenario ensures that when the customer selects a accessory and tries to place an order,\r\nthen the customer should be able to see the changes in Confirmation page",
  "id": "cfa-accessories-confirmation-page-changes;cfa-accessories-confirmation-page-changes;;2",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
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
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify contents of order confirmation page for Accessories containing In Stock",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22532460110,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 89108239885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "duration": 3779716112,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 41585563108,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 21988283996,
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
  "duration": 26712531259,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "duration": 55251565849,
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
  "duration": 72084088035,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 24676947235,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 673609209,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_contents_of_order_confirmation_page_for_Accessories_containing_In_Stock()"
});
formatter.result({
  "duration": 79747751,
  "status": "passed"
});
formatter.after({
  "duration": 20235238825,
  "status": "passed"
});
formatter.uri("Reg_CFA_Basket page cross sell insurance.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Basket page cross sell insurance",
  "description": "",
  "id": "cfa-basket-page-cross-sell-insurance",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Basket page cross sell insurance",
  "description": "This scenario ensures that when the customer\r\nhas selected a PayM phone having one associated tariffs which had free insurance and has selected that  tariff\r\nin the tariff and extras page without selecting the free insurance then free insurance is displayed as cross sell on basket page",
  "id": "cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance",
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
  "id": "cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariff"
      ],
      "line": 22,
      "id": "cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;;1"
    },
    {
      "cells": [
        "Appl",
        "9.99upfront44.00amonth"
      ],
      "line": 23,
      "id": "cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43972090039,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "CFA_Basket page cross sell insurance",
  "description": "This scenario ensures that when the customer\r\nhas selected a PayM phone having one associated tariffs which had free insurance and has selected that  tariff\r\nin the tariff and extras page without selecting the free insurance then free insurance is displayed as cross sell on basket page",
  "id": "cfa-basket-page-cross-sell-insurance;cfa-basket-page-cross-sell-insurance;;2",
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
  "name": "I choose PayM Appl",
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
  "name": "select a 9.99upfront44.00amonth which has free insurance",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23574207024,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 66241086741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Appl",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126052652478,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Appl(Reg_CFA_Basket page cross sell insurance.feature:11)\r\n",
  "status": "failed"
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
      "val": "9.99upfront44.00amonth",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_Tariff_Free_Insurance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.deselect_if_any_insurance_is_autoselected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceSortedForInsurance()"
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
  "location": "E2EOrderPlaced_Steps.cheapest_insurance_displayed_in_crosssell()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AddNowbutton_For_Cheapest_Insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_AddNowbutton_For_Cheapest_Insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20499970625,
  "status": "passed"
});
formatter.uri("Reg_CFA_Basket_page_cross_sell_insurance_no_free_insurance.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Basket_page_cross_sell_insurance_no_free_insurance",
  "description": "",
  "id": "cfa-basket-page-cross-sell-insurance-no-free-insurance",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer has selected a PayM phone having no free insurance and selecting cheapest insurance in basket page",
  "id": "cfa-basket-page-cross-sell-insurance-no-free-insurance;",
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
  "id": "cfa-basket-page-cross-sell-insurance-no-free-insurance;;",
  "rows": [
    {
      "cells": [
        "handset"
      ],
      "line": 19,
      "id": "cfa-basket-page-cross-sell-insurance-no-free-insurance;;;1"
    },
    {
      "cells": [
        "iPhone 8"
      ],
      "line": 20,
      "id": "cfa-basket-page-cross-sell-insurance-no-free-insurance;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48818444930,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "This scenario ensures that when the customer has selected a PayM phone having no free insurance and selecting cheapest insurance in basket page",
  "id": "cfa-basket-page-cross-sell-insurance-no-free-insurance;;;2",
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
  "name": "I choose PayM iPhone 8",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 21921484544,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 62729748353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 32028101069,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 25810570558,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9517919241,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceSortedForInsurance()"
});
formatter.result({
  "duration": 4094323657,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 120968235666,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.cheapest_insurance_displayed_in_crosssell()"
});
formatter.result({
  "duration": 3353596837,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AddNowbutton_For_Cheapest_Insurance()"
});
formatter.result({
  "duration": 3360649089,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_AddNowbutton_For_Cheapest_Insurance()"
});
formatter.result({
  "duration": 21747158678,
  "status": "passed"
});
formatter.after({
  "duration": 19935513667,
  "status": "passed"
});
formatter.uri("Reg_CFA_Cover_me_copy_update_on_basket_summary.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Cover_me_copy_update_on_basket_summary",
  "description": "",
  "id": "cfa-cover-me-copy-update-on-basket-summary",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on acquisition journey selects insurance,\r\nthen the customer should be able to see \u0027Insurance\u0027 copy text in the SSC checkout Your order section instead of \u0027Cover Me\u0027\r\n\r\nselect tablet\r\nand view tariff\r\nselect insurance\r\ngo to basket\r\ngo to checkout\r\nverify insurance copy text is displayed on delivery page\r\ncontinue to payment page\r\nverify insurance copy text is displayed on payment page\r\ncontinue to next step\r\nverify insurance copy text is displayed on the agreement page\r\ncontinue to next step\r\nverify insurance copy text is displayed on your order section\r\ncontinue to next step\r\ndownload pdf and  verify insurance copy text is displayed on pdf",
  "id": "cfa-cover-me-copy-update-on-basket-summary;",
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
  "name": "verify cover me is present in delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 46,
      "value": "#And pdf content"
    }
  ],
  "line": 47,
  "name": "",
  "description": "",
  "id": "cfa-cover-me-copy-update-on-basket-summary;;",
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
        "Username"
      ],
      "line": 48,
      "id": "cfa-cover-me-copy-update-on-basket-summary;;;1"
    },
    {
      "cells": [
        "Random Device",
        "Rose Gold",
        "256GB",
        "In Stock",
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 49,
      "id": "cfa-cover-me-copy-update-on-basket-summary;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41929282473,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "",
  "description": "This scenario ensures that when the customer on acquisition journey selects insurance,\r\nthen the customer should be able to see \u0027Insurance\u0027 copy text in the SSC checkout Your order section instead of \u0027Cover Me\u0027\r\n\r\nselect tablet\r\nand view tariff\r\nselect insurance\r\ngo to basket\r\ngo to checkout\r\nverify insurance copy text is displayed on delivery page\r\ncontinue to payment page\r\nverify insurance copy text is displayed on payment page\r\ncontinue to next step\r\nverify insurance copy text is displayed on the agreement page\r\ncontinue to next step\r\nverify insurance copy text is displayed on your order section\r\ncontinue to next step\r\ndownload pdf and  verify insurance copy text is displayed on pdf",
  "id": "cfa-cover-me-copy-update-on-basket-summary;;;2",
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
  "line": 25,
  "name": "I choose Random Device Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Rose Gold color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select 256GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
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
  "name": "verify cover me is present in delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify cover me is present in  payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "verify cover me is present in  agreements page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "verify cover me is present in review page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "order confirmation is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "verify cover me is present in  pdf download",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 27870494355,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 54318217016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
});
formatter.result({
  "duration": 28189940480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 5132192487,
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
  "duration": 4741611,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 25007340331,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9522748265,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_an_insurance()"
});
formatter.result({
  "duration": 7490926599,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 121633224827,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_Basket_page()"
});
formatter.result({
  "duration": 7403547254,
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
  "duration": 28352950253,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_delivery_page()"
});
formatter.result({
  "duration": 10399096553,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "duration": 54963376205,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_cover_me_is_present_in_payment_page()"
});
formatter.result({
  "duration": 10398661604,
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
  "duration": 21056158254,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery(E2EOrderPlaced_Steps.java:1283)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027(Reg_CFA_Cover_me_copy_update_on_basket_summary.feature:38)\r\n",
  "status": "failed"
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
formatter.after({
  "duration": 20596208551,
  "status": "passed"
});
formatter.uri("Reg_CFA_MBB_Data filters.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_MBB_Data filters",
  "description": "This scenario ensures that when a customer in acquisition journey selects \u0027MBB\u0027 and navigates to tariff page ,\r\nthen the customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "cfa-mbb-data-filters",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_MBB_Data filters",
  "description": "",
  "id": "cfa-mbb-data-filters;cfa-mbb-data-filters",
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
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "##New functionality ends"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "cfa-mbb-data-filters;cfa-mbb-data-filters;",
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
      "line": 24,
      "id": "cfa-mbb-data-filters;cfa-mbb-data-filters;;1"
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
      "line": 25,
      "id": "cfa-mbb-data-filters;cfa-mbb-data-filters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42373025479,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "CFA_MBB_Data filters",
  "description": "",
  "id": "cfa-mbb-data-filters;cfa-mbb-data-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@OctoberReleasePhase1"
    },
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
  "comments": [
    {
      "line": 12,
      "value": "##New functionality starts"
    }
  ],
  "line": 13,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on respective high data filter",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "If I select ANY sort option Monthly data (Low to High) from the drop-down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option high",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs based on the selected sort option Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22023043422,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayM_MBB_page()"
});
formatter.result({
  "duration": 57466566299,
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
  "duration": 422532809,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 43945822194,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9518499289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#Verification point - A - More than 2 should be displayed",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "duration": 8441436965,
  "error_message": "java.lang.AssertionError: Sort filter validation failed\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.filterandDropDownPosition(E2EOrderPlaced_Steps.java:5703)\r\n\tat ✽.Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed(Reg_CFA_MBB_Data filters.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 54
    },
    {
      "val": "high",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20230000332,
  "status": "passed"
});
formatter.uri("Reg_CFA_PayG_SIM_ipad.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayG_SIM",
  "description": "",
  "id": "cfa-payg-sim",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Ordering a free sim",
  "description": "",
  "id": "cfa-payg-sim;ordering-a-free-sim",
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
  "name": "I enter details in Delivery Page\u003cFirstname\u003e and \u003cSurname\u003e",
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
  "id": "cfa-payg-sim;ordering-a-free-sim;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname"
      ],
      "line": 13,
      "id": "cfa-payg-sim;ordering-a-free-sim;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA"
      ],
      "line": 14,
      "id": "cfa-payg-sim;ordering-a-free-sim;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41677687957,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Ordering a free sim",
  "description": "",
  "id": "cfa-payg-sim;ordering-a-free-sim;;2",
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
  "comments": [
    {
      "line": 8,
      "value": "#And Land on the \u0027Tariffs and extra\u0027 page"
    }
  ],
  "line": 9,
  "name": "I enter details in Delivery PageTEST and ACCEPTA",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Free Sim order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22652035198,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 74139067787,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 14279462362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 32
    },
    {
      "val": "ACCEPTA",
      "offset": 41
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA(String,String)"
});
formatter.result({
  "duration": 21481706683,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.free_Sim_order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 2373718778,
  "status": "passed"
});
formatter.after({
  "duration": 19865828126,
  "status": "passed"
});
formatter.uri("Reg_CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "This scenario ensures that when a customer in acquisition journey selects \u0027Phone\u0027 and navigated to tariff page ,then \r\nthe customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement",
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
  "name": "I search for a PayM \u003chandset\u003e device",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#select handset with more tariff and less tariff  -- \u003e ask kanban team to set handset with 2 tariff and handset with more than 3 tariff"
    }
  ],
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
  "comments": [
    {
      "line": 13,
      "value": "##New functionality starts"
    }
  ],
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
  "comments": [
    {
      "line": 22,
      "value": "##New functionality ends"
    }
  ],
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
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
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "filtername",
        "sortoption"
      ],
      "line": 32,
      "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "Samsung Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "high",
        "Monthly data (High to low)"
      ],
      "line": 33,
      "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46969006471,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I search for a PayM Samsung Galaxy S8 device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#select handset with more tariff and less tariff  -- \u003e ask kanban team to set handset with 2 tariff and handset with more than 3 tariff"
    }
  ],
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
  "comments": [
    {
      "line": 13,
      "value": "##New functionality starts"
    }
  ],
  "line": 14,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (High to low)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on respective high data filter",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (High to low)",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "If I select ANY sort option Monthly data (High to low) from the drop-down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see tariffs relevant to selected sort option Monthly data (High to low) \u0026 filter option high",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see tariffs based on the selected sort option Monthly data (High to low)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "##New functionality ends"
    }
  ],
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
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
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23239710407,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 63709335856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy S8",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_device(String)"
});
formatter.result({
  "duration": 25864245112,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 23838380364,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9519031562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "duration": 8452555578,
  "error_message": "java.lang.AssertionError: Sort filter validation failed\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.filterandDropDownPosition(E2EOrderPlaced_Steps.java:5703)\r\n\tat ✽.Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (High to low)(Reg_CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 54
    },
    {
      "val": "high",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20204699001,
  "status": "passed"
});
formatter.uri("Reg_CFA_PayM_Tablet_Data_filters_options_tariff_and_extras_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "This scenario ensures that when a customer in acquisition journey selects \u0027Phone\u0027 and navigated to tariff page ,then\r\nthe customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement",
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
  "name": "I search for a PayM \u003chandset\u003e device",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#select handset with more tariff and less tariff  -- \u003e ask kanban team to set handset with 2 tariff and handset with more than 3 tariff"
    }
  ],
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
  "comments": [
    {
      "line": 13,
      "value": "##New functionality starts"
    }
  ],
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
  "comments": [
    {
      "line": 22,
      "value": "##New functionality ends"
    }
  ],
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
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
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "filtername",
        "sortoption"
      ],
      "line": 32,
      "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "Galaxy S8 Plus",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "high",
        "Monthly data (Low to High)"
      ],
      "line": 33,
      "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40896670538,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I search for a PayM Galaxy S8 Plus device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#select handset with more tariff and less tariff  -- \u003e ask kanban team to set handset with 2 tariff and handset with more than 3 tariff"
    }
  ],
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
  "comments": [
    {
      "line": 13,
      "value": "##New functionality starts"
    }
  ],
  "line": 14,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on respective high data filter",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "If I select ANY sort option Monthly data (Low to High) from the drop-down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option high",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see tariffs based on the selected sort option Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "##New functionality ends"
    }
  ],
  "line": 23,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
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
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 21456849501,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 62836123516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S8 Plus",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_device(String)"
});
formatter.result({
  "duration": 24892259828,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 25137828768,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9484629933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "duration": 8529031838,
  "error_message": "java.lang.AssertionError: Sort filter validation failed\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.filterandDropDownPosition(E2EOrderPlaced_Steps.java:5703)\r\n\tat ✽.Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (Low to High)(Reg_CFA_PayM_Tablet_Data_filters_options_tariff_and_extras_page_Order_placement.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 54
    },
    {
      "val": "high",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20303538831,
  "status": "passed"
});
formatter.uri("Reg_CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box",
  "description": "",
  "id": "cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer selects a delayed delivery Phone and opts for home delivery,\r\nthen the customer should be able to see the changes in \u0027Confirmation Page formatting box\u0027",
  "id": "cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;",
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
  "id": "cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;",
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
      "id": "cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;;1"
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
      "id": "cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41653675545,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "This scenario ensures that when the customer selects a delayed delivery Phone and opts for home delivery,\r\nthen the customer should be able to see the changes in \u0027Confirmation Page formatting box\u0027",
  "id": "cfa-phones-delayed-delivery-home-delivery-confirmation-page-formatting-box;;;2",
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
  "name": "I choose PayM iPhone 7 Plus",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select Black color of the connected device",
  "matchedColumns": [
    5
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
  "name": "Verify contents of order confirmation page for Phones containing Delayed Delivery",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 21751802258,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 69988472981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 7 Plus",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 31788509928,
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
  "duration": 5127575097,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 25518665271,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9479891507,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 118929591431,
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
  "duration": 29695306379,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "duration": 55019025899,
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
  "duration": 21128659105,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery(E2EOrderPlaced_Steps.java:1283)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027(Reg_CFA_Phones_Delayed_delivery_Home_delivery_Confirmation_Page_formatting_box.feature:17)\r\n",
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
  "location": "E2EOrderPlaced_Steps.verify_contents_of_order_confirmation_page_for_Phones_containing_Delayed_Delivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20547474149,
  "status": "passed"
});
formatter.uri("Reg_CFA_SIMO_Phone_Data_filters_options_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_SIMO_Phone_Data_filters_options_Order_placement",
  "description": "This scenario ensures that when a customer in acquisition journey selects \u0027SIMO\u0027\r\ntariff for phones ,then the customer should be able to see  \u0027Data filter\u0027 button",
  "id": "cfa-simo-phone-data-filters-options-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_SIMO_Phone_Data_filters_options_Order_placement",
  "description": "",
  "id": "cfa-simo-phone-data-filters-options-order-placement;cfa-simo-phone-data-filters-options-order-placement",
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
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see data filters buttons for SIMO tariffs",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And If I select ANY sort option from the drop-down"
    },
    {
      "line": 15,
      "value": "#Then I should see tariffs relevant to selected sort option \u0026 filter option"
    }
  ],
  "line": 16,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see default tariff lists",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different \u003cContract\u003e tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the Plan included basket page  and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "cfa-simo-phone-data-filters-options-order-placement;cfa-simo-phone-data-filters-options-order-placement;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username",
        "filtername",
        "sortoption",
        "Contract"
      ],
      "line": 27,
      "id": "cfa-simo-phone-data-filters-options-order-placement;cfa-simo-phone-data-filters-options-order-placement;;1"
    },
    {
      "cells": [
        "Samsung Galaxy S8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "high",
        "Monthly data (Low to High)",
        "30 Days"
      ],
      "line": 28,
      "id": "cfa-simo-phone-data-filters-options-order-placement;cfa-simo-phone-data-filters-options-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41912226051,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "CFA_SIMO_Phone_Data_filters_options_Order_placement",
  "description": "",
  "id": "cfa-simo-phone-data-filters-options-order-placement;cfa-simo-phone-data-filters-options-order-placement;;2",
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
  "name": "Click on different 30 Days  Months Tariff in Tab",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see data filters buttons for SIMO tariffs",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on respective high data filter",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And If I select ANY sort option from the drop-down"
    },
    {
      "line": 15,
      "value": "#Then I should see tariffs relevant to selected sort option \u0026 filter option"
    }
  ],
  "line": 16,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see default tariff lists",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the Plan included basket page  and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 21683276815,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 42283474223,
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
  "duration": 3883199876,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_data_filters_buttons_for_SIMO_tariffs()"
});
formatter.result({
  "duration": 20061947776,
  "error_message": "java.lang.AssertionError: Data filter Tab is not displayed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.PAYMandPAYGTariffAndExtrasPageActions.VerifyFilterDataTabPresent(PAYMandPAYGTariffAndExtrasPageActions.java:890)\r\n\tat steps.E2EOrderPlaced_Steps.i_should_see_data_filters_buttons_for_SIMO_tariffs(E2EOrderPlaced_Steps.java:6049)\r\n\tat ✽.Then I should see data filters buttons for SIMO tariffs(Reg_CFA_SIMO_Phone_Data_filters_options_Order_placement.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_default_tariff_lists()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20161099043,
  "status": "passed"
});
formatter.uri("Reg_CFA_morethan12Tablet.feature");
formatter.feature({
  "line": 1,
  "name": "C1669_E11522_TC1_CFA_morethan12Tablet",
  "description": "",
  "id": "c1669-e11522-tc1-cfa-morethan12tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "E11522_CFA_MoreThan12Accessory_Tablet",
  "description": "",
  "id": "c1669-e11522-tc1-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet",
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
  "name": "Select \u003caccessoryname\u003e from accessories",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add quantity of accessories to basket within \u003climit1\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the device \u003caccessoryname\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "add quantity of FitnessTracker to basket within \u003climit2\u003e in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the devices \u003caccessoryname\u003e and \u003cfitnesstrackername\u003e in basket",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "calculate the total quantity of devices added to basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
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
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "c1669-e11522-tc1-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet;",
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
        "fitnesstrackername"
      ],
      "line": 32,
      "id": "c1669-e11522-tc1-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "6",
        "Random Device",
        "6",
        "JBL Clip 2",
        "Fitbit Alta"
      ],
      "line": 33,
      "id": "c1669-e11522-tc1-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43834799205,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "E11522_CFA_MoreThan12Accessory_Tablet",
  "description": "",
  "id": "c1669-e11522-tc1-cfa-morethan12tablet;e11522-cfa-morethan12accessory-tablet;;2",
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
  "name": "Navigate to Accessories",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select JBL Clip 2 from accessories",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add quantity of accessories to basket within 6 in details page and navigate to basket",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the device JBL Clip 2 in basket",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I choose Fitbit Alta FitnessTracker",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "add quantity of FitnessTracker to basket within 6 in details page and navigate to basket",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the devices JBL Clip 2 and Fitbit Alta in basket",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "calculate the total quantity of devices added to basket",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I choose Random Device Tablet",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Choose Accesssory",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Land on the basket page by clicking on Add to Basket button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the previously selected standalone non-connected items should be removed from my basket",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
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
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 27324718239,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 74685338308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Clip 2",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_accessory(String)"
});
formatter.result({
  "duration": 8784574512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.addQuantityAccessories(String)"
});
formatter.result({
  "duration": 45146733002,
  "error_message": "java.lang.AssertionError: Unable to add accessories to basket\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.addQuantityAccessories(E2EOrderPlaced_Steps.java:2925)\r\n\tat ✽.And add quantity of accessories to basket within 6 in details page and navigate to basket(Reg_CFA_morethan12Tablet.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Clip 2",
      "offset": 18
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_1_device_in_basket(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fitbit Alta",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_fitnesstracker(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 48
    }
  ],
  "location": "E2EOrderPlaced_Steps.addQuantityFitnessTracker(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JBL Clip 2",
      "offset": 19
    },
    {
      "val": "Fitbit Alta",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_2_devices_in_basket(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.calculate_total_qty_of_devices_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
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
  "location": "E2EOrderPlaced_Steps.ChooseGivenAccessory()"
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
  "location": "E2EOrderPlaced_Steps.validateEcomm11522()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20274216438,
  "status": "passed"
});
formatter.uri("Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons",
  "description": "",
  "id": "cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;",
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
  "id": "cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariff",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 31,
      "id": "cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;1"
    },
    {
      "cells": [
        "Sony",
        "9.99upfront65.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 32,
      "id": "cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42793878304,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "cfa-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2",
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
  "name": "I choose PayM Sony",
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
  "name": "Select a tariff 9.99upfront65.00amonth",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify whether promotional ribbons are displayed for 9.99upfront65.00amonth on the Tariff tile in the Tariff and Extras page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for 9.99upfront65.00amonth in the Tariff and Extras page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on the \u0027Overlay icon\u0027 for 9.99upfront65.00amonth in the Tariff and Extras page and verify pop up gets displayed",
  "matchedColumns": [
    1
  ],
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
  "line": 24,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 21673847386,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 62688737914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sony",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 29410671703,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 26829214948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront65.00amonth",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 471295524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront65.00amonth",
      "offset": 53
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_on_the_Tariff_tile_in_the_Tariff_and_Extras_page(String)"
});
formatter.result({
  "duration": 20156088464,
  "error_message": "java.lang.AssertionError: Unable to Verify whether promotional ribbons are displayed on the Tariff tile in the Tariff and Extras page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Verify_whether_promotional_ribbons_are_displayed_on_the_Tariff_tile_in_the_Tariff_and_Extras_page(E2EOrderPlaced_Steps.java:4487)\r\n\tat ✽.And Verify whether promotional ribbons are displayed for 9.99upfront65.00amonth on the Tariff tile in the Tariff and Extras page(Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront65.00amonth",
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
      "val": "9.99upfront65.00amonth",
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20491181057,
  "status": "passed"
});
formatter.uri("Reg_CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_Option_selected.feature");
formatter.feature({
  "line": 1,
  "name": "CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_Option selected",
  "description": "",
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-selected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This test ensures that customer is given a choice to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey",
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
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;",
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
      "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;1"
    },
    {
      "cells": [
        "simsjj20gbsdspoubngsd@sdsds.com",
        "test123",
        "Samsung Galaxy S8",
        "TEST ACCEPTA",
        "skip",
        ""
      ],
      "line": 34,
      "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48508725512,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "This test ensures that customer is given a choice to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-selected;this-test-ensures-that-customer-is-given-a-choice-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid simsjj20gbsdspoubngsd@sdsds.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "Select a Samsung Galaxy S8 device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a tariff ",
  "matchedColumns": [
    5
  ],
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
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 in upgrade journey",
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
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 17632886494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simsjj20gbsdspoubngsd@sdsds.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 24175608061,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 48646211347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy S8",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "duration": 81815614,
  "error_message": "java.lang.AssertionError: Unable to select a device from Recommended devices section\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(E2EOrderPlaced_Steps.java:4461)\r\n\tat ✽.And Select a Samsung Galaxy S8 device from Recommended devices section(Reg_CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_Option_selected.feature:9)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_need_a_sim_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
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
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade(String)"
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
formatter.after({
  "duration": 18157285015,
  "status": "passed"
});
formatter.uri("Reg_CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_option_not selected.feature");
formatter.feature({
  "line": 1,
  "name": "CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_option_not selected",
  "description": "",
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey",
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
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;",
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
      "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;1"
    },
    {
      "cells": [
        "27fe54900124@stf.ref.o2.co.uk",
        "test123",
        "Samsung Galaxy S8",
        "TEST ACCEPTA",
        "skip",
        "129.99upfront37.00amonth"
      ],
      "line": 34,
      "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 77020719332,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "This test ensures that customer is given a choice not to take a sim when the customer is on a phones upgrade journey",
  "description": "",
  "id": "cfd2064-ecom11810-11811--cfu-ordering-choice-on-upgrade-options-page-phone-option-not-selected;this-test-ensures-that-customer-is-given-a-choice-not-to-take-a-sim-when-the-customer-is-on-a-phones-upgrade-journey;;2",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid 27fe54900124@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "Select a Samsung Galaxy S8 device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a tariff 129.99upfront37.00amonth",
  "matchedColumns": [
    5
  ],
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
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027 in upgrade journey",
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
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 843152057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27fe54900124@stf.ref.o2.co.uk",
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
  "duration": 57743055158,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 43052113481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy S8",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "duration": 77317136,
  "error_message": "java.lang.AssertionError: Unable to select a device from Recommended devices section\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(E2EOrderPlaced_Steps.java:4461)\r\n\tat ✽.And Select a Samsung Galaxy S8 device from Recommended devices section(Reg_CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_option_not selected.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "129.99upfront37.00amonth",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_Your_Sim_Card_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.no_option_should_be_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_copy_text_Your_Sim_Card_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verfiy_that_two_option_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Sim_Swap_Form_link_is_diplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Sim_Swap_Form_I_should_be_opned_with_a_new_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_dont_need_a_new_sim_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
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
  "location": "E2EOrderPlaced_Steps.verify_that_Go_to_checkout_CTA_is_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_option_selected_by_the_user_in_Your_sim_card_section_in_upgrade_options_page_is_retained()"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery_Upgrade(String)"
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
formatter.after({
  "duration": 20116273161,
  "status": "passed"
});
formatter.uri("Reg_CFU_Phones_Data_filters_options_tariff_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "This scenario ensures that when a customer in upgrade journey selects \u0027Tablet\u0027 and navigated to tariff page ,\r\nthen the customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement",
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
  "name": "Select any one recycle option and click on \u0027Continue to Upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "filtername",
        "sortoption"
      ],
      "line": 23,
      "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "hsty@gail.com",
        "test123",
        "Samsung Galaxy S8",
        "high",
        "Monthly data (Low to High)"
      ],
      "line": 24,
      "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41560218953,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;;2",
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
  "name": "Signin using valid hsty@gail.com and test123 credentials",
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
  "name": "Select any one recycle option and click on \u0027Continue to Upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select a Samsung Galaxy S8 device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on respective high data filter",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (Low to High)",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "If I select ANY sort option Monthly data (Low to High) from the drop-down",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option high",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs based on the selected sort option Monthly data (Low to High)",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 17578600393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hsty@gail.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 37
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 24419774124,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 11606099118,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_any_one_recycle_option_and_click_on_Continue_to_Upgrade()"
});
formatter.result({
  "duration": 40758446105,
  "error_message": "java.lang.AssertionError: Unable to Verify recycle section displayed\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.select_any_one_recycle_option_and_click_on_Continue_to_Upgrade(E2EOrderPlaced_Steps.java:4789)\r\n\tat ✽.Then Select any one recycle option and click on \u0027Continue to Upgrade\u0027(Reg_CFU_Phones_Data_filters_options_tariff_and_extras_page.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy S8",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tariffs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "#Verification point - A - More than 2 should be displayed",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 54
    },
    {
      "val": "high",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18250253572,
  "status": "passed"
});
formatter.uri("Reg_CFU_Recycle_Phones_DD_Confirmation_Page_changes.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Recycle_Phones_DD_Confirmation_Page_changes",
  "description": "",
  "id": "cfu-recycle-phones-dd-confirmation-page-changes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone,\r\nthen the customer should be able to see the changes in \u0027Confirmation Page formatting box\u0027",
  "id": "cfu-recycle-phones-dd-confirmation-page-changes;",
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
  "name": "Select any one recycle option and click on \u0027Continue to Upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select ribboned tariff \u003ctariff\u003e in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 16,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "name": "Verify contents of order confirmation page for Phones containing \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "cfu-recycle-phones-dd-confirmation-page-changes;;",
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
        "Status"
      ],
      "line": 27,
      "id": "cfu-recycle-phones-dd-confirmation-page-changes;;;1"
    },
    {
      "cells": [
        "lucky@rediffmail.com",
        "test123",
        "Apple iPhone 7",
        "129.99upfront37.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "skip",
        "Delayed Delivery"
      ],
      "line": 28,
      "id": "cfu-recycle-phones-dd-confirmation-page-changes;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42896673723,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone,\r\nthen the customer should be able to see the changes in \u0027Confirmation Page formatting box\u0027",
  "id": "cfu-recycle-phones-dd-confirmation-page-changes;;;2",
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
  "line": 8,
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid lucky@rediffmail.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "Select any one recycle option and click on \u0027Continue to Upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select a Apple iPhone 7 device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select ribboned tariff 129.99upfront37.00amonth in upgrade journey",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 16,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    6
  ],
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
  "name": "Verify contents of order confirmation page for Phones containing Delayed Delivery",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 16893872217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lucky@rediffmail.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 23748868036,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 11608786668,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_in_the_recycle_value_is_displayed_in_the_Recycle_panel_dropdowns()"
});
formatter.result({
  "duration": 21016356045,
  "error_message": "java.lang.AssertionError: Unable to Verify recycle section displayed\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verify_that_in_the_recycle_value_is_displayed_in_the_Recycle_panel_dropdowns(E2EOrderPlaced_Steps.java:4777)\r\n\tat ✽.Then Verify that in the recycle value is displayed in the Recycle panel(Reg_CFU_Recycle_Phones_DD_Confirmation_Page_changes.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_any_one_recycle_option_and_click_on_Continue_to_Upgrade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 7",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129.99upfront37.00amonth",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_tariff_with_ribbons_in_upgrade_journey(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_for_upgrades()"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
  "location": "E2EOrderPlaced_Steps.verify_contents_of_order_confirmation_page_for_Phones_containing_Delayed_Delivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18127009203,
  "status": "passed"
});
formatter.uri("Reg_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "This scenario ensures that when a customer in upgrade journey selects \u0027Tablet\u0027 and navigated to tariff page ,\r\nthen the customer should be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement",
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
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on respective \u003cfiltername\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see appropriate tariffs based on the selected data filter \u003csortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
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
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
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
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;",
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
        "password"
      ],
      "line": 31,
      "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "Random Device",
        "skip",
        "ACCEPTA",
        "TEST ACCEPTA",
        "high",
        "Monthly data (Low to High)",
        "inavgmsa_285990@o2.com",
        "test123"
      ],
      "line": 32,
      "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42744459096,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;cfu-tablets-data-filters-options-tariff-and-extras-page-order-placement;;2",
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
  "name": "Signin using valid inavgmsa_285990@o2.com and test123 credentials",
  "matchedColumns": [
    6,
    7
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
  "name": "Click on Tablet section in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a Random Device device from Recommended devices section",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on View all Tariffs link in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on respective high data filter",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "If I select ANY sort option Monthly data (Low to High) from the drop-down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option high",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see tariffs based on the selected sort option Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
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
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 15257143029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inavgmsa_285990@o2.com",
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
  "duration": 24809693229,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 11655102134,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Tablets_tab()"
});
formatter.result({
  "duration": 29221904770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "duration": 178086453,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_View_all_tariffs()"
});
formatter.result({
  "duration": 3792680691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#Verification point - A - More than 2 should be displayed",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "duration": 18988755750,
  "error_message": "java.lang.AssertionError: Sort filter validation failed\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.filterandDropDownPosition(E2EOrderPlaced_Steps.java:5703)\r\n\tat ✽.Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed(Reg_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 54
    },
    {
      "val": "high",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
formatter.after({
  "duration": 20141569892,
  "status": "passed"
});
formatter.uri("Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons",
  "description": "",
  "id": "cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "This scenario ensures that when the customer on upgrade journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;",
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
  "id": "cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "tariff"
      ],
      "line": 26,
      "id": "cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;1"
    },
    {
      "cells": [
        "in00533s_069647@o2.com",
        "test123",
        "Galaxy S8 Plus",
        "9.99upfront60.00amonth"
      ],
      "line": 27,
      "id": "cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43253460300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "This scenario ensures that when the customer on upgrade journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,\r\n1.Tariff and Extras page\r\n2.Basket page",
  "id": "cfu-seperate-tariff-ribbons-tariff-page-basket-page-html-overlay-for-tariff-ribbons;;;2",
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
  "name": "Signin using valid in00533s_069647@o2.com and test123 credentials",
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
  "name": "I choose upgrade PayM handset Galaxy S8 Plus",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a tariff 9.99upfront60.00amonth",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify whether promotional ribbons are displayed for 9.99upfront60.00amonth on the Tariff tile in the Tariff and Extras page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify \u0027Overlay icon\u0027 is displayed on the promotional ribbons for 9.99upfront60.00amonth in the Tariff and Extras page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on the \u0027Overlay icon\u0027 for 9.99upfront60.00amonth in the Tariff and Extras page and verify pop up gets displayed",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 16033378846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in00533s_069647@o2.com",
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
  "duration": 24063362333,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 36656626046,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2753)\r\n\tat ✽.And Navigate to upgrade phone(Reg_CFU_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S8 Plus",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
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
      "val": "9.99upfront60.00amonth",
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
      "val": "9.99upfront60.00amonth",
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
      "val": "9.99upfront60.00amonth",
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
      "val": "9.99upfront60.00amonth",
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
  "duration": 20122127447,
  "status": "passed"
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
formatter.before({
  "duration": 39174903083,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "reg-cs-accessoriesonly;accessories-only-e2e-journey;;2",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22358292440,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 83252028757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 11
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_an_Accessory(String)"
});
formatter.result({
  "duration": 3793360895,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 37466477824,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
});
formatter.result({
  "duration": 13819257141,
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
  "duration": 25013112511,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "duration": 55201350004,
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
  "duration": 73515710523,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "duration": 24784520364,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "duration": 649035859,
  "status": "passed"
});
formatter.after({
  "duration": 20042792702,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 19,
      "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 20,
      "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44928231023,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "PAYG MBB only E2E journey",
  "description": "",
  "id": "reg-cs-cfa-mbbpayg;payg-mbb-only-e2e-journey;;2",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11635433544,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page()"
});
formatter.result({
  "duration": 15056920918,
  "error_message": "java.lang.AssertionError: unable to do mousehover to PayGMBB\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PayG_MBB_page(E2EOrderPlaced_Steps.java:184)\r\n\tat ✽.And Navigate to PayG MBB page(Reg_CS_CFA_MBBPayG.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_MBB_PayG(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20171230618,
  "status": "passed"
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
  "name": "Select any new Tariff and land on basket page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verifies the basket page for the upgrade journey",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;1"
    },
    {
      "cells": [
        "test123@te.so.is",
        "test123"
      ],
      "line": 13,
      "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 50604610242,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "CFU to Verify is user can upgrade phone to refresh Tariff",
  "description": "",
  "id": "reg-cs-cfu-savedbasket;cfu-to-verify-is-user-can-upgrade-phone-to-refresh-tariff;;2",
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
  "name": "Signin using valid test123@te.so.is and test123 credentials",
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
  "name": "Select any new Tariff and land on basket page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verifies the basket page for the upgrade journey",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 16870045251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123@te.so.is",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 40
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 24150804318,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page()"
});
formatter.result({
  "duration": 39247066664,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id edr_l_first\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:925)\r\n\tat GlobalActions.MouseHoverAction.UpgradeandUpgradeNow(MouseHoverAction.java:723)\r\n\tat steps.E2EOrderPlaced_Steps.choose_to_upgrade_any_Phone_in_My_upgrade_page(E2EOrderPlaced_Steps.java:630)\r\n\tat ✽.And choose to upgrade any Phone in My upgrade page(Reg_CS_CFU_SavedBasket.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_any_new_Tariff_and_land_on_basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifies_the_basket_page_for_the_upgrade_journey()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20114304744,
  "status": "passed"
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
formatter.before({
  "duration": 46079714484,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Fitness Trackers only E2E journey",
  "description": "",
  "id": "reg-cs-fitnesstrackers;fitness-trackers-only-e2e-journey;;2",
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
  "line": 11,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11619121383,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 27683346180,
  "error_message": "java.lang.AssertionError: unable to do mousehover to Fitness Trackers\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers(E2EOrderPlaced_Steps.java:201)\r\n\tat ✽.And Navigate to Fitness Trackers(Reg_CS_FitnessTrackers.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_FitnessTracker_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20431822444,
  "status": "passed"
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
        "Contact_number"
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
        "07123456789"
      ],
      "line": 15,
      "id": "reg-cs-free-sim;light-surfer-ipad-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43842417351,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Light surfer iPad Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim;light-surfer-ipad-sim-entering-delivery-details-manually;;2",
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
  "name": "I select Light surfer surfer and iPad sim",
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
  "line": 10,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11570565702,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 15066808653,
  "error_message": "java.lang.AssertionError: unable to do mousehover to sims\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_FreeSim_page(E2EOrderPlaced_Steps.java:5223)\r\n\tat ✽.And Navigate to FreeSim page(Reg_CS_Free_Sim.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20176742678,
  "status": "passed"
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
formatter.before({
  "duration": 41751528336,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Light surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;light-surfer-tablet-sim-entering-delivery-details-manually;;2",
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
  "line": 10,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11720208152,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 15047147141,
  "error_message": "java.lang.AssertionError: unable to do mousehover to sims\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_FreeSim_page(E2EOrderPlaced_Steps.java:5223)\r\n\tat ✽.And Navigate to FreeSim page(Reg_CS_Free_Sim_Tablet.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20161069315,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Light surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;",
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
      "line": 27,
      "id": "reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;;1"
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
        "07123456789"
      ],
      "line": 28,
      "id": "reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Light surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;light-surfer-dongle-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Light surfer surfer and Dongle sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
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
  "line": 23,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 10972806,
  "error_message": "java.lang.AssertionError: unable to get title\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page(E2EOrderPlaced_Steps.java:72)\r\n\tat ✽.Given I am an CFA user and Lands on shop page(Reg_CS_Free_Sim_Tablet.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17032660420,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:101)\r\n\tat sun.reflect.GeneratedMethodAccessor39.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Steady surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;",
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
      "line": 40,
      "id": "reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;;1"
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
        "07123456789"
      ],
      "line": 41,
      "id": "reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Steady surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;steady-surfer-tablet-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select Steady surfer surfer and Tablet sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
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
  "line": 36,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 9978334,
  "error_message": "java.lang.AssertionError: unable to get title\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page(E2EOrderPlaced_Steps.java:72)\r\n\tat ✽.Given I am an CFA user and Lands on shop page(Reg_CS_Free_Sim_Tablet.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17015227090,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:101)\r\n\tat sun.reflect.GeneratedMethodAccessor39.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Steady surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;",
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
      "line": 53,
      "id": "reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;;1"
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
        "07123456789"
      ],
      "line": 54,
      "id": "reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "Steady surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;steady-surfer-dongle-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select Steady surfer surfer and Dongle sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "line": 49,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 4637917,
  "error_message": "java.lang.AssertionError: unable to get title\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page(E2EOrderPlaced_Steps.java:72)\r\n\tat ✽.Given I am an CFA user and Lands on shop page(Reg_CS_Free_Sim_Tablet.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17016366308,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:101)\r\n\tat sun.reflect.GeneratedMethodAccessor39.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Ultimate surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;",
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
      "line": 66,
      "id": "reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;;1"
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
        "07123456789"
      ],
      "line": 67,
      "id": "reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 67,
  "name": "Ultimate surfer Tablet Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;ultimate-surfer-tablet-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select Ultimate surfer surfer and Tablet sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
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
  "line": 62,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11918792,
  "error_message": "java.lang.AssertionError: unable to get title\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page(E2EOrderPlaced_Steps.java:72)\r\n\tat ✽.Given I am an CFA user and Lands on shop page(Reg_CS_Free_Sim_Tablet.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17030342346,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:101)\r\n\tat sun.reflect.GeneratedMethodAccessor39.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 69,
  "name": "Ultimate surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I input \u003cFirstname\u003e, \u003cLastname\u003e, \u003cContact_number\u003e in About You Section",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;",
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
      "line": 79,
      "id": "reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;;1"
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
        "07123456789"
      ],
      "line": 80,
      "id": "reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Ultimate surfer Dongle Sim entering delivery details manually",
  "description": "",
  "id": "reg-cs-free-sim-tablet;ultimate-surfer-dongle-sim-entering-delivery-details-manually;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I select Ultimate surfer surfer and Dongle sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
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
  "line": 75,
  "name": "I input Test, Accepta, 07123456789 in About You Section",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "verify order number is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 8369485,
  "error_message": "java.lang.AssertionError: unable to get title\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page(E2EOrderPlaced_Steps.java:72)\r\n\tat ✽.Given I am an CFA user and Lands on shop page(Reg_CS_Free_Sim_Tablet.feature:70)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 8
    },
    {
      "val": "Accepta",
      "offset": 14
    },
    {
      "val": "07123456789",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrdernumberFreeSim()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17005914450,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:101)\r\n\tat sun.reflect.GeneratedMethodAccessor39.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
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
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the Non Credit check payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 18,
      "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 19,
      "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44897625726,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "CFA PayG Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-cs-paygphoneshomedeliverywithoutaccessory;cfa-payg-phones-home-delivery-e2e-journey;;2",
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
  "name": "I choose PayG Random Device",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11686501592,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page()"
});
formatter.result({
  "duration": 15077839499,
  "error_message": "java.lang.AssertionError: unable to do mousehover to Pay as you Go Phones page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_Pay_as_you_Go_Phones_page(E2EOrderPlaced_Steps.java:233)\r\n\tat ✽.And navigate to Pay as you Go Phones page(Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYG_Handset(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20483268816,
  "status": "passed"
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
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
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
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 21,
      "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 22,
      "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43274126900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
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
  "line": 14,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11764733924,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 153057336048,
  "error_message": "java.lang.AssertionError: unable to do mousehover to phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page(E2EOrderPlaced_Steps.java:118)\r\n\tat ✽.And navigate to PAYM Phones page(Reg_CS_PayMPhonesHomeDeliveryWithAccessory.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20460736433,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.examples({
  "comments": [
    {
      "line": 19,
      "value": "#Close the browser"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 21,
      "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 22,
      "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40177425006,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "CFA PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "reg-cs-paymphoneshomedeliverywithoutaccessory;cfa-paym-phones-home-delivery-e2e-journey-without-accessory;;2",
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
  "name": "I choose PayM Apple8",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11617781855,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 153059744722,
  "error_message": "java.lang.AssertionError: unable to do mousehover to phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page(E2EOrderPlaced_Steps.java:118)\r\n\tat ✽.And navigate to PAYM Phones page(Reg_CS_PayMPhonesHomeDeliveryWithoutAccessory.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20233018783,
  "status": "passed"
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
  "name": "Sim Only PayM 12Months E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation",
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
  "line": 11,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;;1"
    },
    {
      "comments": [
        {
          "line": 18,
          "value": "#| 12 Months | TEST      | ACCEPTA | TEST ACCEPTA |"
        }
      ],
      "cells": [
        "30 Days",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 19,
      "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66173489589,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#| 12 Months | TEST      | ACCEPTA | TEST ACCEPTA |"
    }
  ],
  "line": 19,
  "name": "Sim Only PayM 12Months E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonly;sim-only-paym-12months-e2e-validation;;2",
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
  "name": "Click on different 30 Days  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select any Random Tariff in the displayed list of Tariffs under different 30 Days tab",
  "matchedColumns": [
    0
  ],
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11602504510,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 22023706639,
  "error_message": "java.lang.AssertionError: Unable to do mousehover to PAYM SIMO page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page(E2EOrderPlaced_Steps.java:280)\r\n\tat ✽.And navigate to PAYM SIMO page(Reg_CS_PayMSimOnly.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20209322761,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
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
  "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;",
  "rows": [
    {
      "cells": [
        "Contract",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;;1"
    },
    {
      "cells": [
        "12 Months",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 18,
      "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48104259876,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Sim Only PayM Recommended Tariff selection E2E validation",
  "description": "",
  "id": "reg-cs-paymsimonlyrecommended;sim-only-paym-recommended-tariff-selection-e2e-validation;;2",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11712574435,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page()"
});
formatter.result({
  "duration": 22046156563,
  "error_message": "java.lang.AssertionError: Unable to do mousehover to PAYM SIMO page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_SIMO_page(E2EOrderPlaced_Steps.java:280)\r\n\tat ✽.And navigate to PAYM SIMO page(Reg_CS_PayMSimOnlyRecommended.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Plan_included_basket_page_and_choose_home_delivery_option()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20248018666,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43327470907,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "PayM Tablets Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-cs-paymtabletshomedeliverywithaccessory;paym-tablets-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "select any available Random Device Tablet",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11690395248,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 15047949443,
  "error_message": "java.lang.AssertionError: unable to do mousehover to tablets\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page(E2EOrderPlaced_Steps.java:2839)\r\n\tat ✽.And navigate to PAYM Tablets page(Reg_CS_PayMTabletsHomeDeliveryWithAccessory.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20215466542,
  "status": "passed"
});
formatter.uri("Reg_CS_Recycle.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_CS_Recycle",
  "description": "",
  "id": "reg-cs-recycle",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that the customer is able to recycle and upgrade",
  "description": "",
  "id": "reg-cs-recycle;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade",
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
  "comments": [
    {
      "line": 8,
      "value": "# Then Verify that in the recycle value is displayed in the Recycle panel"
    }
  ],
  "line": 9,
  "name": "Select \u0027Not your device\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select \u003cMake\u003e, \u003cModel\u003e and \u003cNetwork\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "perform update device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select any one refundable recycle option",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \u0027Yes,get an accurate quote\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \u0027Yes,get an accurate quote\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "answer the questionnaire and click on \u0027Accept and continue to upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a \u003chandset\u003e device from Recommended devices section",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select ribboned tariff \u003ctariff\u003e in upgrade journey",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 19,
  "name": "choose appropriately in \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And select \u003cNeedSim\u003e action and confirm"
    }
  ],
  "line": 21,
  "name": "I Land on the basket page for upgrades",
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
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
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
  "id": "reg-cs-recycle;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;",
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
        "Network"
      ],
      "line": 31,
      "id": "reg-cs-recycle;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;;1"
    },
    {
      "cells": [
        "kllklsdklsklklklk@sdsd.com",
        "test123",
        "Apple iPhone 7",
        "19.99upfront45.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "skip",
        "Apple",
        "Iphone7",
        "Orange"
      ],
      "line": 32,
      "id": "reg-cs-recycle;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49182080618,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "This scenario ensures that the customer is able to recycle and upgrade",
  "description": "",
  "id": "reg-cs-recycle;this-scenario-ensures-that-the-customer-is-able-to-recycle-and-upgrade;;2",
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
  "name": "Signin using valid kllklsdklsklklklk@sdsd.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to upgrade \u003e upgrade now",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "# Then Verify that in the recycle value is displayed in the Recycle panel"
    }
  ],
  "line": 9,
  "name": "Select \u0027Not your device\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select Apple, Iphone7 and Orange",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "perform update device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select any one refundable recycle option",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \u0027Yes,get an accurate quote\u0027 is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \u0027Yes,get an accurate quote\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "answer the questionnaire and click on \u0027Accept and continue to upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select a Apple iPhone 7 device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select ribboned tariff 19.99upfront45.00amonth in upgrade journey",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 19,
  "name": "choose appropriately in \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And select \u003cNeedSim\u003e action and confirm"
    }
  ],
  "line": 21,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    6
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 16419041542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kllklsdklsklklklk@sdsd.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 50
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 24102179272,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 39267682656,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now(E2EOrderPlaced_Steps.java:2770)\r\n\tat ✽.And Navigate to upgrade \u003e upgrade now(Reg_CS_Recycle.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Not_your_device_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 7
    },
    {
      "val": "Iphone7",
      "offset": 14
    },
    {
      "val": "Orange",
      "offset": 26
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_Make_Model_and_Network(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.perform_update_device()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_any_one_refundable_recycle_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_Yes_get_an_accurate_quote_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Yes_get_an_accurate_quote()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.answer_the_questionnaire_and_click_on_Accept_and_continue_to_upgrade_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 7",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99upfront45.00amonth",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_tariff_with_ribbons_in_upgrade_journey(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choosingYourSimCardSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_for_upgrades()"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
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
formatter.after({
  "duration": 18226913933,
  "status": "passed"
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
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname",
        "Username",
        "Device"
      ],
      "line": 17,
      "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Pebble Original"
      ],
      "line": 18,
      "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44906968802,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Smart Watches only E2E journey",
  "description": "",
  "id": "reg-cs-smartwatch;smart-watches-only-e2e-journey;;2",
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
  "name": "Navigate to SmartWatches",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select any available Pebble Original Smartwatch",
  "matchedColumns": [
    3
  ],
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
  "line": 11,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "land on the Non Credit check payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 11691095624,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_SmartWatches()"
});
formatter.result({
  "duration": 32784955313,
  "error_message": "java.lang.AssertionError: unable to do mousehover to SmartWatches\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_SmartWatches(E2EOrderPlaced_Steps.java:217)\r\n\tat ✽.And Navigate to SmartWatches(Reg_CS_SmartWatch.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pebble Original",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Smartwatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_SmartWatch_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.NonPhoneRelatedBasketPage()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20214554176,
  "status": "passed"
});
formatter.uri("Reg_CVOSDelayedDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "CVOSDelayedDelivery",
  "description": "",
  "id": "cvosdelayeddelivery",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Delayed Delivery_CVS",
  "description": "",
  "id": "cvosdelayeddelivery;delayed-delivery-cvs",
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
  "id": "cvosdelayeddelivery;delayed-delivery-cvs;",
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
      "id": "cvosdelayeddelivery;delayed-delivery-cvs;;1"
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
      "id": "cvosdelayeddelivery;delayed-delivery-cvs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49088100957,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Delayed Delivery_CVS",
  "description": "",
  "id": "cvosdelayeddelivery;delayed-delivery-cvs;;2",
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
  "name": "I should be able to move the Launch date to a past dateAmazon Fire phone 64GB",
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
  "name": "I click on \u0027Stockpot\u0027 tab in Trading admin and search for 1AMFI32N in SkU desciption",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_a_Supply_Chain_Admin()"
});
formatter.result({
  "duration": 15849587100,
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
  "duration": 54439388920,
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
  "duration": 46826683117,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 453598889,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_the_uploaded_stock_for_the_SKU_ID()"
});
formatter.result({
  "duration": 3893952907,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Online_Stockpot_and_move_the_delivery_date_to_a_past_date()"
});
formatter.result({
  "duration": 27238324518,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Stock_Merchandise()"
});
formatter.result({
  "duration": 11496527490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Fire phone 64GB",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_should_be_able_to_move_the_Launch_date_to_a_past_dateAmazon_Fire_phone_GB(String)"
});
formatter.result({
  "duration": 47671425265,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_login_as_a_Trading_Admin()"
});
formatter.result({
  "duration": 11663041624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TradingAdmin",
      "offset": 39
    },
    {
      "val": "TradingAdmin1",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_Login_with_Trading_Admin(String,String)"
});
formatter.result({
  "duration": 23456829682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1AMFI32N",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_click_on_Stockpot_tab_in_Trading_admin_and_search_for_SKU_ID_in_SkU_desciption(String)"
});
formatter.result({
  "duration": 49647435149,
  "status": "passed"
});
formatter.after({
  "duration": 17767806522,
  "status": "passed"
});
formatter.uri("Reg_CVOSPreOrder.feature");
formatter.feature({
  "line": 1,
  "name": "CVOSPreOrder",
  "description": "",
  "id": "cvospreorder",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PreOrder_CVS",
  "description": "",
  "id": "cvospreorder;preorder-cvs",
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
  "id": "cvospreorder;preorder-cvs;",
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
      "id": "cvospreorder;preorder-cvs;;1"
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
      "id": "cvospreorder;preorder-cvs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44213614206,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "PreOrder_CVS",
  "description": "",
  "id": "cvospreorder;preorder-cvs;;2",
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
  "name": "I should be able to move the Launch date to a past dateAmazon Fire phone 64GB",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_a_Supply_Chain_Admin()"
});
formatter.result({
  "duration": 14685026164,
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
  "duration": 55196840200,
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
  "duration": 42415173013,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 472334941,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_should_see_the_uploaded_stock_for_the_SKU_ID()"
});
formatter.result({
  "duration": 4098334102,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Online_Stockpot_and_move_the_delivery_date_to_a_past_date()"
});
formatter.result({
  "duration": 27200607512,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_Stock_Merchandise()"
});
formatter.result({
  "duration": 11693421483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Fire phone 64GB",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_should_be_able_to_move_the_Launch_date_to_a_past_dateAmazon_Fire_phone_GB(String)"
});
formatter.result({
  "duration": 46227784538,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_login_as_a_Trading_Admin()"
});
formatter.result({
  "duration": 10741940359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TradingAdmin",
      "offset": 39
    },
    {
      "val": "TradingAdmin1",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_Login_with_Trading_Admin(String,String)"
});
formatter.result({
  "duration": 55969970505,
  "status": "passed"
});
formatter.after({
  "duration": 37760554313,
  "status": "passed"
});
formatter.uri("Reg_Consumer_Buyout.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Consumer_Buyout",
  "description": "",
  "id": "reg-consumer-buyout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that the customer is able to successully Buyout the device",
  "description": "",
  "id": "reg-consumer-buyout;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device",
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
  "name": "Navigate to upgrade phone",
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
  "name": "I Land on the basket page by clicking on Add to Basket button",
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
  "name": "verify if buyout offer is displayed in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify if buyout offer is displayed in ordersummary sections",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify if buyout offer is displayed in ordersummary sections",
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
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "reg-consumer-buyout;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "handset",
        "Action"
      ],
      "line": 29,
      "id": "reg-consumer-buyout;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;;1"
    },
    {
      "cells": [
        "sit3159@gmail.com",
        "test123",
        "iPhone 8",
        "skip"
      ],
      "line": 30,
      "id": "reg-consumer-buyout;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44125544040,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "This scenario ensures that the customer is able to successully Buyout the device",
  "description": "",
  "id": "reg-consumer-buyout;this-scenario-ensures-that-the-customer-is-able-to-successully-buyout-the-device;;2",
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
  "name": "Signin using valid sit3159@gmail.com and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on \u0027Take offer and upgrade\u0027button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a iPhone 8 device from Recommended devices section",
  "matchedColumns": [
    2
  ],
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
  "name": "I Land on the basket page by clicking on Add to Basket button",
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
  "name": "verify if buyout offer is displayed in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify if buyout offer is displayed in ordersummary sections",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify if buyout offer is displayed in ordersummary sections",
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
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 17420949087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sit3159@gmail.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 41
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 24299245263,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 36236133142,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_phone(E2EOrderPlaced_Steps.java:2753)\r\n\tat ✽.And Navigate to upgrade phone(Reg_Consumer_Buyout.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnTakeOfferAndUpgradeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "iPhone 8",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_device_from_recommended_devices_section(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectRandomTariff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_I_need_a_sim_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_Confirm_CTA_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Confirm_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyBuyOutOfferInMyPackage()"
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
  "location": "E2EOrderPlaced_Steps.verifyBuyOutOfferInBasketPage()"
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
  "location": "E2EOrderPlaced_Steps.verifyBuyOutOfferInOTACPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyBuyOutOfferInOSSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyBuyOutOfferInOSSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
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
formatter.after({
  "duration": 18132902420,
  "status": "passed"
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
  "name": "check the status \u003cstatus\u003e of the device",
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
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.examples({
  "comments": [
    {
      "line": 19,
      "value": "#Close the browser"
    }
  ],
  "line": 20,
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
        "status"
      ],
      "line": 21,
      "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Apple iPhone 7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Delayed Delivery"
      ],
      "line": 22,
      "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41633635002,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "CFA PayM Delayed Delivery Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-consumer-delayeddelivery;cfa-paym-delayed-delivery-phones-home-delivery-e2e-journey;;2",
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
  "name": "I search for a PayM Apple iPhone 7 device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check the status Delayed Delivery of the device",
  "matchedColumns": [
    4
  ],
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
  "line": 13,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22028857717,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 64928709855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 7",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_device(String)"
});
formatter.result({
  "duration": 25492260111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delayed Delivery",
      "offset": 17
    }
  ],
  "location": "E2EOrderPlaced_Steps.check_status_of_device(String)"
});
formatter.result({
  "duration": 62427671,
  "error_message": "java.lang.AssertionError: Device is not Delayed Delivery Device\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.ConnectedDeviceDetailsPageAction.checkDevStatusAsDelayedDelivery(ConnectedDeviceDetailsPageAction.java:307)\r\n\tat steps.E2EOrderPlaced_Steps.check_status_of_device(E2EOrderPlaced_Steps.java:5090)\r\n\tat ✽.And check the status Delayed Delivery of the device(Reg_Consumer_DelayedDelivery.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20223721715,
  "status": "passed"
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
  "name": "check the status \u003cstatus\u003e of the device",
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
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.examples({
  "comments": [
    {
      "line": 19,
      "value": "#Close the browser"
    }
  ],
  "line": 20,
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
        "status"
      ],
      "line": 21,
      "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "Apple iPhone 8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Pre Order"
      ],
      "line": 22,
      "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44121813534,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "CFA PayM Pre Order Phones Home delivery E2E journey",
  "description": "",
  "id": "reg-consumer-preorder;cfa-paym-pre-order-phones-home-delivery-e2e-journey;;2",
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
  "name": "I search for a PayM Apple iPhone 8 device",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check the status Pre Order of the device",
  "matchedColumns": [
    4
  ],
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
  "line": 13,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 28485194764,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 66074208794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 8",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.search_for_device(String)"
});
formatter.result({
  "duration": 29039548814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pre Order",
      "offset": 17
    }
  ],
  "location": "E2EOrderPlaced_Steps.check_status_of_device(String)"
});
formatter.result({
  "duration": 71670945,
  "error_message": "java.lang.AssertionError: Device is not Pre Order Device\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.ConnectedDeviceDetailsPageAction.checkDevStatusAsPreOrder(ConnectedDeviceDetailsPageAction.java:295)\r\n\tat steps.E2EOrderPlaced_Steps.check_status_of_device(E2EOrderPlaced_Steps.java:5086)\r\n\tat ✽.And check the status Pre Order of the device(Reg_Consumer_PreOrder.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 18279070944,
  "status": "passed"
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
  "comments": [
    {
      "line": 13,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 14,
  "name": "choose appropriately in \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And select \u003cNeedSim\u003e action and confirm"
    }
  ],
  "line": 16,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify \u0027Upgrade on us\u0027 displayed in basket page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "perform \u003cAction\u003e in OTAC page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify \u0027Upgrade on us\u0027 displayed in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify \u0027Upgrade on us\u0027 displayed in Payment page",
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
  "name": "Verify \u0027Upgrade on us\u0027 displayed in review page",
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
formatter.examples({
  "line": 29,
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
        "Firstname",
        "Surname",
        "Username",
        "Action",
        "Make",
        "Model",
        "Network"
      ],
      "line": 30,
      "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device;;1"
    },
    {
      "cells": [
        "test123@te.so.is",
        "test123",
        "iPhone X",
        "19.99upfront45.00amonth",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "skip",
        "Apple",
        "Iphone7",
        "Orange"
      ],
      "line": 31,
      "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43181035539,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "This scenario ensures that the customer is able to successully Trade In the device",
  "description": "",
  "id": "reg-consumer-tradein;this-scenario-ensures-that-the-customer-is-able-to-successully-trade-in-the-device;;2",
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
  "name": "Signin using valid test123@te.so.is and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "Select a iPhone X device from Recommended devices section",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select ribboned tariff 19.99upfront45.00amonth in upgrade journey",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And Select a tariff in upgrade journey"
    }
  ],
  "line": 14,
  "name": "choose appropriately in \u0027Your Sim Card\u0027section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And select \u003cNeedSim\u003e action and confirm"
    }
  ],
  "line": 16,
  "name": "I Land on the basket page for upgrades",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify \u0027Upgrade on us\u0027 displayed in basket page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "perform skip in OTAC page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify \u0027Upgrade on us\u0027 displayed in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on the \u0027Continue button\u0027 in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify \u0027Upgrade on us\u0027 displayed in Payment page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    6
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
  "name": "Verify \u0027Upgrade on us\u0027 displayed in review page",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 16418300820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123@te.so.is",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 40
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 25622475334,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 11644260626,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_trade_in_message_is_displayed_under_Get_your_latest_phone_on_us_today_section()"
});
formatter.result({
  "duration": 43730174100,
  "error_message": "java.lang.AssertionError: Unable to verify tradein message\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verify_trade_in_message_is_displayed_under_Get_your_latest_phone_on_us_today_section(E2EOrderPlaced_Steps.java:5718)\r\n\tat ✽.And Verify trade in message is displayed under \u0027Get your latest phone on us today\u0027 section(Reg_Consumer_TradeIn.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.answer_appropriate_questionaire_in_your_device_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_upgrade_now_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99upfront45.00amonth",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_tariff_with_ribbons_in_upgrade_journey(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choosingYourSimCardSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_for_upgrades()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_Upgrade_on_us_displayed_in_basket_page()"
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
      "val": "skip",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.perform_skip_in_OTAC_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_Upgrade_on_us_displayed_in_delivery_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_the_Continue_button_in_delivery_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_Upgrade_on_us_displayed_in_Payment_page()"
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
  "location": "E2EOrderPlaced_Steps.verify_Upgrade_on_us_displayed_in_review_page()"
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
formatter.after({
  "duration": 18159368451,
  "status": "passed"
});
formatter.uri("Reg_Current_MBB_URL_no_change_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Current_MBB_URL_no_change_Order_placement",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order",
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
  "line": 7,
  "name": "I launch the OldMBBURL",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"random\" MBBtariff",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And I Land on the basket page and choose home delivery option"
    }
  ],
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select continue button in delivery page for existing customer",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.examples({
  "comments": [
    {
      "line": 18,
      "value": "#Modify the above step to include pdf download"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "user"
      ],
      "line": 20,
      "id": "reg-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;1"
    },
    {
      "cells": [
        "testaccepta5754@stf.ref.o2.co.uk",
        "test123",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "reg-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43400299120,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order",
  "description": "",
  "id": "reg-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;2",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid testaccepta5754@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I launch the OldMBBURL",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"random\" MBBtariff",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And I Land on the basket page and choose home delivery option"
    }
  ],
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select continue button in delivery page for existing customer",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 17108111418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testaccepta5754@stf.ref.o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 23724303888,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsMBBURL()"
});
formatter.result({
  "duration": 14659747483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_MBBtariff(String)"
});
formatter.result({
  "duration": 20060629836,
  "error_message": "java.lang.AssertionError: Unable to Select MBB Tariff\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.select_MBBtariff(E2EOrderPlaced_Steps.java:3624)\r\n\tat ✽.And select \"random\" MBBtariff(Reg_Current_MBB_URL_no_change_Order_placement.feature:8)\r\n",
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
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_continue_delivery_page()"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_Upgrade(String)"
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
formatter.after({
  "duration": 18243137617,
  "status": "passed"
});
formatter.uri("Reg_Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page",
  "description": "This scenario ensures that when a customer in Existing customer journey selects \u0027Tablet\u0027 and navigated to tariff page ,then the customer\r\nshould be able to see  \u0027Data filter\u0027 button next to sort drop-down for PayM tariffs",
  "id": "existing-customer-tablets-data-filters-options-tariff-and-extras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page",
  "description": "",
  "id": "existing-customer-tablets-data-filters-options-tariff-and-extras-page;existing-customer-tablets-data-filters-options-tariff-and-extras-page",
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
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select \u003ccapacity\u003e capacity of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "# Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed"
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
  "line": 23,
  "name": "",
  "description": "",
  "id": "existing-customer-tablets-data-filters-options-tariff-and-extras-page;existing-customer-tablets-data-filters-options-tariff-and-extras-page;",
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
      "line": 24,
      "id": "existing-customer-tablets-data-filters-options-tariff-and-extras-page;existing-customer-tablets-data-filters-options-tariff-and-extras-page;;1"
    },
    {
      "cells": [
        "Random Device",
        "Rose Gold",
        "32GB",
        "medium",
        "Monthly data (High to low)",
        "27fe76531842@stf.ref.o2.co.uk",
        "test123"
      ],
      "line": 25,
      "id": "existing-customer-tablets-data-filters-options-tariff-and-extras-page;existing-customer-tablets-data-filters-options-tariff-and-extras-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41633815492,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page",
  "description": "",
  "id": "existing-customer-tablets-data-filters-options-tariff-and-extras-page;existing-customer-tablets-data-filters-options-tariff-and-extras-page;;2",
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
  "name": "Signin using valid 27fe76531842@stf.ref.o2.co.uk and test123 credentials",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose Random Device Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select Rose Gold color of the connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select 32GB capacity of the connected device",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "# Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs #Verification point - A - More than 2 should be displayed"
    }
  ],
  "line": 15,
  "name": "I click on respective medium data filter",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (High to low)",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "If I select ANY sort option Monthly data (High to low) from the drop-down",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see tariffs relevant to selected sort option Monthly data (High to low) \u0026 filter option medium",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see tariffs based on the selected sort option Monthly data (High to low)",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 15392710348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27fe76531842@stf.ref.o2.co.uk",
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
  "duration": 25307598823,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 32208469852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
});
formatter.result({
  "duration": 28583712542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
});
formatter.result({
  "duration": 5116686167,
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
  "duration": 1837472,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 26368626801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "medium",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "duration": 42031454,
  "error_message": "java.lang.AssertionError: Unable to click on respective data filter\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(E2EOrderPlaced_Steps.java:5821)\r\n\tat ✽.When I click on respective medium data filter(Reg_Existing_Customer_Tablets_Data_filters_options_tariff_and_extras_page.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 54
    },
    {
      "val": "medium",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18231539817,
  "status": "passed"
});
formatter.uri("Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license",
  "description": "",
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license",
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
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status",
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
  "name": "Select a valid store using \u003cPostCode\u003e for Click and Collect",
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
  "name": "input additional card details Driving license \u003cLicense_postcode\u003e and \u003cLicense_Number\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input additional card details passport details \u003ccountry\u003e and \u003cPassport_number\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
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
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;",
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
        "PostCode"
      ],
      "line": 23,
      "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;1"
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
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP"
      ],
      "line": 24,
      "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42348344187,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "This test scenario ensures that a CC order is successful which accepts additional information like Passport details Driver License details and additional card details but is finally in Referred status",
  "description": "",
  "id": "reg-fnt-afa-handset-click-and-collect-passport-and-driving-license;this-test-scenario-ensures-that-a-cc-order-is-successful-which-accepts-additional-information-like-passport-details-driver-license-details-and-additional-card-details-but-is-finally-in-referred-status;;2",
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
  "name": "Select a valid PayM S8",
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
  "name": "Select a valid store using SL11UP for Click and Collect",
  "matchedColumns": [
    10
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
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
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
  "line": 16,
  "name": "input additional card details Driving license sl11el and 122SS23ERT",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "input additional card details passport details IND and G02DSRE£",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
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
  "duration": 8602018954,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 15366950356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S8",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 15208047290,
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
  "duration": 11577112579,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 23438316590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SL11UP",
      "offset": 27
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_valid_store_using_postCodefor_Click_and_Collect(String)"
});
formatter.result({
  "duration": 31826588624,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12384322461,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13101752464,
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
  "duration": 82491418881,
  "error_message": "java.lang.AssertionError: Unable to perform credit checks , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheck(E2EOrderPlaced_Steps.java:1968)\r\n\tat ✽.And perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA(Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license.feature:14)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IND",
      "offset": 47
    },
    {
      "val": "G02DSRE£",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.PassportDetailsCountryPassport_number(String,String)"
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
  "duration": 18129463530,
  "status": "passed"
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
  "name": "Select a PAYG \u003cDevice\u003e device in stock",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid \u003cTariffs\u003e from PAYG tariffs tab less than 50 GBP",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Confirm Device and Tariff are added in Deal Builder",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a valid store using \u003cPostCode\u003e for Click and Collect",
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
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Pay by card for PAYM device",
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
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Firstname",
        "Surname",
        "HouseNumber",
        "PostCode"
      ],
      "line": 19,
      "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;1"
    },
    {
      "cells": [
        "In stock",
        "50",
        "TEST",
        "ACCEPTA",
        "4",
        "sl11er"
      ],
      "line": 20,
      "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45846093710,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now",
  "description": "",
  "id": "reg-fnt-afa-payg-phones-less-than-50-gbp-clickandcollect;this-test-scenario-ensures-that-payngo-order-via-the-web-for-payment-less-than-50-gbp-where-click-and-collect-now;;2",
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
  "name": "Select a PAYG In stock device in stock",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid 50 from PAYG tariffs tab less than 50 GBP",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Confirm Device and Tariff are added in Deal Builder",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select a valid store using sl11er for Click and Collect",
  "matchedColumns": [
    5
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
  "name": "Register the customer with valid TEST, ACCEPTA, 4, sl11er and other valid details in delivery page",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 7849399531,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 13506005404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In stock",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_a_PAYG_Device_InStock(String)"
});
formatter.result({
  "duration": 10361400782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.Select_valid_Tariffs_from_PAYG_tariffs_tab_LessThan50GBP(int)"
});
formatter.result({
  "duration": 6246847951,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Confirm_Device_and_Tariff_are_added_in_DealBuilder()"
});
formatter.result({
  "duration": 1163499576,
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
  "duration": 26640882964,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12411605658,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13088687729,
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
  "duration": 27998899711,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 44254621461,
  "error_message": "java.lang.AssertionError: Unable to Pay by card , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.pay_by_card_payn_device(E2EOrderPlaced_Steps.java:2069)\r\n\tat ✽.When Pay by card for PAYM device(Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18167071887,
  "status": "passed"
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
  "comments": [
    {
      "line": 12,
      "value": "#And input all the fields on the Delivery page for Click and collect and Click order on the \u0027Continue button\u0027"
    },
    {
      "line": 13,
      "value": "#And I land on the payment page and input all the details for Click and collect order and click \u0027Continue on next step\u0027"
    }
  ],
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
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
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 21,
      "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 22,
      "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47071038872,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "FNT PayM Different store address than billing address",
  "description": "",
  "id": "reg-fnt-differentstoreaddressthanbillingaddres;fnt-paym-different-store-address-than-billing-address;;2",
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
  "name": "I choose PayM GalaxyS8",
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
      "value": "#And input all the fields on the Delivery page for Click and collect and Click order on the \u0027Continue button\u0027"
    },
    {
      "line": 13,
      "value": "#And I land on the payment page and input all the details for Click and collect order and click \u0027Continue on next step\u0027"
    }
  ],
  "line": 14,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22206467460,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 65456217074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126557733130,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_FNT_DifferentStoreAddressthanBillingAddres.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
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
formatter.after({
  "duration": 20186898318,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 18,
      "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "NINE",
        "TEST NINE"
      ],
      "line": 19,
      "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43554167542,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "FNT CFA PayM Phones Click and collect scenario for More than Max Transaction",
  "description": "",
  "id": "reg-fnt-morethanmaxtransaction-deny;fnt-cfa-paym-phones-click-and-collect-scenario-for-more-than-max-transaction;;2",
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
  "name": "I choose PayM GalaxyS8",
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
  "name": "input TEST and NINE and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST NINE and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22207787171,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 63294293787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126830566509,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_FNT_MorethanMaxTransaction_Deny.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page_selecting_pay_device_in_full()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ChooseMoreAccessory()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
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
  "duration": 20220413063,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Additional information page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "upon entering Valid details with valid new \u003cUsername2\u003e and card number",
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
formatter.examples({
  "line": 20,
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
        "Username2"
      ],
      "line": 21,
      "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;1"
    },
    {
      "cells": [
        "TEST",
        "ADDINFOI",
        "TEST ADDINFOI",
        "GalaxyS8",
        "TEST ACCEPTA"
      ],
      "line": 22,
      "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43066294076,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "FNT CFA PayM phones Additional information and Order confirmed",
  "description": "",
  "id": "reg-fnt-paymphonesadditionaldepositconfirmation;fnt-cfa-paym-phones-additional-information-and-order-confirmed;;2",
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
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    3
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
  "name": "input TEST and ADDINFOI and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST ADDINFOI and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Additional information page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "upon entering Valid details with valid new TEST ACCEPTA and card number",
  "matchedColumns": [
    4
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22297087155,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 62472134631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126478377504,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_FNT_PayMPhonesAdditionalDepositConfirmation.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
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
      "val": "ADDINFOI",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ADDINFOI",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AdditionalInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 43
    }
  ],
  "location": "E2EOrderPlaced_Steps.EnterValidCard(String)"
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
formatter.after({
  "duration": 20213110600,
  "status": "passed"
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
  "line": 12,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 19,
      "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 20,
      "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40272834442,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "FNT CFA PayM Phones Click and collect scenario with E2E journey",
  "description": "",
  "id": "reg-fnt-paymphonesclickandcollect;fnt-cfa-paym-phones-click-and-collect-scenario-with-e2e-journey;;2",
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
  "name": "I choose PayM GalaxyS8",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23174486892,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61216562230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126441495006,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_FNT_PayMPhonesClickAndCollect.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
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
formatter.after({
  "duration": 20288382169,
  "status": "passed"
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 17,
      "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "DECLINEA",
        "TEST DECLINEA"
      ],
      "line": 18,
      "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51080838838,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "FNT CFA PayM phones Straight Order Declined",
  "description": "",
  "id": "reg-fnt-paymphonesorderstraightdecline-clickandcollect;fnt-cfa-paym-phones-straight-order-declined;;2",
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
  "name": "I choose PayM GalaxyS8",
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
  "name": "input TEST and DECLINEA and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST DECLINEA and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Order Decline page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 31056376260,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 77372269185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126295119446,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_FNT_PayMPhonesOrderStraightDecline_ClickandCollect.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
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
      "val": "DECLINEA",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderDeclinePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18319610337,
  "status": "passed"
});
formatter.uri("Reg_Jan_AgentShopToAcceptApostrophe.feature");
formatter.feature({
  "line": 1,
  "name": "AgentShopToAcceptApostrophe",
  "description": "This scenario ensures that the Agent shop accepts Apostrophe in First Name and Last Name fields",
  "id": "agentshoptoacceptapostrophe",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "ConsumerShopToAcceptApostrophe",
  "description": "",
  "id": "agentshoptoacceptapostrophe;consumershoptoacceptapostrophe",
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
  "name": "Choose \u003cDeliveryType\u003e delivery address and delivery time",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#When Pay by card for PAYM device"
    }
  ],
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
  "id": "agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;",
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
        "PostCode"
      ],
      "line": 25,
      "id": "agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;;1"
    },
    {
      "cells": [
        "Galaxy S8 64GB Rose Pink",
        "Standard",
        "Base",
        "HomeDelivery",
        "TEST\u0027",
        "ACCEPTA\u0027",
        "TEST ACCEPTA",
        "14",
        "SL11UP"
      ],
      "line": 26,
      "id": "agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46100132997,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "ConsumerShopToAcceptApostrophe",
  "description": "",
  "id": "agentshoptoacceptapostrophe;consumershoptoacceptapostrophe;;2",
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
  "name": "Select a valid PayM Galaxy S8 64GB Rose Pink",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select valid Standard from tariffs tab",
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
  "name": "perform the credit checks using valid TEST\u0027, ACCEPTA\u0027, 14, SL11UP and valid TEST ACCEPTA",
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
  "line": 16,
  "name": "Register the customer with valid TEST\u0027, ACCEPTA\u0027, 14, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    4,
    5,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Choose HomeDelivery delivery address and delivery time",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#When Pay by card for PAYM device"
    }
  ],
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
  "duration": 8729748352,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 25510158472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S8 64GB Rose Pink",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 11994278428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 11917877905,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 24385127947,
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
  "duration": 3538080465,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12577443834,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 15048963025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST\u0027",
      "offset": 38
    },
    {
      "val": "ACCEPTA\u0027",
      "offset": 45
    },
    {
      "val": "14",
      "offset": 55
    },
    {
      "val": "SL11UP",
      "offset": 59
    },
    {
      "val": "TEST ACCEPTA",
      "offset": 76
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheck(String,String,String,String,String)"
});
formatter.result({
  "duration": 73660807425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST\u0027",
      "offset": 33
    },
    {
      "val": "ACCEPTA\u0027",
      "offset": 40
    },
    {
      "val": "14",
      "offset": 50
    },
    {
      "val": "SL11UP",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.register_the_customer(String,String,String,String)"
});
formatter.result({
  "duration": 20411008267,
  "error_message": "java.lang.AssertionError: Unable to Register customer , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.register_the_customer(E2EOrderPlaced_Steps.java:2015)\r\n\tat ✽.And Register the customer with valid TEST\u0027, ACCEPTA\u0027, 14, SL11UP and other valid details in delivery page(Reg_Jan_AgentShopToAcceptApostrophe.feature:16)\r\n",
  "status": "failed"
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
  "duration": 20202780131,
  "status": "passed"
});
formatter.uri("Reg_Jan_AgentToAcceptTenDigitsPhoneNumber.feature");
formatter.feature({
  "line": 1,
  "name": "AgentToAcceptTenDigitsPhoneNumber",
  "description": "This scenario ensures that the Agent shop accepts 10 digit home number",
  "id": "agenttoaccepttendigitsphonenumber",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AgentToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber",
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
  "name": "enter ten digit contact number perform the credit checks using valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and valid \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Register the customer with valid \u003cFirstname\u003e, \u003cSurname\u003e, \u003cHouseNumber\u003e, \u003cPostCode\u003e and other valid details in delivery page",
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
  "id": "agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;",
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
        "PostCode"
      ],
      "line": 24,
      "id": "agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "Galaxy S7 32gb Pink",
        "Standard",
        "Base",
        "HomeDelivery",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "14",
        "SL11UP"
      ],
      "line": 25,
      "id": "agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49751913738,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "AgentToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "agenttoaccepttendigitsphonenumber;agenttoaccepttendigitsphonenumber;;2",
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
  "name": "Select a valid PayM Galaxy S7 32gb Pink",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select valid Standard from tariffs tab",
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
  "name": "enter ten digit contact number perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA",
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
  "name": "Register the customer with valid TEST, ACCEPTA, 14, SL11UP and other valid details in delivery page",
  "matchedColumns": [
    4,
    5,
    7,
    8
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
  "duration": 8989354910,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 19688489827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy S7 32gb Pink",
      "offset": 20
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectValid_Device(String)"
});
formatter.result({
  "duration": 16515033150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "duration": 12056649121,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 24396824841,
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
  "duration": 3438127959,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12571253338,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 13646137736,
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
  "duration": 98811684295,
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
  "duration": 36338998635,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.HomeDelivery_Address()"
});
formatter.result({
  "duration": 5006722768,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.pay_by_card_payn_device()"
});
formatter.result({
  "duration": 42375997922,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_message_should_be_displayed()"
});
formatter.result({
  "duration": 550080301,
  "status": "passed"
});
formatter.after({
  "duration": 19877175008,
  "status": "passed"
});
formatter.uri("Reg_Jan_CFU_MbbSimo30days.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_MbbSimo30days",
  "description": "This scenario ensures that an upgrade customer is able to select a 12 months tablets tariff under the simo tab in upgrade options page",
  "id": "cfu-mbbsimo30days",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_MbbSimo30days",
  "description": "",
  "id": "cfu-mbbsimo30days;cfu-mbbsimo30days",
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
  "name": "click on the \u0027MBB\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "all the tariffs under twelve months should be displayed",
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
  "name": "I click on respective \u003cfilterSort\u003e data filter",
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
formatter.step({
  "line": 31,
  "name": "Click on browser back arrow and land on Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \u0027Sim only Tariff\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Other radio button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on browser back arrow and land on Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "\u0027Checkout In Progress\u0027 page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "click on \u0027Finish checking out with your order\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on \u0027Place your order\u0027 CTA",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "cfu-mbbsimo30days;cfu-mbbsimo30days;",
  "rows": [
    {
      "cells": [
        "Contract",
        "GiftBlock",
        "username",
        "password",
        "filterSort",
        "Tariffsortoption",
        "GiftBlock",
        "sortoption"
      ],
      "line": 45,
      "id": "cfu-mbbsimo30days;cfu-mbbsimo30days;;1"
    },
    {
      "cells": [
        "30 Days",
        "Configured",
        "teadsdst@usaddser.com",
        "test123",
        "high",
        "Monthly data (Low to High)",
        "dfd",
        "Monthly data (High to low"
      ],
      "line": 46,
      "id": "cfu-mbbsimo30days;cfu-mbbsimo30days;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49325890724,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to normal, current state is maximized\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266243\u0027, ip: \u002710.172.60.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\1\\scoped_dir11120_16119}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.167, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 730d2614245c134a5dec74b6946736b8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:877)\r\n\tat steps.Hooks.openBrowser(Hooks.java:61)\r\n\tat sun.reflect.GeneratedMethodAccessor38.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 46,
  "name": "CFU_MbbSimo30days",
  "description": "",
  "id": "cfu-mbbsimo30days;cfu-mbbsimo30days;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid teadsdst@usaddser.com and test123 credentials",
  "matchedColumns": [
    2,
    3
  ],
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
  "name": "click on the \u0027MBB\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the two contract lenght should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "all the tariffs under twelve months should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "if Configured is configured then display the banner",
  "matchedColumns": [
    1
  ],
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
  "name": "I click on respective high data filter",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should see appropriate tariffs based on the selected data filter Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
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
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (High to low",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "If I select ANY sort option Monthly data (High to low from the drop-down",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see tariffs relevant to selected sort option Monthly data (High to low \u0026 filter option \u003cfiltername\u003e",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see tariffs based on the selected sort option Monthly data (High to low",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on different 30 Days  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
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
formatter.step({
  "line": 31,
  "name": "Click on browser back arrow and land on Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \u0027Sim only Tariff\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Other radio button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on browser back arrow and land on Basket page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "\u0027Checkout In Progress\u0027 page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "click on \u0027Finish checking out with your order\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select \u0027I’ll keep my current sim\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on \u0027I agree to the terms and condition\u0027 checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on \u0027Place your order\u0027 CTA",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "teadsdst@usaddser.com",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_simOnlyTariff_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.phones_button_should_be_selected_by_default()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_MBB_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.two_contract_length_should_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.all_the_tariffs_under_twelve_months_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Configured",
      "offset": 3
    }
  ],
  "location": "E2EOrderPlaced_Steps.if_GiftBlock_is_configured_then_display_banner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Why_choose_an_O2_may_Monthly_sim_is_not_displayed_in_upgrade_options_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filters_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "high",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.sorting_dropdown_is_displayed_just_below_the_toggle_buttons_sections()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_upfront_sort_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low",
      "offset": 54
    },
    {
      "val": "\u003cfiltername\u003e",
      "offset": 96
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (High to low",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow_and_land_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_simOnlyTariff_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Other_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_browser_back_arrow_and_land_Basket_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.checkoutInProgressPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.finish_checking_out_with_your_order_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectILlKeepMyCurrentSimOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnIAgreeToTheTermsAndConditionCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnPlaceYourOrderCTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20709325592,
  "status": "passed"
});
formatter.uri("Reg_Jan_CFU_PhonesSimo30day.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_PhonesSimo30day",
  "description": "This scenario ensures that an upgrade customer is able to select a 30 day tariff under the simo tab in upgrade options page",
  "id": "cfu-phonessimo30day",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFU_PhonesSimo30day",
  "description": "",
  "id": "cfu-phonessimo30day;cfu-phonessimo30day",
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
  "name": "I click on respective \u003cfilterSort\u003e data filter",
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
  "id": "cfu-phonessimo30day;cfu-phonessimo30day;",
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
      "id": "cfu-phonessimo30day;cfu-phonessimo30day;;1"
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
      "id": "cfu-phonessimo30day;cfu-phonessimo30day;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51778812949,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "CFU_PhonesSimo30day",
  "description": "",
  "id": "cfu-phonessimo30day;cfu-phonessimo30day;;2",
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
  "name": "I am an Existing user and Navigates to Signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid in01808o_894013@o2.com and test123 credentials",
  "matchedColumns": [
    2,
    3
  ],
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
  "name": "if Configured is configured then display the banner",
  "matchedColumns": [
    1
  ],
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
  "name": "I click on respective \u003cfilterSort\u003e data filter",
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
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "If I select ANY sort option Monthly data (Low to High) from the drop-down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option high",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see tariffs based on the selected sort option Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on different 12 Days  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 23959027782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "in01808o_894013@o2.com",
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
  "duration": 29119343281,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 11657681742,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_click_on_simOnlyTariff_tab()"
});
formatter.result({
  "duration": 25699455907,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_url_has_simo_at_end()"
});
formatter.result({
  "duration": 12298177,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.phones_button_should_be_selected_by_default()"
});
formatter.result({
  "duration": 107924556,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.two_contract_length_should_displayed()"
});
formatter.result({
  "duration": 217826730,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.all_the_tariffs_under_twelve_months_should_be_displayed()"
});
formatter.result({
  "duration": 237539204,
  "error_message": "java.lang.AssertionError: Failed to display\u0027s the tariffs under twelve months\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat actionsPerformed.SimsPageActions.allTariffsUnderTwelveMonthsShouldDisplayed(SimsPageActions.java:176)\r\n\tat steps.E2EOrderPlaced_Steps.all_the_tariffs_under_twelve_months_should_be_displayed(E2EOrderPlaced_Steps.java:7731)\r\n\tat ✽.And all the tariffs under twelve months should be displayed(Reg_Jan_CFU_PhonesSimo30day.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Timer_configured_then_it_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Configured",
      "offset": 3
    }
  ],
  "location": "E2EOrderPlaced_Steps.if_GiftBlock_is_configured_then_display_banner(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Why_choose_an_O2_may_Monthly_sim_is_not_displayed_in_upgrade_options_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filters_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cfilterSort\u003e",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTariffsortoption\u003e",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.getTariffList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.sorting_dropdown_is_displayed_just_below_the_toggle_buttons_sections()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_upfront_sort_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 88
    }
  ],
  "location": "E2EOrderPlaced_Steps.filterandDropDownPosition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 28
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_sort_Tariff_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 54
    },
    {
      "val": "high",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 55
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12 Days ",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_different_Months_Tariff_in_Tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Select_CTA_to_buy_SIMO_Tariff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.copyTextSIMDeliveryRequiredOrNotIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20369604286,
  "status": "passed"
});
formatter.uri("Reg_Jan_ConsumerToAcceptTenDigitsPhoneNumber.feature");
formatter.feature({
  "line": 1,
  "name": "ConsumerToAcceptTenDigitsPhoneNumber",
  "description": "This scenario ensures that the consumer shop accepts 10 digit home number",
  "id": "consumertoaccepttendigitsphonenumber",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "ConsumerToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "consumertoaccepttendigitsphonenumber;consumertoaccepttendigitsphonenumber",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM \u003chandset\u003e #provide handset which is already set as delayed delivery",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \u003ccolor\u003e color of the connected device",
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
      "value": "#The below statement also checks for 0 in case of a mobile number"
    }
  ],
  "line": 15,
  "name": "enter a \u003cFirstname\u003e and \u003cSurname\u003e and ten digit home number",
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
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Verify contents of order confirmation page for Phones containing \u003cStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 22,
      "value": "#Step 12 and Step 13 of ALM clubbed together"
    },
    {
      "line": 23,
      "value": "#Close the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "consumertoaccepttendigitsphonenumber;consumertoaccepttendigitsphonenumber;",
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
      "line": 25,
      "id": "consumertoaccepttendigitsphonenumber;consumertoaccepttendigitsphonenumber;;1"
    },
    {
      "cells": [
        "Random",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Delayed Delivery",
        "Black"
      ],
      "line": 26,
      "id": "consumertoaccepttendigitsphonenumber;consumertoaccepttendigitsphonenumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46940482485,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "ConsumerToAcceptTenDigitsPhoneNumber",
  "description": "",
  "id": "consumertoaccepttendigitsphonenumber;consumertoaccepttendigitsphonenumber;;2",
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
  "name": "I choose PayM Random #provide handset which is already set as delayed delivery",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select Black color of the connected device",
  "matchedColumns": [
    5
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
      "value": "#The below statement also checks for 0 in case of a mobile number"
    }
  ],
  "line": 15,
  "name": "enter a TEST and ACCEPTA and ten digit home number",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Verify contents of order confirmation page for Phones containing Delayed Delivery",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22160341687,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 68198378976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random #provide handset which is already set as delayed delivery",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126633037965,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Random #provide handset which is already set as delayed delivery(Reg_Jan_ConsumerToAcceptTenDigitsPhoneNumber.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.verify_contents_of_order_confirmation_page_for_Phones_containing_Delayed_Delivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20347421912,
  "status": "passed"
});
formatter.uri("Reg_Jan_DrupalPageCookiesPopUp.feature");
formatter.feature({
  "line": 1,
  "name": "DrupalPageCookiesPopUp",
  "description": "This scenario ensures that when the pop up is displayed then the links in the pop up should launch the respective pages",
  "id": "drupalpagecookiespopup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 64521814312,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "DrupalPageCookiesPopUp",
  "description": "",
  "id": "drupalpagecookiespopup;drupalpagecookiespopup",
  "type": "scenario",
  "keyword": "Scenario",
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
  "name": "a cookies pop up should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on \u0027cookie policy\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the \u0027cookie policy\u0027 page should be opened",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "launch the shop phones page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \u0027manage cookies\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the \u0027manage cookies\u0027 page should be opened",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "launch the shop phones page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on \u0027close icon\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The Shop home page should be displayed without the cookies",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 25399197770,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.a_cookies_pop_up_should_be_displayed()"
});
formatter.result({
  "duration": 338672335,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCookiePolicyLink()"
});
formatter.result({
  "duration": 3724831206,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theCookiePolicyPageShouldBeOpened()"
});
formatter.result({
  "duration": 23816954639,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "duration": 3939247712,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "duration": 13531163050,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnManageCookiesLink()"
});
formatter.result({
  "duration": 3772334728,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theManageCookiesPageShouldBeOpened()"
});
formatter.result({
  "duration": 17227830544,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Delete_all_cookies()"
});
formatter.result({
  "duration": 3046467291,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.launch_the_shop_phones_page()"
});
formatter.result({
  "duration": 10357747427,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnCloseIcon()"
});
formatter.result({
  "duration": 28510635180,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.theShopHomePageShouldBeDisplayedWithoutTheCookies()"
});
formatter.result({
  "duration": 23486395916,
  "status": "passed"
});
formatter.after({
  "duration": 20208876842,
  "status": "passed"
});
formatter.uri("Reg_Jan_Existing_OOSForHomeDeliveryandCnC.feature");
formatter.feature({
  "line": 1,
  "name": "Existing_OOSForHomeDeliveryandCnC",
  "description": "This scenario ensures that when an existing customer has selected a device which is out of stock for both Home delivery and click and collect then the updated\r\nerror messages should be displayed",
  "id": "existing-oosforhomedeliveryandcnc",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Existing_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc",
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
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
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
  "name": "the Delivery section should show \u0027OOS message\u0027",
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
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;",
  "rows": [
    {
      "cells": [
        "handset",
        "username",
        "password"
      ],
      "line": 19,
      "id": "existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;;1"
    },
    {
      "cells": [
        "",
        "",
        ""
      ],
      "line": 20,
      "id": "existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46353786175,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Existing_OOSForHomeDeliveryandCnC",
  "description": "",
  "id": "existing-oosforhomedeliveryandcnc;existing-oosforhomedeliveryandcnc;;2",
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
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid  and  credentials",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose PayM ",
  "matchedColumns": [
    0
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
  "name": "the Delivery section should show \u0027OOS message\u0027",
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
  "name": "the Delivery section should show \u0027OOS message\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 23674466720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 15611272846,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 178230735392,
  "error_message": "java.lang.AssertionError: unable to do mousehover to phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page(E2EOrderPlaced_Steps.java:118)\r\n\tat ✽.And navigate to PAYM Phones page(Reg_Jan_Existing_OOSForHomeDeliveryandCnC.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
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
  "location": "E2EOrderPlaced_Steps.delivery_section_should_show_OOS_message()"
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
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
  "duration": 20204511431,
  "status": "passed"
});
formatter.uri("Reg_Jan_FreeSim_CommercialAddress.feature");
formatter.feature({
  "line": 1,
  "name": "FreeSim_CommercialAddress",
  "description": "",
  "id": "freesim-commercialaddress",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "FreeSim_CommercialAddress",
  "description": "",
  "id": "freesim-commercialaddress;freesim-commercialaddress",
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
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the respective \u003cerror\u003e message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "freesim-commercialaddress;freesim-commercialaddress;",
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
        "Firstname",
        "Lastname",
        "Contact_number",
        "houseNumber"
      ],
      "line": 16,
      "id": "freesim-commercialaddress;freesim-commercialaddress;;1"
    },
    {
      "cells": [
        "Light surfer",
        "iPad",
        "26",
        "100",
        "slough",
        "Berks",
        "SL1 1LN",
        "Test",
        "Accepta",
        "07123456789",
        "103"
      ],
      "line": 17,
      "id": "freesim-commercialaddress;freesim-commercialaddress;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47012604659,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "FreeSim_CommercialAddress",
  "description": "",
  "id": "freesim-commercialaddress;freesim-commercialaddress;;2",
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
  "name": "I select Light surfer surfer and iPad sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, \u003cPostcode\u003e",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter a 103 and an SL1 1LN",
  "matchedColumns": [
    6,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the respective \u003cerror\u003e message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23874205750,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 74865304347,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 3844725161,
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
  "duration": 24601499422,
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
      "val": "\u003cPostcode\u003e",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 6150537474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "103",
      "offset": 8
    },
    {
      "val": "SL1 1LN",
      "offset": 19
    }
  ],
  "location": "E2EOrderPlaced_Steps.enter_houseNum_and_PostCode(String,String)"
});
formatter.result({
  "duration": 8177314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cerror\u003e",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.respective_Error_messageShould_Be_Displayed(String)"
});
formatter.result({
  "duration": 4913962,
  "status": "passed"
});
formatter.after({
  "duration": 19940070540,
  "status": "passed"
});
formatter.uri("Reg_Jan_FreeSim_NoAddress.feature");
formatter.feature({
  "line": 1,
  "name": "FreeSimNoAddress",
  "description": "",
  "id": "freesimnoaddress",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FreeSimNoAddress",
  "description": "",
  "id": "freesimnoaddress;freesimnoaddress",
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
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \u003cSurfer_Type\u003e surfer and \u003csim_type\u003e sim",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \u0027Enter manually\u0027 and input \u003cFlatnumber\u003e, \u003cHousename\u003e, \u003cAddress1\u003e, \u003cTown\u003e, \u003cPostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter a \u003chouseNumber\u003e and an \u003cPostCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the respective \u003cerror\u003e message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "freesimnoaddress;freesimnoaddress;",
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
        "Firstname",
        "Lastname",
        "Contact_number",
        "houseNumber"
      ],
      "line": 15,
      "id": "freesimnoaddress;freesimnoaddress;;1"
    },
    {
      "cells": [
        "Light surfer",
        "iPad",
        "26",
        "100",
        "slough",
        "Berks",
        "SL111R1",
        "Test",
        "Accepta",
        "07123456789",
        "invalid"
      ],
      "line": 16,
      "id": "freesimnoaddress;freesimnoaddress;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44434032224,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "FreeSimNoAddress",
  "description": "",
  "id": "freesimnoaddress;freesimnoaddress;;2",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to FreeSim page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \u0027iPads and Tablets\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Light surfer surfer and iPad sim",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \u0027Enter manually\u0027 and input 26, 100, slough, Berks, \u003cPostcode\u003e",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter a invalid and an SL111R1",
  "matchedColumns": [
    6,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the respective \u003cerror\u003e message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23193413698,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_FreeSim_page()"
});
formatter.result({
  "duration": 68726951800,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_iPads_and_Tablets_tab()"
});
formatter.result({
  "duration": 3685032180,
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
  "duration": 34931522688,
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
      "val": "\u003cPostcode\u003e",
      "offset": 60
    }
  ],
  "location": "E2EOrderPlaced_Steps.Enter_delivery_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 6088360014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 8
    },
    {
      "val": "SL111R1",
      "offset": 23
    }
  ],
  "location": "E2EOrderPlaced_Steps.enter_houseNum_and_PostCode(String,String)"
});
formatter.result({
  "duration": 4563597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cerror\u003e",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.respective_Error_messageShould_Be_Displayed(String)"
});
formatter.result({
  "duration": 4251807,
  "status": "passed"
});
formatter.after({
  "duration": 19876720241,
  "status": "passed"
});
formatter.uri("Reg_October2Release_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
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
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 20
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 22
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 23
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 24
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 25
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 26
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 27
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 29
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# And Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 33,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 38,
      "value": "#Close the browser"
    }
  ],
  "line": 39,
  "name": "",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "color",
        "CFATariffColour"
      ],
      "line": 40,
      "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST ACCEPTA",
        "Gold",
        "Gold"
      ],
      "line": 41,
      "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47495011718,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;2",
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
  "name": "I choose PayM Apple8",
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
  "name": "select Gold color of the connected device",
  "matchedColumns": [
    2
  ],
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
  "name": "select Gold color of the connected device",
  "matchedColumns": [
    2
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
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 20
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 22
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 23
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 24
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 25
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 26
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 27
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 29
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# And Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 33,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 22461414160,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 76518531142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126472394397,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Apple8(Reg_October2Release_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature:7)\r\n",
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
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
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
      "val": "Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
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
  "location": "E2EOrderPlaced_Steps.inputDetailsDeliveryPage(DataTable)"
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
formatter.after({
  "duration": 20206081352,
  "status": "passed"
});
formatter.uri("Reg_October2Release_ECOM-12004_CFA_PAYM_Phones.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_SSCcheckoutpagesMarkMandatoryFieldsWithAsterisk",
  "description": "",
  "id": "cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "CFA_Phones_SSCcheckoutpagesMarkMandatoryFieldsWithAsterisk",
  "description": "",
  "id": "cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk",
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
  "comments": [
    {
      "line": 10,
      "value": "# And click on the color dropdown"
    }
  ],
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
      "value": "#Below is delivery page"
    }
  ],
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
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 18
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 19
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 20
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 21
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 22
    },
    {
      "cells": [
        "Contact Number",
        "078228377333"
      ],
      "line": 23
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 24
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 25
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 26
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 27
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Below is payment page"
    }
  ],
  "line": 32,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "# And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027"
    }
  ],
  "line": 35,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Continue to Review page, click on ‘change delivery’",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#And verify asterisk is displayed against mandatory fields of \"Review Delivery page\""
    }
  ],
  "line": 39,
  "name": "Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 43,
      "value": "#Close the browser"
    }
  ],
  "line": 44,
  "name": "",
  "description": "",
  "id": "cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;",
  "rows": [
    {
      "cells": [
        "handset"
      ],
      "line": 45,
      "id": "cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;;1"
    },
    {
      "cells": [
        "GalaxyS8"
      ],
      "line": 46,
      "id": "cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 50205253923,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "CFA_Phones_SSCcheckoutpagesMarkMandatoryFieldsWithAsterisk",
  "description": "",
  "id": "cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;cfa-phones-ssccheckoutpagesmarkmandatoryfieldswithasterisk;;2",
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
  "name": "I choose PayM GalaxyS8",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "# And click on the color dropdown"
    }
  ],
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
      "value": "#Below is delivery page"
    }
  ],
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
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 18
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 19
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 20
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 21
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 22
    },
    {
      "cells": [
        "Contact Number",
        "078228377333"
      ],
      "line": 23
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 24
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 25
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 26
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 27
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Below is payment page"
    }
  ],
  "line": 32,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify asterisk is displayed against mandatory fields of \"Payments page\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "# And land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027"
    }
  ],
  "line": 35,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Continue to Review page, click on ‘change delivery’",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#And verify asterisk is displayed against mandatory fields of \"Review Delivery page\""
    }
  ],
  "line": 39,
  "name": "Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 26237649268,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 68547699586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126390350514,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_October2Release_ECOM-12004_CFA_PAYM_Phones.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.inputDetailsDeliveryPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.clickOnTheContinueButton()"
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
  "location": "E2EOrderPlaced_Steps.continueToReviewPageClickOnChangeDelivery()"
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
  "location": "E2EOrderPlaced_Steps.clickOnTheContinueButton()"
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
formatter.after({
  "duration": 20296511706,
  "status": "passed"
});
formatter.uri("Reg_October2Release_ECOM-12004_CFA_PayG_Freesim_Phones_DeliveryPageMarkMandatoryFieldsWithAsterisk.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_PAYG_sims_Asterisk validation",
  "description": "",
  "id": "cfa-payg-sims-asterisk-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_PAYG_sims_Asterisk validation",
  "description": "",
  "id": "cfa-payg-sims-asterisk-validation;cfa-payg-sims-asterisk-validation",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify asterisk is displayed against mandatory fields of \"PAYG Free sim Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Add url redirection step above"
    }
  ],
  "line": 11,
  "name": "I enter details in Delivery Page\u003cFirstname\u003e and \u003cSurname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#Close the browser"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "cfa-payg-sims-asterisk-validation;cfa-payg-sims-asterisk-validation;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surname"
      ],
      "line": 16,
      "id": "cfa-payg-sims-asterisk-validation;cfa-payg-sims-asterisk-validation;;1"
    },
    {
      "cells": [
        "TEST",
        "ACCEPTA"
      ],
      "line": 17,
      "id": "cfa-payg-sims-asterisk-validation;cfa-payg-sims-asterisk-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49914413534,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CFA_PAYG_sims_Asterisk validation",
  "description": "",
  "id": "cfa-payg-sims-asterisk-validation;cfa-payg-sims-asterisk-validation;;2",
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
  "name": "verify copy text You will need to give details for all fields marked with an asterisk is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify asterisk is displayed against mandatory fields of \"PAYG Free sim Delivery page\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Add url redirection step above"
    }
  ],
  "line": 11,
  "name": "I enter details in Delivery PageTEST and ACCEPTA",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23896921810,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PayG_SIMO_page()"
});
formatter.result({
  "duration": 67806858808,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.selectAPayAsYouGoBundle()"
});
formatter.result({
  "duration": 12249859677,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk()"
});
formatter.result({
  "duration": 20106897525,
  "error_message": "java.lang.AssertionError: verify copy text ‘You\u0027ll need to give details for all fields marked with an asterisk * is not displayed$\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verify_copy_text_allFields_narked_with_asterisk(E2EOrderPlaced_Steps.java:6755)\r\n\tat ✽.And verify copy text You will need to give details for all fields marked with an asterisk is displayed(Reg_October2Release_ECOM-12004_CFA_PayG_Freesim_Phones_DeliveryPageMarkMandatoryFieldsWithAsterisk.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "PAYG Free sim Delivery page",
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
      "offset": 32
    },
    {
      "val": "ACCEPTA",
      "offset": 41
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_enter_details_in_Delivery_PageTEST_and_ACCEPTA(String,String)"
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
  "duration": 20167300509,
  "status": "passed"
});
formatter.uri("Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature");
formatter.feature({
  "line": 1,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "payg-tablets-showmarketingmessageontariffandextraspagepackagesummary",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary",
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
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select any available \u003cDevice\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a tariff \u003ctariff\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the copytext of marketing message in \"Tariff and Extras\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the copytext of marketing message in \"Your Package\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the copytext of marketing message in \"Your Basket\"",
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
  "comments": [
    {
      "line": 17,
      "value": "#And Verify the copytext of marketing message in \u003cPaymentSectionName\u003e"
    }
  ],
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
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username",
        "tariff"
      ],
      "line": 25,
      "id": "payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "9.99upfront60.00amonth"
      ],
      "line": 26,
      "id": "payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44469743653,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to Pay as you Go Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select any available Random Device Tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select a tariff 9.99upfront60.00amonth",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the copytext of marketing message in \"Tariff and Extras\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the copytext of marketing message in \"Your Package\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the copytext of marketing message in \"Your Basket\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And Verify the copytext of marketing message in \u003cPaymentSectionName\u003e"
    }
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23256085563,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 54695843606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 32520308803,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 32372470911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.99upfront60.00amonth",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 514831779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tariff and Extras",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessageIn(String)"
});
formatter.result({
  "duration": 20043635348,
  "error_message": "java.lang.AssertionError: Unable to Click on view all tablets link\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessageIn(E2EOrderPlaced_Steps.java:6585)\r\n\tat ✽.And Verify the copytext of marketing message in \"Tariff and Extras\"(Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Package",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessageIn(String)"
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
      "val": "Your Basket",
      "offset": 45
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTheCopytextOfMarketingMessageIn(String)"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20299847254,
  "status": "passed"
});
formatter.uri("Reg_October2Release_Reg_October2Release_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
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
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 20
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 22
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 23
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 24
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 25
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 26
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 27
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 29
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# And Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 33,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 38,
      "value": "#Close the browser"
    }
  ],
  "line": 39,
  "name": "",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "color",
        "CFATariffColour"
      ],
      "line": 40,
      "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST ACCEPTA",
        "Gold",
        "Gold"
      ],
      "line": 41,
      "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43489556282,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;2",
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
  "name": "I choose PayM Apple8",
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
  "name": "select Gold color of the connected device",
  "matchedColumns": [
    2
  ],
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
  "name": "select Gold color of the connected device",
  "matchedColumns": [
    2
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
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 20
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 22
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 23
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 24
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 25
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 26
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 27
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 29
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# And Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 33,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23529219407,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 70959111304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126466511444,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Apple8(Reg_October2Release_Reg_October2Release_CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature:7)\r\n",
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
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
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
      "val": "Gold",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_device(String)"
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
  "location": "E2EOrderPlaced_Steps.inputDetailsDeliveryPage(DataTable)"
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
formatter.after({
  "duration": 20207863614,
  "status": "passed"
});
formatter.uri("Reg_October2Release_Reg_October2Release_ECOM-11886.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate",
  "description": "\r\nThis scenario ensures that when the customer in acquisition journey who have moved address recently selects \u0027PayM Phone\u0027, then the customer should be prompted with updated copy of \u0027Home Address\u0027 to ensure that their address is up to date",
  "id": "cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate",
  "description": "",
  "id": "cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate",
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
  "line": 14,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and verify copy text message below home address",
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
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 23,
      "id": "cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 24,
      "id": "cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47249546118,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate",
  "description": "",
  "id": "cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;cfa-phones-customersmovedtonewaddresspaymentpagehomeaddresscopyupdate;;2",
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM GalaxyS8",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and verify copy text message below home address",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23782378534,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 69252950677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126438622009,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_October2Release_Reg_October2Release_ECOM-11886.feature:9)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyCopyTextinPaymentPage()"
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
formatter.after({
  "duration": 20228001835,
  "status": "passed"
});
formatter.uri("Reg_TrustevPayMPhones_ClickandCollectE2EjourneyWithAccessoryInAgentShop.feature");
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
    }
  ],
  "line": 5,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
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
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination for Phones",
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
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
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
  "line": 20,
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
        "Security_Answer"
      ],
      "line": 21,
      "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "Random",
        "Random",
        "iPhone 7 Evo Elite Brushed Black",
        "TEST",
        "ACCEPTA",
        "32",
        "SL11ER",
        "TEST ACCEPTA",
        "test123",
        "test123",
        "Anything"
      ],
      "line": 22,
      "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49660955712,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2",
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
  "name": "Select a valid PayM Random",
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
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid Handset and Tariff combination for Phones",
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 32, SL11ER and valid TEST ACCEPTA",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Register customer with valid test123, test123, Anything in delivery page",
  "matchedColumns": [
    8,
    9,
    10
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
  "duration": 9585425793,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 20587862779,
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
  "duration": 17186139548,
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
  "duration": 11700175041,
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
  "duration": 27880644332,
  "error_message": "java.lang.AssertionError: Unable to select accessory basket, please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Select_Accessory(E2EOrderPlaced_Steps.java:1872)\r\n\tat ✽.And Select a valid Accessory iPhone 7 Evo Elite Brushed Black(Reg_TrustevPayMPhones_ClickandCollectE2EjourneyWithAccessoryInAgentShop.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination_for_Phones()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
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
  "duration": 20126001992,
  "status": "passed"
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
    }
  ],
  "line": 5,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
    },
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
  "comments": [
    {
      "line": 10,
      "value": "#And Select \u003cAccessory\u003e from Accessories tab"
    }
  ],
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
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
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Question\u003e, \u003cSecurity_Answer\u003e in delivery page",
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
  "line": 20,
  "name": "",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;",
  "rows": [
    {
      "cells": [
        "Device",
        "Tariffs",
        "Firstname",
        "Surname",
        "Username",
        "Password",
        "Confirm_Password",
        "Security_Question",
        "Security_Answer",
        "HouseNumber",
        "PostCode"
      ],
      "line": 21,
      "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;1"
    },
    {
      "cells": [
        "tablet",
        "Random",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "test123",
        "test123",
        "Memorable name",
        "Anything",
        "14",
        "SL11UP"
      ],
      "line": 22,
      "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47783407689,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-phones-withaccessoryclick-and-collect;trustev-paym-phones-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@AgentsRegression"
    },
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
  "comments": [
    {
      "line": 10,
      "value": "#And Select \u003cAccessory\u003e from Accessories tab"
    }
  ],
  "line": 11,
  "name": "select a valid Handset and Tariff combination",
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA",
  "matchedColumns": [
    2,
    3,
    4,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Register customer with valid test123, test123, Memorable name, Anything in delivery page",
  "matchedColumns": [
    5,
    6,
    7,
    8
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
  "duration": 8654953847,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 19612536638,
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
  "duration": 18496655250,
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
  "duration": 11767381129,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "duration": 22437400332,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
});
formatter.result({
  "duration": 20735452938,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.validate_all_the_Basket_content_and_checkout()"
});
formatter.result({
  "duration": 12501533468,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.advisory_checks()"
});
formatter.result({
  "duration": 19838030707,
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
  "duration": 82503643799,
  "error_message": "java.lang.AssertionError: Unable to perform credit checks , please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheck(E2EOrderPlaced_Steps.java:1968)\r\n\tat ✽.And perform the credit checks using valid TEST, ACCEPTA, 14, SL11UP and valid TEST ACCEPTA(Reg_Trustev_AFA_PAYM_Phones_WithAccessoryClick_and_Collect.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123, test123",
      "offset": 29
    },
    {
      "val": "Memorable name",
      "offset": 47
    },
    {
      "val": "Anything",
      "offset": 63
    }
  ],
  "location": "E2EOrderPlaced_Steps.Register_Customer_Phones(String,String,String)"
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
  "duration": 18181695570,
  "status": "passed"
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
  "line": 4,
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
  "name": "Select a valid PayM \u003cDevice\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid \u003cTariffs\u003e from tariffs tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid Accessory \u003cAccessory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select a valid Handset and Tariff combination",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a valid store for Click and Collect",
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
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid \u003cPassword\u003e, \u003cConfirm_Password\u003e, \u003cSecurity_Answer\u003e in delivery page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Pay by card for PAYM device",
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
        "Security_Answer"
      ],
      "line": 20,
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
        "Anything"
      ],
      "line": 21,
      "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47114212375,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop",
  "description": "",
  "id": "reg-trustev-afa-paym-tablet-withaccessoryclick-and-collect;trustev-paym-tablets-click-and-collect-e2e-journey-with-accessory-in-agent-shop;;2",
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
  "name": "Select a valid PayM tablet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid Random from tariffs tab",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select a valid Accessory iPhone 7 Evo Elite Brushed Black",
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
  "name": "select a valid store for Click and Collect",
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
  "name": "perform the credit checks using valid TEST, ACCEPTA, 32, SL11ER and valid TEST ACCEPTA",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Register customer with valid test123, test123, Anything in delivery page",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Pay by card for PAYM device",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Order confirmation message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 8116384641,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.performs_Acquisition_for_New_user()"
});
formatter.result({
  "duration": 23822114211,
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
  "duration": 16857377951,
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
  "duration": 11656685855,
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
  "duration": 27626010486,
  "error_message": "java.lang.AssertionError: Unable to select accessory basket, please see the failure screenshot\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Select_Accessory(E2EOrderPlaced_Steps.java:1872)\r\n\tat ✽.And Select a valid Accessory iPhone 7 Evo Elite Brushed Black(Reg_Trustev_AFA_PAYM_Tablet_WithAccessoryClick_and_Collect.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_a_valid_Handset_and_Tariff_combination()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Store_for_click_and_Collect()"
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
  "duration": 20151747119,
  "status": "passed"
});
formatter.uri("Reg_Trustev_PayMPhonesHomeDeliveryWithAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_Trustev_PayMPhonesHomeDeliveryWithAccessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Trustev PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory",
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
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "GalaxyS8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "reg-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46038151954,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Trustev PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithaccessory;trustev-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "I choose PayM GalaxyS8",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 26335422431,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 70253485428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GalaxyS8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126426561302,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM GalaxyS8(Reg_Trustev_PayMPhonesHomeDeliveryWithAccessory.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20302152234,
  "status": "passed"
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
  "line": 15,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
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
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#Close the browser"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 23,
      "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 24,
      "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51346884332,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Trustev PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "reg-trustev-paymphoneshomedeliverywithoutaccessory;trustev-paym-phones-home-delivery-e2e-journey-without-accessory;;2",
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
  "name": "I choose PayM Apple8",
  "matchedColumns": [
    0
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23616407998,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 78046034466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126349795903,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Apple8(Reg_Trustev_PayMPhonesHomeDeliveryWithoutAccessory.feature:10)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20225358169,
  "status": "passed"
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
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "Device",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 48413168145,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Trustev PayM Tablets Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-trustev-paymtabletshomedeliverywithaccessory;trustev-paym-tablets-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "select any available Random Device Tablet",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order for Trustev details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23414687456,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 83002174388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random Device",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_any_available_Tablet(String)"
});
formatter.result({
  "duration": 29063660320,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 26683821120,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9628470121,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Choose_some_Accesssory()"
});
formatter.result({
  "duration": 8583199380,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 127236909962,
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
  "duration": 27407654668,
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
});
formatter.result({
  "duration": 56371241447,
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
  "duration": 21320271076,
  "error_message": "java.lang.AssertionError: Unable to input details in payment page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.CreditCheckPaymentPage_HomeDelivery(E2EOrderPlaced_Steps.java:1283)\r\n\tat ✽.And land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027(Reg_Trustev_PayMTabletsHomeDeliveryWithAccessory.feature:14)\r\n",
  "status": "failed"
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
formatter.after({
  "duration": 20351478011,
  "status": "passed"
});
formatter.uri("Reg_VOLTE_PayMPhonesClickAndCollect.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_VOLTE_PayMPhonesClickAndCollect",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Volte PayM Phones Click and collect scenario with E2E journey Click and collect",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect",
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
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input \u003cUsername\u003e and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 19,
      "id": "reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 20,
      "id": "reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66815930086,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Volte PayM Phones Click and collect scenario with E2E journey Click and collect",
  "description": "",
  "id": "reg-volte-paymphonesclickandcollect;volte-paym-phones-click-and-collect-scenario-with-e2e-journey-click-and-collect;;2",
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
  "name": "I choose PayM Apple8",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page for Click and collect and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "land on the payment page and input TEST ACCEPTA and other details for Click and collect order and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23025649574,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 67479030812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126463073617,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Apple8(Reg_VOLTE_PayMPhonesClickAndCollect.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_to_collect_from_store()"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_ClickandCollect(String,String)"
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
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_ClickAndCollect(String)"
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
formatter.after({
  "duration": 20291125635,
  "status": "passed"
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
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46659014546,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CFA PayM Phones Home delivery E2E journey with Accessory",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithaccessory;cfa-paym-phones-home-delivery-e2e-journey-with-accessory;;2",
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
  "name": "I choose PayM Apple8",
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
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23490221268,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 74068833694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126323240688,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Apple8(Reg_VOLTE_PayMPhonesHomeDeliveryWithAccessory.feature:7)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20196169198,
  "status": "passed"
});
formatter.uri("Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory",
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
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory",
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
  "line": 13,
  "name": "input \u003cFirstname\u003e and \u003cSurname\u003e and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 20,
      "id": "reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 21,
      "id": "reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47544725373,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Volte PayM Phones Home delivery E2E journey without accessory",
  "description": "",
  "id": "reg-volte-paymphoneshomedeliverywithoutaccessory;volte-paym-phones-home-delivery-e2e-journey-without-accessory;;2",
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
  "name": "I choose PayM Apple8",
  "matchedColumns": [
    0
  ],
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
  "line": 13,
  "name": "input TEST and ACCEPTA and other valid details in Delivery page and Click on the \u0027Continue button\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "land on the payment page and input TEST ACCEPTA and other details and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed with Volte message",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 23213828672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 75954993626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple8",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 126369130761,
  "error_message": "java.lang.AssertionError: Unable to choose PayM phone\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.Choose_PAYM_Handset(E2EOrderPlaced_Steps.java:312)\r\n\tat ✽.And I choose PayM Apple8(Reg_VOLTE_PayMPhonesHomeDeliveryWithoutAccessory.feature:8)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.DeliveryPage_Inputs_homeDelivery(String,String)"
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
formatter.after({
  "duration": 20292029861,
  "status": "passed"
});
formatter.uri("Reg__CFA_iPad_Show_basecomms_tariffs_on_T\u0026E_page_for_my_offers_journey.feature");
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
        "Apple iPad 9.7",
        "Space Grey",
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
formatter.before({
  "duration": 49421145857,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "This scenario ensures that when the customer in Acquisition Journey lands on My offers page and clicks on \u0027iPads\u0027 tab, then the customer should be able to see \u0027iPad\u0027 devices associated with Bascom tariffs in device tile and Tariff and extras page",
  "description": "",
  "id": "reg-cfa-ipad-show-basecomms-tariffs-on-t\u0026e-page-for-my-offers-journey;this-scenario-ensures-that-when-the-customer-in-acquisition-journey-lands-on-my-offers-page-and-clicks-on-\u0027ipads\u0027-tab,-then-the-customer-should-be-able-to-see-\u0027ipad\u0027-devices-associated-with-bascom-tariffs-in-device-tile-and-tariff-and-extras-page;;2",
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
  "name": "I navigate to the Basecomm Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify expected Apple iPad 9.7 and its specific details are present in the device list Space Grey,32GB,In Stock",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
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
  "name": "Select Silver, 128GB of the device Apple iPad 9.7",
  "matchedColumns": [
    0,
    4,
    5
  ],
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
  "name": "Verify new image is as per the selected Apple iPad 9.7,128GBand Silver in the Basecomms page",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on \"Buy Now\" button for Apple iPad 9.7 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify new image is as per the selected Apple iPad 9.7,128GBand Silver in the Tariffs and Extras Page",
  "matchedColumns": [
    0,
    4,
    5
  ],
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
  "name": "select the same basecomms iPad Apple iPad 9.7",
  "matchedColumns": [
    0
  ],
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 19866403574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad 9.7",
      "offset": 16
    },
    {
      "val": "Space Grey",
      "offset": 87
    },
    {
      "val": "32GB",
      "offset": 98
    },
    {
      "val": "In Stock",
      "offset": 103
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 1294606285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    },
    {
      "val": "128GB",
      "offset": 15
    },
    {
      "val": "Apple iPad 9.7",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 4668810974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad 9.7",
      "offset": 40
    },
    {
      "val": "128GB",
      "offset": 55
    },
    {
      "val": "Silver",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(String,String,String)"
});
formatter.result({
  "duration": 1445407772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad 9.7",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 40652811310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad 9.7",
      "offset": 40
    },
    {
      "val": "128GB",
      "offset": 55
    },
    {
      "val": "Silver",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String,String,String)"
});
formatter.result({
  "duration": 2206594,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 9645444436,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_by_clicking_AddToBasket()"
});
formatter.result({
  "duration": 123222049163,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_continue_shopping_button()"
});
formatter.result({
  "duration": 18777657096,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.And_I_navigate_to_iPad_landing_page()"
});
formatter.result({
  "duration": 15080612339,
  "error_message": "java.lang.AssertionError: Unable to navigate to iPad landing page\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.And_I_navigate_to_iPad_landing_page(E2EOrderPlaced_Steps.java:4277)\r\n\tat ✽.And I navigate to iPad landing page(Reg__CFA_iPad_Show_basecomms_tariffs_on_T\u0026E_page_for_my_offers_journey.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad 9.7",
      "offset": 31
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_the_same_device(String)"
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
  "location": "E2EOrderPlaced_Steps.verify_that_the_Basecomms_tariff_is_not_displayed_in_the_Tariff_and_Extras_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20388557634,
  "status": "passed"
});
});