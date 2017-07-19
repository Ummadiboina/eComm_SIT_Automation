Feature: C1786_E-11353-11360-11361-11528_TC2_Existing_Custo_Basecomms_Other_Tablets_Tab_Verification

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see 'iPads' tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Click on Other Tablets tab
    And Verify the contents of the tablet section in the Other Tablets tab
    #verify that URL is specific to tablet
    And Verify only tablet specific devices are displayed under the Other tablets section
    And Click on iPad tab
    And Verify the contents of the iPad section in the landing page

    #Verify URL is iPad specific
    Examples: 
      | username             | password |
      | 07770001111@o2.co.uk | test123  |
