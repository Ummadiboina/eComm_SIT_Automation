Feature: CFA_Phones_credit_check_status_REFERRAL_copy_change_to_hold_deposit_for_6_months
  This scenario ensures that when the customer in acquisition journey is not met with a
  certain credit criteria, then the customer shouldl (Previously it  was 3 months)

  @Web
  Scenario Outline: CFA_Phones_credit_check_status_REFERRAL_copy_change_to_hold_deposit_for_6_months
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    Then Additional information page should be displayed
    And the customer is displayed with sample copy text
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    # The credit check status should be REFERRALL

    Examples:
      | handset | Firstname | Surname |


