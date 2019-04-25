Feature: 11_Existing_customer_upgrading_companion_device

  @Web
  Scenario Outline: Existing_customer_upgrading_companion_device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And select the companion device from the dropdown in UoP
    And select any companion device <companion_device> from UoP
    And Select a tariff <tariff>
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And click on "go to checkout" button
   # And perform <Action> in OTAC page
    And Verify if the customer lands on lead device pairing page with the MSISDN displayed in the dropdown
    And Click on 'Begin fast checkout'
    And land on the payment page and input <username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username       | password     |     companion_device       |    tariff    |
      |                |              |                            |              |
