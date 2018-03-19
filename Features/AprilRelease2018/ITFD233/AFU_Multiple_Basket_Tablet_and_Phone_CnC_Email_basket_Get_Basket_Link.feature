Feature: AFU_Multiple_Basket_Tablet_and_Phone_CnC_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Upgrade opts for multiple deals in the basket and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of each deal in the pop up
@Web
Scenario Outline: AFU_Multiple_Basket_Tablet_and_Phone_CnC_Email_basket_Get_Basket_Link
  Given I login to Agent shop
  And performs Upgrade for <user>
  And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
  And Select a valid PayM <Device1>
  And Select valid <Tariffs1> from tariffs tab
  And Click on '+' accordion at the top of deal builder
  And Select a valid PayM <Device2>
  And Select valid <Tariffs2> from tariffs tab
  And Select a valid store using <PostCode> for Click and Collect
  And Click on 'Email Basket' link
  And verify user switched to Email Basket pop up window
  And verify 'Get basket link' is displayed next to selected device in the Email Basket pop up window <Device1>
  And click on 'Get Basket link' CTA
  And verify Basket link and 'Copy to Clipboard' CTA are enabled
  And Click on "Copy to Clipboard" button
  And verify 'Get basket link' is displayed next to selected device in the Email Basket pop up window <Device2>
  And click on 'Get Basket link' CTA
  And verify Basket link and 'Copy to Clipboard' CTA are enabled
  And Click on "Copy to Clipboard" button
  And Verify that the link is copied in the new browser page
  And verify customer lands on O2 basket page with the selected basket contents <Device1> <Tariffname1>
  And switch to the Email basket once basket contents are verified
  And verify that the basket is displayed with the selected 'Click and collect' store
  Then Click on 'Go to checkout' and proceed till order confirmation

  Examples:
  | user | Device1 | Device2| Tariffs1 | Tariffs2 | PostCode |




