Feature: 23_Agent_AFU_Exceeds_5_Connected_Companion_Device_Not_Checkoutable_Error_Msg

  #launch hooks and get browser
  @Web
  Scenario Outline: 23_Agent_AFU_Exceeds_5_Connected_Companion_Device_Not_Checkoutable_Error_Msg
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Verify lead device pairing section is displayed

    Examples:
    | user  |   Device    |   Tariffs   |   BSCstatus   |
    |       |             |             |               |