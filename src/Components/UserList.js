import React from 'react';
import { User } from './User';
import Box from '@material-ui/core/Box';

export class UserList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const userList = this.props.userList.map((user, i) => {
            return (
                <User key={i} index={i} id={user.id} correo={user.correo}  nombre={user.nombre} />
            );
        });
        return (
            <div>
                <Box color="text.secondary" display="center" flexWrap="wrap"  >
                    {userList}
                </Box>
                <br />
            </div>
        );


    }

}
export default UserList;