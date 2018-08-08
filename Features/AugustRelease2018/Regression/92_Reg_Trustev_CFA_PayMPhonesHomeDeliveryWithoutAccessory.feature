Feature: 92_Reg_Trustev_CFA_PayMPhonesHomeDeliveryWithoutAccessory

  #launch hooks and get browser

  @Web
  Scenario Outline: Trustev PayM Phones Home delivery E2E journey without accessory

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order for Trustev details
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    #Close the browser
    Examples:
      | handset  | Firstname | Surname | Username     | consumer | B1     | B2  | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | iPhone X | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  |