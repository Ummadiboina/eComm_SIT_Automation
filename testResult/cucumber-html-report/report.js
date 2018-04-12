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
formatter.step({
  "line": 13,
  "name": "user closes the case",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
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
      "line": 17,
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
      "line": 18,
      "id": "updatenameandcost;smb---update-names-and-cost-centres;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35546036162,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
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
formatter.step({
  "line": 13,
  "name": "user closes the case",
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
  "duration": 107909281,
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
  "duration": 10496144673,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_is_able_to_navigate_My_Account_successfully()"
});
formatter.result({
  "duration": 48724977875,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"popup-shop-down-button\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LASST244023\u0027, ip: \u002710.172.49.172\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\sekark1\\AppData\\Local\\Temp\\scoped_dir6300_8775}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d65.0.3325.181, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3e0e8cd8fd1ef41a071a3d46888e3e54\n*** Element info: {Using\u003did, value\u003dpopup-shop-down-button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat actionsPerformed.viewandmanageacnt_pageactions.myacntlink(viewandmanageacnt_pageactions.java:23)\r\n\tat steps.E2EOrderPlaced_Steps.user_is_able_to_navigate_My_Account_successfully(E2EOrderPlaced_Steps.java:65)\r\n\tat ✽.Then user is able to navigate My Account successfully(C:/Users/sekark1/MyAccount/regression/Features/updateNameandCostcentre.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_is_able_to_click_on_Update_names_and_cost_centre_link()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_is_able_to_submit_the_request_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_gets_the_request_number_and_launches_salesforce()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sundaram.subramanian@o2.com.csupreprod",
      "offset": 35
    },
    {
      "val": "Mar@2018",
      "offset": 80
    }
  ],
  "location": "E2EOrderPlaced_Steps.user_logins_into_salesforce_using_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.user_closes_the_case()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14225864833,
  "error_message": "java.lang.RuntimeException: Unexpected result for screenshot command: null\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:337)\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:94)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
});