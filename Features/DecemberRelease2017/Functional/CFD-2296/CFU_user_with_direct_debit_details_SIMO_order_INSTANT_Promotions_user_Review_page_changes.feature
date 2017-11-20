Feature: CFU_user_with_direct_debit_details_SIMO_order_INSTANT_Promotions_user_Review_page_changes
  This scenario ensures that the customer with direct debits is in upgrade journey and tries to place an SIMO order eligible for INSTANT promotions, then the INSTANT promotion should be displayed on the new Review Page below selected tariff tile
  *Customer should have direct debits available
  *Customer should not have any early upgrade fee or CCA settlement to be paid for

  @Web
  Scenario Outline: CFU_user_with_NO_direct_debit_details_SIMO_order_Targeted_Promotions_user_Payment_page_changes
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    Then Verify that in the recycle value is displayed in the Recycle panel
    And Click on 'Pick a sim only tariff link'
    And the Check box with "I'll be using an iPhone" copy text is not displayed below 'Select' CTA in the horizontal tariff tile
    And Click on 'Select' CTA to buy a tariff
    #Eligible for INSTANT promotion
    And the customer is landed on Review page
    And the Header navigation is not displayed
    And the Progress bar is not displayed at the top
    And the Order summary and the assurance messages is not displayed on the right
    And the greet "customer" bar is displayed as the header
    And MSISDN is displayed as label only
    #The MSISDN should not be displayed as drop down
    And the 'About you' section is not displayed
    #The info in 'About you'  should be used for the greet customer bar
    And the first section is "Review your tariff" section
    #The tariff tiles look and feel should be exactly same as the tariff tiles displayed in Shop
    #Tariffs should be 4G tariffs by default
    And the title "You'are moving from this tariff" is displayed in first tariff tile
    #The customer existing tariff tile
    # The  information to be fetched from customer service {msisdn}/tariffDetails API"
    And title "To this tariff" is displayed in second tariff tile
    #The tariff to which customer is upgrading
    And the Included section and Learn more link are same as  applicable to both 1st tile and second tile
    And the Promotion ribbons is displayed only for 'To this tariff'
    And Click on 'Learn more' link
    And 'Choose a different tariff' link is displayed below 'To this tariff' tile
    And the second section is "Your sim" section
    And the INSTANT promotions applicable for the SIMO Upgrade order is displayed on the new Review Page below selected tariff tile
    And Click on 'Choose a different tariff' link

    Examples:
      | username           | password  |
      | bvt2.cfu@gmail.com | cfubvt123 |