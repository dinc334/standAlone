"use strict"

const {SemuxApi, SemuxApiConfiguration} = require("semux-js");

const LastActivity = require('./models').LastActivity;

const config = {
	username: 'username',
	password: 'pass'
}

const api = new SemuxApi(new SemuxApiConfiguration({
    username: config.username,
    password: config.password,
    basePath: "http://localhost:5171/v2.1.0"
}));
 

async function main() {
	let latest = await api.getLatestBlockNumber();
	for(let i = 0; i < latest.result; i++) {
		let block = await api.getBlockByNumber(i)
		let txs = block.result.transactions;
		if(txs) {
			txs.map(async tx => {
				try {					
					await LastActivity.create({
						address: tx.from,
						transaction: tx.hash,
						timestamp: tx.timestamp
					}, {returning : false})
				} catch(e) {
					//console.log(e)
				}
				try {					
					await LastActivity.create({
						address: tx.to,
						transaction: tx.hash,
						timestamp: tx.timestamp
					}, {returning : false})
				} catch(e) {
					//console.log(e)
				}
			})
		}
		console.log(`Block is ${block.result.number}`)
	}
	
}
main()

