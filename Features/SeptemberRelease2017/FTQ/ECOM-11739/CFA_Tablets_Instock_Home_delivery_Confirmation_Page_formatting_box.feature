Feature: CFA_Tablets_Instock_Home_delivery_Confirmation_Page_formatting_box

  Scenario Outline: 
    This scenario ensures that when the customer selects a Instock tablet and opts for home delivery, 
    then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Navigate to device details page
    And Click on "Buy Now" button for <tabletname> and verify "Tariffs and Extras" page is displayed
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Tablets containing <Status>

        #Step 14 till Step 16 of ALM clubbed together
    Examples: 
      | tabletname               | color     | capacity | Status   |
      | Apple iPad Pro 10.5 inch | Rose Gold | 256GB    | In Stock |
