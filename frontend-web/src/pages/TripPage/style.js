import { makeStyles } from "@mui/styles";
export const style = makeStyles((theme) => ({
    header: {
        fontFamily: 'Kanit',
        color: "#51b4ec",
        "& .MuiTypography-root":{
            fontFamily: 'Kanit'
        }
    },
    imageLarge: {
        flex: 1,
        height: '400px',
        width: '200px',
        maxWidth: '500px',
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: '15px',
    },
    imageMedium: {
        flex: 1,
        height: '400px',
        width: '600px',
        maxWidth: '500px',
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: '15px',
    },
    imageSmall: {
        flex: 0,
        height: '180px',
        width: '200px',
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: '15px',
    },
    title: {
        fontFamily: 'Kanit',
        color: "#000000",
        cursor: 'pointer',
        position: 'relative',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        "& .MuiTypography-root":{
            fontFamily: 'Kanit',
        }
    },
    description: {
        color: "#858e95",
        fontFamily: 'Kanit',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        cursor: 'default',
        "& .MuiTypography-root":{
            fontFamily: 'Kanit'
        }
    },
    readMore: {
        textDecoration: 'underline',
        '&:hover': {
            color: "#51b4ec"
        },
        color: "#51b4ec",
        cursor: 'pointer',
        "& .MuiTypography-root":{
            fontFamily: 'Kanit'
        }
    },
    category: {
        cursor: 'default',
        "& .MuiTypography-root":{
            fontFamily: 'Kanit'
        }
    },
    tag: {
        color: "#858e95",
        textDecoration: 'underline',
        cursor: 'pointer',
        '&:hover': {
            color: "#51b4ec",
        },
        "& .MuiTypography-root":{
            fontFamily: 'Kanit'
        }
    },
    textField: {
        "& .MuiInputBase-root": {
            color: "#000000",
            fontFamily: 'Kanit',
            width: '80vh',
            borderRadius: 10
        },
    }
}));
