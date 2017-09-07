$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/AugustRelease2017/test.feature");
formatter.feature({
  "line": 1,
  "name": "August Release",
  "description": "",
  "id": "august-release",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "August",
  "description": "",
  "id": "august-release;august",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select a \u003ctariff\u003e which has free insurance",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify that the insurance is in a sorted order",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "deselect if any insurance is autoselected",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "august-release;august;",
  "rows": [
    {
      "cells": [
        "handset",
        "tariff"
      ],
      "line": 14,
      "id": "august-release;august;;1"
    },
    {
      "cells": [
        "Apple iPhone 7",
        "19.99upfront49.00amonth"
      ],
      "line": 15,
      "id": "august-release;august;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82142710125,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "August",
  "description": "",
  "id": "august-release;august;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I choose PayM Apple iPhone 7",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select a 19.99upfront49.00amonth which has free insurance",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify that the insurance is in a sorted order",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "deselect if any insurance is autoselected",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 337951433,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 52745520479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone 7",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 2919397118,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 37863741036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.99upfront49.00amonth",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_Tariff_Free_Insurance(String)"
});
formatter.result({
  "duration": 3746560225,
  "error_message": "junit.framework.AssertionFailedError: Unable to select a tariff\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.select_Tariff_Free_Insurance(E2EOrderPlaced_Steps.java:4327)\r\n\tat ✽.And select a 19.99upfront49.00amonth which has free insurance(Features/AugustRelease2017/test.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_Price_Sorted_For_Insurance()"
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
formatter.after({
  "duration": 3101063704,
  "status": "passed"
});
});