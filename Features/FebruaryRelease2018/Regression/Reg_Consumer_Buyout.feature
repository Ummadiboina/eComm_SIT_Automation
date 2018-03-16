Feature: Reg_Consumer_Buyout.feature

  @Web
  Scenario Outline: This scenario ensures that the customer is able to successully Buyout the device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And click on 'Take offer and upgrade'button
    And Select a <handset> device from Recommended devices section
    And select any random tariff from Recommended devices section
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And verify if the buyout offer is displayed in My Package section
    And I Land on the basket page by clicking on Add to Basket button in the BuyOut Journey
    And verify if the buyout offer is displayed in Basket page
    And click on "go to checkout" button
    And verify if buyout offer is displayed under Order Summary section in <OTAC> page
    And perform <Action> in OTAC page
    And verify if buyout offer is displayed under Order Summary section in <Delivery> page
    Then Click on the 'Continue button' in delivery page
    And verify if buyout offer is displayed under Order Summary section in <Payment> page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And verify if buyout offer is displayed under Order Summary section in <Agreement> page
    And Continue to Agreements page and confirm all the agreement checks
    And verify if buyout offer is displayed under Order Summary section in <Review> page
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username       | password | handset        | Action | Username     |
      | 0987@098.com   | test123  | Apple iPhone 8 | skip   | TEST ACCEPTA |
