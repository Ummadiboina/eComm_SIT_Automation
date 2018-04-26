Feature: Feb_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others
  This scenario ensures that when the customer on acquisition journey selects 'Phones' with click and collect enters the postcode in payment page, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline:Feb_CFA_Phones_CnC_Delivery_page_Payment_page_more_than_one_address_select_one_compress_others

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button' in GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed with Volte message
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post>


    Examples:
      | handset  | Firstname | Surname | Username       |consumer| B1       | B2   | B3       | B4      | Text     | Email    | Phone  | Post |status|
      | iPhone 6 | TEST       | ACCEPTA | TEST ACCEPTA  |    Me   | Select  | Not | Select     | Select |Select  |Select | Not | Not|Enabled|