import { Button, Box } from "@mui/material"
import { useNavigate } from "react-router"
export default function MainPage() {
    const navigate = useNavigate()
    return (
        <Box sx={{
            padding: 10, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',

        }}>
            <Button variant="contained" onClick={() => navigate('/trips')}>Trips</Button>
        </Box>
    )
}