Feature: CFA_PayG_SIM

  @ConsumerShop
  Scenario Outline: Ordering a free sim 
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Land on the 'Tariffs and extra' page
    And I enter details in Delivery Page<Firstname> and <Surname>
  # And I click on 'Send me my sim' CTA
    Then Free Sim order confirmation is displayed

    Examples: 
      | Firstname | Surname |
      | TEST      | ACCEPTA |
