import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Typography from '@material-ui/core/Typography';



export class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            correo : this.props.correo,
            nombre: this.props.nombre
        }
    }

    render() {
        var cardStyle = {
            justifyContent: 'center',
            alignContent: 'center',
            display: 'block',
            width: '40vw',
            transitionDuration: '0.3s',
            height: '20vw'
        }
        return (
            <div>
                <center>
                    <Card style={cardStyle}>
                        <BrandCardHeader
                            image={
                                'https://www.universidadesenbogota.com/wp-content/uploads/logo-eci.jpg'
                            }
                            extra={"ID : " + this.state.id}
                        />
                        <CardContent>
                            <TextInfoContent 
                                overline={'Correo : ' + this.state.correo}
                                heading={'Nombre:' + this.state.nombre}
                            />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Carta de prueba primera parte del laboratorio Con Spring para el usuario + {this.props.index +1}
                            </Typography>
                        </CardContent>
                    </Card>
                </center>
                <br/>
            </div>

        );
    }
}
export default User;