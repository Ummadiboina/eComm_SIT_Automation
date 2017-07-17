Feature: C1786_E-11353-11360-11361-11528_TC1_Existing_Custo_Basecomm_Ipads_Tab_Verification

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see 'iPads' tab with iPad related devices and 1*2 Banner Tile should be displayed for ongoing promotion
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify the contents of the iPad section in the landing page
    #Verify URL is iPad specific
    Then Verify only iPad specific devices are displayed under the iPad section

    Examples: 
      | username           | password  |
      | bvt2.cfu@gmail.com | cfubvt123 |
