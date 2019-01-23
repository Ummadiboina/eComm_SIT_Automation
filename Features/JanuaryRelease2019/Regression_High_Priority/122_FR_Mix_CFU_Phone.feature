Feature: 122_FR_Mix_CFU_Phone

  @Web
  Scenario Outline: 10_1_FR_Mix_CFU_Phone
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And Build your plan with <upFront> <term> and <data>
    #And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username         | password | handset  | upFront | term | data | Action | Firstname | Surname | Username     | filtername | BSCstatus | sortoption                 | tabletname | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | upFront | term | data | PreSelected | KeyEvent |
      | cr7086e1@usr.com | test123  | iPhone 7 | avg     | avg  | avg  | skip   | TEST      | ACCEPTA | TEST ACCEPTA | low        | Disabled  | Monthly data (High to low) | A3 10      | Me       | Select | Not | Not | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | min     | min  | min  | No          | No       |
