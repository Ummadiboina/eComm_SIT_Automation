Feature: Feature: 37_Agent_Existing_PAYG_Phones_CC_GDPR_Enabled_EndUser_MP_OptOut_Advisor check.feature

  This Scenario ensures that when the Agent in existing customer acquisition journey selects 'PAYG Phone' with Click and collect placed an order by opting out of all Marketing preference,
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 37_Agent_Existing_PAYG_Phones_CC_GDPR_Enabled_EndUser_MP_OptOut_Advisor check
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks
    When Pay by card for PAYM device for Existing customer
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device                        | Tariffs | Firstname | Surname | HouseNumber | PostCode | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | Consumer | status  | MBBStatus | DeviceType |
      | 07521113867 | iPhone 7 Plus 128GB Jet Black | Random  | TEST      | ACCEPTA | 11          | SL11UP   | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Me       | Enabled | No        | Connected  |

