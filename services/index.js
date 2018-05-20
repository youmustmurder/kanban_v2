require('module-alias/register');

const http = require('http'),
			KanbanAPI = require('@KanbanAPI'),
			KanbanServer = http.createServer(KanbanAPI),
			KanbanPort = process.env.PORT || 3001,
			LOCAL = '0.0.0.0';

KanbanServer.listen(KanbanPort, LOCAL, () => {
	console.log(`KanbanAPI running on ${KanbanPort}`);
});
