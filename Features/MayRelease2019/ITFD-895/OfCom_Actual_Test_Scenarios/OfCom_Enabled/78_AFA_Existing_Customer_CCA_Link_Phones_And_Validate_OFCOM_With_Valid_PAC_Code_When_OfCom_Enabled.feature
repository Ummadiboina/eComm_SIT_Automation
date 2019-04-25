Feature: 78_AFA_Existing_Customer_CCA_Link_Phones_And_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 78_AFA_Existing_Customer_CCA_Link_Phones_And_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled
    Given I login to Agent shop
    Given performs Agent Existing customer journey for <User>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    Then perform all the advisory checks
    And perform the credit checks for Agent Existing <Username> by Bank details
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Agent Channel Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer>  in delivery page
    #And In Agent Click on GDPR SaveMyPreference or Skip Preference CTA
    And Choose <DeliveryType> delivery address and delivery time
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus2> and <PreSelected>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey2> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | User        | Device                        | Tariffs | DeliveryType | BSCstatus | BillCapAmount | username                     | password | Username     | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | GDPRstatus2 | KeyEvent | PreSelected | journey | journey2 | DeviceType | DeviceModule | ofComStatus | pacStacCheck | ofComMobileNum | codeStatus | codeVariant | pacStacCode | pacStackRetainCheck |
      | 07568422379 | iPhone 8 Plus 64GB Space Grey | Refresh | HomeDelivery | Enabled   | £30           | ink_jun8829@stf.ref.o2.co.uk | test123  | TEST ACCEPTA | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | Disabled    | No       | No          | AFA     | CFA      | Connected  | Phone        | Enabled     | Yes          | 07123456789    | valid      | PAC         |             | Yes                 |
