Feature: 17_CFU_PAYM_MBB_TooManyAddressesMatching_PostCode_Then_Customer_Should_Shown_Exception_Copy

  This Scenario ensures that when an upgrade Customer selects 'PAYM MBB' and lands on 'Payment page' and clicks on 'Use
  a different address link' for billing address and enters a postal code, if there are too many addresses are matching
  corresponding to entered postcode then customer should be shown the copy 'There are too many results for this postcode.
  Add your house number and try again'

  @Web
  Scenario Outline: 17_CFU_PAYM_MBB_TooManyAddressesMatching_PostCode_Then_Customer_Should_Shown_Exception_Copy

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on MBB section in upgrade options page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on 'Use a different delivery address'link
    And enter <houseNumber> and <PostCode> in Delivery section to set different delivery address
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    #And Continue to Agreements page and confirm all the agreement checks
    #And Continue to Review page and review the order
    #Then order confirmation is displayed
    #Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Device_Name   | Action    | houseNumber | PostCode | BSCstatus | BillCap   | CapAmount | Username     | username                                                | password | B1  | B2  | B3  | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | Random Device | enterCode |             | SL14DX   | Enabled   | CapMyBill | £100      | TEST ACCEPTA | stester117f30bf0e-9fe6-4f26-88e5-c2ec2f260455@gmail.com | test123  | Not | Not | Not | Not | Enabled    | Connected  | No          | No       |

