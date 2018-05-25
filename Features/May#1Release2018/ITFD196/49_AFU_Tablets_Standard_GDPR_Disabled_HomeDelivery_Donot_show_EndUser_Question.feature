Feature: 49_AFU_Tablets_Standard_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question

  This Scenario ensures that when the Agent in Upgrade journey selects 'Tablets'  with Home delivery, then the new Radio buttons to capture "Is this order for you or someone else?"
  and Marketing preferences should not be displayed

  #launch hooks and get browser
  @Web
  Scenario Outline: 49_AFU_Tablets_Standard_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    #When submit order button is clicked
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status   | MBBStatus | DeviceType |
      | 07568412110 | Tablet | Random  | Someone  | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  |
