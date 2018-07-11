Feature: LoginToRemedyTool

  @Web
  Scenario Outline: LoginToRemedyTool
    Given Login Remedy tool with the details userName <userName> and password <password>
    And update the request with CT

    Examples:
      | userName | password  |
      | nmydur1  | NR9L6SSVB |