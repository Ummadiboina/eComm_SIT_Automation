Feature: 05_AFA_CCA_Link_Journey_Phone_Premium_Tariff_And_International_Caller_Bolton_With_Accessorries

  #launch hooks and get browser
  @Web
  Scenario Outline: 05_AFA_CCA_Link_Journey_Phone_Premium_Tariff_And_International_Caller_Bolton_With_Accessorries
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select a valid perk associated tariff <tariffTerm> <tariffAmt> and <dataValue>
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal> for tariff <tariffTerm>
    And select a valid Handset and Tariff combination_new
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal> for tariff <tariffTerm>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Select valid <perk> of type <perkType> in <journey> agent channel
    And Validate all the Basket content and checkout
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    Then perform all the advisory checks
    Then perform the credit checks and validate affordability for CCA using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <GDPRstatus> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    And Click on 'Generate CCA' button
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Click on Go To Payment CTA in delivery page
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples:
      | Device                | username        | password | tariffAmt | tariffTerm | dataValue | perk                                     | perkType | journey | statusOpal | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | Huawei P30 Pro Aurora | random@test.com | test123  | £35       | 30D        | 1000GB    | B:CR7682:International:Caller:Bolton:FOC | giftPerk | AFA     | Enabled    | HomeDelivery | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
