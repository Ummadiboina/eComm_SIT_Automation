Feature: 1_Validate_OTAC_MSISDN_Page_And_Login_With_OTAC_MSISDN

  This scenario ensures that when customer complete the OTAC page and land on STAC form

  @Web
  Scenario Outline:1_Validate_OTAC_MSISDN_Page_And_Login_With_OTAC_MSISDN

    Given I am an CFA user and Lands on shop page
    And launch the OTAC page in new window
    And I Login with OTAC Credential <OTACMSISDN> and <securityCode> and verify login page

    Examples:
      | OTACMSISDN  | securityCode |
      | 07123456789 | 999999       |
