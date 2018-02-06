$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ITFD149/AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement.feature");
formatter.feature({
  "line": 1,
  "name": "AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "\r\nThis scenario ensures that when the Retention Agent in Upgrade selects a \u0027Phone\u0027 and tariff eligible for Promotion and adds another Bolton, then the customer should be displayed with error message",
  "id": "afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement",
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
  "name": "Verify that the deal has already some offers Bolton \u003cBolton2\u003e promotions applied",
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
  "line": 16,
  "name": "Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify that the \u0027Checkout\u0027 CTA is not enabled",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Since Bolton1 is better for customer"
    }
  ],
  "line": 19,
  "name": "To remove the Bolton2 applied by Promotion, Click on \u0027Remove\u0027 button in front of Bolton2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify that the removed promotions is displayed as separate \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027re-apply\u0027 button shown in front of the promotion under \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that the error \u003cErrorMsg\u003e is displayed in the deal about the conflict",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Remove\u0027 button in front of \u003cButton\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Checkout\u0027 CTA and Proceed till Order placement",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;",
  "rows": [
    {
      "cells": [
        "user",
        "Device",
        "Tariffs",
        "ErrorMsg",
        "Button"
      ],
      "line": 29,
      "id": "afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;;1"
    },
    {
      "cells": [
        "07521121496",
        "Random",
        "Base",
        "incompatible with each other",
        "Bolton"
      ],
      "line": 30,
      "id": "afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 71168842041,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;afu-incompatible-boltons-error-remove-and-reapply-removed-bolton-order-placement;;2",
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
  "name": "performs Upgrade for 07521121496",
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
  "name": "Select valid Base from tariffs tab",
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
  "name": "Verify that the deal has already some offers Bolton \u003cBolton2\u003e promotions applied",
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
  "line": 16,
  "name": "Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify that the \u0027Checkout\u0027 CTA is not enabled",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Since Bolton1 is better for customer"
    }
  ],
  "line": 19,
  "name": "To remove the Bolton2 applied by Promotion, Click on \u0027Remove\u0027 button in front of Bolton2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify that the removed promotions is displayed as separate \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027re-apply\u0027 button shown in front of the promotion under \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that the error incompatible with each other is displayed in the deal about the conflict",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Remove\u0027 button in front of Bolton",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Checkout\u0027 CTA and Proceed till Order placement",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 9937408296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521121496",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 112925221580,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027sectionHeading\u0027]/strong\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.54.187\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\scoped_dir3636_15888}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 52d09c837881d3291a1e221da24e1000\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027sectionHeading\u0027]/strong}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat actionsPerformed.Agent_HomePagePageActions.upgradeUser(Agent_HomePagePageActions.java:102)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Upgrade(E2EOrderPlaced_Steps.java:1731)\r\n\tat ✽.And performs Upgrade for 07521121496(ITFD149/AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement.feature:7)\r\n",
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
  "arguments": [
    {
      "val": "Base",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Extras_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Bolton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBolton2\u003e",
      "offset": 52
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_that_the_deal_has_already_some_offers_Bolton_promotions(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_incompatible_boltons_Bolton1_and_the_Offers_Bolton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_not_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.remove_Bolton_applied_by_Promotion_Click_Remove_button_in_front_Bolton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_removed_promotions_displayed_separate_Promotions_removed_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Reapply_button_shown_front_of_the_promotion_under_Promotions_removed_list()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Checkout_CTA_and_Proceed_till_Order_placement()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 18252619789,
  "status": "passed"
});
formatter.uri("ITFD149/AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement.feature");
formatter.feature({
  "line": 1,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "This scenario ensures that when the Retention Agent in Upgrade selects a \u0027Phone\u0027 and tariff eligible for eComm Promotion and adds another Bolton, then the customer should be displayed with error message",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement",
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
  "name": "performs Upgrade for \u003cuser\u003e",
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
  "name": "Click on \u0027Extras\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#(Bolton1 for reference)"
    }
  ],
  "line": 11,
  "name": "Select a Bolton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that the deal has already some offers Bolton \u003cBolton\u003e promotions applied",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#   since both Bolton1 and Bolton2 cannot be sold together"
    }
  ],
  "line": 14,
  "name": "Verify that the error \u003cErrorMsg\u003e is displayed in the deal about the conflict",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#which added Bolton2"
    }
  ],
  "line": 16,
  "name": "Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify that the \u0027Checkout\u0027 CTA is not enabled",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Since Bolton1 is better for customer"
    }
  ],
  "line": 19,
  "name": "To remove the Bolton2 applied by Promotion, Click on \u0027Remove\u0027 button in front of Bolton2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify that the removed promotions is displayed as separate \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027re-apply\u0027 button shown in front of the promotion under \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that the error \u003cErrorMsg\u003e is displayed in the deal about the conflict",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Remove\u0027 button in front of \u003cButton\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Checkout\u0027 CTA and Proceed till Order placement",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
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
      "line": 29,
      "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;1"
    },
    {
      "cells": [
        "07521121496",
        "Random",
        "Base",
        "incompatible with each other",
        "Bolton"
      ],
      "line": 30,
      "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 60047064835,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement",
  "description": "",
  "id": "afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;afu-ecomm-promotions-and-added-bolton-incompatible-error-message-remove-and-reapply-removed-bolton-order-placement;;2",
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
  "name": "performs Upgrade for 07521121496",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select a valid PayM Random",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select valid Base from tariffs tab",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027Extras\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#(Bolton1 for reference)"
    }
  ],
  "line": 11,
  "name": "Select a Bolton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that the deal has already some offers Bolton \u003cBolton\u003e promotions applied",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#   since both Bolton1 and Bolton2 cannot be sold together"
    }
  ],
  "line": 14,
  "name": "Verify that the error incompatible with each other is displayed in the deal about the conflict",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#which added Bolton2"
    }
  ],
  "line": 16,
  "name": "Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify that the \u0027Checkout\u0027 CTA is not enabled",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Since Bolton1 is better for customer"
    }
  ],
  "line": 19,
  "name": "To remove the Bolton2 applied by Promotion, Click on \u0027Remove\u0027 button in front of Bolton2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify that the removed promotions is displayed as separate \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027re-apply\u0027 button shown in front of the promotion under \u0027Promotions removed\u0027 list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that the error incompatible with each other is displayed in the deal about the conflict",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Remove\u0027 button in front of Bolton",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify that the \u0027Checkout\u0027 CTA is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Checkout\u0027 CTA and Proceed till Order placement",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LoginAgentShop()"
});
formatter.result({
  "duration": 6013180294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07521121496",
      "offset": 21
    }
  ],
  "location": "E2EOrderPlaced_Steps.performs_Upgrade(String)"
});
formatter.result({
  "duration": 110075155267,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027sectionHeading\u0027]/strong\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.54.187\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\subbaiv1\\AppData\\Local\\Temp\\scoped_dir2260_29089}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: bc2ec8a3c7d3a8ac961cf3eccea43fc8\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027sectionHeading\u0027]/strong}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat actionsPerformed.Agent_HomePagePageActions.upgradeUser(Agent_HomePagePageActions.java:102)\r\n\tat steps.E2EOrderPlaced_Steps.performs_Upgrade(E2EOrderPlaced_Steps.java:1731)\r\n\tat ✽.And performs Upgrade for 07521121496(ITFD149/AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement.feature:6)\r\n",
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
  "arguments": [
    {
      "val": "Base",
      "offset": 13
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectTariff(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Extras_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_Bolton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_incompatible_boltons_Bolton1_and_the_Offers_Bolton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_not_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.remove_Bolton_applied_by_Promotion_Click_Remove_button_in_front_Bolton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_removed_promotions_displayed_separate_Promotions_removed_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Reapply_button_shown_front_of_the_promotion_under_Promotions_removed_list()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_that_the_Checkout_CTA_is_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_on_Checkout_CTA_and_Proceed_till_Order_placement()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17510051052,
  "status": "passed"
});
formatter.uri("ITFD165/CFU_Buyout_with_Recycle_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed with Recycle in  \u0027Your package\u0027 summary",
  "id": "cfu-buyout-with-recycle-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "",
  "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement",
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
  "name": "Verify that the buyout offer section is displayed with \u0027Take offer and Upgrade\u0027 CTA under \u0027Your Options\u0027 heading",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that \u0027£XXX.XX left to pay on your current Device Plan\u0027 panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Take Offer and Upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that the customer is able to do recycle and buyout together",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on any one of the recycle option then Click on  \u0027Yes get an accurate quote\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Answer the Questions in the questionnaire",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \u0027Accept and continue to upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select a Device from the recommended section",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select a Tariff",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed with Recycle",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on \u0027Add and Go to Basket\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed with Recycle",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027Go to checkout\u0027 and proceed till order confirmation",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        ""
      ],
      "line": 24,
      "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;1"
    },
    {
      "cells": [
        "testaccepta6560@stf.ref.o2.co.uk",
        "test123",
        ""
      ],
      "line": 25,
      "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 57079683498,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "CFU_Buyout_with_Recycle_Order_placement",
  "description": "",
  "id": "cfu-buyout-with-recycle-order-placement;cfu-buyout-with-recycle-order-placement;;2",
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
  "name": "Signin using valid testaccepta6560@stf.ref.o2.co.uk and test123 credentials",
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
  "name": "Verify that the buyout offer section is displayed with \u0027Take offer and Upgrade\u0027 CTA under \u0027Your Options\u0027 heading",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that \u0027£XXX.XX left to pay on your current Device Plan\u0027 panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Take Offer and Upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that the customer is able to do recycle and buyout together",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on any one of the recycle option then Click on  \u0027Yes get an accurate quote\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Answer the Questions in the questionnaire",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \u0027Accept and continue to upgrade\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select a Device from the recommended section",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select a Tariff",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed with Recycle",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on \u0027Add and Go to Basket\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed with Recycle",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027Go to checkout\u0027 and proceed till order confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 39141167356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testaccepta6560@stf.ref.o2.co.uk",
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
  "duration": 26512064140,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 38216803202,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now(E2EOrderPlaced_Steps.java:2770)\r\n\tat ✽.And Navigate to upgrade \u003e upgrade now(ITFD165/CFU_Buyout_with_Recycle_Order_placement.feature:7)\r\n",
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
  "duration": 17221771898,
  "status": "passed"
});
formatter.uri("ITFD165/CFU_Buyout_without_Recycle_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_Buyout_without_Recycle_Order_placement",
  "description": "This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed without Recycle in  \u0027Your package\u0027 summary and Order should be placed successfully",
  "id": "cfu-buyout-without-recycle-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU_Buyout_without_Recycle_Order_placement",
  "description": "",
  "id": "cfu-buyout-without-recycle-order-placement;cfu-buyout-without-recycle-order-placement",
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
  "name": "Verify that the buyout offer section is displayed with \u0027Take offer and Upgrade\u0027 CTA under \u0027Your Options\u0027 heading",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that \u0027£XXX.XX left to pay on your current Device Plan\u0027 panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Take Offer and Upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on \u0027No thanks, I\u0027ll keep my device\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Select a Device from the recommended section",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a Tariff",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed without Recycle",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Add and Go to Basket\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Go to checkout\u0027 and proceed till order confirmation",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "cfu-buyout-without-recycle-order-placement;cfu-buyout-without-recycle-order-placement;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        ""
      ],
      "line": 20,
      "id": "cfu-buyout-without-recycle-order-placement;cfu-buyout-without-recycle-order-placement;;1"
    },
    {
      "cells": [
        "hgyu@poiu.com",
        "test123",
        ""
      ],
      "line": 21,
      "id": "cfu-buyout-without-recycle-order-placement;cfu-buyout-without-recycle-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44088820597,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CFU_Buyout_without_Recycle_Order_placement",
  "description": "",
  "id": "cfu-buyout-without-recycle-order-placement;cfu-buyout-without-recycle-order-placement;;2",
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
  "name": "Signin using valid hgyu@poiu.com and test123 credentials",
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
  "name": "Verify that the buyout offer section is displayed with \u0027Take offer and Upgrade\u0027 CTA under \u0027Your Options\u0027 heading",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that \u0027£XXX.XX left to pay on your current Device Plan\u0027 panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Take Offer and Upgrade\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on \u0027No thanks, I\u0027ll keep my device\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Select a Device from the recommended section",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select a Tariff",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify that in \u0027Your package\u0027 summary Buyout is displayed without Recycle",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on \u0027Add and Go to Basket\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \u0027Go to checkout\u0027 and proceed till order confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_Existing_user_and_Navigates_to_Signin_page()"
});
formatter.result({
  "duration": 47295734224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hgyu@poiu.com",
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
  "duration": 23745691292,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now()"
});
formatter.result({
  "duration": 37118753928,
  "error_message": "java.lang.AssertionError: Unable to navigate to upgrade phones\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_upgrade_upgrade_now(E2EOrderPlaced_Steps.java:2770)\r\n\tat ✽.And Navigate to upgrade \u003e upgrade now(ITFD165/CFU_Buyout_without_Recycle_Order_placement.feature:7)\r\n",
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
  "location": "E2EOrderPlaced_Steps.click_on_No_thanks_I_will_keep_my_device_button()"
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
  "location": "E2EOrderPlaced_Steps.verify_in_Your_package_summary_Buyout_is_displayed_without_Recycle()"
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
  "location": "E2EOrderPlaced_Steps.click_on_Goto_checkout_and_proceed_till_order_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17645654864,
  "status": "passed"
});
});