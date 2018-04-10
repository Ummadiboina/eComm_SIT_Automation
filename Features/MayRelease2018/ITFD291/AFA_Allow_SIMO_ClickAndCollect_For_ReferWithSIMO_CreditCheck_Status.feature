Feature: AFA_Allow_SIMO_ClickAndCollect_For_ReferWithSIMO_Credit_Check_Status
  This scenario ensures that when agent on acquisition journey selects 'SIMO' tariff with Click And Collect option and performs credit check status with 'RefferWithSIMO' then agent should see referral message and then should be able to place an order successfully and order submission status should be 'Referred' in log file

  @Web
  Scenario Outline: AFA_update_copy_for_Refer_with_Simo_response
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariff> from tariffs tab
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Credit check status for ReferralwithSimo
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then agent should be displayed with updated copy of 'Refer with Simo' response

    Examples:
      | Tariff | DeliveryType | Firstname | Surname           | Username     | HouseNumber | PostCode |
      | SIMO   | HomeDelivery | TEST      | ReferralWithSimo  | TEST ACCEPTA |           6 | SL11ER   |
