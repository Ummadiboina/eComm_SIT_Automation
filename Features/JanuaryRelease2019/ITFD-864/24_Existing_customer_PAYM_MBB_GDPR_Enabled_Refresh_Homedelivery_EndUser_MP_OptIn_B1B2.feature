Feature: 24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM MBB' and lands on
  delivery page then customer should not be displayed with end user question instead the customer should see GDPR consent
  and select MP OptIn - B1B2 and place an order as an End user then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 24_Existing_customer_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
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
      | Device_Name   | BSCstatus | BillCap   | CapAmount | username                      | password | Username     | B1  | B2  | B3     | B4  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | Random Device | Enabled   | CapMyBill | £30       | dont36182576@stf.ref.o2.co.uk | test123  | TEST ACCEPTA | Not | Not | Select | Not | Enabled    | Connected  | No          | No       |
