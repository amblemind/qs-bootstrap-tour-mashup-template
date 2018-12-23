/* 
 *   Visit http://bootstraptour.com/api/ for a full list of Bootstrap Tour controls. 
 */

/* ------------------------------------------- Tour 1: SampleTour1 ------------------------------------------- */
$(document).on("click", "#SampleTour1", function(){
    var tour = new Tour({
        steps: [
		{
			element: "#QV01",
			title: "Step 1",
			content: "Welcome to the Tour. As you can see, the background is greyed out and we are focused on this visualization. <br><br> Click 'Next' to continue."
		},
		{
			element: "#QV05",
			title: "Step 2",
			content: "If you would like to end the tour at anytime, select 'End tour'.",
			placement: "top"
		},
		{
			element: "#QV02",
			title: "Step 3",
			content: "When instructing the user to make a selection, add padding to the top to allow the user to confirm the selection.",
			backdropPadding: {top: 38}, //Add space for selection confirmation.
			placement: "top"
		},
		{
			element: "#QV04",
			title: "Step 4",
			content: "This looks bad! <br><br> Force the location of the pop over using the 'placement' property."
		},
		{
			element: "#QV03",
			title: "Step 5",
			content: "The backdrop can be turned off.",
			backdrop: false,
			placement: "left"
		},
		{
			element: "#clearSelections",
			title: "Step 6",
			content: "Clear all selections here."
		},
		{
			element: "#advancedSelections",
			title: "Step 7",
			content: "Toggle the fancy selection bar here.",
			placement: "bottom"
		}],
		backdrop: true //Add grey background
    }).init().restart().goTo(0);
});

/*
 *   Copy above and paste below to add more tours.   
 */