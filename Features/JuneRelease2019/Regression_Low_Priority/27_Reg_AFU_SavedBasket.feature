Feature: 27_Reg_AFU_SavedBasket

  #launch hooks and get browser
  @Web
  Scenario Outline: AFU_Saved Basket functionality
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    # And Select a valid Accessory <Device>
    And choose to email basket to save the basket
    And Verify email is sent successfully

    Examples:
      | user        | Device                              | Tariffs | BSCstatus | BillCapAmount |
      | 07521116176 | Galaxy S9 Plus 128GB Midnight Black | Refresh | Enabled   | No spend cap  |