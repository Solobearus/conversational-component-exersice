import React from 'react'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

interface WelcomeProps {
    options: Array<string>,
    onSubmit: any,
}

export const ChatOptionsPanel: React.FC<WelcomeProps> = ({ options, onSubmit }) => {
    return (
        <div
            style={{
                display: "flex",
                padding: "5px",
            }}>
            {options && options.map(option => (
                <Chip
                    style={{ margin: "5px" }}
                    label={option}
                    onClick={() => onSubmit(option)}>
                </Chip>
            ))
            }
        </div >
    )
}
