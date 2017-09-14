Feature: Reg_Consumer_Buyout

  Scenario Outline: This scenario ensures that the customer is able to successully Buyout the device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    And click on 'Take offer and upgrade'button
    And Select a <handset> device from Recommended devices section
    And select any random tariff from Recommended devices section
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And verify if the buyout offer is displayed in My Package section
    And I Land on the basket page by clicking on Add to Basket button
    And verify if the buyout offer is displayed in Basket page
    And click on "go to checkout" button
    And verify if buyout offer is displayed in OTAC page
    And perform <Action> in OTAC page
    And verify if buyout offer is displayed in ordersummary sections
    Then Click on the 'Continue button' in delivery page
    And verify if buyout offer is displayed in ordersummary sections
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Examples: 
      | username                     | password | handset        | Action |
      | ins_jan5987@stf.ref.o2.co.uk | test123  | Apple iPhone 7 | skip   |
