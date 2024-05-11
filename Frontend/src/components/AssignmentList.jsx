// AssignmentList.js
import React from 'react';

function AssignmentList({ assignments }) {
    
    return (
        <ul>
            {
                assignments ?  <h5>No Data Found</h5>:
            
            assignments?.map((assignment, index) => (
                <li key={index}>{assignment}</li>
            ))}
        </ul>
    );
}

export default AssignmentList;
