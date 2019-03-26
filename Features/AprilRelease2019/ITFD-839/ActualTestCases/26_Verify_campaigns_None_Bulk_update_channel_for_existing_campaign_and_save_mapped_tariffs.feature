Feature: 26_Verify_campaigns_None_Bulk_update_channel_for_existing_campaign_and_save_mapped_tariffs

  This scenario ensures that there is a dropdown for update channel at the bottom of Campaign mapping screen
  Bulk update channel - dropdown with value "None", "Both", "Acquisition" and "Upgrade"

  @Web
  Scenario Outline:26_Verify_None_campaigns_Bulk_update_channel_for_existing_campaign_and_save_mapped_tariffs

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTab> tab link and click it
    And Click on <shopSubLink> link under Shop section
    And Verify the existing campaigns
    And Click on campaign <campaignOption> operations
    Then Select campaign <campaignBrand> and <campaignMdl> and get tariffs for mapping
    Then Verify CFA and CFU Tariffs
    And Select campaign tariffs for mapping
    And Verify Bulk update channels available and select <campaignChannel> and then save mapped tariffs


    Examples:
      | userName   | password   | drupalNavTab | campaignBrand | shopSubLink | campaignMdl        | campaignOption | campaignChannel |
      | DuraiArasi | DuraiArasi | Shop         | Apple         | Campaigns   | iPad Pro 10.5 inch | Map Tariffs    | None            |
