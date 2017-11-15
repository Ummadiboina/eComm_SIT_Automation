Feature: CFU_user_with_direct_debit_details_SIMO_order_MBB_user_Review_page_changes
  This scenario ensures that the customer with direct debits is in upgrade journey and tries to place an SIMO order for MBB,then Delivery page should not be displayed in checkout and customer should be landed on review page to place an Order
  *Customer should have direct debits available
  *Customer should not have any early upgrade fee or CCA settlement to be paid for

@Web
  Given I am an Existing user and Navigates to Signin page
  And Signin using valid <username> and <password> credentials
  And Navigate to upgrade phone
  Then Verify that in the recycle value is displayed in the Recycle panel
  And I Click on 'Pick a sim only tariff' link
  And Click on 'Mobile Broadband' tab
  And Click on 'Select' CTA to buy a tariff
  #And only SIM delivery is required for the customer
  And the customer is landed on Review page
  And the Header navigation is not displayed
  And the Progress bar is not displayed at the top
  And the Order summary and the assurance messages is not displayed on the right
  And the greet customer bar is displayed as the header
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
  And 'Choose a different tariff' link is displayed
  And the second section is "Your sim" section
  And the question for voice tariff  copy text is not displayed below 'Your sim' section
  #The question should not be displayed for tablet and mobile broadband tariff
  And the IPhone/Other radio button is defaulted to iPhone
  And copy text SIM delivery required or not is displayed
  And the Default state is no SIM delivery selected and Place Order button is disabled
  And the third section header is displayed as "Review payment details"
  #The payment details should be displayed on left side
  And the copy text is displayed below the direct debit details
  And the 'Upfront payment details' section is removed
  #Since no upfront payment required"
  And Click on 'I agree to the terms and condition' checkbox
  And Click on 'Place your order' CTA

Examples:
| username | password |



