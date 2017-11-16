Feature: CFA_PayG Tablets_Shop_do_NOT_show _CIP_page
  This scenario ensures that when customer on acquisition journey selects 'PayG Phone' and  lands on delivery/review page and when click on browser back or change the url to go to shop, then the customer will not be shown check out in progress page as Order dirty flag will be false

  @Web
  Scenario Outline: CFA_PayG Tablets_Shop_do_NOT_show _CIP_page
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Select a tariff <tariff>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And the customer lands on delivery page
    And Click on browser back arrow and land on Basket page
    #Checkout In Progress page should not be displayed
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | handset       | Firstname | Surname | Username     |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA |