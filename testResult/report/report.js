$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JulyRelease2017/C1924/C1924_E11409_TC12_CFU_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_tablet.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC12_CFU_Displaying_label_in_place_of_only_one_variant_on_device_details_page_of_tablet",
  "description": "",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFU Displaying label in place of only one variant on device details page of tablet",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose upgrade PayM handset \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "check if the selected device has only 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#Close the browser"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;",
  "rows": [
    {
      "cells": [
        "handset",
        "username",
        "password"
      ],
      "line": 15,
      "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;;1"
    },
    {
      "cells": [
        "Samsung Galaxy J3 2016 Like New",
        "ing_apr5953",
        "test123"
      ],
      "line": 16,
      "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 85446881338,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "CFU Displaying label in place of only one variant on device details page of tablet",
  "id": "c1924-e11409-tc12-cfu-displaying-label-in-place-of-only-one-variant-on-device-details-page-of-tablet;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@JulyRelease"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid ing_apr5953 and test123 credentials",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Navigate to upgrade phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose upgrade PayM handset Samsung Galaxy J3 2016 Like New",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "check if the selected device has only 1 variant for both colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on View all Tariffs",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 27931246710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ing_apr5953",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 19813604711,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_upgrade_phone()"
});
formatter.result({
  "duration": 25135794426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy J3 2016 Like New",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_upgradePAYM_Handset(String)"
});
formatter.result({
  "duration": 87259798781,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_device_has_only_1_variant_for_both_colour_and_capacity()"
});
formatter.result({
  "duration": 77596145428,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonViewAllTariffsDeviceDetailspage()"
});
formatter.result({
  "duration": 20773250219,
  "status": "passed"
});
formatter.after({
  "duration": 1999702727,
  "status": "passed"
});
});