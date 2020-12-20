import React from 'react';
import PropTypes from 'prop-types';
import './Grades.css';

function Grades({ id, title, grade, professor, score }) {
    return <div className="line">
        <div>
            <div className="higher class_title">
                {title}
            </div>
            <div className="higher class_grade">
                {grade}
            </div>
        </div>
        <div>
            <div className="lower professor">
                {professor}
            </div>
            <div className="lower class_score">
                {score}
            </div>
        </div>
    </div >
}

Grades.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired
}

export default Grades;