import React from 'react';
import axios from 'axios';

import { Table } from 'react-bootstrap'
 
class AllUsers extends React.Component{

    state = {
        data: [],
    }

    componentDidMount(){
        axios.get(`https://reqres.in/api/users`)
          .then(res => {
            const persons = res.data.data;
            this.setState({ data: persons });
          })
      }

    render(){
        return(
            <div>
              <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        );
    }
}

export default AllUsers