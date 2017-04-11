$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CS_AccessoriesOnly.feature");
formatter.feature({
  "line": 1,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "accessories-only-e2e-journey",
  "keyword": "Feature"
});
formatter.before({
  "duration": 80345613257,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Accessories only E2E journey",
  "description": "",
  "id": "accessories-only-e2e-journey;accessories-only-e2e-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest_CS_AccessoryOnly"
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
  "name": "select an Accessory",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add Accessories to basket within limit in details page and navigate to basket",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Land on the Accessory basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "input all the fields on the Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I land on the Non Credit check payment page and input all the details and click \u0027Continue on next step\u0027",
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
  "duration": 3350448290,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Accessories()"
});
formatter.result({
  "duration": 69670947904,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.select_an_Accessory()"
});
formatter.result({
  "duration": 2411445395,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.add_Accessories_to_basket_within_limit_in_details_page_and_navigate_to_basket()"
});
formatter.result({
  "duration": 69222806994,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_Accessory_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 16532982119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "go to checkout",
      "offset": 10
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_button(String)"
});
formatter.result({
  "duration": 10800252612,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button()"
});
formatter.result({
  "duration": 55761131070,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_land_on_the_Non_Credit_check_payment_page_and_input_all_the_details_and_click_Continue_on_next_step()"
});
formatter.result({
  "duration": 80244563020,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_Review_page_and_review_the_order()"
});
formatter.result({
  "duration": 16588708180,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"terms\"}\n  (Session info: chrome\u003d57.0.2987.133)\n  (Driver info: chromedriver\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15.59 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LASST266393\u0027, ip: \u002710.172.54.170\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b), userDataDir\u003dC:\\Users\\vMalalu1\\AppData\\Local\\Temp\\scoped_dir12496_22222}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.133, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 47dd1a9c01608e5316aeecfb044fbaed\n*** Element info: {Using\u003did, value\u003dterms}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat actionsPerformed.ReviewPageActions.TermsCheckBox(ReviewPageActions.java:28)\r\n\tat steps.E2EOrderPlaced_Steps.continue_to_Review_page_and_review_the_order(E2EOrderPlaced_Steps.java:184)\r\n\tat ✽.And Continue to Review page and review the order(CS_AccessoriesOnly.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://checkout.ref.o2.co.uk/payment/?retry\u003dtrue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3832597327,
  "status": "passed"
});
});