Feature: 13_Validate_STAC_Form_with_BUsiness_Customer_Valid_Stac_Code

  13_Validate_STAC_Form_with_BUsiness_Customer_Valid_Stac_Code

  @Web
  Scenario Outline:13_Validate_STAC_Form_with_BUsiness_Customer_Valid_Stac_Code

    Given I am an CFA user and Lands on shop page
    And launch the OTAC page in new window
    And I Login with OTAC Credential <OTACMSISDN> and <securityCode> and verify login page
    Then Verify the STAC Form elements and mandatory fields and OTAC <OTACMSISDN> MSISDN displayed
    And Input the details <NonO2Number> <StacCode> <Tariff> <alternativeNumber> <FirstName> <LastName> <EmailId> in STAC Form and submit
    Then Click on Submit and validate the STAC Form success and error message for <StacCodeVariant>

    Examples:
      | OTACMSISDN  | securityCode | NonO2Number | StacCode | Tariff   | alternativeNumber | FirstName | LastName | EmailId | StacCodeVariant |
      | 07123456789 | 999999       |             |          | Business |                   | Test      | Accepta  | Random  | Valid           |
