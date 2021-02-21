import React, { Component } from 'react';
import IssueList from './IssueList';
import axios from 'axios';

export default class AllIssuePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'Id',
            description: 'Issue Description',
            severity: 'Severity',
            status: 'Status',
            issues: []
        }
    }
    borderStyle = {
        border: '1px solid black'
    }
    
    async componentDidMount() {
        const result = await axios.get("http://localhost:4000/issues")
        this.setState({ issues: result.data })
    }
    render() {
        return (
            <div>
                <h1>Issue List</h1>

                <table style={this.borderStyle}>
                    <thead >
                        <tr>
                            <th style={this.borderStyle}>Id</th>
                            <th style={this.borderStyle}>Issue Description</th>
                            <th style={this.borderStyle}>Severity</th>
                            <th style={this.borderStyle}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.issues.map((issue) => (
                            <IssueList key={issue.id} issueList={issue} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
