Feature: Verify campaigns tariff for existing campaign

  Drupal_ECOMC-6079: Select existing campaigns and perform map tariffs and get the CFA, CFU tariffs list

  @Web
  Scenario Outline:Verify campaigns tariff for existing campaign

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <shopSubLink> link under Shop section
    And Verify the existing campaigns
    And Click on campaign <campaignOption> operations
    Then Select campaign <campaignBrand> and <campaignMdl> and get tariffs for mapping
    Then Verify CFA and CFU Tariffs


    Examples:
      | userName   | password   | drupalNavTab | campaignBrand | shopSubLink | campaignMdl        | campaignOption |
      | DuraiArasi | DuraiArasi | Shop         | Apple         | Campaigns   | iPad Pro 10.5 inch | Map Tariffs    |
