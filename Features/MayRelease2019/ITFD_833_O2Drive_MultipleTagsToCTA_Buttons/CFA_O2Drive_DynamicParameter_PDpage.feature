Feature: CFA_O2Drive_DynamicParameter.feature

  The O2 Drive customer journey is split across two domains. The product page

  @Web
  Scenario Outline: CFA_O2Drive_DynamicParameter

    Given I am an CFA user and Lands on shop page
    And configure dynamic variable from Drupal

    Examples:
      | device        |               BSCstatus          | color|
      |               |                Disabled       |         |