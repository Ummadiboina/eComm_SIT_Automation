Feature: AFA_Phones_credit_check_status_REFERRALWITHDEPOSIT_copy_change_to_hold_deposit_for_6_months
  This scenario ensures that when the agent in acquisition journey is not met with a certain credit criteria, then the agent should be displayed with a copy to pay the deposit and hold the same for 6 months (Previously it  was 3 months)

  @Web
  Scenario Outline: AFA_Phones_credit_check_status_REFERRALWITHDEPOSIT_copy_change_to_hold_deposit_for_6_months
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And upon entering Valid details with valid new <Username2> and card number
    #The credit check status should be REFERRALWITHDEPOSIT
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device | Tariffs | Extras | Firstname | Surname | Username     | HouseNumber | PostCode | Username2 |
