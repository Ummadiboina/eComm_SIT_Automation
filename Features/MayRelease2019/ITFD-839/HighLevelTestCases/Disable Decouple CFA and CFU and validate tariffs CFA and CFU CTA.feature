Feature: Disable Decouple CFA and CFU and validate tariffs CFA and CFU CTA

  Drupal ECOMC-6076:Disable Decouple CFA and CFU and validate tariffs CFA and CFU CTA

  @Web
  Scenario Outline:Disable Decouple CFA and CFU and validate tariffs CFA and CFU CTA

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <configSubLink> link under Configuration section
    And Enable or Disable <decoupleCFACFUStatus> Decouple CFA and CFU Tariffs option
    And Save the Decouple CFA and CFU configuration
    Then Navigate to <drupalNavTabShop> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleCFACFUStatus>
    And save the drupal tariffs

    Examples:
      | userName   | password   | drupalNavTab  | decoupleCFACFUStatus | configSubLink | drupalNavTabShop | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA |
      | DuraiArasi | DuraiArasi | Configuration | Disable              | O2General     | Shop             | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) |              |
