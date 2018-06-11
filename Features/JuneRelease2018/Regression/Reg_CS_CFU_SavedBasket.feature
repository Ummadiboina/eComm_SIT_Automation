Feature: Reg_CS_CFU_SavedBasket

  @Web
  Scenario Outline: CFU to Verify is user can upgrade phone to refresh Tariff
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff>
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verifies the basket page for the upgrade journey
    And choose to email basket to save the basket in CFU for <username>



    Examples:
      | username                     | password | status  | consumer | handset           | tariff |
      | inl_feb4914@stf.ref.o2.co.uk | test123  | Enabled | Me       | Samsung Galaxy S8 | Random |
