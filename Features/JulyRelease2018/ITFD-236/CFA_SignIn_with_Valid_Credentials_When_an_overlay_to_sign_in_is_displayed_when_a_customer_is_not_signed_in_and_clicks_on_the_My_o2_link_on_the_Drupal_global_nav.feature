Feature: CFA_SignIn_with_Valid_Credentials_When_an_overlay_to_sign_in_is_displayed_when_a_customer_is_not_signed_in_and_clicks_on_the_My_o2_link_on_the_Drupal_global_nav

  This scenario validates that an overlay to sign in is displayed when a customer is not signed in and clicks on the My o2 link on the Drupal global nav

  @Web

  Scenario Outline: CFA_SignIn_with_Valid_Credentials_When_an_overlay_to_sign_in_is_displayed_when_a_customer_is_not_signed_in_and_clicks_on_the_My_o2_link_on_the_Drupal_global_nav
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    Then validate 'My O2' page
    And Enter valid credentials <username> <password> and submit form
    Then Logout from MyO2 page
    And click on 'My O2' link
    Then validate pre-populated input fields at My O2 page

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
