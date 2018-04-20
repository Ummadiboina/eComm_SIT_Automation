Feature: GDPR_52_AFA_Single_Basket_Smart_Tech_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Acquisition journey selects a 'Smart tech' device and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of the selected single deal in the pop up

  @Web
  Scenario Outline: AFA_Single_Basket_Smart_Tech_Email_basket_Get_Basket_Link

    Given I login to Agent shop
    And performs Acquisition for New user
    And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And select <Device> Fitness tracker
    And get the list of Selected devices
    And click on 'Email Basket' link
    And verify Basket link and 'Copy to Clipboard' CTA are enabled Click on 'Copy to Clipboard' button
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device        | Firstname | Surname | Username     | HouseNumber | PostCode | DeliveryType | B1  | B2  | B3  | B4  | C1| C2 | C3  | C4 |Consumer    |
      | Fitbit Flex 2 | TEST      | ACCEPTA | TEST ACCEPTA | 11          | SL11UP   | HomeDelivery | Not | Not | Not | Not |Not|Not | Not | Not|SomeOne else|