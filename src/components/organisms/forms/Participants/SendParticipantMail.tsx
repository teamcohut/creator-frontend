import React, { FC, useState } from 'react'
import EmailInput from '../../../atoms/inputs/EmailInput'
import TextInput from '../../../atoms/inputs/TextInput'
import Button from '../../../atoms/Button'
import ReactQuill from 'react-quill'
import { useMutation } from '@tanstack/react-query'
import api from '../../../../api/axios'
import { notification } from 'antd'

const SendParticipantMail: FC<ISendMailDTO> = ({ email, setModalOpen }) => {
    const [details, setDetails] = useState({
        email,
        subject: '',
        body: <></>
    })
    

    const sendMailMutation = useMutation({
        mutationFn: async (payload: any) => {
            await api.participant.sendParticipantMail(details)
        },
        onSuccess: () => {
            notification.success({
                message: 'Mail sent successfully',
            })
            setTimeout(() => {
                setModalOpen(false, '')
            }, 3000);
        },
        onError: (error) => {
            notification.error({
                message: error.message
            })
        }
    })

    const handleSubmit = () => {
        if (details.subject === '') {
            notification.info({
                message: 'Email Subject is required',
                placement: 'top'
            })
            return
        }
        if (details.body === <></> || details.body === <p><br /></p>) {
            notification.info({
                message: 'Email body cannot be empty',
                placement: 'top'
            })
            return
        }
        sendMailMutation.mutate(details)
    }

    return (
        <>
            <div className="form bg-white d-flex flex-column rounded-5">

                <div className="d-flex flex-column gap-2">
                    <h1 className="manrope-600 primary-950 fs-h2">
                        Email Participant
                    </h1>
                </div>

                <div className="d-flex flex-column gap-4">

                    <EmailInput
                        label="To"
                        id="email"
                        value={email.join(', ')}
                        onchange={()=>{}}
                        placeholder="user@email.com"
                    />

                    <div className="d-flex flex-column gap-2">

                        <TextInput
                            label="Email Subject"
                            id="subject"
                            onchange={(e) => setDetails({...details, subject: e.target.value})}
                            placeHolder="Enter Subject"
                        />

                        <div className="d-flex flex-column gap-2">
                            <label className='manrope-600 fs-body' htmlFor={'body'}>Body</label>
                            <ReactQuill onChange={(e: any)=>setDetails({...details, body: e.target?.value})} className='d-flex flex-column align-items-stretch w-100 rounded-5' theme='snow' id='body'>
                                <div className="bg-transparent w-100 border border-1 rounded-bottom-4 px-3 h-100"></div>
                            </ReactQuill>
                        </div>
                        
                    </div>
                </div>
                
                <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                        children="Send Email"
                        type="button"
                        fill={true}
                        action={handleSubmit}
                        loading={sendMailMutation.isPending}
                    />
                </div>
            </div>
        </>
    )
}

interface ISendMailDTO {
    email: Array<string>,
    setModalOpen: (open: boolean, modal: Modal) => void;
}
type Modal = 'remove' | 'mail' | ''

export default SendParticipantMail