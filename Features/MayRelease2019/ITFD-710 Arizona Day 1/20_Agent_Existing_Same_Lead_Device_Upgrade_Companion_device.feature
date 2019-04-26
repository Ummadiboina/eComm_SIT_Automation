Feature: 20_Agent_Existing_Same_Lead_Device_Upgrade_Companion_device

  Scenario Outline: Agent_Existing_Same_Lead_Device_Upgrade_Companion_device
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section
    Then perform all the advisory checks
    And Accept O2 Refresh Deal Summary
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
      | user        | Device    | Tariffs    | BSCstatus | username | consumer |  password |   status2  |   user_status   |
      | 07568414065 |           | Refresh    |   Disabled |    give the fun id for the user |            | test123     |     Disabled        |    |

