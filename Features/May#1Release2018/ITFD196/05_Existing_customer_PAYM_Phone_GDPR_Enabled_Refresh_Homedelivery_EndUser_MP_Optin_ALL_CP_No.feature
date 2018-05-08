Feature: 05_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_Optin_ALL_CP_No.feature


  This Scenario ensures that when the Existing customer in acquisition journey selects 'PAYM Phone'  with Home delivery and placed an order by opting of Marketing preference 'ALL' and CP 'NO',
  then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 05_Existing_customer_PAYM_Phone_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_Optin_ALL_CP_No
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>



    Examples:
      | username                     | password | handset       | user         | consumer | status  | B1     | B2     | B3     | B4  | Text | Email | Phone | Post | MBBStatus | DeviceType |
      | identityref01@mailinator.com | test123  | iPhone 7 Plus | TEST ACCEPTA | Me       | Enabled | Select | Select | Select | Not | Not  | Not   | Not   | Not  | No        | Connected  |
