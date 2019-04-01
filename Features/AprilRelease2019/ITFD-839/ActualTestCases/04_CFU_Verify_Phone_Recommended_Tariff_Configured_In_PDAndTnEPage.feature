Feature: 04_CFU_Verify_Phone_Recommended_Tariff_Configured_In_PDAndTnEPage

  This scenario ensures that all the CFU tariffs are displayed for the selected brand, model and variant under Tariff
  config page in Drupal and configure the 'Recommended' tariff and validate the same on PD and T&E page

  @Web
  Scenario Outline:04_CFU_Verify_Phone_Recommended_Tariff_Configured_In_PDAndTnEPage

    Given I am a Drupal Admin
    And I Login with Drupal Admin Credential <userName> and <password> and verify login page
    Then Navigate to <drupalNavTabShop> tab link and click it
    And Click on <shopSubLink> link under Shop section
    Then Select <deviceBrand> and <deviceMdl> and <deviceVariant> under tariff section
    And Verify GetCFATariff and GetCFUTariff CTA and select <GetTariffCTA> when decouple status is <decoupleCFACFUStatus>
    And Configure <preferredType> tariff type
    And save the drupal tariffs
    And launch the shop page in new window
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <Password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Click on View all Phones link in upgrade options page
    And I choose PayM <deviceMdl>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And select <Capacity> capacity of the connected device
    And Navigate to device details page
    And Validate drupal configured <preferredType> tariff and select
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks in Upgrade journey
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples:
      | userName   | password   | decoupleCFACFUStatus | drupalNavTabShop | preferredType | deviceBrand | shopSubLink | deviceMdl | deviceVariant                     | GetTariffCTA    | username                 | Password | BSCstatus | BillCap   | CapAmount         | Username     | Action | color      | B1  | B2  | B3  | GDPRstatus | DeviceType | PreSelected | KeyEvent | Capacity |
      | DuraiArasi | DuraiArasi | Enable               | Shop             | Recommended   | Apple       | Tariff      | iPhone 6  | iPhone 6 32GB Space Grey (Active) | GETCFUTariffCTA | ajsfjajasfjss@naskdn.com | test123  | Enabled   | CapMyBill | DontCapMyBillLink | TEST ACCEPTA | skip   | Space Grey | Not | Not | Not | Enabled    | Connected  | No          | No       | 32GB     |
