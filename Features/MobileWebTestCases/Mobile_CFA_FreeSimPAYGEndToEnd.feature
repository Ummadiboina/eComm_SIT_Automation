Feature: Mobile CFA_PayG_IpadandTablet_SIM_Mobile

  @Mobile
  Scenario Outline:  Ordering a Ipad or Tablet free sim in Mobile Handset
    Given I am an CFA user and Lands on Mobile shop page
    And navigate to PayG SIMO page in Mobile
    And Tap on iPads and Tabets Tab
    And Tap on iPad Sims > Pick a Sim
    And Verify user is navigated to Delivery details page
    And input the below details in Delivery page
      | HouseNumber           | 5            |
      | Post Code             | BS7 0NP      |
      | Title                 | Mr           |
      | FirstName             | TEST         |
      | Surname               | ADDINFOD     |
      | Contact Number        | 078228377333 |
      | Password              | TesterSit123 |
      | Security Question     | Random       |
      | Security Answer       | Sit Testers  |
      | Date of Birth - Date  | 22           |
      | Date of Birth - Month | 10           |
      | Date of Birth - Year  | 1990         |
    And Tap on Send me my sim button
    Then Free Sim order confirmation is displayed

    Examples: 
      | HouseNumber | Postcode | emailAddress | FirstName | Firstname | contactNumber |
      |          10 | SL11UP   | RANDOM       | ACCEPTA   | TEST      | ACCEPTA       |