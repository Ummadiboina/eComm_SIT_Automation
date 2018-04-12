$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sekark1/MyAccount/regression/Features/updateNameandCostcentre.feature");
formatter.feature({
  "line": 1,
  "name": "UpdatenameAndCost",
  "description": "This scenario is to update name and cost center of the customer",
  "id": "updatenameandcost",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "SMB - Update Names and Cost centres",
  "description": "",
  "id": "updatenameandcost;smb---update-names-and-cost-centres",
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
  "name": "that user is able to launch the O2ID login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is able login into the O2ID successfully using \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is able to navigate My Account successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is able to click on Update names and cost centre link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user update the username \"\u003cnewusrNme\u003e\" of any of one of the subscriptions and naviagte to Request Review page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is able to submit the request successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user gets the request number and launches salesforce",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user logins into salesforce using \"\u003cSFusername\u003e\" and \"\u003cSFpassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "updatenameandcost;smb---update-names-and-cost-centres;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "newusrNme",
        "SFusername",
        "SFpassword"
      ],
      "line": 16,
      "id": "updatenameandcost;smb---update-names-and-cost-centres;;1"
    },
    {
      "cells": [
        "testmyaccountone@yopmail.com",
        "Test_123",
        "Test14",
        "sundaram.subramanian@o2.com.csupreprod",
        "Mar@2018"
      ],
      "line": 17,
      "id": "updatenameandcost;smb---update-names-and-cost-centres;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32863065203,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "SMB - Update Names and Cost centres",
  "description": "",
  "id": "updatenameandcost;smb---update-names-and-cost-centres;;2",
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
  "name": "that user is able to launch the O2ID login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is able login into the O2ID successfully using testmyaccountone@yopmail.com and Test_123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is able to navigate My Account successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is able to click on Update names and cost centre link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user update the username \"Test14\" of any of one of the subscriptions and naviagte to Request Review page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is able to submit the request successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user gets the request number and launches salesforce",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user logins into salesforce using \"sundaram.subramanian@o2.com.csupreprod\" and \"Mar@2018\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.that_user_is_able_to_launch_the_O_ID_login_page(int)"
});
formatter.result({
  "duration": 128328042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testmyaccountone@yopmail.com",
      "offset": 52
    },
    {
      "val": "Test_123",
      "offset": 85
    }
  ],
  "location": "E2EOrderPlaced_Steps.user_is_able_login_into_the_O_ID_successfully_using_and(String,String)"
});
formatter.result({
  "duration": 7621717254,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_is_able_to_navigate_My_Account_successfully()"
});
formatter.result({
  "duration": 47733951643,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_is_able_to_click_on_Update_names_and_cost_centre_link()"
});
formatter.result({
  "duration": 10558113951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test14",
      "offset": 26
    }
  ],
  "location": "E2EOrderPlaced_Steps.user_update_the_username_of_any_of_one_of_the_subscriptions_and_naviagte_to_Request_Review_page(String)"
});
formatter.result({
  "duration": 12446895209,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_is_able_to_submit_the_request_successfully()"
});
formatter.result({
  "duration": 18601696009,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_gets_the_request_number_and_launches_salesforce()"
});
formatter.result({
  "duration": 13704935227,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 17004114300,
  "status": "passed"
});
});