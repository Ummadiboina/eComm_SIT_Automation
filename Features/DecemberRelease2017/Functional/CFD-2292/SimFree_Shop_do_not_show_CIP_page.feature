Feature: SimFree_Shop_do_not_show_CIP_page
  This scenario ensures that when the customer lands on 'Like New sim Free' page, continue the journey and proceed till delivery page ,then Checkout In Progress page should not be displayed when the customer changes the url to go to shop page

  @Web
  Scenario Outline: SimFree_Shop_do_not_show_CIP_page
    Given I am an CFA user and Lands on shop page
    And navigate to Like New Phones page
    And select <LikeNewPhoneOption> link
    And Click on <LikeNewTariffOption> tariff tile
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And the customer lands on delivery page
    And Click on browser back arrow and land on Basket page
    #Checkout In Progress page should not be displayed

  Examples:
  | LikeNewPhoneOption | LikeNewTariffOption |