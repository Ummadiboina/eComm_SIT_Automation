Feature: 51_Reg_Consumer_Buyout

  @Web
  Scenario Outline: This scenario ensures that the customer is able to successully Buyout the device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Remove Button'
    And Verify that the buyout offer section is displayed with 'Take offer and Upgrade' CTA under 'Your Options' heading
    And Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed
    And click on 'Take offer and upgrade'button
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And select any random tariff from Recommended devices section
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    #And verify if the buyout offer is displayed in My Package section
    And I Land on the basket page by clicking on Add to Basket button in the BuyOut Journey
    And verify if the buyout offer is displayed in Basket page
    And click on "go to checkout" button
    And verify if buyout offer is displayed under Order Summary section in <OTAC> page
    And perform <Action> in OTAC page
    And verify if buyout offer is displayed under Order Summary section in <Delivery> page
    #Then Click on the 'Continue button' in delivery page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And verify if buyout offer is displayed under Order Summary section in <Payment> page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And verify if buyout offer is displayed under Order Summary section in <Agreement> page
    And Continue to Agreements page and confirm all the agreement checks
    And verify if buyout offer is displayed under Order Summary section in <Review> page
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | username                      | BSCstatus | BillCap   | CapAmount | password | handset  | Action | Username     | OTAC | Delivery | Payment | Agreement | Review | Username     | Action    | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 23oc75299627@stf.ref.o2.co.uk | Enabled   | CapMyBill | £200      | test123  | iPhone X | skip   | TEST ACCEPTA | OTAC | Delivery | Payment | Agreement | Review | TEST ACCEPTA | enterCode | Me       | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          |
