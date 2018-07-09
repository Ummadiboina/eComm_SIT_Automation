Feature: CFU_100_Buyout_offer_Refresh_Remove_Buyout_offer_in_Buyout_tile_Display_left_to_pay_tile_and_SIMO_tab.feature

  This scenario validates basket and payment page is displayed for customer in Simo upgrade journey with active voucherable promotions available for the selected tariff and No upfront payment pending from customer

  @Web
  Scenario Outline: CFU_100_Buyout_offer_Refresh_Remove_Buyout_offer_in_Buyout_tile_Display_left_to_pay_tile_and_SIMO_tab
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And MSISDN should be selected by default and buyout offer should be applied by default
    #The £ saving should be the left to pay value on current device plan i.e. CCA settlement fee
    And The new copy text "Upgrade to a new phone today. We'll pay off the rest of your Device Plan, saving you £XXX" should be displayed in buyout offered tile
    And verify The 'Remove offer' is displayed on the Buyout offer tile
    And Verify that the buyout offer section is displayed with 'Take offer and Upgrade' CTA under 'Your Options' heading
    And Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options should not be displayed
    And verify that The 'SIMO tab' should be hidden
    #And click on 'Take offer and upgrade'button
    #And Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users
    #And Verify that the customer is able to do recycle and buyout together
    #When Click on any one of the recycle option then Click on  'Yes get an accurate quote'
    #And Answer the Questions in the questionnaire
    #Then Click on 'Accept and continue to upgrade'
    #And answer the questionnaire and click on 'Accept and continue to upgrade' button
    #And Select a Device from the recommended section
    And Select a <handset> device from Recommended devices section
    #Then Select a Tariff
    And select any random tariff from Recommended devices section
    And Select a 'I dont need a new sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And verify The 'Buyout offer line item' should be displayed in 'Your package' summary as per BAU
    And click on 'Remove offer' then verify that 'Take offer and upgrade'button
    And Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options should be displayed
    And verify that The 'SIMO tab' should be displayed
    And verify The 'Buyout offer line item' should be not displayed in 'Your package' summary as per BAU
    #And Verify that in 'Your package' summary Buyout is displayed with Recycle
    Then Click on 'Add and Go to Basket' button
    And I Land on the basket page by clicking on Add to Basket button in the BuyOut Journey
    And verify if the buyout offer is displayed in Basket page
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And verify if buyout offer is displayed under Order Summary section in <Delivery> page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And verify if buyout offer is displayed under Order Summary section in <Payment> page
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    #And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Tablet        | Action | Surname | Username     | handset  | Delivery | Payment | filtername | sortoption                 | username                         | password | consumer     | B1     | B2     | B3  | B4  | Text | Email  | Phone | Post   | status  | MBBStatus | DeviceType |
      | Random Device | skip   | ACCEPTA | TEST ACCEPTA | iPhone 8 | Delivery | Payment | low        | Monthly data (Low to High) | testaccepta4289@stf.ref.o2.co.uk | test123  | SomeOne else | Select | Select | Not | Not | Not  | Select | Not   | Select | Enabled | No        | Connected  |

