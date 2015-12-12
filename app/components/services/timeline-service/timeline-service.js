app.service("TimelineService", TimelineService);


function TimelineService($scope){
	$scope.twttr.widgets.createTimeline(
  "600724936517242880",
  document.getElementById("twitter-timeline"),
  {
    listOwnerScreenName: "twitter",
    listSlug: "official-twitter-accts"
  }
);
};
