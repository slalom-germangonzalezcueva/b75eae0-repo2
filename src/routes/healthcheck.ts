import { Router, Request, Response } from 'express';
import { name, version } from '../../package.json';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        name: name,
        status: 'up',
        version: version
    });
});

export default router;