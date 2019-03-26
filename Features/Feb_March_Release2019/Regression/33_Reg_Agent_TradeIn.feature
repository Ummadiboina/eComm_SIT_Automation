Feature: 33_Reg_Agent_TradeIn

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M dongle Acqusistion Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <User>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Clicks on 'Trade In'button
    And Validate all the Basket content and checkout
    Then Validate deal summary for applied Bill Spend Cap <BillCapAmount> when BSC is <BSCstatus>
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey <PreSelected>
    Then perform all the advisory checks
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    #And Click on 'Continue' button on upgrade page
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    #And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    #And Continue to Review page, check order contract text and review the order
    #Then order confirmation is displayed


    Examples:
      | User        | Device                       | Tariffs | BSCstatus | BillCapAmount | username                      | user         | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | password | consumer | B1  | B2     | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | 07568420577 | iPhone 7 Plus 32GB Rose Gold | Refresh | Enabled   | £200          | dont56640665@stf.ref.o2.co.uk | TEST ACCEPTA | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | Flat 6      | SL11EL   | test123  | Me       | Not | Select | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          |