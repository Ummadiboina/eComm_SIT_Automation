Feature: Reg_October2Release_PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary.feature

  @Web
  Scenario Outline: PayG Tablets_ShowMarketingMessageOnTariffAndExtrasPagePackageSummary

    Given I am an CFA user and Lands on shop page
    And navigate to Pay as you Go Tablets page
    And select any available <Device> Tablet
    And Navigate to device details page
    And Select a tariff <tariff>
    #And Verify the copytext of marketing message in "Tariff and Extras"
   # And Verify the copytext of marketing message in "Your Package"
    And I Land on the basket page and choose home delivery option
    #And Verify the copytext of marketing message in "Your Basket"
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
      #And Verify the copytext of marketing message in <PaymentSectionName>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
      #And Verify the copytext of marketing message in <AgreementSectionName>
    And Continue to Review page and review the order
      #And Verify the copytext of marketing message in <ReviewSectionName>
    Then order confirmation is displayed

    Examples:
      | Device        | Firstname | Surname | Username     | tariff                             |
      | Random Device | TEST      | ACCEPTA | TEST ACCEPTA | Device with 1GB preloaded data sim |