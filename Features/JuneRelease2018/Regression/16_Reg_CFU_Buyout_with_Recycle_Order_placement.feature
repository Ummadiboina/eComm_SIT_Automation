Feature: 16_Reg_CFU_Buyout_with_Recycle_Order_placement

  This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed with Recycle in  'Your package' summary

  @Web
  Scenario Outline: CFU_Buyout_with_Recycle_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Verify that the buyout offer section is displayed with 'Take offer and Upgrade' CTA under 'Your Options' heading
    And Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed
    And Click on 'Take Offer and Upgrade' button
    And Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users
    And Verify that the customer is able to do recycle and buyout together
    When Click on any one of the recycle option then Click on  'Yes get an accurate quote'
    And Answer the Questions in the questionnaire
    Then Click on 'Accept and continue to upgrade'
    And Select a Device from the recommended section
    Then Select a Tariff
    And Verify that in 'Your package' summary Buyout is displayed with Recycle
    Then Click on 'Add and Go to Basket' button
    And Verify that in 'Your package' summary Buyout is displayed with Recycle
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Tablet        | Action | Surname | Username     | filtername | sortoption                 | username                     | password | consumer     | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Random Device | skip   | ACCEPTA | TEST ACCEPTA | low        | Monthly data (Low to High) | ins_nov6572@stf.ref.o2.co.uk | test123  | SomeOne else | Select | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
   #   | Apple iPhone 7    | TEST      | ACCEPTA | TEST ACCEPTA | high       |