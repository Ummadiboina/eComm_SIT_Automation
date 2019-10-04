Feature: 10_AFA_ExistingCust_NewContn_CCA_Link_Phone_Standard_Tariff_And_Amazon_6M_UnlimitedMusic_Perk

  #launch hooks and get browser
  @Web
  Scenario Outline: 10_AFA_ExistingCust_NewContn_CCA_Link_Phone_Standard_Tariff_And_Amazon_6M_UnlimitedMusic_Perk
    Given I login to Agent shop
    Given performs Agent Existing customer journey for <User>
    And Select a valid PayM <Device>
    And Select a valid perk associated tariff <tariffTerm> <tariffAmt> and <dataValue>
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And select a valid Handset and Tariff combination_new
    And Validate gift extras tab and perks displayed under gift extras tab when OPAL is <statusOpal>
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Add your Bill Spend Cap <BillCapAmount> in agent deal builder when BSC is <BSCstatus>
    And Select valid <perk> of type <perkType> in <journey> agent channel
    And Validate all the Basket content and checkout
    And Validate perk <perk> of type <perkType> selected in Agent <journey> SSC pages when OPAL is <statusOpal>
    And In Agent Click on GDPR SaveMyPreference or Skip Preference CTA
    Then perform all the advisory checks
    And perform the credit checks by Bank details for Agent Existing CCA customer <Username>
    And Choose <DeliveryType> delivery address and delivery time
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for upgrade CCA User
    And Click on 'Continue' button on upgrade page
    And Click on the 'Continue button' in delivery page
    And Click on Go To Payment CTA in delivery page
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples:
      | User        | username                      | password | Device                | tariffTerm | tariffAmt | dataValue | perk                                   | perkType | journey | statusOpal | DeliveryType | BSCstatus | BillCapAmount | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | Consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType | DeviceModule |
      | 07734714661 | 23oc57047547@stf.ref.o2.co.uk | test123  | iPhone Xs 64GB Silver | 24M        | £65       | 30GB      | B:CR7682:Amazon:12M:UnlimitedMusic:FOC | giftPerk | AFA     | Enabled    | HomeDelivery | Enabled   | £30           | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Phone        |
