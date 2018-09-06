Feature: 10_1_FR_Mix_CFU_Phone

  @Web
  Scenario Outline: 10_1_FR_Mix_CFU_Phone
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Select a <handset> device from Recommended devices section
    And Click on link view Phone Details link next to device
    And Build your plan with <upFront> <term> and <data>


    Examples:
      | username                   | password | handset       | upFront | term | data |
      | rbmuatlokesh_donotusee3035 | test123  | iPhone 8 Plus | max     | max  | avg  |
