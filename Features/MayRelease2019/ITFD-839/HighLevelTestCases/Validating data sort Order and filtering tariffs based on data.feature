Feature: Validating data sort Order and filtering tariffs based on data

  Drupal_ECOMC-6077: Validating data sort Order and filtering tariffs based on data

  @Web
  Scenario Outline:Validating data sort Order and filtering tariffs based on data

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleStatus>
    Then Verify the tariffs sort order for <TarifVariant> variant
    And Verify the available filterOptions below the result table
    And Select appropriate <filter> option and verify tariffs listing as per filter option
    And save the drupal tariffs

    Examples:
      | userName   | password   | drupalNavTab | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA    | decoupleStatus | TarifVariant | filter     |
      | DuraiArasi | DuraiArasi | Shop         | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) | GETCFATariffCTA | Enable         | data         | dataFilter |
