Feature: 41_Reg_CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement

  This scenario ensures that when a customer in acquisition journey selects 'Phone' and navigated to tariff page ,then
  the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

  @Web
  Scenario Outline: CFA_PayM_Phone_Data_filters_options_tariff_and_extras_page_Order_placement
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    #select handset with more tariff and less tariff  -- > ask kanban team to set handset with 2 tariff and handset with more than 3 tariff
    And Navigate to device details page
    ##New functionality starts
    Then I should see data filters buttons next to existing sort drop-down for PAYM/SIMO tariffs <sortoption>
    When I click on respective <filtername> data filter
    Then Data filter button should be in 'selected' state
    And I should see appropriate tariffs based on the selected data filter <sortoption>
    And If I select ANY sort option <sortoption> from the drop-down
    Then I should see tariffs relevant to selected sort option <sortoption> & filter option <filtername>
    When I deselect filter button
    Then I should see tariffs based on the selected sort option <sortoption>
    ##New functionality ends
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset       | color      | Firstname | Surname | Username     | BSCstatus | filtername | sortoption                 | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone 8 Plus | Space Grey | TEST      | ACCEPTA | TEST ACCEPTA | Disabled  | low        | Monthly data (High to low) | Me       | Select | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |

