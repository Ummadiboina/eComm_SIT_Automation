Feature: 10_Validating_And_Applying_Data_Sort_Order_For_CFA_Tariffs

  10_Validating_And_Applying_Data_Sort_Order_For_CFA_Tariffs

  @Web
  Scenario Outline:10_Validating_And_Applying_Data_Sort_Order_For_CFA_Tariffs

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleStatus>
    Then Verify the tariffs sort order for <TarifVariant> variant


    Examples:
      | userName   | password   | drupalNavTab | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA    | decoupleStatus | TarifVariant |
      | DuraiArasi | DuraiArasi | Shop         | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) | GETCFATariffCTA | Enable         | data         |
