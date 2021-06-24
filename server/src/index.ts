import { Server } from '@overnightjs/core';
import { UserController } from './controllers/users';
import Logger from 'jet-logger';

class UserServer extends Server {
    
    private readonly SERVER_START_MSG = 'Server started on port: ';

    constructor() {
        super();

        let userController = new UserController();

        super.addControllers( userController );
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}

export default UserServer;