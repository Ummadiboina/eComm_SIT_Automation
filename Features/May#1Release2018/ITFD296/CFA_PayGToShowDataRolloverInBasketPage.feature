Feature: Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory

  @Web
  Scenario Outline: CFA PayG Phones Home delivery E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page and validate Data Roll over copy for <Tariff_Value> and <Big_Bundle_Data>
    And I Land on the basket page and choose home delivery option
    And Validate all the Basket contents
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | handset       | Firstname | Surname | Username     |  Tariff_Value   | Big_Bundle_Data |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA |      £15        |       5GB      |
