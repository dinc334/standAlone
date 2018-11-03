"use strict";

const rp = require('request-promise');
const cron = require('node-cron');

const Prices = require('./models').Prices;

const CMC = 'https://api.coinmarketcap.com/v1/ticker/semux'
const CMC_ALL = 'https://graphs2.coinmarketcap.com/currencies/semux/'

async function getPrice() {
	try {
		let currentPrice = JSON.parse(await rp(CMC))[0];
		await Prices.create({
			btc_price: currentPrice.price_btc,
			usd_price: currentPrice.price_usd,
			volume: currentPrice['24h_volume_usd'],
			timestamp: Date.now()
		})
	} catch(e) {
		console.log("CMC issue or db while init prices")
		console.log(e)
	}
}

async function initPrices() {
	try {
		let allData = JSON.parse(await rp(CMC_ALL))
		for(let i = 0; i < allData['price_btc'].length; i++) {
			await Prices.create({
				btc_price: allData['price_btc'][i][1],
				usd_price: allData['price_usd'][i][1],
				volume: allData['volume_usd'][i][1],
				timestamp: allData['volume_usd'][i][0]
			})
		}
	} catch(e) {
		console.log("CMC issue or db while init prices")
		console.log(e)
	}
}
initPrices()

cron.schedule('*/5 * * * *',async () => {
	await getPrice()
	console.log("New Price added.")
})


