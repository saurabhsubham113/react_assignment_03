import Issue from './Issue'

const IssueList = ({ tableHead, issueList }) => {
   
    return (

        <tr >
            <Issue  key={issueList.id} issue={issueList} />
        </tr>
    )
}

export default IssueList;