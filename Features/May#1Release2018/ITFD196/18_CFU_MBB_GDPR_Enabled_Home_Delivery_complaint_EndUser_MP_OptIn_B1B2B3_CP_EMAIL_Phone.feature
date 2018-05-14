Feature: 18_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3_CP_EMAIL_Phone

  This Scenario ensures that when the upgrade customer with Compliant consent status selects 'PAYM MBB' and placed an order as an End user ,then the  customer should be able to select MP - B1/B2/B3 and CP -
  EMAIL/Phone in Order confirmation page

  @Web
  Scenario Outline: 18_CFU_MBB_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B2B3_CP_EMAIL_Phone

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Click on 'View all mobile Broadband' link
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    #And Select a <Tablet> device from Recommended devices section
    #And Click on View all Tariffs link in upgrade options page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Tablet        | Action | Surname | Username     | filtername | sortoption                 | username                   | password | consumer | B1     | B2     | B3     | B4  | Text | Email  | Phone  | Post | Device_Name | status  | MBBStatus | DeviceType |
      | Random Device | skip   | ACCEPTA | TEST ACCEPTA | low        | Monthly data (Low to High) | e2ed19698391@stf.ref.co.uk | test123  | Me       | Select | Select | Select | Not | Not  | Select | Select | Not  | Huawei      | Enabled | No        | Connected  |
   #   | Apple iPhone 7    | TEST      | ACCEPTA | TEST ACCEPTA | high       |
