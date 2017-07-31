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
  "name": "\"This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page",
  "description": "\r\n1.The Header carousel should be displayed on the top of the page\r\n2.Static sub-navigation should be displayed on the top of the page above the header carousel\r\n3.Banner description for Sub-banner should be displayed below the header carousel \r\n4.Footer banner should be displayed below the tariff tiles",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page",
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
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 18,
      "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 78224949693,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "\"This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page",
  "description": "\r\n1.The Header carousel should be displayed on the top of the page\r\n2.Static sub-navigation should be displayed on the top of the page above the header carousel\r\n3.Banner description for Sub-banner should be displayed below the header carousel \r\n4.Footer banner should be displayed below the tariff tiles",
  "id": "c1786-e-11349-11350-11352-11358-existing-custo-layout-new-basecomm-page-header-carousel-sub-navigation-sub-banner-footer-banner;\"this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-the-following-changes-in-basecomm-page;;2",
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
  "duration": 29709622976,
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
  "duration": 25510974097,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 14268751235,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_the_contents_of_the_basecomm_landing_page()"
});
formatter.result({
  "duration": 12912473714,
  "status": "passed"
});
formatter.after({
  "duration": 17817124106,
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
  "duration": 24337739865,
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
  "duration": 28656131643,
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
  "duration": 24175070621,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 24098635927,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8380506247,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 5805122283,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 304296987,
  "status": "passed"
});
formatter.after({
  "duration": 13462992992,
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
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
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
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123"
      ],
      "line": 16,
      "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36440030520,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see \u0027iPads\u0027 tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion",
  "description": "",
  "id": "c1786-e-11353-11360-11361-11528-tc2-existing-custo-basecomms-other-tablets-tab-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page,-then-the-customer-should-be-able-to-see-\u0027ipads\u0027-tab-with-ipad-related-devices-and-1*2-banner-tile-should-be-displayed-for-ongoing-promotion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
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
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 32134527086,
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
  "duration": 24245163421,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 16507082255,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4311522925,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 7482638709,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 1037880788,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8348693789,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 2284500154,
  "status": "passed"
});
formatter.after({
  "duration": 13831559702,
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
  "duration": 46328389109,
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
  "duration": 46911549680,
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
  "duration": 26875367614,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 18821461863,
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
  "duration": 1575779625,
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
  "duration": 77335889320,
  "error_message": "junit.framework.AssertionFailedError: Unable to select device and verify tariff and extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3317)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple iPad mini 4 and verify \"Tariffs and Extras\" page is displayed(C1786_E-11354-11447-11565_TC3_Existing_Custo_Ipads_tab_Recommended_tariff_in_tariffs_and_extras_page.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13379614772,
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
  "duration": 34961759295,
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
  "duration": 39479241620,
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
  "duration": 23373639519,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 17873162107,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4344817872,
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
  "duration": 7332346069,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock(C1786_E-11354-11447-11565_TC4_Existing_Custo_Other_tablets_Recommended_tariff_in_tariffs_and_extras_page.feature:10)\r\n",
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
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17073290643,
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
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following",
  "description": "\nIn basecomm device tile:\n1.Device image\n2.Rating\n3.Colour dropdown\n4.Capacity dropdown\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\n6.Pricing\n7.\"\"Buy now\"\" button\n8.See device details\"\" link\n9.Stock message\n\nIn Tariff and extras Page:\n1.\"Back to iPad offers\" link \n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following",
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
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 26,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;",
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
      "line": 35,
      "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;;1"
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
      "line": 36,
      "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43636782847,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following",
  "description": "\nIn basecomm device tile:\n1.Device image\n2.Rating\n3.Colour dropdown\n4.Capacity dropdown\n5.Promotional ribbons(Blue ribbons if configured for the tariff)\n6.Pricing\n7.\"\"Buy now\"\" button\n8.See device details\"\" link\n9.Stock message\n\nIn Tariff and extras Page:\n1.\"Back to iPad offers\" link \n2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc1-existing-custo-basecomm-ipad-device-tile-detail-and-tariffextras-pageverification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-ipad-tab,then-the-customer-should-be-able-to-see-the-following;;2",
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
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 26,
  "name": "Verify only iPad specific devices are displayed under the iPad section",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
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
  "line": 28,
  "name": "Select Silver, 256GB of the device Apple iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \"See device details\" link for Apple iPad Pro 9.7 inch and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on \"Buy Now\" button for Apple iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
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
  "duration": 46549904907,
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
  "duration": 20131891944,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 33039224194,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8298506116,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 4825282218,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 702990529,
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
  "duration": 1261536975,
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
  "duration": 980718092,
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
  "duration": 8101296903,
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
  "duration": 56944824808,
  "error_message": "junit.framework.AssertionFailedError: Unable to select device and verify tariff and extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3317)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed(C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 17533048633,
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
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects Other Tablets tab,then the customer should be able to see the following \n\r\nIn basecomm device tile:\r\n  1.Device image\r\n  2.Rating\r\n  3.Colour dropdown\r\n  4.Capacity dropdown\r\n  5.Promotional ribbons(Blue ribbons if configured for the tariff)\r\n  6.Pricing\r\n  7.\"Buy now\" button\r\n  8.\"See device details\" link\r\n  9.Stock message\r\n  \r\n  In Tariff and extras Page:\r\n  1.\"Back to tablet offers\" link \r\n  2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;",
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
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 27,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 30,
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify all the details and links are displayed and working as expected in the Tariffs and Extras page \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;;",
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
      "line": 37,
      "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;;;1"
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
      "line": 38,
      "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38885290627,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects Other Tablets tab,then the customer should be able to see the following \n\r\nIn basecomm device tile:\r\n  1.Device image\r\n  2.Rating\r\n  3.Colour dropdown\r\n  4.Capacity dropdown\r\n  5.Promotional ribbons(Blue ribbons if configured for the tariff)\r\n  6.Pricing\r\n  7.\"Buy now\" button\r\n  8.\"See device details\" link\r\n  9.Stock message\r\n  \r\n  In Tariff and extras Page:\r\n  1.\"Back to tablet offers\" link \r\n  2. Basecomms offer tariffs",
  "id": "c1786-e-11355-11357-11356-11359-tc2-existing-custo-basecomm-tablet-device-tile-detail-and-tariffextraspage-verification;;;2",
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
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#verify that URL is specific to tablet"
    }
  ],
  "line": 27,
  "name": "Verify only tablet specific devices are displayed under the Other tablets section",
  "keyword": "And "
});
formatter.step({
  "line": 28,
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
      "line": 29,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 30,
  "name": "Select Black, 16GB of the device Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on \"See device details\" link for Samsung Galaxy Tab A 2016 10.1 and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on \"Buy Now\" button for Samsung Galaxy Tab A 2016 10.1 and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify Pay As You Go tab is not displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
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
  "duration": 35074875410,
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
  "duration": 19865475036,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 21279638980,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4307676028,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 12637753243,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 958979054,
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
  "duration": 977959085,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock(C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification.feature:28)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 13610521671,
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
  "name": "Verify the price gets updated based on the new colour and capacity",
  "keyword": "Then "
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
        "capacity"
      ],
      "line": 20,
      "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple�iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Silver",
        "128GB"
      ],
      "line": 21,
      "id": "c1786-e-11355-11357-11356-11359-tc3-existing-custo-basecomm-ipad-device-update-colour-capacity-verify-new-price;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31783863488,
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
  "name": "Verify expected Apple�iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Out of stock",
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
  "name": "Select Silver, 128GB of the device Apple�iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the price gets updated based on the new colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 32504546204,
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
  "duration": 20417938998,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 15464127597,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8472991031,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 2047083967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
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
  "duration": 489029442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    },
    {
      "val": "128GB",
      "offset": 15
    },
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 289904567,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity()"
});
formatter.result({
  "duration": 20061703591,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify price updates\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(E2EOrderPlaced_Steps.java:3529)\r\n\tat ✽.Then Verify the price gets updated based on the new colour and capacity(C1786_E-11355-11357-11356-11359_TC3_Existing_Custo_Basecomm_iPad_Device_Update_Colour_Capacity_Verify_New_Price.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 15747424844,
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
  "name": "This scenario ensures that when the existing customer on new basecomm page selects \"Other Tablets\" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;this-scenario-ensures-that-when-the-existing-customer-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-changes-the-colour-and-capacity-of-a-specific-device,-then-the-customer-should-be-able-to-see-that-the-price-gets-updated",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#verify that URL is specific to tablet"
    }
  ],
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
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the price gets updated based on the new colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;this-scenario-ensures-that-when-the-existing-customer-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-changes-the-colour-and-capacity-of-a-specific-device,-then-the-customer-should-be-able-to-see-that-the-price-gets-updated;",
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
      "line": 17,
      "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;this-scenario-ensures-that-when-the-existing-customer-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-changes-the-colour-and-capacity-of-a-specific-device,-then-the-customer-should-be-able-to-see-that-the-price-gets-updated;;1"
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
      "line": 18,
      "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;this-scenario-ensures-that-when-the-existing-customer-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-changes-the-colour-and-capacity-of-a-specific-device,-then-the-customer-should-be-able-to-see-that-the-price-gets-updated;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33771310288,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "This scenario ensures that when the existing customer on new basecomm page selects \"Other Tablets\" tab and changes the colour and capacity of a specific device, then the customer should be able to see that the Price gets updated",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc4-existing-custo-basecomm-other-tablets-device-update-colour-capacity-verify-new-price;this-scenario-ensures-that-when-the-existing-customer-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-changes-the-colour-and-capacity-of-a-specific-device,-then-the-customer-should-be-able-to-see-that-the-price-gets-updated;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the contents of the tablet section in the Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#verify that URL is specific to tablet"
    }
  ],
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
  "name": "Select Black, 16GB of the device Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the price gets updated based on the new colour and capacity",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 35350981047,
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
  "duration": 19808483982,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 17616530898,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4305658088,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 17376394987,
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
  "duration": 1243310044,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock(C1786_E-11355-11357-11356-11359_TC4_Existing_Custo_Basecomm_Other_tablets_Device_Update_Colour_Capacity_Verify_New_Price.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "duration": 14618253686,
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
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"iPad\" tab,then the customer should be able to see the following",
  "description": "\r\n1.Delayed delivery status on device tile\r\n2.Clicking \"Back to iPad offers\" link should take the customer to basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"ipad\"-tab,then-the-customer-should-be-able-to-see-the-following",
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
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Verify URL is iPad specific"
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
  "name": "click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"ipad\"-tab,then-the-customer-should-be-able-to-see-the-following;",
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
      "line": 20,
      "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"ipad\"-tab,then-the-customer-should-be-able-to-see-the-following;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple�iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Home Delivery"
      ],
      "line": 21,
      "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"ipad\"-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44657247845,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"iPad\" tab,then the customer should be able to see the following",
  "description": "\r\n1.Delayed delivery status on device tile\r\n2.Clicking \"Back to iPad offers\" link should take the customer to basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"ipad\"-tab,then-the-customer-should-be-able-to-see-the-following;;2",
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
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 14,
  "name": "Verify expected Apple�iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Home Delivery",
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
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 34872503852,
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
  "duration": 20630685852,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 16875631624,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8116681307,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 9565101743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
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
      "val": "Home Delivery",
      "offset": 112
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 309216202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 73868917,
  "error_message": "java.lang.AssertionError: Expected device is not present\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.BuynowwithDevice(BaseCommPageActions.java:705)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3313)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed(C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_Back_to_iPad_offers_link_and_check_navigation_Basecomm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11367803701,
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
  "description": "Examples:",
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
      "line": 22,
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
      "line": 23,
      "id": "c1786-e-11355-11357-11356-11359-tc6-existing-custo-basecomm-other-tablet-preorder-stock-message-and-back-to-ipad-offer-link-verification;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\"other-tablets\"-tab,then-the-customer-should-be-able-to-see-the-following;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39406603922,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"Other tablets\" tab,then the customer should be able to see the following",
  "description": "\n1.Pre Order delivery status on device tile\n2.Clicking \"Back to tablet offers\" link should take the customer back to the basecomms listing page, Examples:",
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
  "duration": 38810278611,
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
  "duration": 20691911678,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 16583115980,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4245470960,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 5042974830,
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
  "duration": 837837895,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,Pre Order(C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:14)\r\n",
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
  "duration": 14294452895,
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
  "name": "This scenario ensures that when the existing customer lands on new basecomm page selects \"iPads\" tab and Change the Variant of the device,",
  "description": "then the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"ipads\"-tab-and-change-the-variant-of-the-device,",
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
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Basecomms page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify new image is as per the selected \u003cdevice_name\u003e,\u003ccapacity\u003eand \u003ccolor\u003e in the Tariffs and Extras Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#Modify the above step to include pdf download"
    },
    {
      "line": 26,
      "value": "#make sure that device is ipad air 2 else validation fails for promotion"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"ipads\"-tab-and-change-the-variant-of-the-device,;",
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
      "line": 28,
      "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"ipads\"-tab-and-change-the-variant-of-the-device,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple�iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Silver",
        "128GB",
        "TEST ACCEPTA"
      ],
      "line": 29,
      "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"ipads\"-tab-and-change-the-variant-of-the-device,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26234435993,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page selects \"iPads\" tab and Change the Variant of the device,",
  "description": "then the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc1-ipads-tab-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"ipads\"-tab-and-change-the-variant-of-the-device,;;2",
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
  "name": "Verify expected Apple�iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Out of stock",
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
  "name": "Select Silver, 128GB of the device Apple�iPad Pro 9.7 inch",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify new image is as per the selected Apple�iPad Pro 9.7 inch,128GBand Silver in the Basecomms page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify new image is as per the selected Apple�iPad Pro 9.7 inch,128GBand Silver in the Tariffs and Extras Page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
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
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 42221486424,
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
  "duration": 19527116554,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13861503566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
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
  "duration": 271957218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 7
    },
    {
      "val": "128GB",
      "offset": 15
    },
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 35
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_color_capacity_of_device(String,String,String)"
});
formatter.result({
  "duration": 146994997,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20066922914,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3515)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 40
    },
    {
      "val": "128GB",
      "offset": 64
    },
    {
      "val": "Silver",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
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
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 40
    },
    {
      "val": "128GB",
      "offset": 64
    },
    {
      "val": "Silver",
      "offset": 73
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String)"
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
  "duration": 18229843073,
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
  "name": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Other Tablets\" tab and Change the Variant of the device,",
  "description": "then the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-change-the-variant-of-the-device,",
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
  "name": "Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that promotion ribbon is displayed",
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
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-change-the-variant-of-the-device,;",
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
      "line": 28,
      "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-change-the-variant-of-the-device,;;1"
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
        "TEST ACCEPTA"
      ],
      "line": 29,
      "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-change-the-variant-of-the-device,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31083287621,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Other Tablets\" tab and Change the Variant of the device,",
  "description": "then the image and promotion should be changed according to the selected variant and same variant should be selected in \u0027Tariffs\u0027 page",
  "id": "c1786-e-11510-11505-tc2-other-tablets-device-tile-colour-and-capacity-variant-image-and-promotion-change-same-variant-tariff-page-order-confirmation;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"other-tablets\"-tab-and-change-the-variant-of-the-device,;;2",
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
  "name": "Select Black, 16GB of the device Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify new image is as per the selected Samsung Galaxy Tab A 2016 10.1,16GBand Black in the Basecomms page",
  "matchedColumns": [
    2,
    6,
    7
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
formatter.step({
  "line": 16,
  "name": "Verify new image is as per the selected Samsung Galaxy Tab A 2016 10.1,16GBand Black in the Tariffs and Extras Page",
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
  "duration": 49222128399,
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
  "duration": 18725536106,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12128893346,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4268257897,
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
  "duration": 9439662818,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock(C1786_E-11510-11505_TC2_Other_Tablets_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 40
    },
    {
      "val": "16GB",
      "offset": 71
    },
    {
      "val": "Black",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(String)"
});
formatter.result({
  "status": "skipped"
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
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 40
    },
    {
      "val": "16GB",
      "offset": 71
    },
    {
      "val": "Black",
      "offset": 79
    }
  ],
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String)"
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
  "duration": 12817553742,
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
  "name": "I Land on the basket page and choose home delivery option",
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
        "default_stock_message",
        "color",
        "capacity",
        "user"
      ],
      "line": 18,
      "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple�iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Silver",
        "128GB",
        "TEST ACCEPTA"
      ],
      "line": 19,
      "id": "c1786-e-11510-11505-tc3-ipads-tab-basecomm-tariff-basket-page-change-tariff-link.feature;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"ipad\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 45852945194,
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
  "name": "Verify expected Apple�iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Out of stock",
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
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
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
  "name": "I Land on the basket page and choose home delivery option",
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
  "duration": 29108272634,
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
  "duration": 30107979604,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 17408877732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
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
  "duration": 507210012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 30
    }
  ],
  "location": "E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(String)"
});
formatter.result({
  "duration": 87697220,
  "error_message": "java.lang.AssertionError: Expected device is not present\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.BuynowwithDevice(BaseCommPageActions.java:705)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3313)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed(C1786_E-11510-11505_TC3_iPads_Tab_Basecomm_tariff_basket_page_change_tariff_link.feature:11)\r\n",
  "status": "failed"
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
  "location": "E2EOrderPlaced_Steps.verify_choose_a_diff_tariff_link_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11380298862,
  "status": "passed"
});
formatter.uri("C1786_E-11510-11505_TC4_Other_Tablets_Basecomm_tariff_basket_page_change_tariff_link.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E-11510-11505_TC4_Other_Tablets_Basecomm_tariff_basket_page_change_tariff_link",
  "description": "",
  "id": "c1786-e-11510-11505-tc4-other-tablets-basecomm-tariff-basket-page-change-tariff-link",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer selects basecomms \"Other Tablets\" tariff lands on basket page and clicks on \"Change tariff\" ,",
  "description": "then the customer should be redirected to tariffs and extras page with basecomms tariffs",
  "id": "c1786-e-11510-11505-tc4-other-tablets-basecomm-tariff-basket-page-change-tariff-link;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"other-tablets\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Choose a different tariff\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "c1786-e-11510-11505-tc4-other-tablets-basecomm-tariff-basket-page-change-tariff-link;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"other-tablets\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;",
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
      "line": 19,
      "id": "c1786-e-11510-11505-tc4-other-tablets-basecomm-tariff-basket-page-change-tariff-link;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"other-tablets\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;1"
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
      "line": 20,
      "id": "c1786-e-11510-11505-tc4-other-tablets-basecomm-tariff-basket-page-change-tariff-link;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"other-tablets\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 50411977899,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "This scenario ensures that when the existing customer selects basecomms \"Other Tablets\" tariff lands on basket page and clicks on \"Change tariff\" ,",
  "description": "then the customer should be redirected to tariffs and extras page with basecomms tariffs",
  "id": "c1786-e-11510-11505-tc4-other-tablets-basecomm-tariff-basket-page-change-tariff-link;this-scenario-ensures-that-when-the-existing-customer-selects-basecomms-\"other-tablets\"-tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2",
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
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Choose a different tariff\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 40697264775,
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
  "duration": 20133681264,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 29684512683,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4287574841,
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
  "duration": 9658221070,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:656)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3497)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,In Stock(C1786_E-11510-11505_TC4_Other_Tablets_Basecomm_tariff_basket_page_change_tariff_link.feature:10)\r\n",
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
  "location": "E2EOrderPlaced_Steps.verify_choose_a_diff_tariff_link_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10491009869,
  "status": "passed"
});
formatter.uri("C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature",
  "description": "",
  "id": "c1786-e11354-11447-11565-tc1-existing-custo-ipads-tab-filter-and-sort-functionality.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027iPads\u0027 tab,",
  "description": "then the customer should be able to see \u0027Sort\u0027 and \u0027Filter\u0027 tab and the customer should be able to do Sort and Filter functionality same as that of listings page",
  "id": "c1786-e11354-11447-11565-tc1-existing-custo-ipads-tab-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027ipads\u0027-tab,",
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
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 12,
  "name": "Verify the current sort order details \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on the Sort tab and choose required \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the devices gets sorted based on the sort option \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the Sort tab and reset sort",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that original sort order is retained \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the Filter tab and choose required \u003cFilter\u003e \u003cOption\u003e option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the devices gets displayed as per the filter applied \u003cFilter\u003e \u003cOption\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "c1786-e11354-11447-11565-tc1-existing-custo-ipads-tab-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027ipads\u0027-tab,;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sort option",
        "Filter",
        "Option"
      ],
      "line": 21,
      "id": "c1786-e11354-11447-11565-tc1-existing-custo-ipads-tab-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027ipads\u0027-tab,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "MonthlyLowToHigh",
        "Colour",
        "Yellow"
      ],
      "line": 22,
      "id": "c1786-e11354-11447-11565-tc1-existing-custo-ipads-tab-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027ipads\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36981943295,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027iPads\u0027 tab,",
  "description": "then the customer should be able to see \u0027Sort\u0027 and \u0027Filter\u0027 tab and the customer should be able to do Sort and Filter functionality same as that of listings page",
  "id": "c1786-e11354-11447-11565-tc1-existing-custo-ipads-tab-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027ipads\u0027-tab,;;2",
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
  "name": "Click on iPad tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the contents of the iPad section in the landing page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Verify URL is iPad specific"
    }
  ],
  "line": 12,
  "name": "Verify the current sort order details MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on the Sort tab and choose required MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the devices gets sorted based on the sort option MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the Sort tab and reset sort",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that original sort order is retained MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on the Filter tab and choose required Colour Yellow option",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the devices gets displayed as per the filter applied Colour Yellow",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 33952102062,
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
  "duration": 19773350523,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 16741051806,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8404996507,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 7946324992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_current_sort_order(String)"
});
formatter.result({
  "duration": 20076515029,
  "error_message": "junit.framework.AssertionFailedError: Fail: Cannot read the phone details from the container\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verify_current_sort_order(E2EOrderPlaced_Steps.java:3581)\r\n\tat ✽.And Verify the current sort order details MonthlyLowToHigh(C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_the_Sort_tab_and_choose_required_sort_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyDeviceSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonSortand_Reset()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyOriginalSortOrderRetainedAfterSortReset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Colour",
      "offset": 44
    },
    {
      "val": "Yellow",
      "offset": 51
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnFilterTabAndSelectFilterOption(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Colour",
      "offset": 60
    },
    {
      "val": "Yellow",
      "offset": 67
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyDevicesGetsDisplayedAsPerFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 20001052853,
  "status": "passed"
});
formatter.uri("C1786_E11354-11447-11565_TC2_Existing_Custo_Other_Tablets_Filter_and_Sort_Functionality.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E11354-11447-11565_TC2_Existing_Custo_Other_Tablets_Filter_and_Sort_Functionality.feature",
  "description": "",
  "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027Other tablets\u0027 tab,",
  "description": "then the customer should be able to see \u0027Sort\u0027 and \u0027Filter\u0027 tab and the customer should be able to do Sort and Filter functionality same as that of listings page",
  "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,",
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
  "name": "Verify the current sort order details \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on the Sort tab and choose required \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the devices gets sorted based on the sort option \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on the Sort tab and reset sort",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify that original sort order is retained \u003csort option\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the Filter tab and choose required \u003cFilter\u003e \u003cOption\u003e option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the devices gets displayed as per the filter applied \u003cFilter\u003e \u003cOption\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "sort option",
        "Filter",
        "Option"
      ],
      "line": 19,
      "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "MonthlyLowToHigh",
        "Brand",
        "HTC"
      ],
      "line": 20,
      "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36840173992,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page and selects \u0027Other tablets\u0027 tab,",
  "description": "then the customer should be able to see \u0027Sort\u0027 and \u0027Filter\u0027 tab and the customer should be able to do Sort and Filter functionality same as that of listings page",
  "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2",
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
  "name": "Verify the current sort order details MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on the Sort tab and choose required MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the devices gets sorted based on the sort option MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on the Sort tab and reset sort",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify that original sort order is retained MonthlyLowToHigh",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on the Filter tab and choose required Brand HTC option",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the devices gets displayed as per the filter applied Brand HTC",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 39347375157,
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
  "duration": 25182900666,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 26623736664,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4383724263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 38
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_current_sort_order(String)"
});
formatter.result({
  "duration": 27860003030,
  "error_message": "junit.framework.AssertionFailedError: Fail: Cannot read the phone details from the container\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verify_current_sort_order(E2EOrderPlaced_Steps.java:3581)\r\n\tat ✽.And Verify the current sort order details MonthlyLowToHigh(C1786_E11354-11447-11565_TC2_Existing_Custo_Other_Tablets_Filter_and_Sort_Functionality.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 42
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_the_Sort_tab_and_choose_required_sort_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 56
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyDeviceSortedBasedOnSortOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonSortand_Reset()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlyLowToHigh",
      "offset": 44
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyOriginalSortOrderRetainedAfterSortReset(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 44
    },
    {
      "val": "HTC",
      "offset": 50
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnFilterTabAndSelectFilterOption(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 60
    },
    {
      "val": "HTC",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyDevicesGetsDisplayedAsPerFilter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17687035639,
  "status": "passed"
});
formatter.uri("C1786_E11362-11564_Current_MBB_URL_no_change_Order_placement.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E11362-11564_Current_MBB_URL_no_change_Order_placement",
  "description": "",
  "id": "c1786-e11362-11564-current-mbb-url-no-change-order-placement",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order",
  "description": "\r\nCurrent URL:\r\nhttps://www.o2.co.uk/shop/my-offers/mobile-broadband",
  "id": "c1786-e11362-11564-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order",
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
  "name": "I launch the OldMBBURL",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select \"random\" MBBtariff",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 20,
      "value": "#Modify the above step to include pdf download"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "c1786-e11362-11564-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "OldMBBURL",
        "user"
      ],
      "line": 22,
      "id": "c1786-e11362-11564-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "https://www.ref.o2.co.uk/shop/my-offers/mobile-broadband",
        "TEST ACCEPTA"
      ],
      "line": 23,
      "id": "c1786-e11362-11564-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37212458779,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order",
  "description": "\r\nCurrent URL:\r\nhttps://www.o2.co.uk/shop/my-offers/mobile-broadband",
  "id": "c1786-e11362-11564-current-mbb-url-no-change-order-placement;this-scenario-ensures-that-there-should-not-be-any-change-for-customer-with-current-mbb-url-and-customer-should-be-able-to-place-order;;2",
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
  "name": "I launch the OldMBBURL",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select \"random\" MBBtariff",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 49251772156,
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
  "duration": 22491175495,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsMBBURL()"
});
formatter.result({
  "duration": 14077009783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 8
    }
  ],
  "location": "E2EOrderPlaced_Steps.select_MBBtariff(String)"
});
formatter.result({
  "duration": 36044946409,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 15233678292,
  "error_message": "junit.framework.AssertionFailedError: Unable to Land on the basket page and choose home delivery option\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option(E2EOrderPlaced_Steps.java:720)\r\n\tat ✽.And I Land on the basket page and choose home delivery option(C1786_E11362-11564_Current_MBB_URL_no_change_Order_placement.feature:12)\r\n",
  "status": "failed"
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
  "duration": 13801213454,
  "status": "passed"
});
formatter.uri("C1786_E11362-11564_TC1_Current_iPad_or_Tablet_URL_Redirection_to_new_Basecomm_page_URL.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_E11362-11564_TC1_Current_iPad_or_Tablet_URL_Redirection_to_new_Basecomm_page_URL.feature",
  "description": "",
  "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that the existing customer with the current iPad and Tablet Url should be redirected to new basecomms page URL",
  "description": "\nCurrent URL:\nhttps://www.o2.co.uk/shop/my-offers/ipad\nhttps://www.o2.co.uk/shop/my-offers/tablet",
  "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature;this-scenario-ensures-that-the-existing-customer-with-the-current-ipad-and-tablet-url-should-be-redirected-to-new-basecomms-page-url",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I launch the OldIpadURL",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that I get redirected to \u003cNewURL\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I launch the OldTabletURL",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that I get redirected to \u003cNewURL\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature;this-scenario-ensures-that-the-existing-customer-with-the-current-ipad-and-tablet-url-should-be-redirected-to-new-basecomms-page-url;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "OldIpadURL",
        "OldTabletURL",
        "NewURL"
      ],
      "line": 17,
      "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature;this-scenario-ensures-that-the-existing-customer-with-the-current-ipad-and-tablet-url-should-be-redirected-to-new-basecomms-page-url;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "https://www.ref.o2.co.uk/shop/my-offers/ipad",
        "https://www.ref.o2.co.uk/shop/my-offers/tablet",
        "www.ref.o2.co.uk/shop/existing-customer-offers"
      ],
      "line": 18,
      "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature;this-scenario-ensures-that-the-existing-customer-with-the-current-ipad-and-tablet-url-should-be-redirected-to-new-basecomms-page-url;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 59060161293,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "This scenario ensures that the existing customer with the current iPad and Tablet Url should be redirected to new basecomms page URL",
  "description": "\nCurrent URL:\nhttps://www.o2.co.uk/shop/my-offers/ipad\nhttps://www.o2.co.uk/shop/my-offers/tablet",
  "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature;this-scenario-ensures-that-the-existing-customer-with-the-current-ipad-and-tablet-url-should-be-redirected-to-new-basecomms-page-url;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I launch the OldIpadURL",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that I get redirected to www.ref.o2.co.uk/shop/existing-customer-offers",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I launch the OldTabletURL",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that I get redirected to www.ref.o2.co.uk/shop/existing-customer-offers",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 31647019769,
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
  "duration": 19851200820,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsIpadURL()"
});
formatter.result({
  "duration": 17241271932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.ref.o2.co.uk/shop/existing-customer-offers",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyOldBaseCommsURL_Redirection(String)"
});
formatter.result({
  "duration": 48703415,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[www.ref.o2.co.uk/shop/existing-customer-offers]\u003e but was:\u003c[https://www.ref.o2.co.uk/shop/my-offers/ipad]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat actionsPerformed.BaseCommPageActions.CompareURL(BaseCommPageActions.java:135)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyOldBaseCommsURL_Redirection(E2EOrderPlaced_Steps.java:3207)\r\n\tat ✽.And verify that I get redirected to www.ref.o2.co.uk/shop/existing-customer-offers(C1786_E11362-11564_TC1_Current_iPad_or_Tablet_URL_Redirection_to_new_Basecomm_page_URL.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsOldTabletURL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "www.ref.o2.co.uk/shop/existing-customer-offers",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyOldBaseCommsURL_Redirection(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16179120303,
  "status": "passed"
});
formatter.uri("C1786_E11510-11505_TC5_Non_Basecomm_tariff_basket_page_change_tariff_link_BAU_tariffs_decommission_flag.feature");
formatter.feature({
  "line": 1,
  "name": "C11786_E11510-11505_TC5_Non_Basecomm_tariff_basket_page_change_tariff_link_BAU_tariffs_decommission_flag.feature",
  "description": "",
  "id": "c11786-e11510-11505-tc5-non-basecomm-tariff-basket-page-change-tariff-link-bau-tariffs-decommission-flag.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer selects non-basecomm(Refresh)tariff lands on basket page and clicks on \"Change tariff\" ,",
  "description": "then the customer should be redirected to tariffs and extras page with Refresh(BAU) tariffs",
  "id": "c11786-e11510-11505-tc5-non-basecomm-tariff-basket-page-change-tariff-link-bau-tariffs-decommission-flag.feature;this-scenario-ensures-that-when-the-existing-customer-selects-non-basecomm(refresh)tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,",
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
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose \u003ctabletname\u003e Tablet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify \"Choose a different tariff\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "c11786-e11510-11505-tc5-non-basecomm-tariff-basket-page-change-tariff-link-bau-tariffs-decommission-flag.feature;this-scenario-ensures-that-when-the-existing-customer-selects-non-basecomm(refresh)tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "tabletname"
      ],
      "line": 17,
      "id": "c11786-e11510-11505-tc5-non-basecomm-tariff-basket-page-change-tariff-link-bau-tariffs-decommission-flag.feature;this-scenario-ensures-that-when-the-existing-customer-selects-non-basecomm(refresh)tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Samsung Galaxy Tab Active"
      ],
      "line": 18,
      "id": "c11786-e11510-11505-tc5-non-basecomm-tariff-basket-page-change-tariff-link-bau-tariffs-decommission-flag.feature;this-scenario-ensures-that-when-the-existing-customer-selects-non-basecomm(refresh)tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31600840018,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "This scenario ensures that when the existing customer selects non-basecomm(Refresh)tariff lands on basket page and clicks on \"Change tariff\" ,",
  "description": "then the customer should be redirected to tariffs and extras page with Refresh(BAU) tariffs",
  "id": "c11786-e11510-11505-tc5-non-basecomm-tariff-basket-page-change-tariff-link-bau-tariffs-decommission-flag.feature;this-scenario-ensures-that-when-the-existing-customer-selects-non-basecomm(refresh)tariff-lands-on-basket-page-and-clicks-on-\"change-tariff\"-,;;2",
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
  "name": "navigate to PAYM Tablets page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose Samsung Galaxy Tab Active Tablet",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify \"Choose a different tariff\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page",
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 40337208306,
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
  "duration": 25507528169,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 34963099870,
  "error_message": "junit.framework.AssertionFailedError: unable to do mousehover to tablets\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page(E2EOrderPlaced_Steps.java:2360)\r\n\tat ✽.And navigate to PAYM Tablets page(C1786_E11510-11505_TC5_Non_Basecomm_tariff_basket_page_change_tariff_link_BAU_tariffs_decommission_flag.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab Active",
      "offset": 9
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_Tablet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
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
  "location": "E2EOrderPlaced_Steps.verify_choose_a_diff_tariff_link_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16674737600,
  "status": "passed"
});
formatter.uri("C1786_ECOM-11527-11529-11633_TC1_New_basecomms_page_iPads_tab_coming_soon_device_promo_header_banner_Pay_For_Your_Device_In_Full_link_TariffandExtras_page.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_ECOM-11527-11529-11633_TC1_New_basecomms_page_iPads_tab_coming_soon_device_promo_header_banner_Pay_For_Your_Device_In_Full_link_TariffandExtras_page",
  "description": "",
  "id": "c1786-ecom-11527-11529-11633-tc1-new-basecomms-page-ipads-tab-coming-soon-device-promo-header-banner-pay-for-your-device-in-full-link-tariffandextras-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the customer lands on new basecomm page selects \"iPads\" device ,then the device tile for the \u0027coming soon\u0027 basecomms device should be displayed with the following information:",
  "description": "\n1.Device image\n2.Device title\n3.Colour\n4.Capacity\n5.\"See device details\" link\n6.Pricing information should NOT be displayed\n7.Buy Now button NOT be displayed",
  "id": "c1786-ecom-11527-11529-11633-tc1-new-basecomms-page-ipads-tab-coming-soon-device-promo-header-banner-pay-for-your-device-in-full-link-tariffandextras-page;this-scenario-ensures-that-when-the-customer-lands-on-new-basecomm-page-selects-\"ipads\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Pay for your device in full link should be displayed in Tariff and extras page"
    }
  ],
  "line": 14,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list for coming soon device \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Veirfy device price is not required"
    },
    {
      "line": 19,
      "value": "#Verify Buy Now button is not enabled"
    }
  ],
  "line": 20,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"Pay for your device in full\" link and select a \"random\" tariff",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input \u003cuser\u003e and other details for upgrade and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 32,
      "value": "#Modify the above step to include pdf download"
    }
  ],
  "line": 33,
  "name": "",
  "description": "",
  "id": "c1786-ecom-11527-11529-11633-tc1-new-basecomms-page-ipads-tab-coming-soon-device-promo-header-banner-pay-for-your-device-in-full-link-tariffandextras-page;this-scenario-ensures-that-when-the-customer-lands-on-new-basecomm-page-selects-\"ipads\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "device_name",
        "default_colour",
        "default_capacity",
        "default_stock_message",
        "user"
      ],
      "line": 34,
      "id": "c1786-ecom-11527-11529-11633-tc1-new-basecomms-page-ipads-tab-coming-soon-device-promo-header-banner-pay-for-your-device-in-full-link-tariffandextras-page;this-scenario-ensures-that-when-the-customer-lands-on-new-basecomm-page-selects-\"ipads\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple�iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "TEST ACCEPTA"
      ],
      "line": 35,
      "id": "c1786-ecom-11527-11529-11633-tc1-new-basecomms-page-ipads-tab-coming-soon-device-promo-header-banner-pay-for-your-device-in-full-link-tariffandextras-page;this-scenario-ensures-that-when-the-customer-lands-on-new-basecomm-page-selects-\"ipads\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41208279924,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "This scenario ensures that when the customer lands on new basecomm page selects \"iPads\" device ,then the device tile for the \u0027coming soon\u0027 basecomms device should be displayed with the following information:",
  "description": "\n1.Device image\n2.Device title\n3.Colour\n4.Capacity\n5.\"See device details\" link\n6.Pricing information should NOT be displayed\n7.Buy Now button NOT be displayed",
  "id": "c1786-ecom-11527-11529-11633-tc1-new-basecomms-page-ipads-tab-coming-soon-device-promo-header-banner-pay-for-your-device-in-full-link-tariffandextras-page;this-scenario-ensures-that-when-the-customer-lands-on-new-basecomm-page-selects-\"ipads\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Pay for your device in full link should be displayed in Tariff and extras page"
    }
  ],
  "line": 14,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify expected Apple�iPad Pro 9.7 inch and its specific details are present in the device list for coming soon device Space Grey,32GB,Out of stock",
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
      "line": 18,
      "value": "#Veirfy device price is not required"
    },
    {
      "line": 19,
      "value": "#Verify Buy Now button is not enabled"
    }
  ],
  "line": 20,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \"See device details\" link for Apple�iPad Pro 9.7 inch and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on \"Pay for your device in full\" link and select a \"random\" tariff",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select existing account and begin fast checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "land on the payment page and input TEST ACCEPTA and other details for upgrade and click \u0027Continue on next step\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 39469070877,
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
  "duration": 22277252629,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 17857435836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 16
    },
    {
      "val": "for coming soon device Space Grey",
      "offset": 96
    },
    {
      "val": "32GB",
      "offset": 130
    },
    {
      "val": "Out of stock",
      "offset": 135
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 612206236,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20051143205,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3515)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_ECOM-11527-11529-11633_TC1_New_basecomms_page_iPads_tab_coming_soon_device_promo_header_banner_Pay_For_Your_Device_In_Full_link_TariffandExtras_page.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 39
    }
  ],
  "location": "E2EOrderPlaced_Steps.Click_on_See_device_details_link_and_verify_correct_details_are_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
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
      "val": "Pay for your device in full",
      "offset": 10
    },
    {
      "val": "random",
      "offset": 58
    }
  ],
  "location": "E2EOrderPlaced_Steps.TariffandExtrasPage_payDeviceFull()"
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
  "duration": 14755782201,
  "status": "passed"
});
formatter.uri("C1786_ECOM-11527-11529-11633_TC2_New_basecomms_page_Other_tablets_tab_coming_soon_device_promo_header_banner.feature");
formatter.feature({
  "line": 1,
  "name": "C1786_ECOM-11527-11529-11633_TC2_New_basecomms_page_Other_tablets_tab_coming_soon_device_promo_header_banner.feature",
  "description": "",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Tablet\" device ,then the device tile for the \u0027coming soon\u0027 basecomms device should be displayed with the following information:",
  "description": "\n1.Device image\n2.Device title\n3.Colour\n4.Capacity\n5.\"See device details\" link\n6.Pricing information should NOT be displayed\n7.Buy Now button NOT be displayed",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"tablet\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list for coming soon device \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Veirfy device price is not required"
    },
    {
      "line": 18,
      "value": "#Verify Buy Now button is not enabled"
    }
  ],
  "line": 19,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"tablet\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;",
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
      "line": 23,
      "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"tablet\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;;1"
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
      "line": 24,
      "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"tablet\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29593086769,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Tablet\" device ,then the device tile for the \u0027coming soon\u0027 basecomms device should be displayed with the following information:",
  "description": "\n1.Device image\n2.Device title\n3.Colour\n4.Capacity\n5.\"See device details\" link\n6.Pricing information should NOT be displayed\n7.Buy Now button NOT be displayed",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-selects-\"tablet\"-device-,then-the-device-tile-for-the-\u0027coming-soon\u0027-basecomms-device-should-be-displayed-with-the-following-information:;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am existing user and I click on Signin button",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Signin using valid 07770001111@o2.co.uk and test123 credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I navigate to the Basecomm Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list for coming soon device Black,16GB,In Stock",
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
      "value": "#Veirfy device price is not required"
    },
    {
      "line": 18,
      "value": "#Verify Buy Now button is not enabled"
    }
  ],
  "line": 19,
  "name": "Verify that promotion ribbon is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \"See device details\" link for Samsung Galaxy Tab A 2016 10.1 and verify correct details are displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 53470935578,
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
  "duration": 19260733267,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13340802165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 16
    },
    {
      "val": "for coming soon device Black",
      "offset": 103
    },
    {
      "val": "16GB",
      "offset": 132
    },
    {
      "val": "In Stock",
      "offset": 137
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 246017028,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20029732940,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3515)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_ECOM-11527-11529-11633_TC2_New_basecomms_page_Other_tablets_tab_coming_soon_device_promo_header_banner.feature:19)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 14277938488,
  "status": "passed"
});
});