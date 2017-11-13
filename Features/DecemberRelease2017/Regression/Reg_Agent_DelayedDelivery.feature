Feature: Reg_Agent_DelayedDelivery

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M Acquistion journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Search for <Status> device
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    #When Pay by card for PAYM device
    And Update Device Plan Link Email Address
    #Then Order confirmation message should be displayed
    Then CCALink Should be generated

    # And Update Device Plan Link Email Address
    # Then CCALink Should be generated
    Examples: 
      | Status  | Device | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |
      | Delayed | Random | Random  | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |          14 | SL11UP   |
