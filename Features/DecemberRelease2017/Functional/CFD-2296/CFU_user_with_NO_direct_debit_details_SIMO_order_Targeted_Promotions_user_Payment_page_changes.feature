Feature: CFU_user_with_NO_direct_debit_details_SIMO_order_Targeted_Promotions_user_Payment_page_changes
  This scenario ensures that the customer with direct debits is in upgrade presented with SIMO targeted promotion, then the customer should be landed directly on Payment page to proceed with the order

  *Customer should not have any early upgrade fee or CCA settlement to be paid for
  *Customer should not have direct debits available
  @Web
  Scenario Outline: CFU_user_with_NO_direct_debit_details_SIMO_order_Targeted_Promotions_user_Payment_page_changes
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    Then Verify that in the recycle value is displayed in the Recycle panel
    #And the heading of the panel is 'A package just for you:'
    And only SIMO targeted bolt-on is presented in the targeted promotion section
    And checkbox for 'iPhone' for data allowance is displayed just on the right-hand side below select 'CTA'
    And the 'Contract length: 12 months/30 days' is displayed just below the promotion description
    And Click on  'Select' button in the tile of targeted promotion
    And customer lands on payments page
    And the 'Promotions' is displayed in your order section
    And the existing address of the customer is set as delivery address
    And Select the Home address
    And Enter the card details and click on 'Continue'
    And customer lands on review page
    And Click on 'I agree to the terms and condition' checkbox
    And verify 'Terms and conditions' link is present
    And Click on 'Place your order' CTA
    Then Order confirmation message should be displayed

    Examples:
      | username | password |