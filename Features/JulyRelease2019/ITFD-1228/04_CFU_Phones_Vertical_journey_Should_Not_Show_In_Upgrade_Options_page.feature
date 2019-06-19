Feature: 04_CFU_Phones_Vertical_journey_Should_Not_Show_In_Upgrade_Options_page

  This scenario ensures that when an upgrade user selects 'Phones' tab then customer should not show vertical journey in
  upgrade options page and should see 'See all phones' link and Phones 'Search' box

  @Web
  Scenario Outline: 04_CFU_Phones_Vertical_journey_Should_Not_Show_In_Upgrade_Options_page

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Verify phones tab selected by default
    And Verify phones vertical upgrade journey is removed or not
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username                      | password | handset       | BSCstatus | BillCap   | CapAmount | Action | Username     | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | 05ap64995324@stf.ref.o2.co.uk | test123  | iPhone 8 Plus | Enabled   | CapMyBill | £0        | skip   | TEST ACCEPTA | Me       | Select | Not | Not | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
