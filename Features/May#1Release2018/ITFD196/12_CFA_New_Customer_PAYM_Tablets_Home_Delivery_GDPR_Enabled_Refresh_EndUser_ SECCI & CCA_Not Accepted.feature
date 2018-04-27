Feature: 12_CFA_New_Customer_PAYM_Tablets_Home_Delivery_GDPR_Enabled_Refresh_EndUser_ SECCI & CCA_Not Accepted

  This scenario ensures that when a customer in acquisition journey selects 'Phone' and navigated to tariff page ,then
  the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web
  Scenario Outline: 12_CFA_New_Customer_PAYM_Tablets_Home_Delivery_GDPR_Enabled_Refresh_EndUser_ SECCI & CCA_Not Accepted

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
    #And Continue to Agreements page and confirm all the agreement checks
    And donot select the SECCI and CCA agreements in Agreement page
    #And Continue to Review page and review the order
    #Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus>


    Examples:
      | handset  |Device| Firstname | Surname | Username       |consumer| B1       | B2   | B3       | B4      | Text     | Email    | Phone  | Post |status|MBBStatus|
      | iPhone 6 |      |TEST       | ACCEPTA | TEST ACCEPTA  |    Me   | Select  | Not | Select     | Select |Select  |Select | Not | Not|Enabled|     No|
