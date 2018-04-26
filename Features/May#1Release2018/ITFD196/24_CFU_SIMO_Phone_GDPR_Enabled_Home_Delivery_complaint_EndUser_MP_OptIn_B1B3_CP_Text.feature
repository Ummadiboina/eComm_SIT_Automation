Feature: 24_CFU_SIMO_Phone_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3_CP_Text

  This scenario ensures that an upgrade customer is able to select a 12 months tablets tariff under the simo tab in upgrade options page

  @Web
  Scenario Outline: 24_CFU_SIMO_Phone_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3_CP_Text
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    #And click on the 'Tablets' button
    And the two contract lenght should be displayed
    And all the tariffs under twelve months should be displayed
    And the data filters is displayed
    And Click on different <Contract>  Months Tariff in Tab
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And Select 'I’ll keep my current sim' option
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post>

    Examples:
      | Contract | username           | password | filtername | sortoption                 |consumer    | B1     | B2  | B3     | B4  | Text   | Email | Phone  | Post |status|
      | 30 Days  | 12342015@gmail.com | test123  | low        | Monthly data (High to low) |SomeOne else| Select | Not | Select | Not |Select|Not | Not | Not|Enabled         |