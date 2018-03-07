Feature: Feb_AFU_eComm_Promotions_and_added_Bolton_Incompatible_error_message_Remove_and_reapply_removed_bolton_Order_Placement
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
    And Verify that the 'Checkout' CTA is not enabled
    #Since Bolton1 is better for customer
    And To remove the Bolton2 applied by Promotion, Click on 'Remove' button in front of Bolton2
    Then Verify that the 'Checkout' CTA is enabled
    And Verify that the removed promotions is displayed as separate 'Promotions removed' list
    And Click on 're-apply' button shown in front of the promotion under 'Promotions removed' list
    Then Verify that the error <ErrorMsg> is displayed in the deal about the conflict
    And Click on 'Remove' button in front of <Button>
    And Verify that the 'Checkout' CTA is enabled
    Then Click on 'Checkout' CTA and Proceed till Order placement

    Examples:
      | user        | Device | Tariffs | ErrorMsg                     | Button |
      | 07521101029 | Random | Refresh | incompatible with each other | Bolton |
