Feature: 07_AFA_ExistingCust_NewContn_Phone_Mid_Tariff_And_Amazon_6M_PrimeVideo_Perk_With_Insurance

  #launch hooks and get browser
  @Web
  Scenario Outline: 07_AFA_ExistingCust_NewContn_Phone_Mid_Tariff_And_Amazon_6M_PrimeVideo_Perk_With_Insurance
    Given I login to Agent shop
    Given performs Agent Existing customer journey for <User>
    And Select a valid PayM <Device>
    And Select a valid perk associated tariff <tariffTerm> <tariffAmt> and <dataValue>
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal> for tariff <tariffTerm>
    And select a valid Handset and Tariff combination
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal> for tariff <tariffTerm>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Select valid <perk> of type <perkType> in <journey> agent channel
    And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    And In Agent Click on GDPR SaveMyPreference or Skip Preference CTA
    Then perform all the advisory checks
    And perform the credit checks for Agent Existing <Username> by Bank details
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>

    Examples:
      | User        | Device                           | Extras    | tariffAmt | tariffTerm | dataValue | perk                              | perkType | journey | statusOpal | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | 07521127311 | Galaxy S10 Plus 128GB Prism Blue | Insurance | £31       | 30D        | 40GB      | B:CR7682:Amazon:6M:PrimeVideo:FOC | giftPerk | AFA     | Enabled    | HomeDelivery | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
