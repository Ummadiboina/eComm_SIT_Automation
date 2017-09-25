$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/test2.feature");
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM \u003chandset\u003e",
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
    },
    {
      "line": 14,
      "value": "#Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e"
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
  "comments": [
    {
      "line": 23,
      "value": "##New functionality ends"
    }
  ],
  "line": 24,
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
      "line": 25,
      "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;1"
    },
    {
      "cells": [
        "IphoneSE",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA",
        "low",
        "Monthly data (Low to High)"
      ],
      "line": 26,
      "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31020379912,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement",
  "description": "",
  "id": "cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;cfa-paym-phone-data-filters-options-tariff-and-extras-page-order-placement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose PayM IphoneSE",
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
    },
    {
      "line": 14,
      "value": "#Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs \u003csortoption\u003e"
    }
  ],
  "line": 15,
  "name": "I click on respective low data filter",
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
  "name": "I should see tariffs relevant to selected sort option Monthly data (Low to High) \u0026 filter option low",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 166521063,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 61442284150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IphoneSE",
      "offset": 14
    }
  ],
  "location": "E2EOrderPlaced_Steps.Choose_PAYM_Handset(String)"
});
formatter.result({
  "duration": 922841085,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 43578552280,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3265623217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "low",
      "offset": 22
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnRespectiveDataFilter(String)"
});
formatter.result({
  "duration": 1452174823,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.data_filter_button_should_be_in_selected_state()"
});
formatter.result({
  "duration": 105392002,
  "status": "passed"
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
  "duration": 273704241,
  "status": "passed"
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
  "duration": 5328892821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly data (Low to High)",
      "offset": 54
    },
    {
      "val": "low",
      "offset": 97
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOptionAndFilter(String,String)"
});
formatter.result({
  "duration": 246129656,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_deselect_filter_button()"
});
formatter.result({
  "duration": 169961369,
  "status": "passed"
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
  "duration": 871114569,
  "error_message": "java.lang.NullPointerException\r\n\tat actionsPerformed.PAYMandPAYGTariffAndExtrasPageActions.verifyTariffSortedAsPerSortOption(PAYMandPAYGTariffAndExtrasPageActions.java:988)\r\n\tat steps.E2EOrderPlaced_Steps.verifyTariffSortedBasedOnSortOption(E2EOrderPlaced_Steps.java:5716)\r\n\tat ✽.Then I should see tariffs based on the selected sort option Monthly data (Low to High)(Features/test2.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2740258557,
  "status": "passed"
});
});