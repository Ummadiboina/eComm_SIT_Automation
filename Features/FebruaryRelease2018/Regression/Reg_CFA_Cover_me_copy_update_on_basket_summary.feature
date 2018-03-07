Feature: Reg_CFA_Cover_me_copy_update_on_basket_summary

  @Web
  Scenario Outline:
  This scenario ensures that when the customer on acquisition journey selects insurance,
  then the customer should be able to see 'Insurance' copy text in the SSC checkout Your order section instead of 'Cover Me'

  select tablet
  and view tariff
  select insurance
  go to basket
  go to checkout
  verify insurance copy text is displayed on delivery page
  continue to payment page
  verify insurance copy text is displayed on payment page
  continue to next step
  verify insurance copy text is displayed on the agreement page
  continue to next step
  verify insurance copy text is displayed on your order section
  continue to next step
  download pdf and  verify insurance copy text is displayed on pdf

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And select an insurance
    #And Click on "Buy Now" button for <tabletname>
    And I Land on the basket page and choose home delivery option
    And verify cover me is present in Basket page
    And click on "go to checkout" button
    Then verify cover me is present in delivery page
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    Then verify cover me is present in  payment page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    Then verify cover me is present in  agreements page
    And Continue to Agreements page and confirm all the agreement checks
    Then verify cover me is present in review page
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then verify cover me is present in  pdf download

    #And pdf content
    Examples:
      | tabletname    | color     | capacity | Status   | handset           | Firstname | Surname | Username     |
      | Random Device | Rose Gold | 256GB    | In Stock | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA |
