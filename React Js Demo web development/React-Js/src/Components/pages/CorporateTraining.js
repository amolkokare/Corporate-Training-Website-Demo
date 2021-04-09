import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap'


export default class CorporateTraining extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] }
  }
  refreshList() {
    fetch(process.env.REACT_APP_API + 'syllabus')
      .then(response => response.json())
      .then(data => {
        this.setState({ deps: data });

      });
    }
    componentDidMount(){
      this.refreshList();
    }
    componentDidUpdate(){
      this.refreshList();
    }

    render(){
      const { deps } = this.state;
      return (
        <>
        <div className='ab'>
                <h1 >Corporate IT Training Courses</h1> 
                </div>
                
                
        <div align="center">
          <table   className='tb' border='1'>
            <thead>
              <tr>
                <th align='center'>Sr No</th>
               
                <th>Course Name</th>
                <th> Syllabus </th>
                <th>Duration</th>
                <th>Price</th>
                <th>Option</th>

              </tr>
            </thead>
            <tbody>
               {deps.map(dep=>
                <tr key={dep.SyllabusId}>
                  <td align='center'>{dep.SyllabusId}</td>
                  
                  <td align='center'>{dep.CourseName}</td>
                  <td align='center'>{dep.Syllabus}</td>
                  <td align='center'>{dep.Duration}</td>
                  <td align='center'>$ {dep.Price}</td>
                  <td align='center'><Button className='btn'  color='danger' >Buy</Button></td>

                </tr>)}
            </tbody>
          </table>

        </div>
        </>
      )
    }
  }


