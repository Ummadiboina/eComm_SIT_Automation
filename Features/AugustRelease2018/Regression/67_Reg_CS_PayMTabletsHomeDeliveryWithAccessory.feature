Feature: 67_Reg_CS_PayMTabletsHomeDeliveryWithAccessory

  @Web
  Scenario Outline: PayM Tablets Home delivery E2E journey with Accessory
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order for Trustev details
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | Device                | color | Capacity | Firstname | Surname | Username     | consumer | B1  | B2     | B3  | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Galaxy Tab A 2016 7.0 | Gold  | 64GB     | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Not | Select | Not | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  |
