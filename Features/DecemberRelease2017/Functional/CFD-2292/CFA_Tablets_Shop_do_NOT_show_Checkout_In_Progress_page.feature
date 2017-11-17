Feature: CFA_Tablets_Shop_do_NOT_show_Checkout_In_Progress_page
  This scenario ensures that when customer on acquisition journey selects 'PayM Tablets ' and  lands on 'Delivery page', then Checkout In Progress page should not be displayed when the customer changes the url to go to shop page

  @Web
  Scenario Outline: CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <Device>
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And customer lands on review page
    And enter the shop url
    And navigate to PAYM Phones page
    And I choose PayM <Device2>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And verify I land on basket page
    #Checkout In Progress page should not be displayed

    Examples:
    | Device | Device2 |
    | tablet |         |
