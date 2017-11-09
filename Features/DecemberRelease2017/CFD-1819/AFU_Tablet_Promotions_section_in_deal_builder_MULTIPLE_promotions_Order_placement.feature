Feature: AFU_Tablet_Promotions_section_in_deal_builder_MULTIPLE_promotions_Order_placement
  This scenario ensures that when the Agent in Upgrade selects a 'Tablet' and tariff with multiple promotions, then the 'Promotions' section with all applied promotion description should be displayed in the deal builder

  @Web
  Scenario Outline: AFU_Saved Basket functionality
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the deal builder
    And Verify that for more than 1 promotions returned
    And Verify that the promotion returned is displayed in a single line
    And Validate all the Basket content and checkout
    And Verify that for more than 1 promotions returned
    And Verify that the promotion returned is displayed in a single line
    And Verify that the 'Promotions' section is displayed with all the applied promotions description in the order summary
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    #  And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    #  And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    #  And Choose <DeliveryType> delivery address and delivery time
    #And Update Device Plan Link Email Address
    #Then CCALink Should be generated
    When Pay by card
    Then Order confirmation message should be displayed




    Examples:
      | user        | Device | Tariffs | Firstname | Surname | HouseNumber | PostCode | Username     |
      | 07521118904 | tablet |         | Test      | Accepta |          10 | SL11ER   | Test Accepta |

