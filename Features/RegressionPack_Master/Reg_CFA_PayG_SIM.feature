Feature: CFA_PayG_SIM

@Regression
  Scenario Outline: Ordering a free sim 
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    #And Land on the 'Tariffs and extra' page
    And I enter details in Delivery Page<Firstname> and <Surname>
    Then Free Sim order confirmation is displayed

    Examples: 
      | Firstname | Surname |
      | TEST      | ACCEPTA |
