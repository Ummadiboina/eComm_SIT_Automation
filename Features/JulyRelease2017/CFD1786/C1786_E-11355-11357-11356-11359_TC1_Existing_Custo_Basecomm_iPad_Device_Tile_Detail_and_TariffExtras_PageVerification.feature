Feature: C1786_E-11355-11357-11356-11359_TC1_Existing_Custo_Basecomm_iPad_Device_Tile_Detail_and_TariffExtras_PageVerification

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page and selects iPad tab,then the customer should be able to see the following
    
    In basecomm device tile:
    1.Device image
    2.Rating
    3.Colour dropdown
    4.Capacity dropdown
    5.Promotional ribbons(Blue ribbons if configured for the tariff)
    6.Pricing
    7.""Buy now"" button
    8.See device details"" link
    9.Stock message
    
    In Tariff and extras Page:
    1."Back to iPad offers" link 
    2. Basecomms offer tariffs

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify the contents of the iPad section in the landing page
    #Verify URL is iPad specific
    Then Verify only iPad specific devices are displayed under the iPad section
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Click on "See device details" link and verify correct details are displayed
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify Pay As You Go tab is not displayed
    And Verify all the details and links are displayed and working as expected in the "Tariffs and Extras" page
    
    

    Examples: 
      | username    | password | device_name | default_colour | default_capacity | default_stock_message | colour |
      | ink_jun9198 | test123  | iPad_abc    | grey           | 16GB             | In Stock              | white  |
      
      
      
      
      
