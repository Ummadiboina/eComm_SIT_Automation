Feature: DrupalPageCookiesPopUp
  This scenario ensures that when the pop up is displayed then the links in the pop up should launch the respective pages
  @Web
  Scenario: DrupalPageCookiesPopUp

    Given I am an CFA user and Lands on shop page
    And a cookies pop up should be displayed
    And Click on 'cookie policy' link
    Then the 'cookie policy' page should be opened
    And Delete all cookies
    And launch the shop phones page
    And click on 'manage cookies' link
    Then the 'manage cookies' page should be opened
    And Delete all cookies
    And launch the shop phones page
    And click on 'close icon'
    And The Shop home page should be displayed without the cookies
