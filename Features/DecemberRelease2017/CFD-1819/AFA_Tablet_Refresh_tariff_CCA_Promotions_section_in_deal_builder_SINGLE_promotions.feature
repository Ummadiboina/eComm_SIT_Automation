Feature: AFA_Tablet_Refresh_tariff_CCA_Promotions_section_in_deal_builder_SINGLE_promotions
  This scenario ensures that when the Agent in acquisition selects a 'Tablet' and tariff with single promotion, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder and agent should be able to complete the order by CCA link

  @Web
  Scenario Outline: AFA_Tablet_Refresh_tariff_CCA_Promotions_section_in_deal_builder_SINGLE_promotions
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Single promotion
    And verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And verify that the promotion returned is displayed in a single line
    And Select the tariff option in the deal builder 'Dropdown' for generating CCA
    And Validate all the Basket content and checkout
    And verify that the 'Promotions' section is displayed with all the applied promotions description in the order summary
    And Verify that the promotion returned is displayed in a single line
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And get the emailid
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using CCA valid emailid and <password1> credentials
    And Click on 'Continue' button on upgrade page
    And Click on the 'Continue button' in delivery page


    Examples:
      | Device              | Tariff  | Firstname | Surname | Username     | HouseNumber | PostCode | emailid        | password1    |
      |                     | Refresh | TEST      | ACCEPTA | TEST ACCEPTA | Flat 6      | SL11ER   | tester@tes.com | SitTester123 |