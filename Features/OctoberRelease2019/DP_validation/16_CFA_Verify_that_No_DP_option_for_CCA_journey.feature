Feature: 16_CFA_Verify_that_No_DP_option_for_CCA_journey


  @Web
  Scenario Outline: CFA_Verify_that_No_DP_option_for_CCA_journey
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
    #And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    Then perform the credit checks and validate affordability for CCA using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <GDPRstatus> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    #And Update Device Plan Link Email Address
    #And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    #Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus2>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus2> and <PreSelected>
    And Click on Go To Payment CTA in delivery page for CCA link journey
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device                       | Tariffs | Extras | BSCstatus | BillCapAmount | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | Consumer | GDPRstatus | GDPRstatus2 | consumer | username                     | password | MBBStatus | DeviceType | DeviceModule | PreSelected | KeyEvent |
      | iPhone 7 Plus 32GB Rose Gold | Refresh | Base   | Enabled   | £60           | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test123  | test123         | vinudeep       | Select | Select | Select | Not | Select | Select | Select | Select | Me       | Enabled    | Disabled    | Me       | ink_jun8829@stf.ref.o2.co.uk | test123  | No        | Connected  | Phone        | Yes         | No       |
