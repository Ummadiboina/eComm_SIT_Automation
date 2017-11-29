Feature: This scenario verifies if user is able to login and log out successfully

  @Web
  Scenario Outline: CFU login logout device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    Then Verify that in the recycle value is displayed in the Recycle panel
    Then log out of consumer shop

    Examples:
      | username               | password |
      | in04572q_141562@o2.com | test123  |