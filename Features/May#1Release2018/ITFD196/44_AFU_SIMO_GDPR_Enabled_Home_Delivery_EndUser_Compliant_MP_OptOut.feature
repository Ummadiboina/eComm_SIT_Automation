Feature: 44_AFU_SIMO_GDPR_Enabled_Home_Delivery_EndUser_Compliant_MP_OptOut

  This Scenario ensures that when the upgrade agent with Compliant consent status selects 'SIMO' and placed an order as an End user ,then the customer should be able to
  Optout 'MP - ALL'and 'CP - ALL' selected in default in Order confirmation page

  @Web
  Scenario Outline: 44_AFU_SIMO_GDPR_Enabled_Home_Delivery_EndUser_Compliant_MP_OptOut
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select valid <Tariff> from tariffs tab
    #The tariff selected should have a Multiple promotion
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus> <DeviceType>
    Then perform all the advisory checks
    #And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    #And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed


    Examples:
      | user        | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status  | MBBStatus |DeviceType|
      | 07521118904 | SIMO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 6           | SL11ER   | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Enabled | No        |Connected |