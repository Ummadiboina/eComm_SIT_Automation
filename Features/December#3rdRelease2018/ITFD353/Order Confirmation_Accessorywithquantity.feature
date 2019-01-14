Feature: Order Confirmation_Accessory

  @Web
  Scenario Outline: Order Confirmation_Accessory

    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    #And Select <accessoryname> from accessories
    And select an "Random" Accessory with Quanity <limit1>
  # And add quantity of accessories to basket within <limit1> in details page and navigate to basket
   # And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
     # And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>

    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'

    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Accessories containing <Status>
    And  validate the Confirmation Page for Accessories with Quantity <limit1>
    #And Validate consumer GDPR consent section is hidden in Order confirmation page or not
    Examples:
      | Firstname | Surname | Username     | Status   | consumer | accessoryname | limit1 | B1     | B2     | B3     | KeyEvent | DeviceType | GDPRstatus | PreSelected | Post | status   | MBBStatus | DeviceType    |
      | TEST      | ACCEPTA | TEST ACCEPTA | In Stock | Me       | Random        | 2      | Select | Select | Select | No       | Connected  | Enabled    | No          | Not  | Disabled | No        | Non Connected |
