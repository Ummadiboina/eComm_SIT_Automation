Feature: CFU_SIMO_Targeted_bolton_promotions_upgrade_options_page
  This scenario ensures that the customer eligible for SIMO targeted bolt-on promotion lands on upgrade option page, then the customer should be presented with SIMO targeted promotion section just below the 'recycle options'

  @Web
  Scenario Outline: CFU_SIMO_Targeted_bolton_promotions_upgrade_options_page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Click on "No thanks, I'll keep my device" and continue to Upgrade
    And Verify that the targeted promotion section is displayed just below the 'recycle options' section
    And Verify that the heading of the panel is 'A package just for you:'
    And Verify that the promotion description is displayed just after the statement
    And Verify that only SIMO targeted bolt-on is presented in the targeted promotion section
    And Verify that a checkbox for 'iPhone' for data allowance is displayed just on the right-hand side below select 'CTA'
    And Verify that the 'Contract length: 12 months/30 days' is displayed just below the promotion description
    And Click on 'Select' button in the tile of targeted promotion and Consumer should be landed on Basket Page

    Examples:
  | username                        | password |
  |                                 | test123  |
