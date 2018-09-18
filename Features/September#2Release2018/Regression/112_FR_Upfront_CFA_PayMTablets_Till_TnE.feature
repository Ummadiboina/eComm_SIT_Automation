Feature: 112_FR_Upfront_CFA_PayMTablets_Till_TnE

  @Web
  Scenario Outline: 112_FR_Upfront_CFA_PayMTablets_Till_TnE
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Tablets page
    And select any available <Device> Tablet
    And Build your plan with <upFront> <term> and <data>

    Examples:
      | Device                | upFront | term | data |
      | Galaxy Tab A 2016 7.0 | max     | min  | avg  |