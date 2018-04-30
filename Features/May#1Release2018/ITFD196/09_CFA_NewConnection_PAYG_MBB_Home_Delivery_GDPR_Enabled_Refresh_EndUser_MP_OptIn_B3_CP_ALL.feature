Feature: 09_CFA_NewConnection_PAYG_MBB_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptIn_B3_CP_ALL

  @Web
  Scenario Outline: 09_CFA_NewConnection_PAYG_MBB_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptIn_B3_CP_ALL
    Given I am an CFA user and Lands on shop page
    And Navigate to PayG MBB page
    And I choose MBB PayG "<Random Device>"
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    #And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>



    Examples:
      | handset  | Random Device | Firstname | Surname | Username     | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status  | MBBStatus |DeviceType|
      | iPhone 6 |               | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Enabled | No        |Connected |