Feature: 120_FR_Mix_CFU_Phone

  @Web
  Scenario Outline: 120_FR_Mix_CFU_Phone
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    #And Click on View all Phones link in upgrade options page
    #And I choose PayM <handset>
    And Verify phones tab selected by default
    And Verify phones vertical upgrade journey is removed or not
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And Build your plan with <upFront> <term> and <data>
    #And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | password | Firstname | Surname | BSCstatus | Username     | Action | handset      | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | upFront | term | data | PreSelected | KeyEvent |
      | 05ap94978452@stf.ref.o2.co.uk | test123  | Test      | Accepta | Enabled   | TEST ACCEPTA | skip   | Galaxy Note9 | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | max     | max  | max  | No          | No       |
