import * as express from 'express';
import { Application } from "express";
import { getAllRequests, getRequestsByRole, getRequestDetailById } from './get-courses.route';



const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/request').get(getAllRequests);

app.route('/api/request/role/:roleId').get(getRequestsByRole);

app.route('/api/request/detail/:reqId').get(getRequestDetailById);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});

