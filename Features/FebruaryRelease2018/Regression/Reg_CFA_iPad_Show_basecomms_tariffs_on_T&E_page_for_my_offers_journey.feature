Feature: Reg_CFA_iPad_Show_basecomms_tariffs_on_T&E_page_for_my_offers_journey

  @Web
  Scenario Outline:  This scenario ensures that when the customer in Acquisition Journey lands on My offers page and clicks on 'iPads' tab, then the customer should be able to see 'iPad' devices associated with Bascom tariffs in device tile and Tariff and extras page

    Given I navigate to the Basecomm Page
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Select <color>, <capacity> of the device <device_name>
    #And Verify that promotion ribbon is displayed for <device_name>
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Basecomms page
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Tariffs and Extras Page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on continue shopping button
    #And LogOut from the Upgrade Journey
    #And close Ready to checkout pop up if displayed
    And I navigate to iPad landing page
    And select the same basecomms iPad <device_name>
    And Navigate to device details page
    And verify that the Basecomms tariff is not displayed in the Tariff and Extras page

    Examples:
      | device_name    | default_colour | default_capacity | default_stock_message | color  | capacity |
      | Apple iPad 9.7 | Space Grey     | 32GB             | In Stock              | Silver | 128GB    |
