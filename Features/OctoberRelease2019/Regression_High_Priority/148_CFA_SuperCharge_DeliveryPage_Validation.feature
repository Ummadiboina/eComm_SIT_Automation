Feature: 148_CFA_SuperCharge_DeliveryPage_Validation

  @Web
  Scenario Outline: 148_CFA_SuperCharge_DeliveryPage_Validation
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Verify connection tabs in "New Connection" journey which you want perform
    And Verify Go To Payment CTA "Disable" status before or after completing "About You" section
    And Select the "New Connection" which you want to perform
    And Verify "About You" section CTA validation
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Verify Go To Payment CTA "Disable" status before or after completing "Delivery Details" section
    And Verify "Delivery Details" section CTA validation
    And Enter delivery details in delivery section
    And Verify Go To Payment CTA "Disable" status before or after completing "Ofcom" section
    And Select do not have PAC or STAC code CTA
    And Verify Go To Payment CTA "Enable" status before or after completing "Ofcom" section
    And Click on GoToPayment or GoToAgreement CTA
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | handset   | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent |
      | Galaxy S9 | Test      | Accepta | Test Accepta | Enabled   | CapMyBill | £10       | Select | Not | Not | Enabled    | Connected  | No          | No       |
