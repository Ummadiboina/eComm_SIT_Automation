Feature: 01_CFA_PAYM_Phone_Validate_OFCOM_Switching_Feature_In_DeliveryPage



  @Web
  Scenario Outline:01_CFA_PAYM_Phone_Validate_OFCOM_Switching_Feature_In_DeliveryPage

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and <MBB Device> selected
    And Validate <pacStacCheck> <pacStackRetainCheck> and Enter input details <ofComMobileNum> <pacStacCode> for PAC and STAC code when ofcom status is <ofComStatus>
    And Validate OFCOM switching input <ofComMobileNum> and status in Order Confirmation page when Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>



    Examples:
      | handset   | Firstname | Surname | Username     | GDPRstatus | MBB Device | ofComStatus | pacStacCheck | pacStackRetainCheck | ofComMobileNum | pacStacCode  | BSCstatus | BillCap   | CapAmount | B1     | B2     | B3  | B4  | DeviceType | PreSelected | KeyEvent |
      | Galaxy S9 | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | No         | Enabled     | Yes          | Yes                 | 07123456789    | 123456JKKhan | Enabled   | CapMyBill | £15       | Select | Select | Not | Not | Connected  | No          | No       |
