$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C1786_E-11349-11350-11352-11358_Existing_Custo_Layout_New_Basecomm_Page_header_carousel_Sub_navigation_Sub_Banner_footer_banner.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11349-11350-11352-11358_Existing_Custo_Layout_New_Basecomm_Page_header_carousel_Sub_navigation_Sub_Banner_footer_banner",
  "description": "",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page",
  "description": "\r\n1.The Header carousel should be displayed on the top of the page\r\n2.Static sub-navigation should be displayed on the top of the page above the header carousel\r\n3.Banner description for Sub-banner should be displayed below the header carousel \r\n4.Footer banner should be displayed below the tariff tiles",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@helloTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the contents of the basecomm landing page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 18,
      "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 57238360748,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page",
  "description": "\r\n1.The Header carousel should be displayed on the top of the page\r\n2.Static sub-navigation should be displayed on the top of the page above the header carousel\r\n3.Banner description for Sub-banner should be displayed below the header carousel \r\n4.Footer banner should be displayed below the tariff tiles",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@helloTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the contents of the basecomm landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 26401403356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17524106631,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12701003732,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_the_contents_of_the_basecomm_landing_page()"
});
formatter.result({
  "duration": 19147534695,
  "status": "passed"
});
formatter.after({
  "duration": 2000102278,
  "status": "passed"
});
formatter.uri("C1786_E-11353-11360-11361-11528_TC1_Existing_Custo_Basecomm_Ipads_Tab_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11353-11360-11361-11528_TC1_Existing_Custo_Basecomm_Ipads_Tab_Verification",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 11,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 15,
      "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25868636783,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "id": "c1786-e-11353-11360-11361-11528-tc1-existing-custo-basecomm-ipads-tab-verification;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 11,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 26180810177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17459003473,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12793342710,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24545503094,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 162994833,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 368557509,
  "status": "passed"
});
formatter.after({
  "duration": 1999969919,
  "status": "passed"
});
formatter.uri("C1786_E-11353-11360-11361-11528_TC2_Existing_Custo_Basecomms_Other_Tablets_Tab_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11353-11360-11361-11528_TC2_Existing_Custo_Basecomms_Other_Tablets_Tab_Verification",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 17,
      "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26094186337,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 27068535638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17600839664,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 14306858872,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 29576683840,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 30393672,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 2074860899,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 29304824299,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 28394488,
  "status": "passed"
});
formatter.after({
  "duration": 1999333252,
  "status": "passed"
});
formatter.uri("C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027iPads\u0027 tab, \nthen the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message"
      ],
      "line": 16,
      "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad mini 4",
        "Silver",
        "32GB",
        "In Stock"
      ],
      "line": 17,
      "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25935670468,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027iPads\u0027 tab, \nthen the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc3-existing-custo-ipads-tab-recommended-tariff-in-tariffs-and-extras-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected Apple iPad mini 4 and its specific details are present in the device list Silver,32GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 26930451499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17176662464,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12910359159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 16
    },
    {
      "val": "Silver",
      "offset": 90
    },
    {
      "val": "32GB",
      "offset": 97
    },
    {
      "val": "In Stock",
      "offset": 102
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 720095950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 23878039208,
  "error_message": "junit.framework.AssertionFailedError: Unable to select device and verify tariff and extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3380)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed(C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3666017141,
  "status": "passed"
});
formatter.uri("C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027Other tablets\u0027 tab,",
  "description": "then the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message"
      ],
      "line": 16,
      "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab A 2016 10.1",
        "Black",
        "16GB",
        "In Stock"
      ],
      "line": 17,
      "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24558896808,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027Other tablets\u0027 tab,",
  "description": "then the customer should be able to see the configured recommended tariff(on the header of the tariff tile) in \u0027Tariff and Extras\u0027 Page",
  "id": "c1786-e-11354-11447-11565-tc4-existing-custo-other-tablets-recommended-tariff-in-tariffs-and-extras-page;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Click on \"Buy Now\" button for Samsung Galaxy Tab A 2016 10.1 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify recommended tariff is getting displayed on the header of the tariff tile in the \"Tariffs and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 25346957554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 18820361941,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12870542183,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24593925867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 16
    },
    {
      "val": "Black",
      "offset": 103
    },
    {
      "val": "16GB",
      "offset": 109
    },
    {
      "val": "In Stock",
      "offset": 114
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 2767527093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 40102848048,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "duration": 327948503,
  "status": "passed"
});
formatter.after({
  "duration": 1999511263,
  "status": "passed"
});
formatter.uri("C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following \n\nIn basecomm device tile:\n  1.Device image\n  2.Rating\n  3.Colour dropdown\n  4.Capacity dropdown\n  5.Promotional ribbons(Blue ribbons if configured for the tariff)\n  6.Pricing\n  7.\"\"Buy now\"\" button\n  8.See device details\"\" link\n  9.Stock message\n  \n  In Tariff and extras Page:\n  1.\"Back to iPad offers\" link \n  2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 27,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity"
      ],
      "line": 36,
      "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Silver",
        "256GB"
      ],
      "line": 37,
      "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26115938116,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following \n\nIn basecomm device tile:\n  1.Device image\n  2.Rating\n  3.Colour dropdown\n  4.Capacity dropdown\n  5.Promotional ribbons(Blue ribbons if configured for the tariff)\n  6.Pricing\n  7.\"\"Buy now\"\" button\n  8.See device details\"\" link\n  9.Stock message\n  \n  In Tariff and extras Page:\n  1.\"Back to iPad offers\" link \n  2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 27,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify expected Apple iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Out of stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select Silver, 256GB of the device Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"See device details\" link for Apple iPad Pro 9.7 inch and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"Buy Now\" button for Apple iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 33610710654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17770223460,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13589721176,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24586163416,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 111459860,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 1117868642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 16
    },
    {
      "val": "Space Grey",
      "offset": 96
    },
    {
      "val": "32GB",
      "offset": 107
    },
    {
      "val": "Out of stock",
      "offset": 112
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 2537001700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    },
    {
      "val": "256GB",
      "offset": 15
    },
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 4641960056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.Click_on_See_device_details_link_and_verify_correct_details_are_displayed(String)"
});
formatter.result({
  "duration": 10302016808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 43397098866,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "duration": 20055804780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 102
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(String)"
});
formatter.result({
  "duration": 28288496044,
  "status": "passed"
});
formatter.after({
  "duration": 2007714320,
  "status": "passed"
});
formatter.uri("C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects Other Tablets tab,then the customer should be able to see the following",
  "description": "\r\nIn basecomm device tile:\r\n1.Device image\r\n2.Rating\r\n3.Colour dropdown\r\n4.Capacity dropdown\r\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\r\n6.Pricing\r\n7.\"Buy now\" button\r\n8.\"See device details\" link\r\n9.Stock message\r\n\r\nIn Tariff and extras Page:\r\n1.\"Back to tablet offers\" link \r\n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 26,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 29,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity"
      ],
      "line": 36,
      "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab A 2016 10.1",
        "Black",
        "16GB",
        "In Stock",
        "Black",
        "16GB"
      ],
      "line": 37,
      "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26948604465,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects Other Tablets tab,then the customer should be able to see the following",
  "description": "\r\nIn basecomm device tile:\r\n1.Device image\r\n2.Rating\r\n3.Colour dropdown\r\n4.Capacity dropdown\r\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\r\n6.Pricing\r\n7.\"Buy now\" button\r\n8.\"See device details\" link\r\n9.Stock message\r\n\r\nIn Tariff and extras Page:\r\n1.\"Back to tablet offers\" link \r\n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-other-tablets-tab,then-the-customer-should-be-able-to-see-the-following;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 26,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 29,
  "name": "Select Black, 16GB of the device Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"See device details\" link for Samsung Galaxy Tab A 2016 10.1 and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"Buy Now\" button for Samsung Galaxy Tab A 2016 10.1 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 26683342334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17971169506,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12528507028,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24500522003,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 50751083,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 2245974561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 16
    },
    {
      "val": "Black",
      "offset": 103
    },
    {
      "val": "16GB",
      "offset": 109
    },
    {
      "val": "In Stock",
      "offset": 114
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 2307467581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 7
    },
    {
      "val": "16GB",
      "offset": 14
    },
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 5070536945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.Click_on_See_device_details_link_and_verify_correct_details_are_displayed(String)"
});
formatter.result({
  "duration": 11458369638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 37842258110,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "duration": 20122280718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 102
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(String)"
});
formatter.result({
  "duration": 5743166714,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify all the details and links are displayed and working as expected in the Tariffs and Extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(E2EOrderPlaced_Steps.java:3803)\r\n\tat ✽.And Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Samsung Galaxy Tab A 2016 10.1(C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3197587886,
  "status": "passed"
});
formatter.uri("C1786_E-11355-11357-11356-11359_TC3_Existing_Custo_Basecomm_iPad_Device_Update_Colour_Capacity_Verify_New_Price.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC3_Existing_Custo_Basecomm_iPad_Device_Update_Colour_Capacity_Verify_New_Price",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "\nThis scenario ensures that when the existing customer on new basecomm page selects \"iPads\" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated",
  "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 13,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 15,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the price gets updated based on \u003coldcapacity\u003e, \u003cnewcapacity\u003e for \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity",
        "oldcapacity",
        "newcapacity"
      ],
      "line": 20,
      "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Rose Gold",
        "32GB",
        "128GB",
        "256GB"
      ],
      "line": 21,
      "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26468311407,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "\nThis scenario ensures that when the existing customer on new basecomm page selects \"iPads\" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated",
  "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 13,
  "name": "Verify expected Apple iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Out of stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 15,
  "name": "Select Rose Gold, 32GB of the device Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the price gets updated based on 128GB, 256GB for Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on \"Buy Now\" button for Apple iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 25553270145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17191430373,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12240923694,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24356323881,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 47487060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 16
    },
    {
      "val": "Space Grey",
      "offset": 96
    },
    {
      "val": "32GB",
      "offset": 107
    },
    {
      "val": "Out of stock",
      "offset": 112
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 2410686163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Gold",
      "offset": 7
    },
    {
      "val": "32GB",
      "offset": 18
    },
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 37
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 4220695457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128GB",
      "offset": 39
    },
    {
      "val": "256GB",
      "offset": 46
    },
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(String,String,String)"
});
formatter.result({
  "duration": 18903050055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad Pro 9.7 inch",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 39800269955,
  "status": "passed"
});
formatter.after({
  "duration": 1999502770,
  "status": "passed"
});
formatter.uri("C1786_E-11355-11357-11356-11359_TC4_Existing_Custo_Basecomm_Other_tablets_Device_Update_Colour_Capacity_Verify_New_Price.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC4_Existing_Custo_Basecomm_Other_tablets_Device_Update_Colour_Capacity_Verify_New_Price",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer on new basecomm page selects \"Other Tablets\" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 11,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 13,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the price gets updated based on \u003coldcapacity\u003e, \u003cnewcapacity\u003e for \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity",
        "oldcapacity",
        "newcapacity"
      ],
      "line": 18,
      "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab A 2016 10.1",
        "Black",
        "16GB",
        "In Stock",
        "Black",
        "16GB",
        "16GB",
        "16GB"
      ],
      "line": 19,
      "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26526601984,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "This scenario ensures that when the existing customer on new basecomm page selects \"Other Tablets\" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 11,
  "name": "Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 13,
  "name": "Select Black, 16GB of the device Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the price gets updated based on 16GB, 16GB for Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Buy Now\" button for Samsung Galaxy Tab A 2016 10.1 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 27362799196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17374940103,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13985088762,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24563144320,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 201367895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 16
    },
    {
      "val": "Black",
      "offset": 103
    },
    {
      "val": "16GB",
      "offset": 109
    },
    {
      "val": "In Stock",
      "offset": 114
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 2747611349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 7
    },
    {
      "val": "16GB",
      "offset": 14
    },
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 33
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 4916647615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16GB",
      "offset": 39
    },
    {
      "val": "16GB",
      "offset": 45
    },
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 54
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(String,String,String)"
});
formatter.result({
  "duration": 19989741490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 39068366119,
  "status": "passed"
});
formatter.after({
  "duration": 1999966025,
  "status": "passed"
});
formatter.uri("C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"iPad\" tab,then the customer should be able to see the following \n\r\n1.Delayed delivery status on device tile\r\n  2.Clicking \"Back to iPad offers\" link should take the customer to basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I am existing user and I click on Signin button"
    },
    {
      "line": 10,
      "value": "#And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    }
  ],
  "line": 11,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 15,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 18,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity"
      ],
      "line": 22,
      "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad mini 4",
        "Space Grey",
        "128GB",
        "Home delivery",
        "Space Grey",
        "128GB"
      ],
      "line": 23,
      "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24545184938,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"iPad\" tab,then the customer should be able to see the following \n\r\n1.Delayed delivery status on device tile\r\n  2.Clicking \"Back to iPad offers\" link should take the customer to basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given I am existing user and I click on Signin button"
    },
    {
      "line": 10,
      "value": "#And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    }
  ],
  "line": 11,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 15,
  "name": "Select Space Grey, 128GB of the device Apple iPad mini 4",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify expected Apple iPad mini 4 and its specific details are present in the device list Space Grey,128GB,Home delivery",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 18,
  "name": "Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 11963245323,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24519759319,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 39161553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Space Grey",
      "offset": 7
    },
    {
      "val": "128GB",
      "offset": 19
    },
    {
      "val": "Apple iPad mini 4",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 1387948772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 16
    },
    {
      "val": "Space Grey",
      "offset": 90
    },
    {
      "val": "128GB",
      "offset": 101
    },
    {
      "val": "Home delivery",
      "offset": 107
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 480838418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 23527011092,
  "error_message": "junit.framework.AssertionFailedError: Unable to select device and verify tariff and extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3380)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed(C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_Back_to_iPad_offers_link_and_check_navigation_Basecomm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3570311864,
  "status": "passed"
});
formatter.uri("C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"Other tablets\" tab,then the customer should be able to see the following",
  "description": "\n1.Pre Order delivery status on device tile\n2.Clicking \"Back to tablet offers\" link should take the customer back to the basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"other-tablets\"-tab,then-the-customer-should-be-able-to-see-the-following",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 14,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 16,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \"Back to tablet offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"other-tablets\"-tab,then-the-customer-should-be-able-to-see-the-following;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color"
      ],
      "line": 20,
      "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"other-tablets\"-tab,then-the-customer-should-be-able-to-see-the-following;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab A 2016 10.1",
        "Black",
        "16GB",
        "Pre Order",
        "Black"
      ],
      "line": 21,
      "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"other-tablets\"-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25675030984,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"Other tablets\" tab,then the customer should be able to see the following",
  "description": "\n1.Pre Order delivery status on device tile\n2.Clicking \"Back to tablet offers\" link should take the customer back to the basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"other-tablets\"-tab,then-the-customer-should-be-able-to-see-the-following;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 14,
  "name": "Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,Pre Order",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 16,
  "name": "Click on \"Buy Now\" button for Samsung Galaxy Tab A 2016 10.1 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \"Back to tablet offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 25971466075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17746851879,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12632708393,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24359843066,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 36055370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 16
    },
    {
      "val": "Black",
      "offset": 103
    },
    {
      "val": "16GB",
      "offset": 109
    },
    {
      "val": "Pre Order",
      "offset": 114
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 1848254953,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:746)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3562)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,Pre Order(C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_Back_to_tablet_offers_link_and_check_navigation_Basecomm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3213210110,
  "status": "passed"
});
formatter.uri("C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation",
  "description": "",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page selects \"iPads\" tab and Change the Variant of the device, \nthen the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Verify that promotion ribbon is displayed for \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Basecomms page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Tariffs and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 26,
      "value": "#Modify the above step to include pdf download"
    },
    {
      "line": 27,
      "value": "#make sure that device is ipad air 2 else validation fails for promotion"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity",
        "user"
      ],
      "line": 29,
      "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad mini 4",
        "Silver",
        "32GB",
        "In Stock",
        "Space Grey",
        "128GB",
        "TEST ACCEPTA"
      ],
      "line": 30,
      "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25113565213,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page selects \"iPads\" tab and Change the Variant of the device, \nthen the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify expected Apple iPad mini 4 and its specific details are present in the device list Silver,32GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Verify that promotion ribbon is displayed for Apple iPad mini 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Space Grey, 128GB of the device Apple iPad mini 4",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify new image is as per the selected Apple iPad mini 4,128GBand Space Grey in the Basecomms page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify new image is as per the selected Apple iPad mini 4,128GBand Space Grey in the Tariffs and Extras Page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 26466163940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 20342355079,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12017299712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 16
    },
    {
      "val": "Silver",
      "offset": 90
    },
    {
      "val": "32GB",
      "offset": 97
    },
    {
      "val": "In Stock",
      "offset": 102
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 1011861679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay(String)"
});
formatter.result({
  "duration": 498511141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Space Grey",
      "offset": 7
    },
    {
      "val": "128GB",
      "offset": 19
    },
    {
      "val": "Apple iPad mini 4",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 481950727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 40
    },
    {
      "val": "128GB",
      "offset": 58
    },
    {
      "val": "Space Grey",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(String,String,String)"
});
formatter.result({
  "duration": 814795442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 23377200110,
  "error_message": "junit.framework.AssertionFailedError: Unable to select device and verify tariff and extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3380)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed(C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPad mini 4",
      "offset": 40
    },
    {
      "val": "128GB",
      "offset": 58
    },
    {
      "val": "Space Grey",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "go to checkout",
      "offset": 10
    }
  ],
  "location": "E2EOrderPlaced_Steps.CheckoutFromBasket(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_Upgrade(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3069012342,
  "status": "passed"
});
formatter.uri("C1786_E-11510-11505_TC2_Other_Tablets_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11510-11505_TC2_Other_Tablets_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation",
  "description": "",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Other Tablets\" tab and Change the Variant of the device, \nthen the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 13,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify that promotion ribbon is displayed for \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Basecomms page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Tariffs and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "#Modify the above step to include pdf download"
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "color",
        "capacity",
        "user"
      ],
      "line": 29,
      "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Alcatel Plus 10",
        "Silver",
        "32GB",
        "In Stock",
        "Silver",
        "32GB",
        "TEST ACCEPTA"
      ],
      "line": 30,
      "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25475242192,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Other Tablets\" tab and Change the Variant of the device, \nthen the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify expected Alcatel Plus 10 and its specific details are present in the device list Silver,32GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 13,
  "name": "Select Silver, 32GB of the device Alcatel Plus 10",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify that promotion ribbon is displayed for Alcatel Plus 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify new image is as per the selected Alcatel Plus 10,32GBand Silver in the Basecomms page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on \"Buy Now\" button for Alcatel Plus 10 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify new image is as per the selected Alcatel Plus 10,32GBand Silver in the Tariffs and Extras Page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 28406377426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
