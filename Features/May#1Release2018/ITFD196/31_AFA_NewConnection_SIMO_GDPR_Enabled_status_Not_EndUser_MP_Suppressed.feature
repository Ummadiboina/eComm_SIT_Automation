Feature: 31_AFA_NewConnection_SIMO_GDPR_Enabled_status_Not_EndUser_MP_Suppressed

  #launch hooks and get browser
  @Web
  Scenario Outline: 31_AFA_NewConnection_SIMO_GDPR_Enabled_status_Not_EndUser_MP_Suppressed
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select valid <Tariff> from tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>
    And Choose <DeliveryType> delivery address and delivery time
    When submit order button is clicked
    Then Order confirmation message should be displayed

    Examples: 
      | Tariff | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | B1  | B2  | B3  | B4  | C1| C2 | C3  | C4 |Consumer     |
      | SimO   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |           6 | SL11UP   | Not | Not | Not | Not |Not|Not | Not | Not|SomeOne else |
