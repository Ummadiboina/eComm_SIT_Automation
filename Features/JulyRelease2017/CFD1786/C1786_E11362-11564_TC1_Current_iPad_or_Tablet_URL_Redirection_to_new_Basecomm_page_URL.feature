Feature: C1786_E11362-11564_TC1_Current_iPad_or_Tablet_URL_Redirection_to_new_Basecomm_page_URL.feature

  Scenario Outline: This scenario ensures that the existing customer with the current iPad and Tablet Url should be redirected to new basecomms page URL
    
    Current URL:
    https://www.o2.co.uk/shop/my-offers/ipad
    https://www.o2.co.uk/shop/my-offers/tablet

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I launch the OldIpadURL
    And verify that I get redirected to <NewURL>
    And I launch the OldTabletURL
    And verify that I get redirected to <NewURL>

    Examples: 
      | username             | password | OldIpadURL                                   | OldTabletURL                                   | NewURL                                         |
      | 07770001111@o2.co.uk | test123  | https://www.o2.co.uk/shop/my-offers/ipad | https://www.o2.co.uk/shop/my-offers/tablet |https://www.o2.co.uk/shop/existing-customer-offers#sort=content.sorting.featured&page=1|
