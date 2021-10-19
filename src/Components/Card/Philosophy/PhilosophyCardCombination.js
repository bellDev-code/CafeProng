import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../style/PhilosophyCard.scss";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "100%",
        marginBottom: "10px",
        boxShadow: "none",
    },
    title: {
        fontSize: 20,
        paddingRight: "10px",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "initial",
    },
    pos: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "NotoSerifCJKkr",
    },
    text: {
        fontSize: "11px",
    },
});

export default function PhilosophyCardCombination({ title, subtitle, description }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className="Philosophy_CardWrap">
                    <Typography className={classes.title} gutterBottom>
                        {title}
                    </Typography>
                    <Typography className={classes.pos} >
                        {subtitle}
                    </Typography>
                </div>
                <Typography className={classes.text} component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
