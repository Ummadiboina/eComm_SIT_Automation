Feature: SurfaceVouchercodes_testcase_3

  @FunctionalTestcase
  Scenario Outline: CFA PayM Phones Home delivery E2E journey with Accessory (Surface voucher code test case valid voucher code)
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And Apply a <voucher>
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | handset  | Firstname | Surname | Username     | voucher           |
      | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA | TOPAZVOUCHER0%OFF |