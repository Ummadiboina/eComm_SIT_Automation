# Validating GDPR functionality
# Tags: optional

Feature: 01_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_B1

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and lands on delivery page
  then customer should not be displayed with end user question instead the customer should see GDPR consent and placed
  an order by opting of Marketing preference 'B1', with CC then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline:01_CFA_NewConnection_PAYM_Phone_GDPR_Enabled_Refresh_CC_EndUser_MP_B1

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
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
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset  | color  | Firstname | Surname | Username     | GDPRstatus | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | B4  | DeviceType | PreSelected | KeyEvent |
      | iPhone X | Silver | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | Enabled   | CapMyBill | £15       | Select | Not | Not | Not | Connected  | No          | No       |
