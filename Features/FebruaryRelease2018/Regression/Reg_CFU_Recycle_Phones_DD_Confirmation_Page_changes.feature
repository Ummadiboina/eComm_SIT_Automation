Feature: Reg_CFU_Recycle_Phones_DD_Confirmation_Page_changes.feature

  @Web
  Scenario Outline:
  This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone,
  then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    Then Verify that in the recycle value is displayed in the Recycle panel
    And Select <Make>, <Model> and <Network>
    And perform update device
    Then Select any one recycle option and click on 'Continue to Upgrade'
    And click on 'Yes,get an accurate quote'
    And answer the questionnaire and click on 'Accept and continue to upgrade' button
    And Select a <handset> device from Recommended devices section
    And Select ribboned tariff <tariff> in upgrade journey
    #And Select a tariff in upgrade journey
    And I Land on the basket page for upgrades
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>

    Examples:
      | username                     | password | handset        | tariff                 | Firstname | Surname | Username     | Action | Status           | Make  | Model   | Network |
      | ink_aug5715@stf.ref.o2.co.uk | test123  | Apple iPhone 7 | 9.99upfront84.00amonth | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Delayed Delivery | Apple | Iphone7 | Orange  |
