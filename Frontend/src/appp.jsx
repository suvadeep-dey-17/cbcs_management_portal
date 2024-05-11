// App.js
import React, { useState } from 'react';
import AssignmentForm from './assignment';
import AssignmentList from './components/assignmentlist';

function appp() {
    const [assignments, setAssignments] = useState([]);

    const addAssignment = (newAssignment) => {
        setAssignments([...assignments, newAssignment]);
    };

    return (
        <div>
            <h1>Assignment Panel</h1>
            <AssignmentForm addAssignment={addAssignment} />
            <AssignmentList assignments={assignments} />
        </div>
    );
}

export default appp;
