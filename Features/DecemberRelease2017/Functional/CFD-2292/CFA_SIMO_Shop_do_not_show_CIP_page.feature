Feature: CFA_SIMO_Shop_do_not_show_CIP_page
  This scenario ensures that when a customer in acquisition journey selects 'SIMO' tariff for phones, and  lands on  'Delivery page', then Checkout In Progress page should not be displayed when the customer clicks on Back arrow in Delivery page

  @Web
  Scenario Outline: Feature: CFA_SIMO_Shop_do_not_show_CIP_page

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM SIMO page
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    And click on "go to checkout" button
    And the customer lands on delivery page
    And Click on browser back arrow and land on Basket page
    #Checkout In Progress page should not be displayed

  Examples:
  | Contract  |
  | 12 Months |

