Feature: AFA_Single_Basket_Smart_Tech_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Acquisition journey selects a 'Smart tech' device and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of the selected single deal in the pop up

  @Web
  Scenario Outline: AFA_Single_Basket_Smart_Tech_Email_basket_Get_Basket_Link

    Given I login to Agent shop
    And performs Acquisition for New user
    #And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And select <Device> Fitness tracker
    And get the list of Selected devices
    And click on 'Email Basket' link
    And verify user switched to Email Basket pop up window
    And verify 'Get basket link' is displayed next to selected device in the Email Basket pop up window
    And click on 'Get Basket link' CTA
    And verify Basket link and 'Copy to Clipboard' CTA are enabled Click on 'Copy to Clipboard' button
    And Verify that the link is copied in the new browser page
    And verify customer lands on O2 basket page with the selected basket contents <Device>
    And validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
    | Device        | Firstname | Surname | Username     | HouseNumber | PostCode | DeliveryType |
    | Fitbit Flex 2 | TEST      | ACCEPTA | TEST ACCEPTA | 11          | SL11UP   | HomeDelivery |