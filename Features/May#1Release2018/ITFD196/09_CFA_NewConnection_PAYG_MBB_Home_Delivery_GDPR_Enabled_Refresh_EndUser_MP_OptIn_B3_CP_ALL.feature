Feature: 09_CFA_NewConnection_PAYG_MBB_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptIn_B3_CP_ALL

  @Web
  Scenario Outline: 09_CFA_NewConnection_PAYG_MBB_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptIn_B3_CP_ALL
    Given I am an CFA user and Lands on shop page
    And Navigate to PayG MBB page
    And I choose MBB PayG "Random Device"
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button' in GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>


    Examples:
      | handset  | Firstname | Surname | Username       |consumer| B1       | B2   | B3       | B4      | C1     | C2    | C3  | C4 |
      | iPhone 6 | TEST       | ACCEPTA | TEST ACCEPTA  |    Me   | Select  | Not | Select     | Select |Select  |Select | Not | Not|