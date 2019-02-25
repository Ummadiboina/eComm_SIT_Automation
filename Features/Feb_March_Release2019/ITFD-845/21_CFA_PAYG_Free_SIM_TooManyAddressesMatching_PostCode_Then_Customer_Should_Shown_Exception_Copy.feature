Feature: 21_CFA_PAYG_Free_SIM_TooManyAddressesMatching_PostCode_Then_Customer_Should_Shown_Exception_Copy

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYG Free SIM' and lands on delivery page
  and enters postal code, if there are too many addresses are matching corresponding to entered house number and postcode
  then customer should be shown the copy 'There are too many results for this postcode. Add your house number and try again'

  @Web
  Scenario Outline: 21_CFA_PAYG_Free_SIM_TooManyAddressesMatching_PostCode_Then_Customer_Should_Shown_Exception_Copy
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey
    And verify asterisk is displayed against mandatory fields of "PAYG Free sim"
    And Enter delivery details <HouseNumber> <PostCode> in Delivery Page and info <Firstname> and <Surname> for GDPR <CheckBox>
    Then order confirmation is displayed

    Examples:
      | Firstname | Surname | CheckBox | HouseNumber | PostCode |
      | TEST      | ACCEPTA | No       |             | LS12 1DF |
