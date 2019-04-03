Feature: 17_AFU_SmiOnly_Standard_RetentionBolton_Checkout

  I am AFU user and add retention bolton to basket, I should be able to copy private upgrade basket to shared basket.
  I should presented current basket items with retention items in "Customer basket" with out any error

  @Web
  Scenario Outline: 17_AFU_SmiOnly_Standard_RetentionBolton_Checkout

    Given I login to Agent shop
    And performs Upgrade for <user>
    #And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    #And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Verify Saved basket after adding the retention items <RetentionBolton>
    And Signin using valid <username> and <password> credentials
    And Enter the OTAC and click on continue to landed on the Basket page
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And Verify that the Bolton section Display in Basket and SSC page

    Examples:
      | user        | Device | Tariffs | BSCstatus | BillCapAmount | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType | PreSelected | RetentionBolton |
      | 07521121757 | dongle | Sim  | Enabled   | £5            | Me       | Select | Not | Not | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  | No          | yes             |