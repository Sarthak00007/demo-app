import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

import React from 'react'

class Viewtask extends React.Component{
    render(){
        return (
            <TableContainer className="form" >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><Typography variant="h6"> Task Name</Typography></TableCell>
                    <TableCell><Typography variant="h6"> Description</Typography></TableCell>
                    <TableCell><Typography variant="h6"> Edit Options</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.taskData.map(row => (
                    <TableRow key={row.name}>   
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell>
                        <span><Fab size="small" color="primary"><EditIcon/></Fab></span>
                        <span><Fab size="small" color="primary"><DeleteIcon/></Fab></span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }
}
export default Viewtask;