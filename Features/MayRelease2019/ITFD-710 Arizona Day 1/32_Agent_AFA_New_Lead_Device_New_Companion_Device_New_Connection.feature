Feature: 32_Agent_AFA_New_Lead_Device_New_Companion_Device_New_Connection

  #launch hooks and get browser
  @Web
  Scenario Outline: Agent_AFA_New_Lead_Device_New_Companion_Device_New_Connection
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    #Seems like below step is not required
    #And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    Then perform all the advisory checks
    Then perform the credit checks and validate affordability for CCA using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <GDPRstatus> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    #And Is this order for You or Someone else <consumer> when GDPR is <GDPRstatus2>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus2> and <PreSelected>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    #code for below
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    #code for below along with error scenarios
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section
    Then perform all the advisory checks
    And perform the credit checks for Agent Existing <username> by Bank details
    And Click on 'Generate CCA' button
    #Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    #And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed


    Examples:
      | Device                       | Tariffs | user | BSCstatus | BillCapAmount | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | Consumer | GDPRstatus | GDPRstatus2 | consumer | username                     | password | status2 | DeviceType | DeviceModule | PreSelected | KeyEvent |
      | iPhone 7 Plus 32GB Rose Gold | Refresh | Base   | Enabled   | £60           | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test123  | test123         | vinudeep       | Select | Select | Select | Not | Select | Select | Select | Select | Me       | Enabled    | Disabled    | Me       | ink_jun8829@stf.ref.o2.co.uk | test123  | No        | Connected  | Phone        | Yes         | No       |
