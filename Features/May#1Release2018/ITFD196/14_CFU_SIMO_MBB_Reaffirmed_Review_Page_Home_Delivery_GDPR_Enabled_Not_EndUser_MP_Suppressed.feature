Feature: 14_CFU_SIMO_MBB_Reaffirmed_Review_Page_Home_Delivery_GDPR_Enabled_Not_EndUser_MP_Suppressed

  This scenario ensures that an upgrade customer is able to select a 12 months tablets tariff under the simo tab in upgrade options page

  @Web
  Scenario Outline: 14_CFU_SIMO_MBB_Reaffirmed_Review_Page_Home_Delivery_GDPR_Enabled_Not_EndUser_MP_Suppressed
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    And click on the 'MBB' button
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
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Contract | username           | password | filtername | sortoption                 | consumer     | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus |DeviceType|
      | 30 Days  | 12342015@gmail.com | test123  | low        | Monthly data (High to low) | SomeOne else | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | Yes       |Connected |