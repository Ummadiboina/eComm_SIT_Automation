Feature: Reg_Jan_AgentShopToAcceptApostrophe

  This scenario ensures that the Agent shop accepts Apostrophe in First Name and Last Name fields

  @Web
  Scenario Outline: ConsumerShopToAcceptApostrophe

    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

      # And Update Device Plan Link Email Address
      # Then CCALink Should be generated
    Examples:
      | Device                             | Tariffs  | Extras | DeliveryType | Firstname | Surname     | Username     | HouseNumber | PostCode |
      | Galaxy S8 Plus 64GB Midnight Black | Standard | Base   | HomeDelivery | TEST'One  | ACCEPTA'Two | TEST ACCEPTA | 14          | SL11UP   |
