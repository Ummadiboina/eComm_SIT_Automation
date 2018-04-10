Feature: AFA_Single_Basket_PAYG_Phones_Email_basket_Get_Basket_Link
  This scenario ensures that when the Agent in Acquisition journey selects a 'Phone' and tariff and click on 'Email Basket' link ,then the agent should be displayed with 'Get basket link' CTA in front of the selected single deal in the pop up

  @Web
  Scenario Outline: AFA_Single_Basket_PAYG_Phones_Email_basket_Get_Basket_Link
    Given I login to Agent shop
    And performs Acquisition for New user
    And verify 'Email Basket' link is displayed next to the Search CTA in deal builder section
    And Select a valid PAYG <Device1>
    And Select valid <Tariffs> from PAYG tariffs tab
    And get the list of Selected devices
    And click on 'Email Basket' link
    And verify Basket link and 'Copy to Clipboard' CTA are enabled Click on 'Copy to Clipboard' button
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples:
      | Device1                       | Tariffs | DeliveryType | Firstname | Surname | HouseNumber  | PostCode |
      | iPhone 7 Plus 128GB Jet Black | Random  | HomeDelivery | TEST      | ACCEPTA | 11           | SL11UP   |