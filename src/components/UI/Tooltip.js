import React, {useState} from "react";
import {Tooltip} from "reactstrap";

const TooltipItem = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return(
        <Tooltip placement="bottom" isOpen={tooltipOpen} target={props.tooltipTarget} toggle={toggle}>{props.tooltipText}</Tooltip>
    )
}

export default TooltipItem