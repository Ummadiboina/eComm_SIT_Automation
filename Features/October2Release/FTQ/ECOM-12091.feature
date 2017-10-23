Feature: AFA_update_copy_for_Refer_with_Simo_response

  This scenario ensures that when the Agent in acquisition selects 'SIMO' tariff and proceed till order placement, then the agent should be displayed with updated copy of 'Refer with Simo' response

  Scenario Outline: AFA_update_copy_for_Refer_with_Simo_response

    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Copy text should be displayed with message for referral

    Examples:
      | Tariff | DeliveryType | Firstname | Surname | Username    | HouseNumber | PostCode |
      |        | HomeDelivery | TEST      | REFERA  | TEST REFERA | 14          | SL11UP   |
