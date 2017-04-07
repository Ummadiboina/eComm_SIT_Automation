Feature: Sim Only PayG E2E Journey

  @smokeTest
  Scenario: Sim Only PayG E2E Journey
    Given I am an CFA user and Lands on shop page and see all the links
    And Navigate to PayG sim only Tariffs page
    And select any PayG Tariff and continue
    And Select to send Sim from Delivery page
    Then order confirmation is displayed