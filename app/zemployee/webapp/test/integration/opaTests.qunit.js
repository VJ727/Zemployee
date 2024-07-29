sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zemployee/test/integration/FirstJourney',
		'zemployee/test/integration/pages/ProjectList',
		'zemployee/test/integration/pages/ProjectObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectList, ProjectObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zemployee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectList: ProjectList,
					onTheProjectObjectPage: ProjectObjectPage
                }
            },
            opaJourney.run
        );
    }
);