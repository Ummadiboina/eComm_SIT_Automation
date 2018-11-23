Feature: 03_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_B1_B3_CP_EMAIL

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Phone' and placed an order as an End user ,then the customer should be displayed with MP - B1/B3 and CP - EMAIL selected in default in Order confirmation page

  @Web
  Scenario Outline: 03_CFU_Phones_GDPR_Enabled_Home_Delivery_EndUser_Complaint_MP_OptIn_B1_B3_CP_EMAIL
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    And Select a tariff <tariff>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And verify that 'Sim Swap Form'link is diplayed
    When I click on 'Sim Swap Form' I should be opned with a new tab
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on 'Use a different delivery address'link
    And enter a <houseNumber> and an <PostCode> in Delivery section
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Select the Home address
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | username                                    | password | houseNumber | PostCode | handset       | BSCstatus | BillCap       | CapAmount | Username     | Action    | tariff                   | consumer | B1     | B2  | B3     | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | rbmuatlokesh_donotusee3035@stf.ref.o2.co.uk | test123  | 11          | SL11Er   | iPhone 8 Plus | Enabled   | DontCapMyBill | Nill      | TEST ACCEPTA | enterCode | 129.99upfront37.00amonth | Me       | Select | Not | Select | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | Yes         |
