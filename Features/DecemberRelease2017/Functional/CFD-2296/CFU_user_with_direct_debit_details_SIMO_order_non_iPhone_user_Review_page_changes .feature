Feature: CFU_user_with_direct_debit_details_SIMO_order_non_iPhone_user_Review_page_changes
  This scenario ensures that the customer with direct debits is in upgrade journey and tries to place an SIMO order, then Delivery page should not be displayed in checkout and customer should be landed on review page to place an Order

  @Web
  Scenario Outline:CFU_user_with_direct_debit_details_SIMO_order_non_iPhone_user_Review_page_changes
    #Customer should have direct debits available
    #Customer should not have any early upgrade fee or CCA settlement to be paid for

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    Then Verify that in the recycle value is displayed in the Recycle panel
    And I Click on 'Pick a sim only tariff' link
    And the Check box with "I'll be using an iPhone" copy text is not displayed below 'Select' CTA in the horizontal tariff tile
    And Click on 'Select' CTA to buy a tariff
    And only SIM delivery is required for the customer
    And the customer is landed on Review page
    And the Header navigation is not displayed
    And the Progress bar is not displayed at the top
    And the Order summary and the assurance messages is not displayed on the right
    #And the greet customer bar is displayed as the header
    And the greet "customer" bar is displayed as the header
    And the MSISDN is displayed as label only
    And the 'About you' section is not displayed
    And the first section is "Review your tariff" section
    And the copy text title is displayed in first tariff tile
    #The customer existing tariff tile
    And the copy text title is displayed in second tariff tile
    #The tariff to which customer is upgrading
    And the Included section and Learn more link are same as  applicable to both first tile and second tile
    And the Promotion ribbons and included section to be fetched from Product service are displayed only for 'To this tariff'
    And Click on 'Learn more' link
    And 'Choose a different tariff' link is displayed below 'To this tariff' tile
    And the second section is "Your sim" section
    And the question for voice tariff  copy text is displayed below 'Your sim' section
    And the IPhone/Other radio button is defaulted to iPhone
    And Click on Other radio button
    And copy text SIM delivery required or not is displayed
    And the Default state is no SIM delivery selected and Place Order button is disabled
    And Select 'I’ll keep my current sim' option
    And refresh the page
    #Others radio option should be selected
    And Click on 'Not sure what SIM you have' link
    And copy text is displayed as same as upgrade options and basket page.
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







