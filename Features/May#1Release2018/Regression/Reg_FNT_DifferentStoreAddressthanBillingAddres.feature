Feature: Reg_FNT_DifferentStoreAddressthanBillingAddres

  @Web
  Scenario Outline: FNT PayM Different store address than billing address
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    #And input all the fields on the Delivery page for Click and collect and Click order on the 'Continue button'
    #And I land on the payment page and input all the details for Click and collect order and click 'Continue on next step'
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | handset           | Firstname | Surname | Username     |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA |
