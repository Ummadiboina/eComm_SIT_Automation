Feature: C1786_ECOM-11527-11529-11633_TC1_New_basecomms_page_iPads_tab_coming_soon_device_promo_header_banner_Pay_For_Your_Device_In_Full_link_TariffandExtras_page

  Scenario Outline: This scenario ensures that when the customer lands on new basecomm page selects "iPads" device ,then the device tile for the 'coming soon' basecomms device should be displayed with the following information:
    
    1.Device image
    2.Device title
    3.Colour
    4.Capacity
    5."See device details" link
    6.Pricing information should NOT be displayed
    7.Buy Now button NOT be displayed

    #Pay for your device in full link should be displayed in Tariff and extras page
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify expected <device_name> and its specific details are present in the device list for coming soon device <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price is not required
    #Verify Buy Now button is not enabled
    And Verify that promotion ribbon is displayed
    And Click on "See device details" link for <device_name> and verify correct details are displayed 
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And click on "Pay for your device in full" link and select a "random" tariff
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Modify the above step to include pdf download
    Examples: 
      | username    | password | device_name | default_colour | default_capacity | default_stock_message | color | capacity | user         |
      | ink_jun9198 | test123  | iPad_abc    | grey           | 16GB             | In Stock              | white | 128GB    | TEST ACCEPTA |
