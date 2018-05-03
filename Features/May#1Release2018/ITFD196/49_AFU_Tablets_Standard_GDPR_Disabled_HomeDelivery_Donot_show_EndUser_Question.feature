Feature: 49_AFU_Tablets_Standard_GDPR_Disabled_HomeDelivery_Donot_show_EndUser_Question

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
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    #When submit order button is clicked
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device | Tariffs | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status   | MBBStatus |DeviceType|
      | 07521009589 | Tablet | Random  | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Disabled | No        |Connected |
