import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { FaWhatsappSquare, FaFileDownload } from "react-icons/fa";
import { IconContext } from "react-icons";

const Head = ({props}) => {
    const { name,
        role,
        waLink,
        resumeLink,
        initials,
        imageLink, } = props;

console.log(props)
    return (
        <Grid container direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Grid item>
                <Avatar src={imageLink} sx={{ width: 120, height: 120 }} alt={initials}>{initials}</Avatar>
            </Grid>
            <Grid item>
                <Typography>{name}</Typography>
                <Typography>{role}</Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" href={waLink} target='_blank'>
                    <IconContext.Provider value={{ color: "green", size: '2em' }}>
                        <FaWhatsappSquare /> Wa Link
                    </IconContext.Provider>
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined">
                    <IconContext.Provider value={{ color: "grey", size: '2em' }}>
                        <FaFileDownload />
                        Download PDF resume
                    </IconContext.Provider>
                </Button>
            </Grid>
        </Grid>
    )
}

Head.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        waLink: PropTypes.string.isRequired,
        resumeLink: PropTypes.string.isRequired,
        initials: PropTypes.string.isRequired,
        imageLink: PropTypes.string.isRequired,
    }).isRequired
}

export default Head