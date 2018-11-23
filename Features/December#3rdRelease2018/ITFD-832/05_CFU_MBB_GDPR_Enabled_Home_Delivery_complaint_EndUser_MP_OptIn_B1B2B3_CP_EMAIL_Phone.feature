Feature: 05_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3_CP_EMAIL_Phone

  This Scenario ensures that when the upgrade customer with complaint consent status selects 'PAYM MBB' and placed an order as an End user ,then the customer should be displayed
  with MP - B1/B2/B3 and CP - EMAIL/Phone selected in default in Order confirmation page

  @Web
  Scenario Outline: 05_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3_CP_EMAIL_Phone

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
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | Device_Name   | Action    | Surname | BSCstatus | BillCap   | CapAmount | Username     | username                      | password | consumer | B1     | B2     | B3     | B4  | Text | Email  | Phone  | Post | status  | MBBStatus | DeviceType | PreSelected |
      | Random Device | enterCode | ACCEPTA | Enabled   | CapMyBill | £200      | TEST ACCEPTA | 10au66996482@stf.ref.o2.co.uk | test123  | Me       | Select | Select | Select | Not | Not  | Select | Select | Not  | Enabled | No        | Connected  | Yes         |

