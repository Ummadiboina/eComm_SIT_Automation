Feature: Reg_AFA_PayG_withoutAnyAccessory

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY G handset acquisition Journey without an accessory
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register customer with valid <Firstname> and <Surname> and other valid details in delivery page
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples: 
      | Device                        | Tariffs | DeliveryType | Firstname | Surname | Username     |
      | iPhone 7 Plus 128GB Jet Black | Random  | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |