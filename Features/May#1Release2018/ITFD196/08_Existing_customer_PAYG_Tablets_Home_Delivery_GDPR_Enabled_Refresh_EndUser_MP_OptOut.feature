Feature: 08_Existing_customer_PAYG_Tablets_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptOut.feature


  This Scenario ensures that when the Existing Customer in acquisition journey selects 'PAYG Tablets' with Home Delivery and placed an order by opting out of all Marketing preference,
  then the Order consent profile should be created in CMT as expected

  @Web

  Scenario Outline: 08_Existing_customer_PAYG_Tablets_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptOut
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <Username> and <password> credentials
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <username> and other details for upgrade and click 'Continue on next step'
    #And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | handset           | Firstname | Surname | Username                      | username     | password | filtername | sortoption                 | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | Device                   | MBBStatus | DeviceType |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | 27fe65687622@stf.ref.o2.co.uk | TEST ACCEPTA | test123  | low        | Monthly data (High to low) | Me       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | Apple iPad Pro 10.5 inch | No        | Connected  |