Feature: Successful completion of a PAY M Acquistion Journey

  @AgentsRegression
  Scenario Outline: Successful completion of a PAY M dongle upgrade Journey by selecting a dongle
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks by capturing cards
    And Register customer with valid email address and password
    And Choose <DeliveryType> delivery address and delivery time
    When Pay by card
    Then Order confirmation message should be displayed

    Examples: 
      | Device              | Tariffs   | Extras | DeliveryType |
      | S7 edge black 32 GB | 24 Months | Random | HomeDelivery |
