Feature: 115_FR_Upfront_CFA_PayMTablets_Till_TnE.feature

  @Web
  Scenario Outline: 115_FR_Upfront_CFA_PayMTablets_Till_TnE
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Build your plan with <upFront> <term> and <data>
    #And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "Delivery page"
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "Payments page"
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <GDPRstatus> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device             | tariffAmt | dataValue | Capacity | color      | Firstname | Surname | consumer | BSCstatus | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | upFront | term | data | PreSelected | KeyEvent |
      | iPad Pro 10.5 inch | £39       | 8GB       | 256GB    | Space Grey | Test      | Accepta | Me       | Enabled   | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | avg     | max  | avg  | No          | No       |


