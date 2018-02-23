Feature: CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others
  This scenario ensures that when the customer on acquisition journey selects 'Phones' with click and collect enters the postcode in payment page, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline:Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed with Volte message

    Examples:
      | handset        | Firstname | Surname | Username     |
      | Apple iPhone 6 | TEST      | ACCEPTA | TEST ACCEPTA |
