import React from "react";
import {Chat} from "./Chat";

export const App: React.FC = () => {
    return (
        <div
            style={{
                height: "calc(100vh - 40px)",
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
            <div
                style={{
                    height: "100%",
                    width: "360px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: "10px",
                    boxShadow: "rgba(0,0,0,0.5) 0px 0px 3px 3px"
                }}>
                <Chat />
            </div>
        </div>
    );
};
