Feature: 54_Reg_Consumer_TradeIn

  @Web
  Scenario Outline: This scenario ensures that the customer is able to successully Trade In the device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Verify trade in message is displayed under 'Get your latest phone on us today' section
    And Answer appropriate questionaire in 'your device' section
    And click on 'upgrade now' button
    And Select a <handset> device from Recommended devices section
    And Select ribboned tariff <tariff> in upgrade journey
    Then choose appropriately in 'Your Sim Card'section
    And verify if the tradein offer is displayed in My Package section
    And I Land on the basket page for upgrades
    And verify if the trade in offer is displayed in Basket page
    And I select a Click and Collect store for Trade In
    And click on "go to checkout" button
    And verify if trade in offer is displayed under Order Summary section in <OTAC> page
    And Enter code <Action> in OTAC page to verify account in TadeIn journey
    And verify if trade in offer is displayed under Order Summary section in <Delivery> page
    And I select check box to bring the trade in device and Continue to delivery page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And verify if trade in offer is displayed under Order Summary section in <Payment> page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And verify if trade in offer is displayed under Order Summary section in <Agreement> page
    And Continue to Agreements page and confirm all the agreement checks
    And verify if trade in offer is displayed under Order Summary section in <Review> page
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username               | password | handset  | tariff                  | OTAC | Delivery | Payment | Agreement | Review | Username     | Action    | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | gb083240_102752@o2.com | test123  | iPhone X | 19.99upfront45.00amonth | OTAC | Delivery | Payment | Agreement | Review | TEST ACCEPTA | enterCode | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
