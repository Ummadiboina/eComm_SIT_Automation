Feature: AFA_Multiple_Basket_CnC_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Acquisition opts for multiple deals in the basket and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of each deal in the pop up

  @Web
  Scenario Outline: AFA_Multiple_Basket_CnC_Email_basket_Get_Basket_Link
    Given I login to Agent shop
    And performs Acquisition for New user
    And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And Select a valid PayM <Device1>
    And Select valid <Tariffs1> from tariffs tab
    And select a valid Handset and Tariff combination
    And click on '+' accordion at the top of deal builder
    And Select a valid PayM <Device2>
    And Select valid <Tariffs2> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select a valid store using <PostCode> for Click and Collect
    And click on '+' accordion at the top of deal builder
    And Select a valid PAYG <Device3>
    And Select valid <Tariffs3> from PAYG tariffs tab
    And click on '+' accordion at the top of deal builder
    And select <Device4> Fitness tracker
    And click on 'Email Basket' link
    And verify that the 'Get basket link' CTA is displayed next to the deal in the pop up
    And click on 'Get Basket link' CTA of the first deal
    And verify 'Copy to Clipboard' CTA is displayed next to the basket link for the first deal
    And click on 'Get Basket link' CTA of the second deal
    And verify 'Copy to Clipboard' CTA is displayed next to the basket link for the second deal
    And click on 'Get Basket link' CTA of the third deal
    And verify 'Copy to Clipboard' CTA is displayed next to the basket link for the third deal
    And click on 'Get Basket link' CTA of the fourth deal
    And verify 'Copy to Clipboard' CTA is displayed next to the basket link for the fourth deal
    And click on 'Copy to Clipboard' CTA for the first deal and Verify that the link is copied in the new browser page
    And verify customer lands on O2 basket page with the selected basket contents of first deal
    And validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device1       | Tariffs1 | Device2 |  Tariffs2 |  Device3 |  Tariffs3 |  Device4  | Firstname | Surname | Username     | HouseNumber | PostCode | DeliveryType |
      |               |          |         |           |          |           |           |           |         |              |           |            | HomeDelivery |



