import { useBooks } from "../context/BooksContext";
import { MenuItem, Select, Typography, Card, CardContent, Box } from "@mui/material";
import { useState } from "react";

export default function CourseFilter() {
    const { books } = useBooks();
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");

    const courses = [...new Set(books.map(book => book.course))];
    const semesters = [...new Set(books.map(book => book.semester))].sort((a, b) => a - b);

    const filteredBooks = books.filter(b => {
        const matchCourse = selectedCourse === "" || b.course === selectedCourse;
        const matchSemester = selectedSemester === "" || b.semester === Number(selectedSemester);
        return matchCourse && matchSemester;
    });

    return (
        <>
            <Typography variant="h5" gutterBottom>Filtrar por Disciplina e Semestre</Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
               
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>Disciplina</Typography>
                    <Select
                        fullWidth
                        value={selectedCourse}
                        onChange={e => setSelectedCourse(e.target.value)}
                    >
                        <MenuItem value="">Todas</MenuItem>
                        {courses.map(course => (
                            <MenuItem key={course} value={course}>{course}</MenuItem>
                        ))}
                    </Select>
                </Box>

                
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>Semestre</Typography>
                    <Select
                        fullWidth
                        value={selectedSemester}
                        onChange={e => setSelectedSemester(e.target.value)}
                    >
                        <MenuItem value="">Todos</MenuItem>
                        {semesters.map(semester => (
                            <MenuItem key={semester} value={semester}>{semester}º Semestre</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Box>

            <Typography variant="subtitle1" gutterBottom>
                {filteredBooks.length} livro(s) encontrado(s)
            </Typography>

            {filteredBooks.map((book, idx) => (
                <Card key={idx} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{book.title}</Typography>
                        <Typography variant="body2">
                            {book.author} - {book.publisher} ({book.year}) | Disciplina: {book.course} | {book.semester}º Semestre
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}