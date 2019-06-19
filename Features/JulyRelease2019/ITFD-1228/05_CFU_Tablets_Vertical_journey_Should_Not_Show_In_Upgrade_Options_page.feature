Feature: 05_CFU_Tablets_Vertical_journey_Should_Not_Show_In_Upgrade_Options_page

  This scenario ensures that when an upgrade user selects 'Tablets' tab then customer should not show vertical journey
  in upgrade options page and should see 'See all tablets' and 'See all mobile broadband devices' and Phones 'Search' box

  @Web
  Scenario Outline: 05_CFU_Tablets_Vertical_journey_Should_Not_Show_In_Upgrade_Options_page

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Verify phones tab selected by default
    And Click on Tablet section in upgrade options page
    And Verify tablets vertical upgrade journey is removed or not
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Enter details in Delivery page for Click and collect
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | username                                                | password | Firstname | Surname | BSCstatus | BillCap   | CapAmount | Tablet             | color      | Capacity | Username     | Action    |
      | stester1169c70e98-990f-4480-aba3-dfecd3e25601@gmail.com | test123  | Test      | Accepta | Enabled   | CapMyBill | £30       | iPad 9.7 inch 2018 | Space Grey | 32GB     | TEST ACCEPTA | enterCode |
