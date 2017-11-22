Feature: CFU_SIMO_Targeted_bolton_promotions_upgrade_options_page
  This scenario ensures that the customer eligible for SIMO targeted bolt-on promotion lands on upgrade option page, then the customer should be presented with SIMO targeted promotion section just below the 'recycle options'

  @Web
  Scenario Outline: CFU_SIMO_Targeted_bolton_promotions_upgrade_options_page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    And the targeted promotion section is displayed just below the 'recycle options' section
    And the heading of the panel is 'A package just for you:'
    And the promotion description is displayed
    And only SIMO targeted bolt-on is presented in the targeted promotion section
    And a checkbox for 'iPhone' for data allowance is NOT displayed just on the right-hand side below select 'CTA'
    And the 'Contract length: 12 months/30 days' is displayed just below the promotion description
    And Click on 'Select' button in the tile of targeted promotion and Consumer should be landed on Basket Page

    Examples:
  | username                        | password |
  |    gb119519_979816@o2.com       | test123  |
