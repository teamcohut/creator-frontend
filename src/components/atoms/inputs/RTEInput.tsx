import { FC, ReactNode } from 'react'
import ReactQuill from 'react-quill'
import { IRTEInput } from './types'

const RTEInput: FC<IRTEInput> = ({ onChange, id, placeholder, label }) => {
    return (
        <>
            <div className="d-flex flex-column gap-2">
                <label className='manrope-600 fs-body' htmlFor={'body'}>{label}</label>
                <ReactQuill
                    className='d-flex flex-column align-items-stretch w-100 rounded-5 quill'
                    onChange={(e: ReactNode) => onChange(e)}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, 3, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                            ["link", "image"],
                        ],
                    }}
                    formats={[
                        "bold",
                        "italic",
                        "underline",
                        "strike",
                        "header",
                        "list",
                        "bullet",
                        "check",
                        "link",
                        "image",
                    ]}
                    id={id}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default RTEInput