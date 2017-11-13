$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Functional/CFD_2044/CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour.feature");
formatter.feature({
  "line": 1,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour",
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
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose PayM \u003chandset\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And select a color"
    }
  ],
  "line": 12,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the color dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify the name of the colour is next to the colour tile in CFAPhoneColour",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select \u003ccolor\u003e color of the connected device",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "input the below details in Delivery page",
  "rows": [
    {
      "cells": [
        "HouseNumber",
        "5"
      ],
      "line": 20
    },
    {
      "cells": [
        "Post Code",
        "BS7 0NP"
      ],
      "line": 21
    },
    {
      "cells": [
        "Title",
        "Mr"
      ],
      "line": 22
    },
    {
      "cells": [
        "FirstName",
        "Test"
      ],
      "line": 23
    },
    {
      "cells": [
        "Surname",
        "Accepta"
      ],
      "line": 24
    },
    {
      "cells": [
        "Contact Number",
        "07123456789"
      ],
      "line": 25
    },
    {
      "cells": [
        "Password",
        "TesterSit123"
      ],
      "line": 26
    },
    {
      "cells": [
        "Security Question",
        "Random"
      ],
      "line": 27
    },
    {
      "cells": [
        "Security Answer",
        "Sit Testers"
      ],
      "line": 28
    },
    {
      "cells": [
        "Date of Birth - Date",
        "22"
      ],
      "line": 29
    },
    {
      "cells": [
        "Date of Birth - Month",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "Date of Birth - Year",
        "1990"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# And Click on the \u0027Continue button\u0027"
    }
  ],
  "line": 33,
  "name": "land on the payment page and input \u003cUsername\u003e and other details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 38,
      "value": "#Close the browser"
    }
  ],
  "line": 39,
  "name": "",
  "description": "",
  "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;",
  "rows": [
    {
      "cells": [
        "handset",
        "Username",
        "color",
        "CFATariffColour"
      ],
      "line": 40,
      "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;1"
    },
    {
      "cells": [
        "Apple8",
        "TEST ACCEPTA",
        "Gold",
        "Gold"
      ],
      "line": 41,
      "id": "cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;cfa-phones-colourdropdownswithcolournamesbesidethecolourmultiplecolour;;2"
    }
  ],
  "keyword": "Examples"
});
