function buildNameCard () {

	var $nameCard = $( '<div>', {'class': 'nameCard'} );

	var $image = $('<img>', { /* 'src': */ 'class': 'nameCard__image'});
	var $title = $('<h1>', {'class': 'nameCard__title'}).html( /*USER PROFILE NAME*/ );

	$nameCard.append($image);
	$nameCard.append($title);

	return $nameCard;

}

function buildTimeLine () {

	var $timeLine = $('<div>', {'class': 'timeLine'} );

	var $title = $('<h2>', {'class': 'timeLine__title' });
	var $graph = $('<div>', {'class': 'timeLine__div' });

	$timeLine.append($title)
	$timeLine.append($graph);

	return $timeLine;

}

function buildTopicsLearned () {

	var $topicsLearned = $('<div>', {'class': 'topicsLearned'} );

	var $title = $('<h2>', {'class': 'topicsLearned__title'} );
	var $list  = $('<ul>', {'class': 'topicsLearned__list'} );

	for ( var i = 0; i < 3; i++ ){
		var $topic = $('<li>').html( /* user.points[i] */);
		$list.append($topic);
	}

	$topicsLearned.append( $title );
	$topicsLearned.append( $list );

	return $topicsLearned;
}

function buildRecentBadges () {

	var $recentBadges = $('<div>', {'class': 'recentBadges'})

	for ( var i = 0; i < 10; i++ ){

		//make a card to hold badge image and title
		var $badge = $('<div>', {'class': 'recentBadges__badge'})


		//make badge image and title
		var $badgeImage = $('<img>', { /*'src': */ 'class': 'recentBadges__badge--image'} );
		var $badgeTitle = $('<span>', {'class': 'recentBadges__badge--title'}).html( /* user.badges[i].name */ );
		

		//add the title and image to a badge card
		$badge.append($badgeTitle);
		$badge.append($badgeImage);


		//add the current badge card to the badges container
		$recentBadges.append($badge);	
	}

	return $recentBadges;
}



function buildDashBoard ( user ) {
	
	var $body = $('body');


	//make a container to act as the user's dashboard, attach a name, and attach
	//the whole thing to the body
	var $dashboard = $('<div>', {'class': 'user__dashboard'} );
	( $('<h1>', {'class': 'user__name'}) ).html( user ).appendTo($dashboard);
	$body.append($dashboard);


	var $nameCard = buildNameCard();
	var $timeLine = buildTimeLine();
	
	var $recentBadges = buildRecentBadges();
	var $topicsLearned = buildTopicsLearned();

	$dashboard.append($nameCard)
			  .append($timeLine)
			  
			  .append($recentBadges)
			  .append($topicsLearned)

}	// <----------END OF DASHBOARD CONSTRUCTION--------->

