Feature: 134_FR_UpFront_AFU_PAYM_Tablet

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M Tablet Acqusistion Journey
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And In Agent Build your plan with <upFront> <term> and <data>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout


    Examples:
      | user        | Device            | Tariffs | upFront | term | data | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | 07731296915 | Galaxy Tab A 10.5 | Refresh | avg     | avg  | min  | Enabled   | £10           | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |