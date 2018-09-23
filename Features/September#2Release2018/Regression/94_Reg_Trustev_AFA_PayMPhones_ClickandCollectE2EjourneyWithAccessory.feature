Feature: 94_Reg_Trustev_AFA_PayMPhones_ClickandCollectE2EjourneyWithAccessory

  #launch hooks and get browser
  @Web

  Scenario Outline: Trustev PayM Phones Click and collect E2E journey with Accessory in Agent shop
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Dont cap my bill when BSC is <BSCstatus>
    And Select a valid Accessory <Accessory>
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    Then perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <Confirm_Password>, <Security_Answer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
#Random
    Examples:
      | Device                    | Tariffs | Accessory                       | BSCstatus | Firstname | Surname | HouseNumber | PostCode | Username     | Password | Confirm_Password | Security_Answer | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | Consumer | status  | MBBStatus | DeviceType | DeviceModule |
      | iPhone X 256GB Space Grey | Refresh | iPhone X Fashion Case Dual Pack | Disabled  | TEST      | ACCEPTA | 32          | SL11ER   | TEST ACCEPTA | test123  | test123          | Anything        | Select | Not | Select | Not | Select | Select | Not   | Not  | Me       | Enabled | No        | Connected  | Phone        |
