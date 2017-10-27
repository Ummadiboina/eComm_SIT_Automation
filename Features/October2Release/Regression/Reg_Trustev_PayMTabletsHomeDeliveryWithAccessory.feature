Feature: Reg_Trustev_PayMTabletsHomeDeliveryWithAccessory

  @Web
  Scenario Outline: Trustev PayM Tablets Home delivery E2E journey with Accessory
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order for Trustev details
    Then order confirmation is displayed

    Examples: �
      | Device                   | Firstname | Surname | Username     |
      | Apple iPad Pro 10.5 inch | TEST      | ACCEPTA | TEST ACCEPTA |
