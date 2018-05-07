Feature: 13_CFU_SIMO_Phones_Retained_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_MP_OptIn_ALL_CP_ALL

  This Scenario ensures that when the Customer in Upgrade journey selects 'SIMO Phones'  with Home delivery and placed an order by opting of Marketing preference 'ALL' and CP 'ALL',
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: 13_CFU_SIMO_Phones_Retained_Review_Page_Home_Delivery_GDPR_Enabled_EndUser_MP_OptIn_ALL_CP_ALL
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And I click on 'Sim only Tariff' tab
    And verify that the url has simo at the end
    Then the 'Phones' button should be selected by default
    #And click on the 'MBB' button
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
      | Contract  | username                   | password | filtername | sortoption                 | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | 12 Months | e2ed50938722@stf.ref.co.uk | test123  | low        | Monthly data (High to low) | Me       | Select | Select | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  |