Feature: 01_CFA_NewConnection_PAYM_Phone_Bill_Spend_Caps_Enabled_Refresh_EndUser

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and placed an order by opting out of all Marketing preference,
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 01_CFA_NewConnection_PAYM_Phone_Bill_Spend_Caps_Enabled_Refresh_EndUser
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate Bill Spend Caps section and choose your cap <BillCap> <CapAmount>
    And I Land on the basket page and choose home delivery option
    And Validate added Bill Spend Cap in Basket page
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>



    Examples:
      | handset   | Firstname | Surname | Username     | BillCap   | CapAmount | consumer | B1  | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Galaxy S9 | TEST      | ACCEPTA | TEST ACCEPTA | CapMyBill | £5        | Me       | Not | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |