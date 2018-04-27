Feature: GDPR_52_AFU_Single_Basket_Phone_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Upgrade selects a 'Phone' and tariff and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of the selected single deal in the pop up
  @Web
  Scenario Outline: AFU_Single_Basket_Phone_Email_basket_Get_Basket_Link
    Given I login to Agent shop
    And performs Upgrade for <user>
    #And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And get the list of Selected devices
    And get the list of Selected devices
    And click on 'Email Basket' link
    And verify Basket link and 'Copy to Clipboard' CTA are enabled Click on 'Copy to Clipboard' button
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <MBBStatus>
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed


    Examples:
      | user             | Device | Tariffs | DeliveryType | B1  | B2  | B3  | B4  | Text | Email    | Phone     | Post |Consumer    | Firstname | Surname | HouseNumber  | PostCode|status|MBBStatus|
      |  07521114790     | Apple  | Refresh | HomeDelivery | Not | Not | Not | Not |Not|Not | Not | Not|SomeOne else|  TEST      | ACCEPTA | 11           | SL11UP |Enabled|No    |







