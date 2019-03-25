# Validating Calculator State Values are Remains Same After Change in Upfront,Tenure and Datavalues
# Tags: optional

Feature: 01_CFA_Calculator_State_Value_Remains_Same_After_Change_Upfront_Tenure_and_Datavalues


  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and lands on
  phone details page then customer change the device variant after modify the calculator state values and calculator state
  values should remains same ie Upfront, Tenure and Datavalue.


  @Web
  Scenario Outline:01_CFA_Populated_Name_For_Camara_Battery_Screen_Size_Removed_Tech_Spec_Area

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And choose some values in calculator in product details page
    And click on the color dropdown
    And select <color> color of the connected device
    And Verify Calculator state values are remains same after change in upfront,tenure and datavalues when device variant change
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
      | handset        | Firstname | Surname | Username     | GDPRstatus | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | B4  | DeviceType | PreSelected | KeyEvent |
      | Apple iPhone X | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | Enabled   | CapMyBill | £15       | Select | Not | Not | Not | Connected  | No          | No       |
