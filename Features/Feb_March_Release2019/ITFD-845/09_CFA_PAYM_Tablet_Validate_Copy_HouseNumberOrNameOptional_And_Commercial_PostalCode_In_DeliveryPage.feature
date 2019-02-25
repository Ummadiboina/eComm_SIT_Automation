Feature: 09_CFA_PAYM_Tablet_Validate_Copy_HouseNumberOrNameOptional_And_Commercial_PostalCode_In_DeliveryPage

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and lands on delivery page
  and selects Home Delivery option then customer should see the copy 'House number or name (optional)' instead of 'House
  number or name*' and enters commercial  postal code and proceed.

  @Web
  Scenario Outline:09_CFA_PAYM_Tablet_Validate_Copy_HouseNumberOrNameOptional_And_Commercial_PostalCode_In_DeliveryPage

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And Select PayM Tablet <tabletname>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Choose some Accesssory
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page


    Examples:
      | tabletname         | postcode | HouseNumber | Firstname | Surname | Username     | GDPRstatus | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3     | B4  | DeviceType | PreSelected | KeyEvent |
      | iPad Pro 10.5 inch | LS110NE  | 10          | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | Enabled   | CapMyBill | £60       | Select | Not | Select | Not | Connected  | No          | No       |
