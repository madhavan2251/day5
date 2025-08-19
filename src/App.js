import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' }
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', grade: '' });

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.grade) {
      setStudents([...students, { 
        id: Date.now(), // Better ID generation
        ...newStudent 
      }]);
      setNewStudent({ name: '', grade: '' });
    }
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Color scheme
  const colors = {
    primary: '#6C63FF',    // Vibrant purple
    danger: '#FF4757',     // Red for delete
    background: '#F8F9FA', // Light gray
    card: '#FFFFFF',       // White
    text: '#2D3748',       // Dark gray
    accent: '#48BB78',     // Green
    border: '#E2E8F0'      // Light border
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: colors.background,
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      color: colors.primary,
      marginBottom: '2rem',
      fontSize: '2.2rem',
      fontWeight: '600',
    },
    formContainer: {
      backgroundColor: colors.card,
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      marginBottom: '2rem'
    },
    inputGroup: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem'
    },
    input: {
      flex: 1,
      padding: '0.8rem',
      fontSize: '1rem',
      border: `1px solid ${colors.border}`,
      borderRadius: '8px',
      outline: 'none',
    },
    button: {
      padding: '0.8rem 1.5rem',
      backgroundColor: colors.primary,
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.2s',
    },
    studentList: {
      backgroundColor: colors.card,
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      overflow: 'hidden'
    },
    studentHeader: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 80px',
      padding: '1rem 1.5rem',
      backgroundColor: colors.primary,
      color: 'white',
      fontWeight: '600'
    },
    studentItem: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 80px',
      padding: '1rem 1.5rem',
      borderBottom: `1px solid ${colors.border}`,
      alignItems: 'center',
    },
    deleteButton: {
      padding: '0.4rem 0.8rem',
      backgroundColor: colors.danger,
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.2s',
    },
    gradeA: { color: '#48BB78', fontWeight: '600' },
    gradeB: { color: '#ECC94B', fontWeight: '600' },
    gradeC: { color: '#ED8936', fontWeight: '600' },
    gradeD: { color: '#FF6584', fontWeight: '600' }
  };

  const getGradeStyle = (grade) => {
    switch(grade.toUpperCase()) {
      case 'A': return styles.gradeA;
      case 'B': return styles.gradeB;
      case 'C': return styles.gradeC;
      case 'D': return styles.gradeD;
      default: return {};
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Hello, React! Student Directory</h1>
      
      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <input
            style={styles.input}
            value={newStudent.name}
            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
            placeholder="Student Name"
          />
          <input
            style={styles.input}
            value={newStudent.grade}
            onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
            placeholder="Grade (A, B, C...)"
          />
        </div>
        <button 
          style={styles.button} 
          onClick={handleAddStudent}
        >
          Add Student
        </button>
      </div>

      <div style={styles.studentList}>
        <div style={styles.studentHeader}>
          <span>Student Name</span>
          <span>Grade</span>
          <span>Action</span>
        </div>
        {students.map(student => (
          <div key={student.id} style={styles.studentItem}>
            <span>{student.name}</span>
            <span style={getGradeStyle(student.grade)}>{student.grade}</span>
            <button 
              style={styles.deleteButton}
              onClick={() => handleDeleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;