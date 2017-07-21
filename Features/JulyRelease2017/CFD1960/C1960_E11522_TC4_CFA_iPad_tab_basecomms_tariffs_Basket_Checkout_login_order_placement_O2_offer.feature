Feature: C1960_E11522_TC4_CFA_iPad_tab_basecomms_tariffs_Basket_Checkout_login_order_placement_O2_offer

  Scenario Outline: This scenario ensures that when the customer adds Basecomm tariff for iPad to the basket from my offers page, then the customer should be prompted to login from basket page and should be able to place order
    Given I navigate to the Basecomm Page
    And Verify expected <device_name> and its specific details are present in the device list <default_colour>,<default_capacity>,<default_stock_message>
    #Veirfy device price details are also getting displayed in the above step
    And select <color> color of the connected device
    And select <capacity> capacity of the connected device
    And Verify that promotion ribbon is displayed
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Basecomms page
    And Click on "Buy Now" button for <device_name> and verify "Tariffs and Extras" page is displayed
    And Verify new image is as per the selected <device_name>,<capacity>and <color> in the Tariffs and Extras Page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' link
    And Select existing account and begin fast checkout
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Modify the above step to include pdf download
    Examples: 
      | username             | password | device_name             | default_colour | default_capacity | default_stock_message | color  | capacity | user         |
      | 07770001111@o2.co.uk | test123  | Apple iPad Pro 9.7 inch | Space Grey     | 32GB             | Out of stock          | Silver | 128GB    | TEST ACCEPTA |
