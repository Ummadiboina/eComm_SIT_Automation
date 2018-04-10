Feature: AFA_Multiple_Basket_CnC_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Acquisition opts for multiple deals in the basket and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of each deal in the pop up

  @Web
  Scenario Outline: AFA_Multiple_Basket_CnC_Email_basket_Get_Basket_Link
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device1>
    And Select valid <Tariffs1> from tariffs tab
    And select a valid Handset and Tariff combination
    And Click on 'Plus' accordion at the top of deal builder
    And Select a valid PayM <Device2>
    And Select valid <Tariffs2> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select a valid store using <PostCode> for Click and Collect
    And Click on 'Plus' accordion at the top of deal builder
    And Select a valid PayM <Device3>
    And Select valid <Tariffs3> from PAYG tariffs tab
    And Click on 'Plus' accordion at the top of deal builder
    And get the list of Selected devices
    And click on 'Email Basket' link
    And verify Basket link and 'Copy to Clipboard' CTA are enabled Click on 'Copy to Clipboard' button
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device1                | Tariffs1 | Device2             | Tariffs2 | Device3                 | Tariffs3 | Device4       | Firstname | Surname | Username     | HouseNumber | PostCode | DeliveryType |
      | Samsung Galaxy S9 Plus | Refresh  | Apple iPhone 7 Plus | Refresh  | iPhone 8 Plus 64GB Gold | Standard | Fitbit Flex 2 | TEST      | ACCEPTA | TEST ACCEPTA | 11          | SL11UP   | HomeDelivery |



