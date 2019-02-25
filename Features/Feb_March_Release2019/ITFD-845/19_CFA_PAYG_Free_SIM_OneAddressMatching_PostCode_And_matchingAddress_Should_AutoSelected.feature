Feature: 19_CFA_PAYG_Free_SIM_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYG Free SIM' and lands on delivery page
  and enters a postal code, if only one address is matching corresponding to entered postcode then it should be auto selected

  @Web
  Scenario Outline: 19_CFA_PAYG_Free_SIM_OneAddressMatching_PostCode_And_matchingAddress_Should_AutoSelected
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey
    And verify asterisk is displayed against mandatory fields of "PAYG Free sim"
    And Enter delivery details <HouseNumber> <PostCode> in Delivery Page and info <Firstname> and <Surname> for GDPR <CheckBox>
    Then order confirmation is displayed

    Examples:
      | Firstname | Surname | CheckBox | HouseNumber | PostCode |
      | TEST      | ACCEPTA | No       |             | SL33FP   |
