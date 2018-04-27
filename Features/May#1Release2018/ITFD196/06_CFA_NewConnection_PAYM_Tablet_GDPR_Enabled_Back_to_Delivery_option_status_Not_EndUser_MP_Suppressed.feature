Feature: 06_CFA_NewConnection_PAYM_Tablet_GDPR_Enabled_Back_to_Delivery_option_status_Not_EndUser_MP_Suppressed

  This scenario ensures that when a customer in acquisition journey selects 'Phone' and navigated to tariff page ,then
  the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web
  Scenario Outline: 06_CFA_NewConnection_PAYM_Tablet_GDPR_Enabled_Back_to_Delivery_option_status_Not_EndUser_MP_Suppressed

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus>


    Examples:
      | Device        | Firstname | Surname | Username     | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone  | Post  | status  |MBBStatus|
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Select | Select | Select | Select | Not    | Not   | Enabled |No       |
