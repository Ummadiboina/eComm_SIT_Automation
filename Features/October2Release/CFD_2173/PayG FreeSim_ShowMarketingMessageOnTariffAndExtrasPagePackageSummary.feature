Feature: PayG FreeSim_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary

  @ConsumerShop
  Scenario Outline: PayG FreeSim_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary Marketing message
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Verify the copytext of marketing message in <TileName>
    And Select a tariff <tariff> 
    And Verify the copytext of marketing message in <DeliverSummary>
    And I enter details in Delivery Page<Firstname> and <Surname>
    Then Free Sim order confirmation is displayed

    Examples: 
      | Firstname | Surname |TileName|DeliverSummary|
      | TEST      | ACCEPTA |
