Feature: C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature

  Scenario Outline: This scenario ensures that when the existing customer lands on new basecomm page and selects 'iPads' tab,
    then the customer should be able to see 'Sort' and 'Filter' tab and the customer should be able to do Sort and Filter functionality same as that of listings page

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I navigate to the Basecomm Page
    And Verify the contents of the iPad section in the landing page
    #Verify URL is iPad specific
    And Verify the current sort order details
    And click on the Sort tab and choose required <sort option>
    #click on "Done" button as part of the above step
    And Verify the devices gets sorted based on the sort option
    And click on the Sort tab and reset sort
    And Verify that original sort order is retained
    And click on Filter tab and choose required <colour> option
    #click on "Done" button as part of the above step
    And Verify the devices gets displayed as per the filter applied

    Examples: 
      | username    | password | sort_option | colour |
      | ink_jun9198 | test123  | MonthlyHtoL | Yellow |
