Feature: 75_AFA_Existing_customer_Phones_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 75_AFA_Existing_customer_Phones_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled
    Given I login to Agent shop
    Given performs Agent Existing customer journey for <User>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And Select valid <Extras> from extras tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And In Agent Click on GDPR SaveMyPreference or Skip Preference CTA
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    Then perform all the advisory checks
    And perform the credit checks for Agent Existing <Username> by Bank details
    #And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | User        | Device                        | Tariffs | Extras    | BSCstatus | BillCapAmount | Username     | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | journey | DeviceType | DeviceModule | ofComStatus | pacStacCheck | ofComMobileNum | codeStatus | codeVariant | pacStacCode | pacStackRetainCheck |
      | 07521137996 | iPhone 8 Plus 64GB Space Grey | Refresh | Insurance | Enabled   | £30           | TEST ACCEPTA | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | AFA     | Connected  | Phone        | Enabled     | Yes          | 07707003215    | valid      | PAC         | XBA735657   | Yes                 |
