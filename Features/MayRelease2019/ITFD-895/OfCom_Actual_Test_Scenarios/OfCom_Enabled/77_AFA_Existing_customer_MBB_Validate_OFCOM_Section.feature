Feature: 77_AFA_Existing_customer_MBB_Validate_OFCOM_Section

  #launch hooks and get browser
  @Web
  Scenario Outline: 77_AFA_Existing_customer_MBB_Validate_OFCOM_Section
    Given I login to Agent shop
    Given performs Agent Existing customer journey for <User>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And In Agent Click on GDPR SaveMyPreference or Skip Preference CTA
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    Then perform all the advisory checks
    #And perform the credit checks for Agent Existing <Username> by Bank details
    #When Pay by card for PAYM device
    #Then Order confirmation message should be displayed
    #And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | User        | Device | Tariffs | BSCstatus | BillCapAmount | Username     | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | journey | DeviceType | DeviceModule | ofComStatus | pacStacCheck | ofComMobileNum | codeStatus | codeVariant | pacStacCode | pacStackRetainCheck |
      | 07521139831 | dongle | Refresh | Enabled   | £10           | TEST ACCEPTA | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | MBB     | Connected  | Phone        | Enabled     | Nill         | Nill           | Nill       | Nill        | Nill        | Nill                |
