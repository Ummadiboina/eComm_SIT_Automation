Feature: Ensuring that the Drupal- logout message is merchandised_Desktop

  This scenario validates that the Drupal - logout message is merchandised

  @Web123

  Scenario Outline: Ensuring that the Drupal- logout message is merchandised_Desktop
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    Then Logout from shop
    And validate logout message
    And validate url after logout

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
