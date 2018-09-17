Feature: 120_FR_Mix_CFU_Phone

  @Web
  Scenario Outline: 120_FR_Mix_CFU_Phone
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on link view Phone Details link next to device
    And Build your plan with <upFront> <term> and <data>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Enter details in Delivery page for Click and collect
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    #And Enter details in Delivery page for Click and collect and Click on the 'Continue button'
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                     | password | Firstname | Surname | BSCstatus | Tablet             | color | Capacity | Username     | Action    | tariff | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | upFront | term | data |
      | ina_feb3593@stf.ref.o2.co.uk | test123  | Test      | Accepta | Enabled   | iPad 9.7 inch 2018 | Gold  | 32GB     | TEST ACCEPTA | enterCode |        | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | max     | max  | max  |
