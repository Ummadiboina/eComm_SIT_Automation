Feature: Reg_VOLTE_PayMPhonesClickAndCollect.feature

  @Web
  Scenario Outline: Volte PayM Phones Click and collect scenario with E2E journey Click and collect
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed with Volte message
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset | Firstname | Surname | Username     | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | Galaxy  | TEST      | ACCEPTA | TEST ACCEPTA | Someone  | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |
