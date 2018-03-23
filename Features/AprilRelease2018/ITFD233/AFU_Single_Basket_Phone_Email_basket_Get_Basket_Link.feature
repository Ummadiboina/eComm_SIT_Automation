Feature: AFU_Single_Basket_Phone_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Upgrade selects a 'Phone' and tariff and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of the selected single deal in the pop up
  @Web
  Scenario Outline: AFU_Single_Basket_Phone_Email_basket_Get_Basket_Link
    Given I login to Agent shop
    And performs Upgrade for <user>
    #And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And get the list of Selected devices
    And click on 'Email Basket' link
    #And verify user switched to Email Basket pop up window
    And verify 'Get basket link' is displayed next to selected device in the Email Basket pop up window
    And click on 'Get Basket link' CTA
    And verify Basket link and 'Copy to Clipboard' CTA are enabled Click on "Copy to Clipboard" button
    And Verify that the link is copied in the new browser page
    And verify customer lands on O2 basket page with the selected basket contents <Device> <Tariffs>
    And click on the checkout button once basket contents are verified


    Examples:
    | user  | Device | Tariffs |
    |  07521114790     |        | Refresh |







