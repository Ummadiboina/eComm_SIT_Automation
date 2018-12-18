Feature: 13_Reg_AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement_IBM_confirmation

  This scenario ensures that when the Retention Agent in Upgrade selects a 'Phone' and tariff eligible for eComm Promotion and adds another Bolton, then the customer should be displayed with error message

  @Web
  Scenario Outline: AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Click on 'Extras' tab
    #(Bolton1 for reference)
    And Select a Bolton
    Then Verify that the deal has already some offers Bolton <Bolton> promotions applied
    #   since both Bolton1 and Bolton2 cannot be sold together
    And Verify that the error <ErrorMsg> is displayed in the deal about the conflict
    #which added Bolton2
    And Verify that the incompatible boltons Bolton1 and the Offers Bolton Promotion is highlighted
    And Verify that the 'Checkout' CTA is enabled or disabled
    #Since Bolton1 is better for customer
    And To remove the Bolton2 applied by Promotion, Click on 'Remove' button in front of Bolton2
    And Verify that the 'Checkout' CTA is enabled or disabled
    And Verify that the removed promotions is displayed as separate 'Promotions removed' list
    And Click on 're-apply' button shown in front of the promotion under 'Promotions removed' list
    Then Verify that the error <ErrorMsg> is displayed in the deal about the conflict
    And Click on 'Remove' button in front of <Button>
    And select a valid Handset and Tariff combination
    And Verify that the 'Checkout' CTA is enabled or disabled
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    # Then Click on 'Checkout' CTA and Proceed till Order placement
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    When Pay by card
    #When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples:
      | user        | Device   | Button | Tariffs | BSCstatus | BillCapAmount | ErrorMsg                     | Bolton | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 07521130254 | iPhone 7 | Button | Refresh | Enabled   | £15           | incompatible with each other | Bolton | Someone  | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | No          |