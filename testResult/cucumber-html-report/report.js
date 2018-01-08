$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JanuaryRelease2018/CFD2235/CFU_TabletsSimo12months.feature");
formatter.feature({
  "line": 1,
  "name": "CFU_TabletsSimo12months",
  "description": "This scenario ensures that an upgrade customer is able to select a 12 months tablets tariff under the simo tab in upgrade options page",
  "id": "cfu-tabletssimo12months",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFU_TabletsSimo12months",
  "description": "",
  "id": "cfu-tabletssimo12months;cfu-tabletssimo12months",
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
  "name": "I click on \u0027Sim only Tariff\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on the \u0027Tablets\u0027 button",
  "keyword": "And "
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
  "name": "if \u003cGiftBlock\u003e is configured then display the banner",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify that \u0027Why choose an O2 Pay Monthly sim\u0027 is not displayed in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the data filters is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on respective \u003cfilterSort\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see appropriate tariffs based on the selected data filter \u003cTariffsortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the \u0027sorting dropdown\u0027 is displayed just below the toggle buttons sections",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that the upfront sort options is not present in the \u0027sorting dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "If I select ANY sort option \u003csortoption\u003e from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see tariffs relevant to selected sort option \u003csortoption\u003e \u0026 filter option \u003cfiltername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see tariffs based on the selected sort option \u003csortoption\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on different \u003cContract\u003e  Months Tariff in Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "copy text SIM delivery required or not is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "Examples:",
  "id": "cfu-tabletssimo12months;cfu-tabletssimo12months;",
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
      "id": "cfu-tabletssimo12months;cfu-tabletssimo12months;;1"
    },
    {
      "cells": [
        "12 Months",
        "Configured",
        "testaccepta6128",
        "test12",
        "high",
        "Monthly data (Low to High)",
        "hjkdkd"
      ],
      "line": 34,
      "id": "cfu-tabletssimo12months;cfu-tabletssimo12months;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1139361189,
  "error_message": "java.lang.NoClassDefFoundError: org/openqa/selenium/internal/Killable\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:763)\r\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\r\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:467)\r\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:73)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:368)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:362)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:361)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:105)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:78)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.\u003cinit\u003e(FirefoxProfile.java:67)\r\n\tat helpers.BrowserHelper.Invoke_browser(BrowserHelper.java:66)\r\n\tat steps.Hooks.openBrowser(Hooks.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\r\nCaused by: java.lang.ClassNotFoundException: org.openqa.selenium.internal.Killable\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\t... 58 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "CFU_TabletsSimo12months",
  "description": "Examples:",
  "id": "cfu-tabletssimo12months;cfu-tabletssimo12months;;2",
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
  "name": "Signin using valid testaccepta6128 and test12 credentials",
  "matchedColumns": [
    2,
    3
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
  "name": "I click on \u0027Sim only Tariff\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify that the url has simo at the end",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the \u0027Phones\u0027 button should be selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on the \u0027Tablets\u0027 button",
  "keyword": "And "
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
  "name": "if Configured is configured then display the banner",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify that \u0027Why choose an O2 Pay Monthly sim\u0027 is not displayed in upgrade options page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the data filters is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on respective \u003cfilterSort\u003e data filter",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Data filter button should be in \u0027selected\u0027 state",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see appropriate tariffs based on the selected data filter \u003cTariffsortoption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the \u0027sorting dropdown\u0027 is displayed just below the toggle buttons sections",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that the upfront sort options is not present in the \u0027sorting dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "If I select ANY sort option Monthly data (Low to High) from the drop-down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option high",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I deselect filter button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see tariffs based on the selected sort option Monthly data (Low to High)",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on different 12 Months  Months Tariff in Tab",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Select\u0027 CTA to buy a tariff",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "copy text SIM delivery required or not is displayed",
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
      "val": "testaccepta6128",
      "offset": 19
    },
    {
      "val": "test12",
      "offset": 39
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
  "location": "E2EOrderPlaced_Steps.click_on_the_Tablets_button()"
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
  "duration": 2428853,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.Hooks.embedScreenshot(Hooks.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner.feature(ExtendedTestNGRunner.java:69)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:127)\r\n",
  "status": "failed"
});
});