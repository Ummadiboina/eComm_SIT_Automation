Feature: Reg_CS_Recycle.feature

  @Web
  Scenario Outline: This scenario ensures that the customer is able to recycle and upgrade
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    # Then Verify that in the recycle value is displayed in the Recycle panel
    And Select 'Not your device' option
    And Select <Make>, <Model> and <Network>
    And perform update device
    Then Select any one refundable recycle option
    And Verify 'Yes,get an accurate quote' is displayed
    And click on 'Yes,get an accurate quote'
    And answer the questionnaire and click on 'Accept and continue to upgrade' button
    And Select a <handset> device from Recommended devices section
    And Select ribboned tariff <tariff> in upgrade journey
    #And Select a tariff in upgrade journey
    Then choose appropriately in 'Your Sim Card'section
    #And select <NeedSim> action and confirm
    And I Land on the basket page for upgrades
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username                   | password | handset        | tariff                  | Firstname | Surname | Username     | Action | Make  | Model   | Network |
      | kllklsdklsklklklk@sdsd.com | test123  | Apple iPhone 7 | 19.99upfront45.00amonth | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Apple | Iphone7 | Orange  |
