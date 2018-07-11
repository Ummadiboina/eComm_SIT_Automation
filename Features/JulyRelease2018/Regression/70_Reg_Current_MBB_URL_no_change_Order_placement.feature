Feature: 70_Reg_Current_MBB_URL_no_change_Order_placement

  @Web

  Scenario Outline: This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I launch the OldMBBURL
    And select "random" MBBtariff
    #And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input title in Delivery page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And land on the payment page and input <user> and other details for existing customer
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    #Modify the above step to include pdf download
    Examples:
      | username               | password | user         | Firstname | Surname | consumer | B1  | B2  | B3     | B4  | Text | Email  | Phone  | Post | status  | MBBStatus | DeviceType |
      | in034242_226353@o2.com | test123  | TEST ACCEPTA | TEST      | ACCEPTA | Me       | Not | Not | Select | Not | Not  | Select | Select | Not  | Enabled | No        | Connected  |