formatter.result({
  "duration": 17110730826,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 15074425602,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24455525340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alcatel Plus 10",
      "offset": 16
    },
    {
      "val": "Silver",
      "offset": 88
    },
    {
      "val": "32GB",
      "offset": 95
    },
    {
      "val": "In Stock",
      "offset": 100
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 3209132824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    },
    {
      "val": "32GB",
      "offset": 15
    },
    {
      "val": "Alcatel Plus 10",
      "offset": 34
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 5953078827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alcatel Plus 10",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay(String)"
});
formatter.result({
  "duration": 2472815497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alcatel Plus 10",
      "offset": 40
    },
    {
      "val": "32GB",
      "offset": 56
    },
    {
      "val": "Silver",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(String,String,String)"
});
formatter.result({
  "duration": 1903563918,
  "error_message": "java.lang.AssertionError: New image is not as per selected color and capacity\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkImgSrcBasecommPage(BaseCommPageActions.java:963)\r\n\tat steps.E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(E2EOrderPlaced_Steps.java:3447)\r\n\tat ✽.And Verify new image is as per the selected Alcatel Plus 10,32GBand Silver in the Basecomms page(C1786_E-11510-11505_TC2_Other_Tablets_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alcatel Plus 10",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alcatel Plus 10",
      "offset": 40
    },
    {
      "val": "32GB",
      "offset": 56
    },
    {
      "val": "Silver",
      "offset": 64
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "go to checkout",
      "offset": 10
    }
  ],
  "location": "E2EOrderPlaced_Steps.CheckoutFromBasket(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST ACCEPTA",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.CreditCheckPaymentPage_Upgrade(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.AgreementsPageConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ReviewPageConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.OrderConfirmationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2775631058,
  "status": "passed"
});
formatter.uri("C1786_E-11510-11505_TC3_iPads_Tab_Basecomm_tariff_basket_page_change_tariff_link.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11510-11505_TC3_iPads_Tab_Basecomm_tariff_basket_page_change_tariff_link.feature",
  "description": "",
  "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer selects basecomms \"iPad\" tariff lands on basket page and clicks on \"Change tariff\" ,",
  "description": "then the customer should be redirected to tariffs and extras page with basecomms tariffs",
  "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 11,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify \"Choose a different tariff\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message"
      ],
      "line": 18,
      "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad mini 4",
        "Silver",
        "32GB",
        "In Stock"
      ],
      "line": 19,
      "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26029778946,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "This scenario ensures that when the existing customer selects basecomms \"iPad\" tariff lands on basket page and clicks on \"Change tariff\" ,",
  "description": "then the customer should be redirected to tariffs and extras page with basecomms tariffs",
  "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify expected Apple iPad mini 4 and its specific details are present in the device list Silver,32GB,In Stock",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 11,
  "name": "Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Land on the basket page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify \"Choose a different tariff\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 23636347904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07770001111@o2.co.uk",
      "offset": 19
    },
    {
      "val": "test123",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.signin_using_valid_ink_jun_and_test_credentials(String,String)"
});
