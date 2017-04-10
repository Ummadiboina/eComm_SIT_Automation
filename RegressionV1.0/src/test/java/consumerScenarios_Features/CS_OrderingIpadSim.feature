Feature: Ipad SimO Only PAYG E2E validation

  @smokeTest
  Scenario: Tablet SimO Only PAYG E2E validation
    Given I am an CFA user and Lands on shop page
    And Navigate to PayG sim only Tariffs page
    And select any Ipad PayG Tariff and continue
    And Select to send Sim from Delivery page
    Then order confirmation is displayed