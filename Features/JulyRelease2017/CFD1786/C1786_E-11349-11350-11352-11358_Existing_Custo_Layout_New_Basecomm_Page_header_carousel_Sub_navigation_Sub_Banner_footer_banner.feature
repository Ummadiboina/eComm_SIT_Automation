Feature: C1786_E-11349-11350-11352-11358_Existing_Custo_Layout_New_Basecomm_Page_header_carousel_Sub_navigation_Sub_Banner_footer_banner

  Scenario Outline: "This scenario ensures that when the existing customer lands on new basecomm page, then the customer should be able to see the following changes in basecomm page
    
    1.The Header carousel should be displayed on the top of the page
    2.Static sub-navigation should be displayed on the top of the page above the header carousel
    3.Banner description for Sub-banner should be displayed below the header carousel 
    4.Footer banner should be displayed below the tariff tiles

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    Then Verify the contents of the basecomm landing page

    Examples: 
      | username    | password |
      | ink_jun9198 | test123  |
