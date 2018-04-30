Feature: 04_CFA_NewConnection_SIMO_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_ALL_CP_ALL

  @Web
  Scenario Outline: 04_CFA_NewConnection_SIMO_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_ALL_CP_ALL
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset           | Firstname | Surname | Username     | filtername | sortoption                 | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status  | Contract | MBBStatus |DeviceType|
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA | low        | Monthly data (High to low) | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Enabled | 30 Days  | NO        |Connected |