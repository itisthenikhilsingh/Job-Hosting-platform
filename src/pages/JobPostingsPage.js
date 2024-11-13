import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '@fontsource/poppins'; 
import { fetchJobs, addJob, updateJob, deleteJob } from '../redux/slices/jobSlice';

function JobPostingsPage() {
  const navigate = useNavigate();
  const location = useLocation();  
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  const [open, setOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [newJob, setNewJob] = useState({ title: '', description: '', applicants: 0 });

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  const handleOpen = (job = null) => {
    if (job) {
      setEditingJob(job);
      setNewJob({ title: job.title, description: job.description, applicants: job.applicants });
    } else {
      setEditingJob(null);
      setNewJob({ title: '', description: '', applicants: 0 });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveJob = () => {
    if (editingJob) {
      dispatch(updateJob({ id: editingJob.id, updatedJob: newJob }));
    } else {
      dispatch(addJob(newJob));
    }
    setOpen(false);
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: 2,
            fontWeight: "600",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            color: "#34495e",
            textTransform: "uppercase",
            letterSpacing: 2,
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          JOBS LIST
        </Typography>
        <Box
          sx={{
            width: { xs: "95%", sm: "85%", md: "80%" },
            margin: "0 auto",
            padding: { xs: 1, md: 2 },
            borderRadius: "16px",
            backgroundColor: "#f9fafb",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen()}
              sx={{
                borderRadius: "12px",
                padding: { xs: "8px 16px", sm: "10px 20px" },
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#1abc9c",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                "&:hover": {
                  backgroundColor: "#16a085",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Add New Job
            </Button>
            {location.pathname !== "/" && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
                sx={{
                  borderRadius: "12px",
                  padding: { xs: "8px 16px", sm: "10px 20px" },
                  fontWeight: "bold",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#3498db",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  "&:hover": {
                    backgroundColor: "#2980b9",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Back to Home
              </Button>
            )}
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              overflowX: "hidden", // Ensure no horizontal scroll
              borderRadius: "16px",
              marginTop: 3,
              backgroundColor: "#ecf0f1",
            }}
          >
            <Table sx={{ width: "100%" }}>
              {" "}
              {/* Remove minWidth to prevent overflow */}
              <TableHead>
                <TableRow>
                  {["Job Title", "Description", "Applicants", "Actions"].map(
                    (header) => (
                      <TableCell
                        key={header}
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "#34495e",
                          color: "white",
                          textAlign: "center",
                          padding: { xs: "8px", sm: "16px" },
                          fontSize: { xs: "0.8rem", sm: "1.1rem" },
                          borderRadius: "8px 8px 0 0",
                        }}
                      >
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow
                    key={job.id}
                    sx={{
                      backgroundColor: "white",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", // Shadow on each row
                      borderRadius: "12px",
                      transition: "all 0.2s ease-in-out",
                      marginY: 1,
                      "&:hover": {
                        backgroundColor: "#f9fafb",
                        transform: "scale(1.01)",
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                      },
                      display: "table-row", // Keeps row structure
                    }}
                  >
                    <TableCell
                      sx={{
                        textAlign: "center",
                        padding: { xs: "8px", sm: "16px" },
                      }}
                    >
                      {job.title}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        padding: { xs: "8px", sm: "16px" },
                      }}
                    >
                      {job.description}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        padding: { xs: "8px", sm: "16px" },
                      }}
                    >
                      {job.applicants}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: { xs: "8px", sm: "16px" },
                      }}
                    >
                      <Tooltip title="Edit Job">
                        <IconButton
                          color="primary"
                          onClick={() => handleOpen(job)}
                          sx={{
                            marginRight: 1,
                            "&:hover": { color: "#f39c12" },
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Job">
                        <IconButton
                          color="secondary"
                          onClick={() => handleDeleteJob(job.id)}
                          sx={{
                            marginRight: 1,
                            "&:hover": { color: "#e74c3c" },
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View Candidates">
                        <Link to={`/candidates/${job.id}`}>
                          <IconButton
                            color="primary"
                            sx={{ "&:hover": { color: "#9b59b6" } }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingJob ? 'Edit Job' : 'Add Job'}</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Title" type="text" fullWidth variant="outlined" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
          <TextField margin="dense" label="Description" type="text" fullWidth multiline rows={4} variant="outlined" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />
          <TextField margin="dense" label="Applicants" type="number" fullWidth variant="outlined" value={newJob.applicants} onChange={(e) => setNewJob({ ...newJob, applicants: Number(e.target.value) })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleSaveJob} color="primary">{editingJob ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default JobPostingsPage;
