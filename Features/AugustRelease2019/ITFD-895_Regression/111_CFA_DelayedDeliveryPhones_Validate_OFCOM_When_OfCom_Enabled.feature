Feature: 111_CFA_DelayedDeliveryPhones_Validate_OFCOM_When_OfCom_Enabled

  @Web
  Scenario Outline:111_CFA_DelayedDeliveryPhones_Validate_OFCOM_When_OfCom_Enabled

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And check the status <Status> of the device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And Input about you details <Firstname> and <Surname> and other delivery details in delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    #And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    #And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And Click on Go To Payment CTA in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | handset   | color | Capacity | Status           | Firstname | Surname | Username     | journey               | ofComStatus | pacStacCheck | codeStatus | codeVariant | pacStackRetainCheck | ofComMobileNum | pacStacCode | BSCstatus | BillCap   | CapAmount |
      | iPhone 6s | Gold  | 32GB     | Delayed Delivery | TEST      | ACCEPTA | TEST ACCEPTA | DelayedDelivery Phone | Enabled     | Yes          | valid      | PAC         | Yes                 | 07707003537    | XBA794587   | Enabled   | CapMyBill | £15       |
