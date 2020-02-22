import uuid from 'uuid/v4'

export getNews = ->
	if (Math.random()) < 0.01
		window.store.newsfeed.push({
			uuid: uuid(),
			message: "Spain has closed its borders",
		})
