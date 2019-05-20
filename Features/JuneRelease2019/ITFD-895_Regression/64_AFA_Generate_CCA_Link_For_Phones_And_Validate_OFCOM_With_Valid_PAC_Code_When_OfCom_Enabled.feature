Feature: 64_AFA_Generate_CCA_Link_For_Phones_And_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled

  #launch hooks and get browser
  @Web
  Scenario Outline: 64_AFA_Generate_CCA_Link_For_Phones_And_Validate_OFCOM_With_Valid_PAC_Code_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    Then perform the credit checks and validate affordability for CCA using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey2> journey
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <GDPRstatus> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And In Consumer Enter input details <ofComMobileNum> <pacStacCode> for <pacStacCheck> code when ofcom status is <ofComStatus> and Validate <pacStackRetainCheck> functionality
    And Click on Continue CTA and validate error text for <ofComMobileNum> <pacStacCode> <codeStatus> if exist
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed
    And Validate OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>


    Examples:
      | Device                       | Tariffs | BSCstatus | BillCapAmount | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | Consumer | GDPRstatus | GDPRstatus2 | username                     | password | DeviceType | DeviceModule | PreSelected | KeyEvent | journey | journey2 | ofComStatus | pacStacCheck | pacStackRetainCheck | ofComMobileNum | pacStacCode | codeStatus | codeVariant |
      | iPhone 7 Plus 32GB Rose Gold | Refresh | Enabled   | £60           | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test123  | test123         | vinudeep       | Select | Select | Select | Not | Select | Select | Select | Select | Me       | Enabled    | Disabled    | ink_jun8829@stf.ref.o2.co.uk | test123  | Connected  | Phone        | Yes         | No       | CFA     | CCA      | Enabled     | Yes          | Yes                 | 07412321742    | XCR704322   | valid      | PAC         |
