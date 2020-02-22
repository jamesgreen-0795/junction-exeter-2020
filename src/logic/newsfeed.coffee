import uuid from 'uuid/v4'

export getNews = ->
	if (Math.random()) < 0.01
		doEvent()

doEvent = ->
	cCount = window.store.countries.length
	country = window.store.countries[Math.floor(Math.random() * cCount)]
	console.log(country)
	country.state.openBorders = false
	createNewsItem(country.name + " has closed its borders.")

createNewsItem = (msg) ->
	window.store.newsfeed.push({
		uuid: uuid(),
		message: msg,
	})
