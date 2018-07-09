Feature: Customer lands on Drupal Global nav enabled page and clicks on the My O2 link_Desktop

  This scenario validates that the My O2 Sign in section is displayed when an online customer lands on to a page that has Drupal Global nav enabled and clicks on the My O2 link

  @Web

  Scenario Outline: Customer lands on Drupal Global nav enabled page and clicks on the My O2 link_Desktop
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And click on 'My O2' link
    And validate url for existing customer when clicks on 'My O2' link


    Examples:
      | username                     | password |
      | ins_feb3087@stf.ref.o2.co.uk | test123  |
