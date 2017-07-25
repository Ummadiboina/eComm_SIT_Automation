Feature: C1924_E11409_TC4_CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker

  @JulyRelease
Scenario Outline: 
	CFA_Displaying_dropdown_in_place_of_variant_swatches_on_device_details_page_of_fitness_tracker 
	Given I am an CFA user and Lands on shop page 
	And Navigate to Fitness Trackers 
	And I choose <fitnesstrackername> FitnessTracker 
	Then check if the selected non connected device has more than 1 variant for colour and single variant for capacity 
	And select <color> color of the non connected device 
	And Navigate to device details page 
	# And select <capacity> capacity of the non connected device
	
	#Close the browser
	Examples: 
		| fitnesstrackername | color         | 
		| Jawbone UP2        | Black Diamond |
