Feature: 31_Display_Two_Additional_Buttons_on_TariffConfig_When _Flag_Enabled

  This scenario ensures that the additional two buttons  “Get CFA Tariff“ & “Get CFU Tariff“ and "Get Base Comms Tariff"
  are seen under tariff configuration page

  @Web
  Scenario Outline:31_Display_Two_Additional_Buttons_on_TariffConfig_When _Flag_Enabled

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTabShop> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleCFACFUStatus>
    And save the drupal tariffs

    Examples:
      | userName   | password   | decoupleCFACFUStatus | drupalNavTabShop | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA    |
      | DuraiArasi | DuraiArasi | Enable               | Shop             | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) | GETCFATariffCTA |
