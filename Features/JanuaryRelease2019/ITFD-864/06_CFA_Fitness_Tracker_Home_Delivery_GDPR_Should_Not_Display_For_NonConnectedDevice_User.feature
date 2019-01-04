Feature: 06_CFA_Fitness_Tracker_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User

  This Scenario ensures that when the Customer in acquisition journey selects 'fitness tracker' and lands on delivery page
  then customer should not be displayed with gdpr end user question and consent

  @Web
  Scenario Outline: 06_CFA_Fitness_Tracker_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User
    Given I am an CFA user and Lands on shop page
    And Navigate to Fitness Trackers
    And select any available <Device> Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device        | Firstname | Surname | Username     | B1  | B2  | B3  | DeviceType   | GDPRstatus | PreSelected | KeyEvent |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | Not | Not | Not | NonConnected | Enabled    | No          | No       |
