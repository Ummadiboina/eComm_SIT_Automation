Feature: CFA_Phones_Shop_do_not_show_Checkout_In_Progress_page

  @Web
  Scenario Outline: CFA_Phones_Shop_do_not_show_Checkout_In_Progress_page
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And enter the shop url
    And navigate to PAYM Phones page
    And I choose PayM <handset2>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option


    Examples:
    | handset | handset2 |
    |Iphone7  |Iphone7    |
