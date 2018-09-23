Feature: 44_Reg_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons

  @Web
  Scenario Outline:
  This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,
  1.Tariff and Extras page
  2.Basket page

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Verify whether promotional ribbons are displayed for <tariff> on the Tariff tile in the Tariff and Extras page
    And Verify 'Overlay icon' is displayed on the promotional ribbons for <tariff> in the Tariff and Extras page
    And Click on the 'Overlay icon' for <tariff> in the Tariff and Extras page and verify pop up gets displayed
    And Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section
    And Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in the Tariff and Extras Page
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And Verify Promotional ribbons are displayed under Tariff section in the Basket page
    And Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page
    And Click on the 'Overlay icon' in the Basket page and verify pop gets displayed
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset            | color | tariff                  | BSCstatus | Firstname | Surname | Username     | consumer | B1     | B2     | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | Xperia XZ2 Compact | Black | 19.99upfront31.00amonth | Disabled  | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Select | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  |