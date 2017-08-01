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
  "duration": 55785473381,
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
  "duration": 24327654412,
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
  "duration": 19600371807,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12141761164,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_the_contents_of_the_basecomm_landing_page()"
});
formatter.result({
  "duration": 14765720786,
  "status": "passed"
});
formatter.after({
  "duration": 1999633359,
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
  "duration": 24535529474,
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
  "duration": 24154027705,
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
  "duration": 11312032895,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 17768766098,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8304624699,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 7324950259,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 411227277,
  "status": "passed"
});
formatter.after({
  "duration": 2000110417,
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
  "duration": 25631074788,
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
  "duration": 23380800693,
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
  "duration": 18678457801,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 11839672515,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4435850603,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 3384053037,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 917907146,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8333628604,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 25139313,
  "status": "passed"
});
formatter.after({
  "duration": 1999642207,
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
  "duration": 25541992403,
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
  "duration": 24817582407,
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
  "duration": 18413857110,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12980478148,
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
  "duration": 1588155875,
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
  "duration": 37296494192,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "duration": 328954642,
  "status": "passed"
});
formatter.after({
  "duration": 1999597970,
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
  "duration": 25942868094,
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
  "duration": 26932677178,
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
  "duration": 20145620094,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12423574507,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4274799392,
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
  "duration": 10513913239,
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
  "duration": 36102342325,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_recommended_tariff_displayed_on_the_header_of_the_tariff_tile()"
});
formatter.result({
  "duration": 474983490,
  "status": "passed"
});
formatter.after({
  "duration": 2004268038,
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
  "duration": 29657839212,
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
  "duration": 36404059378,
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
  "duration": 19269076822,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12984250372,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8587519916,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 1173681916,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_iPad_specific_devices_are_displayed_under_the_iPad_section()"
});
formatter.result({
  "duration": 700163572,
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
  "duration": 1724767788,
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
  "duration": 1058694377,
  "error_message": "junit.framework.AssertionFailedError: Failed : Select \u003ccolor\u003e, \u003ccapacity\u003e of the device \u003cdevice_name\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.select_color_capacity_of_device(E2EOrderPlaced_Steps.java:3877)\r\n\tat ✽.And Select Silver, 256GB of the device Apple iPad Pro 9.7 inch(C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification.feature:29)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 3221736985,
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
  "duration": 27540314207,
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
  "duration": 24980843373,
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
  "duration": 19359429003,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 10985538569,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4436533984,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 7846762908,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_only_tablet_specific_devices_are_displayed_under_the_Other_tablets_section()"
});
formatter.result({
  "duration": 728038535,
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
  "duration": 998099909,
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
  "duration": 961208980,
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
  "duration": 6778295927,
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
  "duration": 34828753627,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Verify_Pay_As_You_Go_tab_is_not_displayed()"
});
formatter.result({
  "duration": 20027209276,
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
  "duration": 1217379410,
  "error_message": "java.lang.AssertionError: Unable to Verify dock header details in the Tariff and Extras Page.Assertion Failed: Dock header does not contain Back to offers link\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.PAYMandPAYGTariffAndExtrasPageActions.verifyBasecommTariffAndExtrasDockHeaderDetails(PAYMandPAYGTariffAndExtrasPageActions.java:178)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyAllDetailsLinksAreDispalyedAndWorkingAsExpectedInTariffsAndExtrasPage(E2EOrderPlaced_Steps.java:3716)\r\n\tat ✽.And Verify all the details and links are displayed and working as expected in the Tariffs and Extras page Samsung Galaxy Tab A 2016 10.1(C1786_E-11355-11357-11356-11359_TC2_Existing_Custo_Basecomm_Tablet_Device_Tile_Detail_and_TariffExtrasPage_Verification.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2980387903,
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
  "duration": 24754399159,
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
  "duration": 26772753140,
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
  "duration": 20766102644,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12414148017,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8294714781,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 2778700789,
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
  "duration": 1143367164,
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
  "duration": 303829485,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity()"
});
formatter.result({
  "duration": 20072999384,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify price updates\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(E2EOrderPlaced_Steps.java:3546)\r\n\tat ✽.Then Verify the price gets updated based on the new colour and capacity(C1786_E-11355-11357-11356-11359_TC3_Existing_Custo_Basecomm_iPad_Device_Update_Colour_Capacity_Verify_New_Price.feature:16)\r\n",
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
  "duration": 3232723114,
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
  "duration": 26122243558,
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
  "duration": 24794887838,
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
  "duration": 21676676267,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13542343472,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4623598997,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 4393781050,
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
  "duration": 1525979472,
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
  "duration": 506275362,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity()"
});
formatter.result({
  "duration": 20155404023,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify price updates\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifyPriceDisplaybased_on_Colour_and_capacity(E2EOrderPlaced_Steps.java:3546)\r\n\tat ✽.Then Verify the price gets updated based on the new colour and capacity(C1786_E-11355-11357-11356-11359_TC4_Existing_Custo_Basecomm_Other_tablets_Device_Update_Colour_Capacity_Verify_New_Price.feature:13)\r\n",
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
  "duration": 3442790590,
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
        "Apple�iPad Pro 9.7 inch",
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
  "duration": 27729460861,
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
      "line": 16,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 17,
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
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
  "duration": 25853969028,
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
  "duration": 18811871517,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 11363368268,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8233664135,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 2152434446,
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
  "duration": 532190070,
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
  "duration": 342253864,
  "error_message": "java.lang.AssertionError: Expected device is not present\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.BuynowwithDevice(BaseCommPageActions.java:705)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3329)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed(C1786_E-11355-11357-11356-11359_TC5_Existing_Custo_Basecomm_iPad_DD_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_Back_to_iPad_offers_link_and_check_navigation_Basecomm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2938020366,
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
  "duration": 25898424577,
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
  "duration": 24733806050,
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
  "duration": 20594018943,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12352953688,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4255777600,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofTabletSection()"
});
formatter.result({
  "duration": 6796138522,
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
  "duration": 2161974538,
  "error_message": "java.lang.AssertionError: Expected stockmsg not displayed by default\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.checkExpDevAndDetails(BaseCommPageActions.java:655)\r\n\tat steps.E2EOrderPlaced_Steps.verify_expected_device_and_details_are_in_device_list(E2EOrderPlaced_Steps.java:3514)\r\n\tat ✽.And Verify expected Samsung Galaxy Tab A 2016 10.1 and its specific details are present in the device list Black,16GB,Pre Order(C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification.feature:14)\r\n",
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
  "duration": 5883799998,
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
        "Apple�iPad Pro 9.7 inch",
        "Space Grey",
        "32GB",
        "Out of stock",
        "Silver",
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
  "duration": 25931639897,
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
      "line": 11,
      "value": "#Veirfy device price details are also getting displayed in the above step"
    }
  ],
  "line": 12,
  "name": "Select Silver, 128GB of the device Apple�iPad Pro 9.7 inch",
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
  "name": "Verify new image is as per the selected Apple�iPad Pro 9.7 inch,128GBand Silver in the Basecomms page",
  "matchedColumns": [
    2,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify new image is as per the selected Apple�iPad Pro 9.7 inch,128GBand Silver in the Tariffs and Extras Page",
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
  "duration": 20069511695,
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
  "duration": 18847849737,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 14160272631,
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
  "duration": 582736953,
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
  "duration": 202466403,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20079261296,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3532)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_E-11510-11505_TC1_iPads_tab_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:13)\r\n",
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
  "duration": 2973321575,
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
  "duration": 23609823071,
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
  "duration": 25671783240,
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
  "duration": 19040521593,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 15461569250,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4406025295,
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
  "duration": 4690751946,
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
  "duration": 489017410,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20047406724,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3532)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_E-11510-11505_TC2_Other_Tablets_Device_tile_Colour_and_Capacity_variant_Image_and_Promotion_change_same_variant_Tariff_page_Order_confirmation.feature:13)\r\n",
  "status": "failed"
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
  "duration": 2734050241,
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
  "duration": 22755865014,
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
  "duration": 26696322692,
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
  "duration": 18746713858,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 12240531926,
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
  "duration": 519175738,
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
  "duration": 130501116,
  "error_message": "java.lang.AssertionError: Expected device is not present\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.BaseCommPageActions.BuynowwithDevice(BaseCommPageActions.java:705)\r\n\tat steps.E2EOrderPlaced_Steps.SelectdeviceAndVerifyTariffandExtras(E2EOrderPlaced_Steps.java:3329)\r\n\tat ✽.And Click on \"Buy Now\" button for Apple�iPad Pro 9.7 inch and verify \"Tariffs and Extras\" page is displayed(C1786_E-11510-11505_TC3_iPads_Tab_Basecomm_tariff_basket_page_change_tariff_link.feature:11)\r\n",
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
  "duration": 3182444489,
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
  "duration": 26370911301,
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
  "duration": 24953740267,
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
  "duration": 19511541753,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 17358472057,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4316819044,
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
  "duration": 11942813593,
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
  "duration": 43352459289,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 3451883352,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 16495734085,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verify_choose_a_diff_tariff_link_displayed()"
});
formatter.result({
  "duration": 77056852,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page()"
});
formatter.result({
  "duration": 193140774,
  "error_message": "java.lang.AssertionError: User is not at Tariffs And Extras page\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actionsPerformed.PhonesListingPageAction.checkUserNavigatedTEPage(PhonesListingPageAction.java:1036)\r\n\tat steps.E2EOrderPlaced_Steps.click_choose_a_diff_tariff_link_and_check_navigation_TE_page(E2EOrderPlaced_Steps.java:3430)\r\n\tat ✽.And click on the \"Choose a different tariff\" link and verify user navigated back to \"Tariff and Extras\" page(C1786_E-11510-11505_TC4_Other_Tablets_Basecomm_tariff_basket_page_change_tariff_link.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2771619243,
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
  "duration": 32098828448,
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
  "duration": 28395791912,
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
  "duration": 20688723743,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13617613834,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_iPad_tab()"
});
formatter.result({
  "duration": 8208769014,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.VerifyContentsofIpadSection()"
});
formatter.result({
  "duration": 4017610791,
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
  "duration": 20068288616,
  "error_message": "junit.framework.AssertionFailedError: Fail: Cannot read the phone details from the container\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verify_current_sort_order(E2EOrderPlaced_Steps.java:3598)\r\n\tat ✽.And Verify the current sort order details MonthlyLowToHigh(C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature:12)\r\n",
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
  "duration": 3637153027,
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
  "duration": 24095986275,
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
  "duration": 24791678316,
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
  "duration": 20176646185,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 13313946789,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Click_on_Other_Tablets_tab()"
});
formatter.result({
  "duration": 4261156532,
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
  "duration": 26230732071,
  "error_message": "junit.framework.AssertionFailedError: Fail: Cannot read the phone details from the container\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verify_current_sort_order(E2EOrderPlaced_Steps.java:3598)\r\n\tat ✽.And Verify the current sort order details MonthlyLowToHigh(C1786_E11354-11447-11565_TC2_Existing_Custo_Other_Tablets_Filter_and_Sort_Functionality.feature:10)\r\n",
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
  "duration": 3828508373,
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
  "duration": 35448332316,
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
  "duration": 27694688734,
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
  "duration": 24448420437,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsMBBURL()"
});
formatter.result({
  "duration": 14566165921,
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
  "duration": 15290831786,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 15090917360,
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
  "duration": 3351128978,
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
  "duration": 31511419304,
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
  "duration": 41602609166,
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
  "duration": 18933173701,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.LaunchOldBaseCommsIpadURL()"
});
formatter.result({
  "duration": 14669702307,
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
  "duration": 74979456,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[www.ref.o2.co.uk/shop/existing-customer-offers]\u003e but was:\u003c[https://www.ref.o2.co.uk/shop/my-offers/ipad]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat actionsPerformed.BaseCommPageActions.CompareURL(BaseCommPageActions.java:131)\r\n\tat steps.E2EOrderPlaced_Steps.VerifyOldBaseCommsURL_Redirection(E2EOrderPlaced_Steps.java:3222)\r\n\tat ✽.And verify that I get redirected to www.ref.o2.co.uk/shop/existing-customer-offers(C1786_E11362-11564_TC1_Current_iPad_or_Tablet_URL_Redirection_to_new_Basecomm_page_URL.feature:12)\r\n",
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
  "duration": 3127242047,
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
  "duration": 27861512768,
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
  "duration": 24512461540,
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
  "duration": 20091357611,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Tablets_page()"
});
formatter.result({
  "duration": 27871663339,
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
  "duration": 42734177,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 23038098791,
  "error_message": "junit.framework.AssertionFailedError: Unable to navigate to device details page\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.Navigate_to_device_details_page(E2EOrderPlaced_Steps.java:414)\r\n\tat ✽.And Navigate to device details page(C1786_E11510-11505_TC5_Non_Basecomm_tariff_basket_page_change_tariff_link_BAU_tariffs_decommission_flag.feature:10)\r\n",
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
  "duration": 3371371017,
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
  "duration": 31560505638,
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
  "duration": 27999672288,
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
  "duration": 25538617609,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 20275967263,
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
  "duration": 1446055321,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20469929794,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3532)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_ECOM-11527-11529-11633_TC1_New_basecomms_page_iPads_tab_coming_soon_device_promo_header_banner_Pay_For_Your_Device_In_Full_link_TariffandExtras_page.feature:20)\r\n",
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
  "duration": 3162079292,
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
  "duration": 33020742809,
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
  "duration": 25554557635,
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
  "duration": 21840571775,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.I_navigate_to_the_Basecomm_Page()"
});
formatter.result({
  "duration": 18078797333,
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
  "duration": 1381709863,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.verifypromotionribbonDisplay()"
});
formatter.result({
  "duration": 20105435414,
  "error_message": "junit.framework.AssertionFailedError: Unable to verify promotion ribbon on the device\r\n\tat junit.framework.Assert.fail(Assert.java:47)\r\n\tat steps.E2EOrderPlaced_Steps.verifypromotionribbonDisplay(E2EOrderPlaced_Steps.java:3532)\r\n\tat ✽.And Verify that promotion ribbon is displayed(C1786_ECOM-11527-11529-11633_TC2_New_basecomms_page_Other_tablets_tab_coming_soon_device_promo_header_banner.feature:19)\r\n",
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
  "duration": 2897671477,
  "status": "passed"
});
