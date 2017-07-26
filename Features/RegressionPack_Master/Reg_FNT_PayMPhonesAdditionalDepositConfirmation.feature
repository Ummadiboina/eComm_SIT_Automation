Feature: Reg_FNT_PayMPhonesAdditionalDepositConfirmation

  @FNTRegression
  Scenario Outline: FNT CFA PayM phones Additional information and Order confirmed
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    Then Additional information page should be displayed
    And upon entering Valid details with valid new <Username2> and card number
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | Firstname | Surname  | Username      | handset  | Username2    |
      | TEST      | ADDINFOI | TEST ADDINFOI | GalaxyS7 | TEST ACCEPTA |
