Feature: C1786_E-11355-11357-11356-11359_TC6_Existing_Custo_Basecomm_Other_Tablet_PreOrder_Stock_Message_and_Back_To_Ipad_Offer_Link_Verification

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page and selects "Other tablets" tab,then the customer should be able to see the following
    
    1.Pre Order delivery status on device tile
    2.Clicking "Back to tablet offers" link should take the customer back to the basecomms listing page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Click on Other Tablets tab
    And Verify the contents of the tablet section in the Other Tablets tab
    #verify that URL is specific to tablet
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    Then click on the "Back to tablet offers" link and verify user gets redirected to Basecomms listing page

    Examples: 
      | username    | password | device_name | default_colour | default_capacity | default_stock_message |
      | ink_jun9198 | test123  | tablet_abc  | grey           | 16GB             | PreOrder              |
