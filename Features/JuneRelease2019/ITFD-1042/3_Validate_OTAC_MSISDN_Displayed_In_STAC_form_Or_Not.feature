Feature: 3_Validate_OTAC_MSISDN_Displayed_In_STAC_form_Or_Not

  This scenario ensures that when customer land on STAC form then OTAC MSISDN is displayed or not

  @Web
  Scenario Outline:3_Validate_OTAC_MSISDN_Displayed_In_STAC_form_Or_Not

    Given I am an CFA user and Lands on shop page
    And launch the OTAC page in new window
    And I Login with OTAC Credential <OTACMSISDN> and <securityCode> and verify login page
    Then Verify the STAC Form elements and mandatory fields and OTAC <OTACMSISDN> MSISDN displayed

    Examples:
      | OTACMSISDN  | securityCode |
      | 07521141405 | 999999       |
