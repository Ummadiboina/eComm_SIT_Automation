Feature: 6_Validate_STAC_Form_with_InValid_Stac_Code

  6_Validate_STAC_Form_with_InValid_Stac_Code

  @Web
  Scenario Outline:6_Validate_STAC_Form_with_InValid_Stac_Code

    Given I am an CFA user and Lands on shop page
    And launch the OTAC page in new window
    And I Login with OTAC Credential <OTACMSISDN> and <securityCode> and verify login page
    Then Verify the STAC Form elements and mandatory fields and OTAC <OTACMSISDN> MSISDN displayed
    And Input the details <nonO2Number> <stacCode> and <tariff> <alternateNumber> <firstName> <lastName> <emailId> in STAC Form and submit
    Then Click on Submit and validate the STAC Form success and error message for <StacCodeVariant>

    Examples:
      | OTACMSISDN  | securityCode | nonO2Number | stacCode  | tariff   | alternateNumber | firstName | lastName | emailId | StacCodeVariant |
      | 07521139871 | 999999       | 07707003305 | 725464XBA | Business |                 | Test      | Accepta  | Random  | InValid         |
