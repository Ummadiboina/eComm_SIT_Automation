Feature: Successful completion of a PAY M SIMO acquisition Journey without an accessory

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY M SIMO acquisition Journey without an accessory
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <SimOTariff> plan
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks by capturing cards
    And Register customer with valid email address and password
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples: 
      | AcquistionOrUpgrade | SimOTariff | DeliveryType | Extras |
      | Acquistion          | Random     | HomeDelivery | Random |
