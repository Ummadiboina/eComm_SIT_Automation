Feature: Drupal ECOMC-6076


  @Web
  Scenario Outline:Drupal ECOMC-6076

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <configSubLink> link under Configuration section
    And Enable Decouple CFA and CFU Tariffs option and save the configuration
    Then Navigate to <drupalNavTabShop> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleStatus>
    And save the drupal tariffs

    Examples:
      | userName   | password   | drupalNavTab  | configSubLink | drupalNavTabShop | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA    | decoupleStatus |
      | DuraiArasi | DuraiArasi | Configuration | O2General     | Shop             | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) | GETCFATariffCTA | Enabled        |
