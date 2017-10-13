Feature: CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate

  This scenario ensures that when the customer in acquisition journey who have moved address recently selects 'PayM Phone', then the customer should be prompted with updated copy of 'Home Address' to ensure that their address is up to date

  Scenario Outline: CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Housenumber> and <Postcode> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and verify copy text message below home address
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed


    Examples:
      | handset          | Firstname | Surname | Username     | Status           | color |
      | AppleiPhone7Plus | TEST      | ACCEPTA | TEST ACCEPTA | Delayed Delivery | Black |
