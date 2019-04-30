Feature: 60_CFA_SmartWatches_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled


  @Web
  Scenario Outline:60_CFA_SmartWatches_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And select any available <Device> Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Firstname | postcode | HouseNumber | Surname | Device        | ofComStatus | journey   | codeStatus | Username     | ofComMobileNum | codeVariant | pacStacCheck | pacStacCode |
      | TEST      | SL33FP   |             | ACCEPTA | Random Device | Enabled     | Accessory |            | TEST ACCEPTA |                |             |              |             |
