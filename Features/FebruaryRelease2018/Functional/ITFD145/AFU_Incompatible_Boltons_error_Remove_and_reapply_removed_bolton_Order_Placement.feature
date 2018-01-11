Feature: AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement

  This scenario ensures that when the Retention Agent in Upgrade selects a 'Phone' and tariff eligible for Promotion and adds another Bolton, then the customer should be displayed with error message
  @Web
  Scenario Outline: AFU_Incompatible_Boltons_error_Remove_and_reapply_removed_bolton_Order_Placement
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Click on 'Extras' tab
    #(Bolton1 for reference)
    And Select a Bolton
    Then Verify that the deal has already some offers Bolton(Bolton2) promotions applied
    #   since both Bolton1 and Bolton2 cannot be sold together
    And Verify that the error <ErrorMsg> is displayed in the deal about the conflict
    And Verify that the incompatible boltons 'Bolton1 and the Offers Bolton Promotion(which added Bolton2)' is highlighted
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
      | user        | Device | Tariffs |ErrorMsg                      |Button|
      | 07521121496 | Random | Base    | incompatible with each other |Bolton2|