Feature: CFU_Validate_Basket_Page_For_Simo_Tariff_With_No_Voucherable_Promotions_Available.feature

  This scenario validates if basket page is displayed for customer in Simo upgrade journey with no voucherable promotions available for the selected tariff

  @Web
  Scenario Outline: CFU_Validate_Basket_Page_For_Simo_Tariff_With_No_Voucherable_Promotions_Available
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And Click on 'Select' CTA to buy a tariff
    And Select 'I need a new sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                     | password | tariff | Username     | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |        | TEST ACCEPTA | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |