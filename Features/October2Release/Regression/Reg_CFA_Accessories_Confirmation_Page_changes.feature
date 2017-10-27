Feature: CFA_Accessories_Confirmation_Page_changes

  @Web
  Scenario Outline:
  This scenario ensures that when the customer selects a accessory and tries to place an order,
  then the customer should be able to see the changes in Confirmation page

    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Accessories containing <Status>

    #Step 9 and Step 10 of ALM clubbed together
    Examples:
      | Firstname | Surname | Username     | Status   |
      | TEST      | ACCEPTA | TEST ACCEPTA | In Stock |
