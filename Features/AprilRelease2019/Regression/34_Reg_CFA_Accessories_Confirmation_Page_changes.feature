Feature: 34_Reg_CFA_Accessories_Confirmation_Page_changes

  @Web
  Scenario Outline: CFA Accessories confirmation page changes
  This scenario ensures that when the customer selects a accessory and tries to place an order,
  then the customer should be able to see the changes in Confirmation page

    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Verify contents of order confirmation page for Accessories containing <Status>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Firstname | Surname | Username     | Status   | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType   | KeyEvent | PreSelected |
      | TEST      | ACCEPTA | TEST ACCEPTA | In Stock | Me       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled    | No        | NonConnected | No       | No          |