Feature: Invalid_Credentials_DGN_Clicking_My_O2_link_on_global Nav_Tablet

  This scenario ensures that when a customer is not signed in and tries to sign in with invalid credentials in 'My o2' link overlay on Drupal global nav,then the  error message should be displayed on the overlay

  @Web

  Scenario Outline: Invalid_Credentials_DGN_Clicking_My_O2_link_on_global Nav_Tablet
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    Then validate 'My O2' section
    And Enter valid credentials <username> <password> and submit form


    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
