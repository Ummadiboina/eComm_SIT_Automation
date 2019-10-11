Feature: 03_CFU_MBB_SIMO_Enter_OTAC_Code_For_DifferentDeliveryAddress

  This Scenario ensures that When a MBB Streamlined SIMO Upgrade(SSU) customer lands on 'Review and confirm page' and opt for
  'I need a new sim' option and then clicks on 'Use a different address link' for billing address then customer should land on
  OTAC page and provides otac code then customer should redirect to 'Review and Confirm' page and enters a postal code

  @Web
  Scenario Outline: 03_CFU_MBB_SIMO_Enter_OTAC_Code_For_DifferentDeliveryAddress
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on 'Get Started' CTA
    And Click on pic sim link
    Then Verify customer landed on simo listing page
    And click on the 'MBB' tab
    And Select any Random Data Tariff in the displayed list of Tariffs under different <contractLength> tab
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And Click on Add to basket CTA in Simo Listing Page
    And copy text SIM delivery required or not is displayed
    And Select 'I need a new sim' option
    And Click on 'Use a different delivery address'link and perform <Action> in OTAC page in upgrade simo journey
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on GDPR Continue CTA in Simo upgrade
    Then order confirmation is displayed
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not


    Examples:
      | contractLength | username                      | BSCstatus | BillCap   | CapAmount | password | Action    |
      | 12 Months      | 10oc57974752@stf.ref.o2.co.uk | Enabled   | CapMyBill | £100      | test123  | enterCode |