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
  "duration": 57815591773,
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
  "duration": 25419170639,
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
  "duration": 18932998636,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12421686171,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_the_contents_of_the_basecomm_landing_page()"
});
formatter.result({
  "duration": 15519973146,
  "status": "passed"
});
formatter.after({
  "duration": 2447449148,
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
  "duration": 25198505544,
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
  "duration": 26479915375,
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
  "duration": 20478904632,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13228970458,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24429511290,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 51957713,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 499802169,
  "status": "passed"
});
formatter.after({
  "duration": 2259650189,
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
  "duration": 26173571051,
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
  "duration": 26753272528,
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
  "duration": 19699576097,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12852856198,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24234100262,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 15597860,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 390852847,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24136229476,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 87134119,
  "status": "passed"
});
formatter.after({
  "duration": 4168922908,
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
  "duration": 25531029741,
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
  "duration": 24785014318,
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
  "duration": 19314880430,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12296334924,
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
  "duration": 1816361863,
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
  "duration": 40872946840,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "duration": 412359094,
  "status": "passed"
});
formatter.after({
  "duration": 4474319483,
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
  "duration": 25675633236,
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
  "duration": 25047195613,
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
  "duration": 19022483724,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 11938597714,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24308764303,
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
  "duration": 1497423950,
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
  "duration": 40662434475,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "duration": 463450456,
  "status": "passed"
});
formatter.after({
  "duration": 4222367715,
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
  "duration": 27780956837,
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
  "duration": 25024699856,
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
  "duration": 19201397628,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13309532623,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24349125721,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 41915754,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 446418586,
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
  "duration": 1651158461,
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
  "duration": 4091002618,
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
  "duration": 7180734728,
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
  "duration": 40460860250,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "duration": 20029123981,
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
  "duration": 5406002667,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify all the details and links are displayed and working as expected in the Tariffs and Extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(E2EOrderPlaced_Steps.java:3785)\r\n\tat ✽.And Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Apple iPad Pro 9.7 inch(C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5512406022,
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
  "duration": 24220834614,
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
  "duration": 25019972792,
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
  "duration": 19316041229,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 11653205783,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24312585733,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 44895960,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 905675308,
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
  "duration": 1232865145,
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
  "duration": 3874648399,
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
  "duration": 7466778901,
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
  "duration": 37595886460,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "duration": 20052924572,
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
  "duration": 5228983552,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify all the details and links are displayed and working as expected in the Tariffs and Extras page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(E2EOrderPlaced_Steps.java:3785)\r\n\tat ✽.And Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Samsung Galaxy Tab A 2016 10.1(C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5211157881,
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
  "duration": 26234194400,
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
  "duration": 25468250424,
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
  "duration": 18572172928,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12119474711,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24352994928,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 31522371,
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
  "duration": 966873393,
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
  "duration": 3550182189,
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
  "duration": 27033989773,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify price updates\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(E2EOrderPlaced_Steps.java:3606)\r\n\tat ✽.And Verify the price gets updated based on 128GB, 256GB for Apple iPad Pro 9.7 inch(C1786_E-11355-11357-11356-11359_TC3_Existing_Custo_Basecomm_iPad_Device_Update_Colour_Capacity_Verify_New_Price.feature:16)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 5260157684,
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
  "duration": 23785648865,
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
  "duration": 37904744901,
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
  "duration": 19050932106,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12089396258,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24405228331,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 28879788,
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
  "duration": 1674296196,
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
  "duration": 3994331911,
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
  "duration": 27694208825,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify price updates\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(E2EOrderPlaced_Steps.java:3606)\r\n\tat ✽.And Verify the price gets updated based on 16GB, 16GB for Samsung Galaxy Tab A 2016 10.1(C1786_E-11355-11357-11356-11359_TC4_Existing_Custo_Basecomm_Other_tablets_Device_Update_Colour_Capacity_Verify_New_Price.feature:14)\r\n",
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
formatter.after({
  "duration": 3155685925,
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
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 17,
  "name": "Click on \"Buy Now\" button for \u003cdevice_name\u003e and verify \"Tariffs and Extras\" page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
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
        "default_stock_message"
      ],
      "line": 21,
      "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;;1"
    },
    {
      "cells": [
        "07770001111@o2.co.uk",
        "test123",
        "Apple iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Home Delivery"
      ],
      "line": 22,
      "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23703683125,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page and selects \"iPad\" tab,then the customer should be able to see the following \n\r\n1.Delayed delivery status on device tile\r\n  2.Clicking \"Back to iPad offers\" link should take the customer to basecomms listing page",
  "id": "c1786-e-11355-11357-11356-11359-tc5-existing-custo-basecomm-ipad-dd-stock-message-and-back-to-ipad-offer-link-verification;;;2",
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
  "name": "Verify expected Apple iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Home Delivery",
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
      "line": 16,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 17,
  "name": "Click on \"Buy Now\" button for Apple iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on the \"Back to iPad offers\" link and verify user gets redirected to Basecomms listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 25305272001,
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
  "duration": 18919773687,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12857876293,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24491521933,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 85130682,
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
      "val": "Home Delivery",
      "offset": 112
    }
  ],
  "location": "E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(String,String,String,String)"
});
formatter.result({
  "duration": 1689105209,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:744)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3560)\r\n\tat ✽.And Verify expected Apple iPad Pro 9.7 inch and its specific details are present in the device list Space Grey,32GB,Home Delivery(C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:15)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_Back_to_iPad_offers_link_and_check_navigation_Basecomm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3238927834,
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
  "duration": 28308548423,
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
  "duration": 26179112089,
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
  "duration": 20147503720,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13020606630,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24300541399,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 323134832,
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
  "duration": 1537457302,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:744)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3560)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,Pre Order(C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:14)\r\n",
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
  "duration": 3487818706,
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
  "duration": 25513258571,
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
  "duration": 27496109205,
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
  "duration": 19495803788,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12546045079,
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
  "duration": 2165175443,
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
  "duration": 504693797,
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
  "duration": 4542497922,
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
  "duration": 1775206997,
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
  "duration": 43103737060,
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
  "location": "E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_TE_page(String,String,String)"
});
formatter.result({
  "duration": 1487426583,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3720276864,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 21413503966,
  "status": "passed"
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
  "duration": 19257999946,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout()"
});
formatter.result({
  "duration": 2019632692,
  "error_message": "junit.framework.AssertionFailedError: Unable to select existing account\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Select_existing_account_and_begin_fast_checkout(E2EOrderPlaced_Steps.java:2103)\r\n\tat ✽.And Select existing account and begin fast checkout(C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:20)\r\n",
  "status": "failed"
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
  "duration": 3171596988,
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
  "duration": 25291750482,
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
  "duration": 27035210381,
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
  "duration": 20446399122,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13321534843,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24550243767,
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
  "duration": 2055315531,
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
  "duration": 3940837204,
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
  "duration": 658644189,
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
  "duration": 953497327,
  "error_message": "java.lang.AssertionError: New image is not as per selected color and capacity\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkImgSrcBasecommPage(BaseCommPageActions.java:886)\r\n\tat steps.E2EOrderPlaced_Steps.Verify_new_image_is_as_per_the_selected_device_name_capacity_and_color_in_the_Basecomms_page(E2EOrderPlaced_Steps.java:3445)\r\n\tat ✽.And Verify new image is as per the selected Alcatel Plus 10,32GBand Silver in the Basecomms page(C1786_E-11510-11505_TC2_Other_Tablets_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:15)\r\n",
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
  "duration": 3138970443,
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
  "duration": 25152379423,
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
  "duration": 26957847839,
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
  "duration": 19118364521,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13818569856,
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
  "duration": 1944273942,
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
  "duration": 38713429576,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3358474741,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page()"
});
formatter.result({
  "duration": 19584266100,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_choose_a_diff_tariff_link_displayed()"
});
formatter.result({
  "duration": 136908259,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page()"
});
formatter.result({
  "duration": 9976417411,
  "status": "passed"
});
formatter.after({
  "duration": 2349281439,
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
  "comments": [
    {
      "line": 6,
      "value": "#Given I am existing user and I click on Signin button"
    },
    {
      "line": 7,
      "value": "#And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    }
  ],
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
  "duration": 25783995082,
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
  "comments": [
    {
      "line": 6,
      "value": "#Given I am existing user and I click on Signin button"
    },
    {
      "line": 7,
      "value": "#And Signin using valid \u003cusername\u003e and \u003cpassword\u003e credentials"
    }
  ],
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
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 11113651260,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24748735156,
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
  "duration": 2130220934,
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
  "duration": 41302813801,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3401158107,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 18906707285,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_choose_a_diff_tariff_link_displayed()"
});
formatter.result({
  "duration": 85411325,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page()"
});
formatter.result({
  "duration": 10855644589,
  "status": "passed"
});
formatter.after({
  "duration": 4257362216,
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
  "duration": 25096759536,
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
  "duration": 26283596588,
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
  "duration": 19541988305,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12736208453,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 24310719255,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 32627607,
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
  "duration": 20697642732,
  "error_message": "junit.framework.AssertionFailedError: Fail: Cannot read the phone details from the container\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verify_current_sort_order(E2EOrderPlaced_Steps.java:3658)\r\n\tat ✽.And Verify the current sort order details MonthlyLowToHigh(C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature:12)\r\n",
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
  "duration": 5630158293,
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
        "Samsung"
      ],
      "line": 20,
      "id": "c1786-e11354-11447-11565-tc2-existing-custo-other-tablets-filter-and-sort-functionality.feature;this-scenario-ensures-that-when-the-existing-customer-lands-on-new-basecomm-page-and-selects-\u0027other-tablets\u0027-tab,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23806505349,
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
  "name": "click on the Filter tab and choose required Brand Samsung option",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the devices gets displayed as per the filter applied Brand Samsung",
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
  "duration": 25686200739,
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
  "duration": 19175334543,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12485734933,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24271515449,
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
  "duration": 20916863200,
  "status": "passed"
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
  "duration": 7205736108,
  "status": "passed"
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
  "duration": 10247685130,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.ClickonSortand_Reset()"
});
formatter.result({
  "duration": 13718091876,
  "status": "passed"
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
  "duration": 10509680271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 44
    },
    {
      "val": "Samsung",
      "offset": 50
    }
  ],
  "location": "E2EOrderPlaced_Steps.clickOnFilterTabAndSelectFilterOption(String,String)"
});
formatter.result({
  "duration": 9160289478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 60
    },
    {
      "val": "Samsung",
      "offset": 66
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifyDevicesGetsDisplayedAsPerFilter(String,String)"
});
formatter.result({
  "duration": 10371311461,
  "status": "passed"
});
formatter.after({
  "duration": 4230506391,
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
  "duration": 25208697203,
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
  "duration": 26094625154,
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
  "duration": 21909461701,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsMBBURL()"
});
formatter.result({
  "duration": 13384657799,
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
  "duration": 11055520087,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 15169620094,
  "error_message": "junit.framework.AssertionFailedError: Unable to Land on the basket page and choose home delivery option\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option(E2EOrderPlaced_Steps.java:725)\r\n\tat ✽.And I Land on the basket page and choose home delivery option(C1786_E11362-11564_Current_MBB_URL_no_change_Order_placement.feature:12)\r\n",
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
  "duration": 3635690837,
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
        "https://www.o2.co.uk/shop/my-offers/ipad",
        "https://www.o2.co.uk/shop/my-offers/tablet",
        "https://www.o2.co.uk/shop/existing-customer-offers#sort\u003dcontent.sorting.featured\u0026page\u003d1"
      ],
      "line": 18,
      "id": "c1786-e11362-11564-tc1-current-ipad-or-tablet-url-redirection-to-new-basecomm-page-url.feature;this-scenario-ensures-that-the-existing-customer-with-the-current-ipad-and-tablet-url-should-be-redirected-to-new-basecomms-page-url;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27150983280,
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
  "name": "verify that I get redirected to https://www.o2.co.uk/shop/existing-customer-offers#sort\u003dcontent.sorting.featured\u0026page\u003d1",
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
  "name": "verify that I get redirected to https://www.o2.co.uk/shop/existing-customer-offers#sort\u003dcontent.sorting.featured\u0026page\u003d1",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_am_existing_user_and_I_click_on_Signin_button()"
});
formatter.result({
  "duration": 26810122578,
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
  "duration": 19735302111,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsIpadURL()"
});
formatter.result({
  "duration": 14303353147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.o2.co.uk/shop/existing-customer-offers#sort\u003dcontent.sorting.featured\u0026page\u003d1",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyOldBaseCommsURL_Redirection(String)"
});
formatter.result({
  "duration": 22415421,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsOldTabletURL()"
});
formatter.result({
  "duration": 12425667565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.o2.co.uk/shop/existing-customer-offers#sort\u003dcontent.sorting.featured\u0026page\u003d1",
      "offset": 32
    }
  ],
  "location": "E2EOrderPlaced_Steps.VerifyOldBaseCommsURL_Redirection(String)"
});
formatter.result({
  "duration": 143167363,
  "status": "passed"
});
formatter.after({
  "duration": 2220674296,
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
  "duration": 24876275639,
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
  "duration": 26505375765,
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
  "duration": 19598502501,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 20164130726,
  "status": "passed"
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
  "duration": 25356698,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 22185813925,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to device details page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_device_details_page(E2EOrderPlaced_Steps.java:419)\r\n\tat ✽.And Navigate to device details page(C1786_E11510-11505_TC5_Non_Basecomm_tariff_basket_page_change_tariff_link_BAU_tariffs_decommission_flag.feature:10)\r\n",
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
  "duration": 5368391065,
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
  "name": "Verify that promotion ribbon is displayed for \u003cdevice_name\u003e",
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
  "duration": 24502023609,
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
  "name": "Verify that promotion ribbon is displayed for Apple�iPad Pro 9.7 inch",
  "matchedColumns": [
    2
  ],
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
  "duration": 27009533756,
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
  "duration": 18970893007,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12996843197,
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
  "duration": 514380793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple�iPad Pro 9.7 inch",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay(String)"
});
formatter.result({
  "duration": 368742135,
  "status": "passed"
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
  "duration": 287909588,
  "error_message": "java.lang.AssertionError: Expected device is not present\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkSeeDeviceDetailsPopUp(BaseCommPageActions.java:593)\r\n\tat steps.E2EOrderPlaced_Steps.Click_on_See_device_details_link_and_verify_correct_details_are_displayed(E2EOrderPlaced_Steps.java:3390)\r\n\tat ✽.And Click on \"See device details\" link for Apple�iPad Pro 9.7 inch and verify correct details are displayed(C1786_ECOM-11527-11529-11633_TC1_New_basecomms_page_iPads_tab_coming_soon_device_promo_header_banner_Pay_For_Your_Device_In_Full_link_TariffandExtras_page.feature:21)\r\n",
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
  "duration": 3125612781,
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
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Tablet\" device ,then the device tile for the \u0027coming soon\u0027 basecomms device should be displayed with the following information:\r\n\r\n1.Device image\n 2.Device title\n 3.Colour\n 4.Capacity\n 5.\"See device details\" link\n 6.Pricing information should NOT be displayed\n 7.Buy Now button NOT be displayed",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
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
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify expected \u003cdevice_name\u003e and its specific details are present in the device list for coming soon device \u003cdefault_colour\u003e,\u003cdefault_capacity\u003e,\u003cdefault_stock_message\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Veirfy device price is not required"
    },
    {
      "line": 20,
      "value": "#Verify Buy Now button is not enabled"
    }
  ],
  "line": 21,
  "name": "Verify that promotion ribbon is displayed for \u003cdevice_name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \"See device details\" link for \u003cdevice_name\u003e and verify correct details are displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;;",
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
      "line": 25,
      "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;;;1"
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
      "line": 26,
      "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27203617653,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "This scenario ensures that when the existing customer lands on new basecomm page selects \"Tablet\" device ,then the device tile for the \u0027coming soon\u0027 basecomms device should be displayed with the following information:\r\n\r\n1.Device image\n 2.Device title\n 3.Colour\n 4.Capacity\n 5.\"See device details\" link\n 6.Pricing information should NOT be displayed\n 7.Buy Now button NOT be displayed",
  "id": "c1786-ecom-11527-11529-11633-tc2-new-basecomms-page-other-tablets-tab-coming-soon-device-promo-header-banner.feature;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
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
  "name": "Click on Other Tablets tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
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
      "line": 19,
      "value": "#Veirfy device price is not required"
    },
    {
      "line": 20,
      "value": "#Verify Buy Now button is not enabled"
    }
  ],
  "line": 21,
  "name": "Verify that promotion ribbon is displayed for Samsung Galaxy Tab A 2016 10.1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
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
  "duration": 26268502685,
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
  "duration": 19349588978,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13554598526,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 24356491122,
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
  "duration": 838793917,
  "error_message": "java.lang.AssertionError: Expected color not selected by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:722)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3560)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list for coming soon device Black,16GB,In Stock(C1786_ECOM-11527-11529-11633_TC2_New_basecomms_page_Other_tablets_tab_coming_soon_device_promo_header_banner.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy Tab A 2016 10.1",
      "offset": 46
    }
  ],
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay(String)"
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
formatter.after({
  "duration": 3215199791,
  "status": "passed"
});
});