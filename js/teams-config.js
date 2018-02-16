var config = {
    defaultConfig: {
        screenCycle:30000,
        pollInterval:20000,
        builds: {
            id: 'Stats',
            displayName: "Fact Check",
            buildInfoURL: "http://localhost:5000/api/teamcity/builds/buildType:(id:#BUILD_ID#),running:any,branch:#BRANCH#",
            builds: [
                                {id:'Coverage',branch:'develop'},
                                {id:'Bugs',branch:'develop'},
                                {id:'Vulnerabilities',branch:'develop'},
                                {id:'CodeSmells',branch:'develop'}
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
            changesInfoUrl: "http://localhost:5000/api/teamcity/builds/buildType:(id:#BUILD_ID#),sinceChange:#SINCE_CHANGE#,branch:#BRANCH#",
            buildInfoURL: "http://localhost:5000/api/teamcity/builds/buildType:(id:#BUILD_ID#),running:any,branch:#BRANCH#",
            builds: [
                {id:'Memory',branch:'develop'},
                {id:'Cpu',branch:'develop'},
                {id:'Diskspace',branch:'develop'},
                {id:'Database',branch:'develop'},
                {id:'DataLoad',branch:'develop'},
                {id:'Consumption',branch:'develop'}
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
                        {id:'Maintenance',branch:'develop'}
                    ]
                }
    ]
};


