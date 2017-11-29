Feature: CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes
  This scenario ensures that the customer with direct debits is in upgrade journey and tries to place an SIMO order for Tablets, then Delivery page should not be displayed in checkout and customer should be landed on review page to place an Order


  @Web
  Scenario Outline: CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    Then Verify that in the recycle value is displayed in the Recycle panel
    And Click on 'Pick a sim only tariff link'
    And Click on <Tablets> tabx
    And Click on 'Select' CTA to buy a tariff
    And copy text SIM delivery required or not is displayed
    And the customer is landed on Review page
    And the Header navigation is not displayed
    And the Progress bar is not displayed at the top
    And the Order summary and the assurance messages is not displayed on the right
    And the greet "customer" bar is displayed as the header
    And MSISDN is displayed as label only
    #The MSISDN should not be displayed as drop down
    And the 'About you' section is not displayed
    And the first section is "Review your tariff" section
    And the title "You'are moving from this tariff" is displayed in first tariff tile
    And title "To this tariff" is displayed in second tariff tile
    And the Included section and Learn more link are same as  applicable to both 1st tile and second tile
    And the Promotion ribbons is displayed only for 'To this tariff'
    And Click on 'Learn more' link
    And 'Choose a different tariff' link is displayed below 'To this tariff' tile
    And the second section is "Your sim" section
    And the IPhone/Other radio button is defaulted to iPhone
    And Click on Other radio button
    And copy text SIM delivery required or not is displayed
    And the Default state is no SIM delivery selected and Place Order button is disabled
    And Select 'I’ll keep my current sim' option
    And Click on 'Not sure what SIM you have' link
    And copy text is displayed as same as upgrade options and basket page
    And the delivery section is not displayed
     #Since no delivery is required
    And the third section header is displayed as "Review payment details"
    And verify the copy text is displayed below the direct debit details
    And the 'Upfront payment details' section is removed
     #Since no upfront payment required
    And Click on 'I agree to the terms and condition' checkbox
    And Click on 'Place your order' CTA

    Examples:
    | username | password |