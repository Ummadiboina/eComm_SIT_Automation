Feature: 32_Verify_campaigns_Display_Filtered_Variants_Campaign_Mapping_Screen

When Variants are Filtered on Campaign mapping screen and clicked on "all checkbox" then  only the filtered variants
should be Checked

  @Web
  Scenario Outline:32_Verify_campaigns_Display_Filtered_Variants_Campaign_Mapping_Screen

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <shopSubLink> link under Shop section
    And Verify the existing campaigns
    And Click on campaign <campaignOption> operations
    Then Select campaign <campaignBrand> and <campaignMdl> and get tariffs for mapping
    Then Verify CFA and CFU Tariffs
    And Verify the available filterOptions below the result table
    And Select appropriate <filter> option and verify tariffs listing as per filter option


    Examples:
      | userName   | password   | drupalNavTab | campaignBrand | shopSubLink | campaignMdl        | campaignOption | campaignChannel | filter  |
      | DuraiArasi | DuraiArasi | Shop         | Apple         | Campaigns   | iPad Pro 10.5 inch | Map Tariffs    | Acquisition     | Variant |
