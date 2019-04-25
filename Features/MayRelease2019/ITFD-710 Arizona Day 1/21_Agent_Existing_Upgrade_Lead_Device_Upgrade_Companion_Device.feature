Feature: 21_Agent_Existing_Upgrade_Lead_Device_Upgrade_Companion_Device

  Scenario Outline: Agent_Existing_Upgrade_Lead_Device_Upgrade_Companion_Device
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Lead Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When Pay by card
    Then Order confirmation message should be displayed
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid companion device PayM <Companion Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section
    And perform all the advisory checks_new
    And Click on 'Generate CCA' button
    #Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    #And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples:
      | user        | Lead Device     | Tariffs  | BSCstatus  | username           | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | password       | DeviceType | BillCapAmount | status2           |  Companion Device  |    user_status   |
      | 07568414065 |  Apple iPhone X | Standard | Disabled   |  Fun id of user    | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | test123        | Connected  | £20           |     Disabled      |                    |                  |

