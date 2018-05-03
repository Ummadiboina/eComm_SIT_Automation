Feature: Feature: 11_Existing_Create_Account_PAYM_Phones_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2B4_CP_Text_Post_Phone.feature


  This scenario ensures that when a customer in Existing customer journey selects 'PayM Phones' as an EndUser and Click and collect
  and Optin MP 'B1B2B4' and CP 'Text_Post_Phone' in Order confirmation page then the Consent status should be 'Compliant'

  @Web

  Scenario Outline: 11_Existing_Create_Account_PAYM_Phones_GDPR_Enabled_Refresh_CC_EndUser_MP_OptIn_B1B2B4_CP_Text_Post_Phone
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And Select create a new account and begin checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | username   | password | handset           | Username     | consumer | B1     | B2     | B3  | B4     | Text   | Email | Phone  | Post   | status  | MBBStatus |DeviceType|
      | ash@o2.com | test123  | Samsung Galaxy S8 | TEST ACCEPTA | Me       | Select | Select | Not | Select | Select | Not   | Select | Select | Enabled | No        |Connected |
