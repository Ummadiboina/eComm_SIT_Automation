Feature: 07_CFA_Smart_Watch_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User

  This Scenario ensures that when the Customer in acquisition journey selects 'smart watch' and lands on delivery page
  then customer should not be displayed with gdpr end user question and GDPR consent

  @Web
  Scenario Outline: 07_CFA_Smart_Watch_Home_Delivery_GDPR_Should_Not_Display_For_NonConnectedDevice_User
    Given I am an CFA user and Lands on shop page
    And Navigate to SmartWatches
    And select any available <Device> Smartwatch
    And add SmartWatch to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Firstname | Surname | Username     | Device          | B1  | B2  | B3  | B4  | GDPRstatus | DeviceType    | PreSelected | KeyEvent |
      | TEST      | ACCEPTA | TEST ACCEPTA | Pebble Original | Not | Not | Not | Not | Enabled    | Non Connected | No          | No       |
