Feature: C11786_E11510-11505_TC5_Non_Basecomm_tariff_basket_page_change_tariff_link_BAU_tariffs_decommission_flag.feature

  Scenario Outline: This scenario ensures that when the existing customer selects non-basecomm(Refresh)tariff lands on basket page and clicks on "Change tariff" ,
    then the customer should be redirected to tariffs and extras page with Refresh(BAU) tariffs

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Tablets page
    And I choose <tabletname> Tablet
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And Verify "Choose a different tariff" link is displayed
    And click on the "Choose a different tariff" link and verify user navigated back to "Tariff and Extras" page

    Examples: 
      | username             | password | tabletname                |
      | inavl0wx_355207@o2.com | test123  | Apple iPad Pro 10.5 inch |
