Feature: 20_AFU_Phone_Refresh_InCompatable_Bolton_SharedBasket

  AFU	MBB	Refresh	Retention Bolton	Device/Tariff Discount	Shared basket

  @Web
  Scenario Outline: 20_AFU_Phone_Refresh_InCompatable_Bolton_SharedBasket

    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Click on 'Extras' tab
    #(Bolton1 for reference)
    #And Select a Bolton
    Then Verify that the deal has already some offers Bolton <Bolton> promotions applied
    #   since both Bolton1 and Bolton2 cannot be sold together
   # And Verify that the error <ErrorMsg> is displayed in the deal about the conflict
    #which added Bolton2
    #And Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted
    #And Verify that the 'Checkout' CTA is enabled or disabled
    #Since Bolton1 is better for customer

    Examples:
      | user        | Device                     | Button | Tariffs | BSCstatus | BillCapAmount | ErrorMsg                     | Bolton | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 07521130254 | HONOR View20 Sapphire Blue | Button | 60GB 53 | Enabled   | £15           | incompatible with each other | Bolton | Someone  | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | No          |
