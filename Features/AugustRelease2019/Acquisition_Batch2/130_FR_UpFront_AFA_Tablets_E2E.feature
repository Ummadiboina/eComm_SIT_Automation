Feature: 130_FR_UpFront_AFA_Tablets_E2E

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a Tablet Journey
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And In Agent Build your plan with <upFront> <term> and <data>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    #And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    Then perform the credit checks and validate affordability for CCA using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    And Click on 'Generate CCA' button

    Examples:
      | Device                              | Tariffs | upFront | term | data | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType | DeviceModule | Password | confirmPassword | SecurityAnswer |
      | Apple iPad Pro 11 2018 256GB Silver | Refresh | avg     | avg  | avg  | HomeDelivery | Enabled   | £100          | TEST      | ACCEPTA | TEST ACCEPTA | 18          | SL11UP   | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  | Tablet       | test123  | test123         | vinudeep       |