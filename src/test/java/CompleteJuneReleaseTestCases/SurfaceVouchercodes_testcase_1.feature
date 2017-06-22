Feature: Surface voucher code test case  wrong voucher code

  @JuneRelease
  Scenario Outline: CFA PayM Phones Home delivery E2E journey with Accessory
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And Apply a <voucher>
    And verify that error message is thrown

    Examples: 
      | handset  | Firstname | Surname | Username     | voucher      |
      | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA | TOPAZV2UCHER |