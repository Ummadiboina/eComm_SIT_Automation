Feature: Reg_CFU_Sept_I_NeedSim

  @ConsumerShop
  Scenario Outline: Reg CFU Sept I Need a Sim
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page