Feature: 02_CFA_Verify_Tablet_Recommended_Tariff_Configured_In_PDAndTnEPage

  This scenario ensures that all the CFA tariffs are displayed for the selected brand, model and variant under Tariff
  config page in Drupal and configure the 'Recommended' tariff and validate the same on PD and T&E page

  @Web
  Scenario Outline:02_CFA_Verify_Tablet_Recommended_Tariff_Configured_In_PDAndTnEPage

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTabShop> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleCFACFUStatus>
    And Configure <preferredType> tariff type
    And save the drupal tariffs
    And launch the shop page in new window
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And Select PayM Tablet <deviceMdl>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | userName   | password   | decoupleCFACFUStatus | drupalNavTabShop | preferredType | deviceBrand | shopSubLink | deviceMdl          | deviceVariant                           | GetTariffCTA    | Firstname | Surname | Username     | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | Capacity | color  |
      | DuraiArasi | DuraiArasi | Enable               | Shop             | Recommended   | Apple       | Tariff      | iPad Pro 10.5 inch | iPad Pro 10.5 inch 64GB Silver (Active) | GETCFATariffCTA | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £15       | Select | Not | Not | Enabled    | Connected  | No          | No       | 64GB     | Silver |
