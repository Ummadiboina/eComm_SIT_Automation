Feature: 75_Reg_FNT_AFA_PayG_Phones_less_than_50_GBP_ClickAndCollect

  #launch hooks and get browser
  @Web
  Scenario Outline: This test scenario ensures that PaynGo order via the web for payment less than 50 GBP where Click and Collect Now
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a PAYG device in stock which is less than 50 GBP
    #And Select a valid PAYG <Device>
    And Select valid tariff from PAYG tariffs tab which is less than <Tariffs> GBP
    And Confirm Device and Tariff are added in Deal Builder
    And Select a valid store using <PostCode> for Click and Collect
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device                               | Device   | BSCstatus | Tariffs | Firstname | Surname | HouseNumber | PostCode | B1     | B2  | B3     | B4  | Text | Email  | Phone  | Post | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus | DeviceType | DeviceModule |
      | Galaxy Trend 2 Lite Perfect Like New | In stock | Disabled  | 50      | TEST      | ACCEPTA | 4           | sl11er   | Select | Not | Select | Not | Not  | Select | Select | Not  | Me       | Enabled | test123  | test123         | Jkhan          | No        | Connected  | Phone        |
