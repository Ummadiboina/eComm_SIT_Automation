Feature:CFU_Tablet_Delivery_page_more_than_one_address_select_one_compress_others
  This scenario ensures that when the customer on upgrade journey selects 'Tablet' proceeds till Delivery page and enters the postcode, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline: CFU_user_with_direct_debit_details_SIMO_order_Tablets_user_Review_page_changes
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    # And perform <Action> in OTAC page
    And Click on 'Use a different delivery address'link
    And enter a <houseNumber> and an <PostCode>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    And Click on 'I agree to the terms and condition' checkbox
    And Click on 'Place your order' CTA

    Examples:
      | username           | password | Tablet        | tariff                 | houseNumber | Postcode | Username     |
      | 6172test2@test.com | test123  | Random Device | 9.99upfront60.00amonth | 111         | SL11Er   | Test Accepta |

