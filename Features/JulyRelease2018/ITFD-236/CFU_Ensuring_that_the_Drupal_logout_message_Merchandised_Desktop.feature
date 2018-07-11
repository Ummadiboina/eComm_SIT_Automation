Feature: CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop

  This scenario validates that the Drupal logout message should be merchandised

  @Web

  Scenario Outline: CFU_Ensuring_that_the_Drupal_logout_message_Merchandised_Desktop
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    Then Logout from shop
    And validate logout message
    And validate url after logout

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
