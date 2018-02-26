$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/FebruaryRelease2018/Regression/Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature");
formatter.feature({
  "line": 1,
  "name": "Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature",
  "description": "",
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary",
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
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;",
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
      "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;1"
    },
    {
      "cells": [
        "Random Device",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "Device with 1GB preloaded data sim"
      ],
      "line": 26,
      "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9889301241,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary",
  "description": "",
  "id": "reg-october2release-payg-tablets-showmarketingmessageontariffandextraspagepackagesummary.feature;payg-tablets-showmarketingmessageontariffandextraspagepackagesummary;;2",
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
  "name": "Select a tariff Device with 1GB preloaded data sim",
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
  "duration": 15047461909,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigateToPayAsYouGoTabletsPage()"
});
formatter.result({
  "duration": 22700347219,
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
  "duration": 7427642105,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 15869058602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Device with 1GB preloaded data sim",
      "offset": 16
    }
  ],
  "location": "E2EOrderPlaced_Steps.selectATariffTariff(String)"
});
formatter.result({
  "duration": 20104408282,
  "error_message": "java.lang.AssertionError: Unable to Click on view all tablets link\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat steps.E2EOrderPlaced_Steps.selectATariffTariff(E2EOrderPlaced_Steps.java:6595)\r\n\tat ✽.And Select a tariff Device with 1GB preloaded data sim(Features/FebruaryRelease2018/Regression/Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 20128572848,
  "status": "passed"
});
});