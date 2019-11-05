Feature: CFA_5G_PhoneWith5G_Tariff_FromPrePackageSection.feature

  This scenario ensures that select 5G device with 5G tariff and proceed with place order in CFA

  @Web
  Scenario Outline: CFA_5G_PhoneWith5G_Tariff_FromCustomplans

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to View tariff page
    And Land on the 'Tariffs and extra' page
    And Verify network type from prepackage tariff in TnE page <NetworkType>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate Basket Page for applied Bill Spend Cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And click on "go to checkout" button
    And Select the "New Connection" which you want to perform
    And enter a <Firstname> and <Surname> and ten digit home number
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Enter delivery details in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed


    Examples:
      | handset               | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | NetworkType | B1  | B2  | B3     | B4  | Text | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | Samsung Galaxy S10 5G | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £5        | 5G          | Not | Not | Select | Not | Not  | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |
