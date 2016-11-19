app.controller('DashboardCtrl', function($scope, $location, Auth, $http, Project) {
    $scope.source_array = [
        {value: "404", text: "404"},
        {value: "d404", text: "404 Rate"},
        {value: "lod", text: "Page Loads"},
        {value: "dlod", text: "Page Load Rate"},
        {value: "lat", text: "Latency"},
        {value: "usr0", text: "API 1"},
        {value: "usr1", text: "API 2"},
        {value: "usr2", text: "API 3"},
        {value: "usr3", text: "API 4"}
    ];

    $scope.colors = [ //(on,off)
	[ "#d27979" , "#ff4d4d" ],
	[ "#d2b579" , "#ffc34d" ],
	[ "#b5d279" , "#c3ff4d" ],
	[ "#79d279" , "#4dff4d" ],
	[ "#79d2b5" , "#4dffc3" ],
	[ "#79b5d2" , "#4dc3ff" ],
	[ "#7979d2" , "#4d4dff" ],
	[ "#b579d2" , "#c44dff" ],
    [ "#d279b5" , "#ff4dc3" ]
    ];

    $scope.addSource = function() {
    };

    $scope.popSource = function() {
    };

    $scope.refreshSources = function() {
    };

    $scope.projects = Project.query();
    
    $scope.addProject = function(){
        var project = {
            name: "Project X"
        };
        Project.save(project, function(){
            $scope.projects = Project.query();
        });
    };
});
