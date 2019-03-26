Feature: 58_Reg_CS_FitnessTrackers

  @Web
  Scenario Outline: Fitness Trackers only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to Fitness Trackers
    And select any available <Device> Fitness tracker
    And add FitnessTracker to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device        | Firstname | Surname | Username     | B1     | B2  | B3  | B4  | DeviceType   | PreSelected | KeyEvent | GDPRstatus |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | Select | Not | Not | Not | NonConnected | No          | No       | Enabled    |
