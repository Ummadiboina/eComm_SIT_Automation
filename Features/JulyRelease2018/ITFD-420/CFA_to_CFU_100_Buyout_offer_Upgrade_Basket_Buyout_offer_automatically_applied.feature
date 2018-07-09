Feature: CFU_Validate_Basket_Page_For_Simo_Tariff_With_Active_Voucherable_Promotions_Available_And_Valid_For_Current_Date_And_Upfront_Payment_Pending.feature

  This scenario validates basket and payment page is displayed for customer in Simo upgrade journey with active voucherable promotions available and upfront payment pending from customer

  @Web
  Scenario Outline: Sim Only PayM 30Days E2E validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And Click on 'Sign in' CTA for Existing customers sign in for express checkout
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' button on upgrade page
    And Click on 'Upgrade and existing number' tab and Click on 'Go to basket' CTA
    And verify if the buyout offer is not displayed in Basket page
    And Select 'I’ll keep my current sim' option
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | Contract | GiftBlock  | username                      | Username     | password | filtername | sortoption                 | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | 30 Days  | Configured | 05ap38085201@stf.ref.o2.co.uk | TEST ACCEPTA | test123  | high       | Monthly data (Low to High) | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |