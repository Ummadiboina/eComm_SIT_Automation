Feature: DrupalPageCookiesPopUp
  This scenario ensures that when the customer browses the Drupal page for the first time then the cookie pop up should be displayed

  @Web

  Scenario: DrupalPageCookiesPopUp

    Given I am an CFA user and Lands on shop page
    And a cookies pop up should be displayed
    And Delete all cookies
    And launch the shop phones page


