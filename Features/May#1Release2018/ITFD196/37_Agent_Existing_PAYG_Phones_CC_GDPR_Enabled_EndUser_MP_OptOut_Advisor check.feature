Feature: Feature: 37_Agent_Existing_PAYG_Phones_CC_GDPR_Enabled_EndUser_MP_OptOut_Advisor check.feature

  This scenario ensures that when the Agent in Existing customer acquisition journey selects a 'Phone' as an END user then the Agent should be
  able to optout in Advisor check section

  @Web
  Scenario Outline: 37_Agent_Existing_PAYG_Phones_CC_GDPR_Enabled_EndUser_MP_OptOut_Advisor check
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device                        | Tariffs  | Firstname | Surname | HouseNumber | PostCode | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | Consumer | status  | MBBStatus |DeviceType|
      | 07521009589 | iPhone 7 Plus 128GB Jet Black | Standard | TEST      | ACCEPTA | 11          | SL11UP   | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Me       | Enabled | No        |Connected |

