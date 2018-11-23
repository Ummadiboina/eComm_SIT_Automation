Feature: 09_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_Optin_B3_CP_text

  This Scenario ensures that when the Existing customer in acquisition journey selects 'PAYM Phone'  with Home delivery and placed an
  order, also verifying Marketing preference 'B3' and CP 'Text'

  @Web

  Scenario Outline: 09_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_Optin_B3_CP_text
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for existing customer
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | handset  | BSCstatus | BillCap   | CapAmount | username                                    | password | Username     | consumer | B1  | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | iPhone X | Enabled   | CapMyBill | £60       | rbmuatlokesh_donotusee2512@stf.ref.o2.co.uk | test123  | TEST ACCEPTA | Me       | Not | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | Yes         |
