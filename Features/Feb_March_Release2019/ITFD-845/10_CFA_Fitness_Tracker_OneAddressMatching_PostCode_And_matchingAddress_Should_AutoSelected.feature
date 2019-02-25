Feature: 10_CFA_Fitness_Tracker_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected

  This Scenario ensures that when the Customer in acquisition journey selects 'Fitness Tracker' and lands on delivery
  page and enters a postal code, if only one address is matching corresponding to entered postcode then it should be
  auto selected

  @Web
  Scenario Outline: 10_CFA_Fitness_Tracker_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected
    Given I am an CFA user and Lands on shop page
    And Navigate to Fitness Trackers
    And select any available <Device> Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device        | postcode | HouseNumber | Firstname | Surname | Username     | B1  | B2  | B3  | DeviceType   | GDPRstatus | PreSelected | KeyEvent |
      | Random Device | SL33FP   |             | TEST      | ACCEPTA | TEST ACCEPTA | Not | Not | Not | NonConnected | Enabled    | No          | No       |
