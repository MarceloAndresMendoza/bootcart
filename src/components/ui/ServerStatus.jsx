// ====================================================
// Server Status Check
// Author: Marcelo Mendoza
// Created: 2023-10-11
// Description: Status check for the server and its
//              services
// ====================================================

import { useEffect, useState } from "react";
import { axiosClient } from "../../config/axios.api";

export const ServerStatus = () => {
    const [serverStatus, setServerStatus] = useState(102);
    const [serverDatabaseStatus, setServerDatabaseStatus] = useState(102);
    const [emailServerStatus, setEmailServerStatus] = useState(102);
    const [fileServerStatus, setFileServerStatus] = useState(102);
    // Put the servers status on the return: green for ok, red for error
    const checkServerStatus = async () => {
        try {
            const response = await axiosClient.get('/');
            setServerStatus(response.status);
        } catch (error) {
            setServerStatus(error.response);
        }
    }

    const checkDatabaseStatus = async () => {
        try {
            const dbresponse = await axiosClient.get('/dbstatus');
            setServerDatabaseStatus(dbresponse.status);
        } catch (error) {
            setServerDatabaseStatus(error.response);
        }
    }

    const checkEmailServerStatus = async () => {
        try {
            const emailserverresponse = await axiosClient.get('/nodemailerstatus');
            setEmailServerStatus(emailserverresponse.status);
        } catch (error) {
            setEmailServerStatus(error.response);
        }
    }

    const checkFileServerStatus = async () => {
        try {
            const fileresponse = await axiosClient.get('/fileserverstatus');
            setFileServerStatus(fileresponse.status);
        } catch (error) {
            setFileServerStatus(error.response);
        }
    }

    useEffect(() => {
        checkServerStatus();
        checkDatabaseStatus();
        checkEmailServerStatus();
        checkFileServerStatus();
    }, []);

    return (
        <>
            <div className='p-4 text-gray-400 flex flex-col gap-4 bg-slate-200 rounded-md text-sm'>
                <h3 className='border-b'>Services Status</h3>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className={`w-3 h-3 rounded-full
                        ${serverStatus === 200 ? 'bg-green-500' : serverStatus === 102 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        <div>
                            {`Main Server - ${serverStatus === 200 ? 'OK' : serverStatus === 102 ? 'Checking...' : 'FAIL'}`}
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className={`w-3 h-3 rounded-full
                        ${serverDatabaseStatus === 200 ? 'bg-green-500' : serverDatabaseStatus === 102 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        <div>
                            {`Database - ${serverDatabaseStatus === 200 ? 'OK' : serverDatabaseStatus === 102 ? 'Checking...' : 'FAIL'}`}
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className={`w-3 h-3 rounded-full
                        ${emailServerStatus === 200 ? 'bg-green-500' : emailServerStatus === 102 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        <div>
                            {`Email server- ${emailServerStatus === 200 ? 'OK' : emailServerStatus === 102 ? 'Checking...' : 'FAIL'}`}
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className={`w-3 h-3 rounded-full
                        ${fileServerStatus === 200 ? 'bg-green-500' : fileServerStatus === 102 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        ></div>
                        <div>
                            {`File Server - ${fileServerStatus === 200 ? 'OK' : fileServerStatus === 102 ? 'Checking...' : 'FAIL'}`}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
