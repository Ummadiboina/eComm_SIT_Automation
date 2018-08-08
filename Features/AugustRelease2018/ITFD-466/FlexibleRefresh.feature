Feature: FlexibleRefresh

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and placed an order by opting out of all Marketing preference,
  then the Order consent profile should be created in CMT as expected

  @Web
  Scenario Outline: FlexibleRefresh
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    And Navigate to device details page
    And Validate Flexible Refresh