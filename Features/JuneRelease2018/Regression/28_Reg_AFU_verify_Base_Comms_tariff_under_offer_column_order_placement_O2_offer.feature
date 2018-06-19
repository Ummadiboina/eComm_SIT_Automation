Feature: 28_Reg_AFU_verify_Base_Comms_tariff_under_offer_column_order_placement_O2_offer

  @Web
  Scenario Outline: This scenario ensures that when the Agent in upgrade journey access the 'Tariffs' tab,
  then the agent should be able to see 'Base Comms' tariff  highlighted or tagged differently along with normal tariffs and should be able to place order

    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Verify that Basecomms is displayed in the offers section
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device                                   | Tariffs | consumer | B1     | B2     | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | 07521114774 | Apple iPad Pro 10.5 inch 64GB Space Grey | Refresh | Me       | Select | Select | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
