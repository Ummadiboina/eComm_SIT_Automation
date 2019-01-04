Feature: 23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_B3

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM Phone' and lands on
  delivery page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and MP Pre Ticked - B3 and place an order as an CC End user then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 23_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_PreTicked_To_MP_Optin_B3
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
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details for existing customer
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | BSCstatus | BillCap   | CapAmount | username                                    | password | Username     | B1  | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | iPhone X | Enabled   | CapMyBill | £60       | rbmuatlokesh_donotusee2512@stf.ref.o2.co.uk | test123  | TEST ACCEPTA | Not | Not | Select | Not | Enabled    | Connected  | Yes         | No       |
