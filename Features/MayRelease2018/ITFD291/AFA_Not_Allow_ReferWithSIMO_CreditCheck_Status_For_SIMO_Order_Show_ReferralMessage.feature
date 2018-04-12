Feature: AFA_Not_Allow_ReferWithSIMO_Credit_Check_Status_For_SIMO_Order_And_Show_ReferralMessage
  This scenario ensures that when agent on acquisition journey selects 'SIMO' and device and performs credit check status with 'RefferWithSIMO' then agent should see referral message and then should be able to place an order successfully and order submission status should be 'Referred' in log file

  @Web
  Scenario Outline: AFA_update_copy_for_Refer_with_Simo_response
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Credit check status for ReferralwithSimo


    Examples:
      | Device                | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |
      | Galaxy S8 Plus 64GB   | SimO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |           6 | SL11ER   |
