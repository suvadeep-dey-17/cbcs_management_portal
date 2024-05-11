// AssignmentForm.js
import React, { useState } from 'react';

function AssignmentForm({ addAssignment }) {
    const [assignment, setAssignment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!assignment.trim()) return;
        addAssignment(assignment);
        setAssignment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={assignment}
                onChange={(e) => setAssignment(e.target.value)}
                placeholder="Enter assignment"
            />
            <button type="submit">Add Assignment</button>
        </form>
    );
}

export default AssignmentForm;
