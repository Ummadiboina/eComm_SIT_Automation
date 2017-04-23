$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CS_PayMPhonesHomeDeliveryWithoutAccessory.feature");
formatter.feature({
  "line": 1,
  "name": "AFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "afa-paym-phones-home-delivery-e2e-journey",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 5,
  "name": "AFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "afa-paym-phones-home-delivery-e2e-journey;afa-paym-phones-home-delivery-e2e-journey",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionAFA"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an AFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.examples({
  "comments": [
    {
      "line": 9,
      "value": "#Close the browser"
    }
  ],
  "line": 10,
  "name": "",
  "description": "",
  "id": "afa-paym-phones-home-delivery-e2e-journey;afa-paym-phones-home-delivery-e2e-journey;",
  "rows": [
    {
      "cells": [
        "handset",
        "Firstname",
        "Surname",
        "Username"
      ],
      "line": 11,
      "id": "afa-paym-phones-home-delivery-e2e-journey;afa-paym-phones-home-delivery-e2e-journey;;1"
    },
    {
      "cells": [
        "GalaxyS7",
        "TEST",
        "ACCEPTA",
        "TEST ACCEPTA"
      ],
      "line": 12,
      "id": "afa-paym-phones-home-delivery-e2e-journey;afa-paym-phones-home-delivery-e2e-journey;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 58561324008,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "AFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "afa-paym-phones-home-delivery-e2e-journey;afa-paym-phones-home-delivery-e2e-journey;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionAFA"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an AFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_AFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 102536034853,
  "status": "passed"
});
formatter.after({
  "duration": 2000249079,
  "status": "passed"
});
});