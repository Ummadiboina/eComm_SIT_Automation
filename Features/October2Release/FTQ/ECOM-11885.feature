Feature: ExistingCustomer_Repeat_Order_error_page_copy_changes

  This scenario ensures that when the Upgrade customer has already placed an order which is in undispatched state, then the customer should be displayed with the following customized error page while placing new upgrade order

  @Web
  Scenario Outline: ExistingCustomer_Repeat_Order_error_page_copy_changes

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And LogOut from the Upgrade Journey
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    And verify error screen is displayed with message "Order in Progress"

    Examples:
      | username           | password  | handset  | Action | Username     |
      | bvt2.cfu@gmail.com | cfubvt123 | GalaxyS7 | skip   | TEST ACCEPTA |
