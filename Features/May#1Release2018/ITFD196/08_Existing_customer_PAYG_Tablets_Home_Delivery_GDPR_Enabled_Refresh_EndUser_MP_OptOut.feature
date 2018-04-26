Feature: 08_Existing_customer_PAYG_Tablets_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptOut.feature


  This scenario ensures that when a customer in Existing customer journey selects 'PayG Tablets' as an EndUser
  and Optout all MP and CP in Order confirmation page then the Consent status should be 'Compliant'

  @Web

  Scenario Outline: 08_Existing_customer_PAYG_Tablets_Home_Delivery_GDPR_Enabled_Refresh_EndUser_MP_OptOut
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    #And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post>


    Examples:
      | handset           | Firstname | Surname | Username     | filtername | sortoption                 | consumer | B1  | B2  | B3  | B4  | Text| Email | Phone  | Post | status |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA | low        | Monthly data (High to low) | Me       | Not | Not | Not | Not | Not | Not | Not | Not | Enabled |