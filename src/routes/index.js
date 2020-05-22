import express from 'express';
import { indexPage, events } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/events', events);

export default indexRouter;
