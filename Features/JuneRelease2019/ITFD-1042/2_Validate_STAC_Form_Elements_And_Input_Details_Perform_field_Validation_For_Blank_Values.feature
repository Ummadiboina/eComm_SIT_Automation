Feature: 2_Validate_STAC_Form_Elements_And_Input_Details_Perform_field_Validation_For_Blank_Values

  This scenario ensures that the STAC form elements are present and working as expected

  @Web
  Scenario Outline:2_Validate_STAC_Form_Elements_And_Input_Details_Perform_field_Validation_For_Blank_Values

    Given I am an CFA user and Lands on shop page
    And launch the OTAC page in new window
    And I Login with OTAC Credential <OTACMSISDN> and <securityCode> and verify login page
    Then Verify the STAC Form elements and mandatory fields and OTAC <OTACMSISDN> MSISDN displayed
    And Input the details <NonO2Number> <stacCode> <Tariff> <alternativeNumber> <FirstName> <LastName> <EmailId> in STAC Form and submit
    Then Click on Submit and validate the STAC Form success and error message for <StacCodeVariant>

    Examples:
      | OTACMSISDN  | securityCode | NonO2Number | stacCode | Tariff | alternativeNumber | FirstName | LastName | EmailId | StacCodeVariant |
      | 07521141546 | 999999       |             |          |        |                   |           |          |         | Blank           |
