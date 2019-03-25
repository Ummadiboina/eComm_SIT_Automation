# Validating Technical Specification Section Area
# Tags: optional

Feature: 01_CFA_Populated_Name_For_Camara_Battery_Screen_Size_Removed_Tech_Spec_Area


  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and lands on
  phone details page then customer should not be displayed with name populated with Camara, Battery life,
  Screen size in technical specification section area when technical specification is available for a device


  @Web
  Scenario Outline:01_CFA_Populated_Name_For_Camara_Battery_Screen_Size_Removed_Tech_Spec_Area

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Verify Technical Specification section is removed in product details page
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR to click and collect
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed



    Examples:
      | handset                         | Firstname | Surname | Username     | GDPRstatus | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | B4  | DeviceType | PreSelected | KeyEvent |
      | Samsung Galaxy S8 Plus Like New | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | Enabled   | CapMyBill | £15       | Select | Not | Not | Not | Connected  | No          | No       |
