Feature: 03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2_CP_EmailandPost

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM MBB'  with Home delivery and placed an order by opting of Marketing preference 'B1/B2' and CP 'Email/Post',
  then the Order consent profile should be created in CMT as expected

  @Web @OctoberReleasePhase1
  Scenario Outline: 03_CFA_NewConnection_PAYM_MBB_GDPR_Enabled_Refresh_Homedelivery_EndUser_MP_OptIn_B1B2_CP_EmailandPost
    Given I am an CFA user and Lands on shop page
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    #Then I should see tariffs based on the selected sort option <sortoption>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | handset  | Firstname | Surname | Username     | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | status  | Device_Name | MBBStatus |DeviceType|
      | iPhone 6 | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | Enabled |             | No        |Connected |