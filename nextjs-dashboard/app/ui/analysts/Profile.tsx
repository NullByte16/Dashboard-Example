import { Analyst } from "@/app/lib/analysts";
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import { ConstraintsTable } from "../constraints/ConstraintsTable";
import Paper from '@mui/material/Paper';

export default function Profile({analyst} : {analyst : Analyst}){
    return (<>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 64}} color="black" gutterBottom>
                    {analyst.name}
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div">
                    {analyst.role}
                </Typography>
            </CardContent>
        </Card>
        <Paper>
            <Typography variant="h5" component="div" align="left" sx={{margin: '10px'}} style={{fontWeight: 'bold', paddingTop: '15px', marginTop: '20px'}}>
                Permanent Constraints
            </Typography>
            <ConstraintsTable analysts={[analyst]} />
        </Paper>
        </>
    )
}