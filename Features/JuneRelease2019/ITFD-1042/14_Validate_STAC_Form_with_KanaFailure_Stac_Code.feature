Feature: 14_Validate_STAC_Form_with_KanaFailure_Stac_Code

  14_Validate_STAC_Form_with_KanaFailure_Stac_Code

  @Web
  Scenario Outline:14_Validate_STAC_Form_with_KanaFailure_Stac_Code

    Given I am an CFA user and Lands on shop page
    And launch the OTAC page in new window
    And I Login with OTAC Credential <OTACMSISDN> and <securityCode> and verify login page
    Then Verify the STAC Form elements and mandatory fields and OTAC <OTACMSISDN> MSISDN displayed
    And Input the details <nonO2Number> <stacCode> and <tariff> <alternateNumber> <firstName> <lastName> <emailId> in STAC Form and submit
    Then Click on Submit and validate the STAC Form success and error message for <StacCodeVariant>

    Examples:
      | OTACMSISDN  | securityCode | nonO2Number | stacCode | tariff      | alternateNumber | firstName | lastName | emailId | StacCodeVariant |
      | 07123456789 | 999999       |             |          | Pay Monthly |                 | Test      | Accepta  | Random  | Kana_Failure    |