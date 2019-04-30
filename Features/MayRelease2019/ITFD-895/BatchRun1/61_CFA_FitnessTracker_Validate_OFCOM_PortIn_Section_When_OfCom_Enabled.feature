Feature: 61_CFA_FitnessTracker_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled


  @Web
  Scenario Outline: 61_CFA_FitnessTracker_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I am an CFA user and Lands on shop page
    And Navigate to Fitness Trackers
    And select any available <Device> Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Device        | postcode | HouseNumber | Firstname | Surname | Username     | ofComStatus | journey   | codeStatus | ofComMobileNum | codeVariant | pacStacCheck | pacStacCode |
      | Random Device | SL33FP   |             | TEST      | ACCEPTA | TEST ACCEPTA | Enabled     | Accessory |            |                |             |              |             |
