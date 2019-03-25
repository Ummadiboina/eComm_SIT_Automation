Feature: 20_CFA_Refresh_tariff_recommended_data_should_display_up_to_confirmation_page_from_big_bundle

  This Scenario ensures that when the Customer in acquisition journey selects 'PAYM Phone' and lands on
  tariff and extras page and verify Unlimited data under recommended tariff up to confirmation page from big
  bundle

  @Web
  Scenario Outline:20_CFA_Refresh_tariff_recommended_data_should_display_up_to_confirmation_page_from_big_bundle

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And verify Unlimited data is displayed in Tariff and Extras page
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And verify Unlimited data is displayed in basket page
    And click on "go to checkout" button
    And I Land on the Plan included basket page and choose home delivery option
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR to click and collect
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step' for payments
    And verify Unlimited data is displayed in Payment page
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    And verify Unlimited data is displayed in Review page
    Then order confirmation is displayed
    And verify Unlimited data is displayed in confirmation page

    Examples:
      | handset                         | Firstname | Surname | Username     | GDPRstatus | BSCstatus | BillCap   | CapAmount | B1     | B2  | B3  | B4  | DeviceType | PreSelected | KeyEvent |
      | Samsung Galaxy S8 Plus Like New | TEST      | ACCEPTA | TEST ACCEPTA | Enabled    | Enabled   | CapMyBill | £15       | Select | Not | Not | Not | Connected  | No          | No       |
