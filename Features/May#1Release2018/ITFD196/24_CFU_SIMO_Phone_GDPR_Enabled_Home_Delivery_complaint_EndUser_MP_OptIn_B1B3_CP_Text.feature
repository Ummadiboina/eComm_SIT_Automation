Feature: 24_CFU_SIMO_Phone_GDPR_Enabled_Home_Delivery_complaint_EndUser_MP_OptIn_B1B3_CP_Text

  This Scenario ensures that when the upgrade customer with Compliant consent status selects 'SIMO' and placed an order as an End user ,then the customer should be
  able to select MP - B1/B3 and CP - Text selected in Order confirmation page

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
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Contract | username                   | password | filtername | sortoption                 | consumer | B1     | B2  | B3     | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | 30 Days  | e2ed14411644@stf.ref.co.uk | test123  | low        | Monthly data (High to low) | Me       | Select | Not | Select | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |