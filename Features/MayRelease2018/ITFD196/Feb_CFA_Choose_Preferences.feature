Feature: Feb_CFA_Choose_Preferences
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
    Then Choose Your Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4>

    Examples:
      | handset        | Firstname | Surname | Username     | B1     | B2  | B3     | B4     | C1   | C2    | C3  | C4 |
      | Apple iPhone 6 | TEST      | ACCEPTA | TEST ACCEPTA | Select | Not | Select | Select |Select|Select | Not | Not|