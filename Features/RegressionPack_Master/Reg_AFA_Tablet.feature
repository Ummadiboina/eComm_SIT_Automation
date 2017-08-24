Feature: Reg_AFA_Tablet

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a Tablet Journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    # And Update Device Plan Link Email Address
    #  Then CCALink Should be generated
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples: 
      | Device | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |
      | tablet | Random  | Random | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | Flat 8      | SL11EL   |
