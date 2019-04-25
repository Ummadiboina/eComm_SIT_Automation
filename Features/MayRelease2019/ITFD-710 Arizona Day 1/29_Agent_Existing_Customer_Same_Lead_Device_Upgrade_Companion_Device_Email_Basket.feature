Feature: 29_Agent_Existing_Customer_Same_Lead_Device_Upgrade_Companion_Device_Email_Basket

  #launch hooks and get browser
  @Web
  Scenario Outline: Agent_Existing_Customer_Same_Lead_Device_Upgrade_Companion_Device_Email_Basket
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    #And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    # And Select a valid Accessory <Device>
    And choose to email basket to save the basket
    And Verify email is sent successfully

    Examples:
      | user        | Device                    | Tariffs | BSCstatus | BillCapAmount |
      | 07731845739 | iPhone Xs Max 64GB Silver | Refresh | Enabled   | No spend cap  |