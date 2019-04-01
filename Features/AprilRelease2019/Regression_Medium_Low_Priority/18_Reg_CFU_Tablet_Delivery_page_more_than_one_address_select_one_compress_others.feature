Feature: 18_Reg_CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others

  This scenario ensures that when the customer on upgrade journey selects 'Tablet' proceeds till Delivery page and enters the postcode, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline: CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Click on View all Tablets link in upgrade options page
    And Select PayM Tablet <Tablet>
    And Navigate to device details page
    #And Select a <Tablet> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Click on View all Tariffs link in upgrade options page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on 'Use a different delivery address'link
    #And enter a <HouseNumber> and an <PostCode> in Delivery section
    And enter <HouseNumber> and <PostCode> in Delivery section to set different delivery address
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Select the Home address
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    #And land on the payment page and input and other details and click 'Continue' on next step for otac
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    #And Click on 'I agree to the terms and condition' checkbox
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                                              | password | Tablet             | BSCstatus | BillCap   | CapAmount | color | tariff                 | HouseNumber | PostCode | Username     | Action    | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post   | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | stester5802bc19-1ce9-4259-8502-d4f1a5261e15@gmail.com | test123  | iPad Pro 10.5 inch | Enabled   | CapMyBill | £60       | Gold  | 9.99upfront60.00amonth | 100         | SL11ER   | Test Accepta | enterCode | Me       | Select | Not | Not | Not | Not  | Select | Not   | Select | Enabled    | No        | Connected  | No          | No       |

