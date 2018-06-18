Feature: 61_Reg_CS_PayGPhonesHomeDeliveryWithoutAccessory

  @Web
  Scenario Outline: CFA PayG Phones Home delivery E2E journey
    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step' for GDPR
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset       | Firstname | Surname | Username     |consumer | B1  | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA |Me       | Not | Select | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |