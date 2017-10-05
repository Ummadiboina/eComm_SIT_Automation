Feature: CFA_PayG_IpadandTablet_SIM_Mobile

  @Appium
  Scenario Outline: Ordering a Ipad or Tablet free sim in Mobile Handset
    Given I am an CFA user and Lands on Mobile shop page
    And navigate to PayG SIMO page in Mobile
    And Tap on iPads and Tabets Tab
    And Tap on iPad Sims > Pick a Sim
    And Verify user is navigated to Delivery details page
    And Enter <HouseNumber>, <Postcode> and Add the Address details
    And Enter <emailAddress>, <FirstName>, <Surname> and <contactNumber>
    And Tap on Send me my sim button
    Then Free Sim order confirmation is displayed

    Examples: 
      | HouseNumber | Postcode | emailAddress | FirstName | Firstname | contactNumber |
      |          10 | SL11UP   | RANDOM       | ACCEPTA   | TEST      | ACCEPTA       |