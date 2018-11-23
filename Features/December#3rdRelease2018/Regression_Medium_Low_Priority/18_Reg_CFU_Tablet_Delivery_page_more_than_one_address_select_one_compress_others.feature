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
    And enter a <houseNumber> and an <PostCode> in Delivery section
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Select the Home address
    And Enter cardDetails in payment page input <Username> and click 'Continue on next step'
    #And land on the payment page and input and other details and click 'Continue' on next step for otac
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    #And Click on 'I agree to the terms and condition' checkbox
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | username                                                | password | Tablet           | BSCstatus | BillCap   | CapAmount | color | tariff                 | houseNumber | PostCode | Username     | Action    | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType | PreSelected |
      | stester117a099195-cf27-44b4-819d-30306c4f580a@gmail.com | test123  | Galaxy Book 10.6 | Enabled   | CapMyBill | £60       | Gold  | 9.99upfront60.00amonth | 11          | SL11Er   | Test Accepta | enterCode | Me       | Not | Not | Select | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  | No          |

