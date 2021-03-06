var config = {
    defaultConfig: {
        screenCycle:30000,
        pollInterval:20000,
        builds: {
            id: 'Stats',
            displayName: "Fact Check",
            buildInfoURL: "http://localhost:5000/api/sonar",
            builds: [
                                {id:'coverage',branch:'develop'},
                                {id:'bugs',branch:'develop'},
                                {id:'vulnerabilities',branch:'develop'},
                                {id:'codeSmells',branch:'develop'}
            ]
        }
    },
    suites:[
        {
            id: 'UDS-DFW',
            displayName: 'Unified Data Services ',
            teamBuilds: ['DFW-Module','DFW-Server']
        }
    ],
    teamBuilds: [
        {
            id: 'DFW-Server',
            displayName: "UDS Server Monitoring",
            changesInfoUrl: "http://localhost:5000/api/stats",
            buildInfoURL: "http://localhost:5000/api/stats",
            builds: [
                {id:'memory',branch:'develop'},
                {id:'cpu',branch:'develop'},
                {id:'diskspace',branch:'develop'},
                {id:'database',branch:'develop'},
                {id:'ingestion',branch:'develop'}
            ]
        },
        {
                    id: 'DFW-Module',
                    displayName: "Module Builds",
                    changesInfoUrl: "http://localhost:5000/api/changes/#BUILD_ID#/#BRANCH#",
                    buildInfoURL: "http://localhost:5000/api/#BUILD_ID#/#BRANCH#",
                    builds: [
                        {id:'orchestration',branch:'develop'},
                        {id:'registration',branch:'develop'},
                        {id:'ingestion',branch:'develop'},
                        {id:'discovery',branch:'develop'},
                        {id:'portal',branch:'develop'},
                        {id:'security',branch:'develop'},
                        {id:'services',branch:'develop'},
                        {id:'commons',branch:'develop'},
                        {id:'core',branch:'develop'},
                        {id:'maintenance',branch:'develop'}
                    ]
                }
    ]
};


