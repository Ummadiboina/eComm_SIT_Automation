Feature: 18_Agent_Existing_NewConnection_Invalid_Lead_Device_ New_Companion_Device

  #launch hooks and get browser
  @Web
  Scenario Outline: 18_Agent_Existing_NewConnection_Invalid_Lead_Device_ New_Companion_Device
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    #code for below along with error scenarios
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section


    Examples:
      | user        | Device                           | Tariffs | BSCstatus | user_status  |
      | 07568414065 | Galaxy Watch Active Silver       | Refresh | Disabled   |     Invalid        |
