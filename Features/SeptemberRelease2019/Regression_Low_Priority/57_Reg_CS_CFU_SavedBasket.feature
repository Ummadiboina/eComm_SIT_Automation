Feature: 57_Reg_CS_CFU_SavedBasket

  @Web
  Scenario Outline: CFU to Verify is user can upgrade phone to refresh Tariff
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    # //Vertical journey starts//
    #And Select a <handset> device from Recommended devices section
    #And Click on device 'Confirm CTA'
    #And Select a tariff <tariff>
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    #And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    #And Select a 'I need a sim'option
    #And Verify that 'Confirm CTA' is displayed
    #And Click on 'Confirm CTA'
    #//Vertical journey ends//
    And Verify phones tab selected by default
    And Verify phones vertical upgrade journey is removed or not
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verifies the basket page for the upgrade journey
    And choose to email basket to save the basket in CFU for <username>

    Examples:
      | username                      | password | status  | consumer | handset       | tariff | BSCstatus | BillCap       | CapAmount |
      | 12au23144905@stf.ref.o2.co.uk | test123  | Enabled | Me       | iPhone 8 Plus | Random | Enabled   | DontCapMyBill | Nill      |
