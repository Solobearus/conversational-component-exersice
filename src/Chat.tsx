import React, { useState, useEffect } from "react";
import { ChatEntry } from "@conversationalcomponents/chat-window/types";
import { ChatWindow, useUserTyping, useBotTyping } from "@conversationalcomponents/chat-window";
import { avatars } from "./avatars";
import { getBotReply } from "./getBotReply";
import { ChatOptionsPanel } from './ChatOptionsPanel';

export const Chat = () => {
    const [content, setContent] = useState<ChatEntry[]>([]);
    const [lastInputValue, setLastInputValue] = useState("");
    const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");

    useEffect(() => {
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        setLastInputValue("");
    }, [content]);

    useEffect(() => {
        lastInputValue && setLastUnsubmittedInput("");
    }, [lastInputValue]);

    // this pushes an entry to content with {isUser:true, isLoading:true}, and either removes it when user cancels typing or changes it to {message:lastInputValue, isLoading:false} when user submits
    useUserTyping(content, setContent, lastUnsubmittedInput, lastInputValue, avatars.user);
    // this pushes an entry to content with {isUser:false, isLoading:true} and returns false, then waits for a short random period, and returns true
    const isBotDoneTyping = useBotTyping(content, setContent, lastInputValue, avatars.bot);

    useEffect(() => {
        if (!isBotDoneTyping) return;
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        lastEntry.message = getBotReply();
        lastEntry.isLoading = false;
    }, [content, isBotDoneTyping]);

    const onsubmit =( text: string) =>{

            const newContent = [...content];
        
            newContent.push({
                isUser: true,
                message: text,
                avatar: avatars.user,
                id: 'test',
                isLoading: false,
            });
            setContent(newContent);
            setLastInputValue(text);
            // setContent(newContent);
    
    }
    return (
        <ChatWindow
            headerAdditionalContent={<div style={{ flex: 1, display: "flex", justifyContent: "center" }}>HEADER</div>}
            content={content}
            footer={
                <ChatOptionsPanel
                    options={['test', 'test2']}
                    onSubmit={onsubmit}>
                </ChatOptionsPanel>
            }
        />
    );
};
