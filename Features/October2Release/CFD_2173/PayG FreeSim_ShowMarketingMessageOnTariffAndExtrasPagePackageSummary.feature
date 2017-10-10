Feature: PayG FreeSim_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary

  @Web
  Scenario Outline: PayG FreeSim_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary Marketing message
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Verify the copytext of marketing message in "Tariff and Extras"
    And Select a tariff <tariff>
    And Verify the copytext of marketing message in "Basket Section"
    And I enter details in Delivery Page<Firstname> and <Surname>
    Then Free Sim order confirmation is displayed

    Examples:
      | Firstname | Surname | Section1        | Section2      |
      | TEST      | ACCEPTA | TariffAndExtras | BasketSummary |