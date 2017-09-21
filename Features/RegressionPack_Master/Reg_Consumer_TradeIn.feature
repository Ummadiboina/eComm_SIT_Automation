Feature: Reg_Consumer_TradeIn
@Regression
  Scenario Outline: This scenario ensures that the customer is able to successully Trade In the device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Verify trade in message is displayed under 'Get your latest phone on us today' section
    And Answer appropriate questionaire in 'your device' section
    And click on 'upgrade now' button
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff> with ribbons in upgrade journey
    #And Select a tariff in upgrade journey
    Then choose appropriately in 'Your Sim Card'section
    #And select <NeedSim> action and confirm
    And I Land on the basket page for upgrades
    And Verify 'Upgrade on us' displayed in basket page
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Verify 'Upgrade on us' displayed in delivery page
    And Click on the 'Continue button' in delivery page
    And Verify 'Upgrade on us' displayed in Payment page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Verify 'Upgrade on us' displayed in review page
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | username           | password  | handset        | tariff                  | Firstname | Surname | Username     | Action | Make  | Model   | Network |
      | bvt2.cfu@gmail.com | cfubvt123 | Apple iPhone 7 | 19.99upfront45.00amonth | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Apple | Iphone7 | Orange  |