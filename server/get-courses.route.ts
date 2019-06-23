import { Request, Response, express } from 'express';
import { coursesdata, requests, requestDetail } from './db-data';


export function getAllRequests(req: Request, res: Response) {


    res.status(200).json(Object.keys(requests).map(key => requests[key]));


}

export function getRequestsByRole(req: Request, res: Response) {

    const roleID = req.params['roleId'];

    const requestsArr: any = Object.keys(requests).map(key => requests[key]);


    const requestResult = requestsArr.find(req => req.role == roleID);

    res.status(200).json(requestResult);


}


export function getRequestDetailById(req: Request, res: Response) {

    const reqId = req.params['reqId'];

    const courses: any = Object.keys(requestDetail).map(key => requestDetail[key]);

    const reqDetail = courses.find(req => req.id == reqId);

    res.status(200).json(reqDetail);
}

