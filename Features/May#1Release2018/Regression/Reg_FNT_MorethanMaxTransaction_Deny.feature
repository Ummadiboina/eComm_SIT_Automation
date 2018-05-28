Feature: Reg_FNT_MorethanMaxTransaction_Deny

  @Web
  Scenario Outline: FNT CFA PayM Phones Click and collect scenario for More than Max Transaction
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page selecting pay device in full
    And Choose all Accesssory
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    Then Order Decline page should be displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | handset  | Firstname | Surname | Username  | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | Galaxy S | TEST      | NINE    | TEST NINE | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |
