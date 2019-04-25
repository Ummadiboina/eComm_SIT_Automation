Feature: 09_Existing_Customer_Upgrade_lead_device_New_companion_device

  @Web
  Scenario Outline: Existing_Customer_Upgrade_lead_device_New_companion_device
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    #Then Verify that in the recycle value is displayed in the Recycle panel
    #And Select <Make>, <Model> and <Network>
    #And perform update device
    #Then Select any one recycle option and click on 'Continue to Upgrade'
    And Click on 'Get Started' CTA
    And Click on View all Phones link in upgrade options page
    And I choose PayM <iphone>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <username> and other details and click 'Continue on next step' for DD confirmation
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And navigate to PAYM Companion device listing page
    And Select PayM Companion Device <device>
    And Navigate to device details page for color selection
    And click on the color dropdown
    And click 'Choose this plan' CTA and verify if the interstitial overlay is displayed
    And Click on 'Continue' button on interstitial overlay
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Click on the 'Existing Customer checkout' CTA
    And Verify if the customer lands on lead device pairing page with the MSISDN displayed in the dropdown
    And Click on 'Begin fast checkout'
    And land on the payment page and input <username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed



    Examples:
      | username       | password     | device  |  BSCstatus       | iphone         | color | BillCap | CapAmount |   Action    | B1     | B2     | B3  |   KeyEvent   |    DeviceType    | GDPRstatus  |   PreSelected   |
      |                |              |         |                |                |           |       |           |             |         |       |      |              |                 |             |                  |
