Feature: 12_Existing_customer_upgrading_non_companion_device_to_a_non_companion_device
##Need to check with team
  @Web
  Scenario Outline: Existing_customer_upgrading_non_companion_device_to_a_non_companion_device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And select the non companion device from the dropdown in UoP
    And select the non companion device <non_companion_device> from shop
    Then order confirmation is displayed

    Examples:
      | username       | password     |     non_companion_device       |
      |                |              |                            |
