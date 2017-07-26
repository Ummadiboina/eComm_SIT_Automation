Feature: Reg_AFA_Tablet

  #launch hooks and get browser
  @AgentsRegressionPAYM
  Scenario Outline: Successful completion of a Tablet Journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname> and <Surname> and valid <Username>
    And Register customer with valid <Firstname> and <Surname> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    And Update Device Plan Link Email Address
    Then CCALink Should be generated

    Examples: 
      | Device | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     |
      | tablet | Random  | Random | HomeDelivery | Test      | Accepta | Test Accepta |
