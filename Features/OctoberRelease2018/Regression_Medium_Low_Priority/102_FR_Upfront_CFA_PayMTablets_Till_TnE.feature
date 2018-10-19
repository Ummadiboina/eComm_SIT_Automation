Feature: 102_FR_Upfront_CFA_PayMTablets_Till_TnE.feature

  @Web
  Scenario Outline: 102_FR_Upfront_CFA_PayMTablets_Till_TnE
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And Build your plan with <upFront> <term> and <data>
    #And Click on Dont Select Cap My Bill CTA
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "Delivery page"
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "Payments page"
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Device                | tariffAmt | dataValue | color      | Firstname | Surname | consumer | BSCstatus | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | upFront | term | data |
      | Galaxy Tab A 2016 7.0 | £39       | 8GB       | Space Grey | Test      | Accepta | Me       | Enabled   | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | avg     | avg  | avg  |


