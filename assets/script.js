// Global variables
var searchHistory = [];
var weatherApiPath = "https://api.openweathermap.org/data/2.5/onecall?";
var apiKey = "&appid=d91f911bcf2c0f925fb6535547a5ddc9";
// DOM element references
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-button");
var todayContainer = document.querySelector("#today");
var forecastContainer = document.querySelector("#forecast");
var searchHistoryContainer = document.querySelector("#history");
