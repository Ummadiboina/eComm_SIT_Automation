Feature: 17_Reg_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement

  This scenario ensures that when the customer on upgrade journey selects 'Tablet' proceeds till Delivery page, then the customer should be displayed with 'Go to click and collect’ under the Home delivery tab and should be able to place order with Click and collect

  @Web
  Scenario Outline: CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose to collect from store
    #And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button'
    #And Enter details in Delivery page for Click and collect and Click on the 'Continue button'
    #And Enter cardDetails in payment page input <username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username                          | password | Firstname | Surname | Tablet  | Username     | Action | tariff | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | inavgmsa_nov4868@stf.ref.o2.co.uk | test123  | Test      | Accepta | Samsung | TEST ACCEPTA | skip   |        | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |
