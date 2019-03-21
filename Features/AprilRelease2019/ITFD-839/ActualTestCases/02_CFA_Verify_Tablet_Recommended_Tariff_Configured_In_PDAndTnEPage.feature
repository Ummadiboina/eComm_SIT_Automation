Feature: 02_CFA_Verify_Tablet_Recommended_Tariff_Configured_In_PDAndTnEPage

  This scenario ensures that all the CFA tariffs are displayed for the selected brand, model and variant under Tariff
  config page in Drupal and configure the 'Recommended' tariff and validate the same on PD and T&E page

  @Web
  Scenario Outline:02_CFA_Verify_Tablet_Recommended_Tariff_Configured_In_PDAndTnEPage

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTabShop> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleCFACFUStatus>
    And Configure <preferredType> tariff type
    And save the drupal tariffs

    Examples:
      | userName   | password   | decoupleCFACFUStatus | drupalNavTabShop | preferredType | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA    |
      | DuraiArasi | DuraiArasi | Enable               | Shop             | Recommended   | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) | GETCFATariffCTA |
