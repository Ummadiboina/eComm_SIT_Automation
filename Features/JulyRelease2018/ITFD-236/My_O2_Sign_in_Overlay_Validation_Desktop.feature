Feature: My_O2_Sign_in_Overlay_Validation_Desktop

  This scenario ensures that when a customer is not signed in and clicks on the 'My o2' link on the Drupal global nav,then an overlay to 'Sign in' should be displayed

  @Web

  Scenario Outline: My_O2_Sign_in_Overlay_Validation_Desktop
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    Then validate 'My O2' section
    And Enter valid credentials <username> <password> and submit form
    Then Logout from MyO2 page
    And click on 'My O2' link
    Then validate pre-populated input fields at My O2 page

    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
