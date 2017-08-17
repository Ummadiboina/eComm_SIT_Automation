$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/JulyRelease2017/C1924/C1924_E11409_TC4_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker.feature");
formatter.feature({
  "line": 1,
  "name": "C1924_E11409_TC4_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker",
  "description": "",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose \u003cfitnesstrackername\u003e FitnessTracker",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check if the selected non connected device has more than 1 variant for colour and single variant for capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select \u003ccolor\u003e color of the non connected device",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "# And select \u003ccapacity\u003e capacity of the non connected device"
    },
    {
      "line": 14,
      "value": "#Close the browser"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;",
  "rows": [
    {
      "cells": [
        "fitnesstrackername",
        "color"
      ],
      "line": 16,
      "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;;1"
    },
    {
      "cells": [
        "Jawbone UP2",
        "Black Diamond"
      ],
      "line": 17,
      "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 90033525346,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker",
  "id": "c1924-e11409-tc4-cfa-displaying-dropdown-in-place-of-variant-swatches-on-device-details-page-of-fitness-tracker;;;2",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to Fitness Trackers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose Jawbone UP2 FitnessTracker",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check if the selected non connected device has more than 1 variant for colour and single variant for capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select Black Diamond color of the non connected device",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 310081138,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_Fitness_Trackers()"
});
formatter.result({
  "duration": 54440994973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jawbone UP2",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_fitnesstracker(String)"
});
formatter.result({
  "duration": 5303246330,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.check_if_the_selected_non_connected_device_has_more_than_1_variant_for_colour_and_single_variant_for_capacity()"
});
formatter.result({
  "duration": 16191121934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black Diamond",
      "offset": 7
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_of_the_non_connected_device(String)"
});
formatter.result({
  "duration": 5605243759,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 12264997170,
  "status": "passed"
});
formatter.after({
  "duration": 3589169415,
  "status": "passed"
});
});