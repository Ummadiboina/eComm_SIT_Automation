Feature: 16_Reg_CFU_Buyout_with_Recycle_Order_placement

  This scenario ensures that when  a customer in an upgrade journey has opted for Buyout ,then the Buyout is displayed with Recycle in  'Your package' summary

  @Web
  Scenario Outline: CFU_Buyout_with_Recycle_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Remove Button'
    And Verify that the buyout offer section is displayed with 'Take offer and Upgrade' CTA under 'Your Options' heading
    And Verify that '£XXX.XX left to pay on your current Device Plan' panel is displayed below the buyout offer panel and below to that upgrade and recycle options is displayed
    And click on 'Take offer and upgrade'button
    And Click on 'Get Started' CTA
    And Click on Tablet section in upgrade options page
    And Select a <handset> device from Recommended devices section
    And Click on device 'Confirm CTA'
    #Then Select a Tariff
    And select any random tariff from Recommended devices section
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And Click on 'Continue' button on upgrade page at extra section
    And Verify that the same recycle section is displayed as it is displayed to the non-buyout and non-trade-in users
    And Verify that the customer is able to do recycle and buyout together
    When Click on any one of the recycle option then Click on  'Yes get an accurate quote'
    #And Answer the Questions in the questionnaire
    #Then Click on 'Accept and continue to upgrade'
    And answer the questionnaire and click on 'Accept and continue to upgrade' button
    And Verify that in 'Your package' summary Buyout is displayed with Recycle
    And I Land on the basket page by clicking on Add to Basket button in the BuyOut Journey
    And verify if the buyout offer is displayed in Basket page
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And verify if buyout offer is displayed under Order Summary section in <Delivery> page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And verify if buyout offer is displayed under Order Summary section in <Payment> page
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    #And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | Tablet        | Action | Surname | Username     | BSCstatus | BillCap   | CapAmount | handset       | Delivery | Payment | filtername | sortoption                 | username               | password | consumer | B1     | B2     | B3  | B4  | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | Random Device | skip   | ACCEPTA | TEST ACCEPTA | Enabled   | CapMyBill | £20       | iPhone 8 Plus | Delivery | Payment | low        | Monthly data (Low to High) | in01808o_751147@o2.com | test123  | Someone  | Select | Select | Not | Not | Enabled    | No        | Connected  | No          | No       |

