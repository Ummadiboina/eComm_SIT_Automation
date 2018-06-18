Feature: 53_Reg_Consumer_PreOrder

  @Web
  Scenario Outline: CFA PayM Pre Order Phones Home delivery E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    And check the status <Status> of the device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

      #Close the browser
    Examples:
      | handset        | Firstname | Surname | Username     | Status    | consumer | B1  | B2     | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | Apple iPhone x | TEST      | ACCEPTA | TEST ACCEPTA | Pre Order | Me       | Not | Select | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |