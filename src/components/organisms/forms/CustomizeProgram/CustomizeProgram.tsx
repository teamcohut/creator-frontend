import React from 'react'
import Button from '../../../atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import ProgressBar from '../../../molecules/auth/PregressBar'
import { FiArrowLeft, FiImage } from 'react-icons/fi'
import '../../style.css'
import DragNDropInput from '../../../atoms/inputs/DragNDropInput'

const CustomizeProgram = () => {
    const navigate = useNavigate();
    return (
        <>
            <form className="form bg-white d-flex flex-column rounded-5 mx-auto" action="">
                <ProgressBar
                    height={8}
                    length={2}
                    page={2}
                    absolute={true}
                    gap
                    rounded={false}
                />
                <div className="w-100 d-flex justify-content-between">
                    {/* <Link
                    className="primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none"
                    to={"/"}
                >
                    Cohut
                </Link> */}
                    <span className="dark-700 back" onClick={() => navigate(-1)}>
                        <FiArrowLeft /> Back
                    </span>
                </div>
                <div className="d-flex flex-column gap-2">
                    <h1 className="manrope-600 primary-950 fs-h2">Customize Program</h1>
                    <span className="manrope-500 dark-700 fs-body">
                        Customize your program's timing to fit your learner's needs.
                    </span>
                </div>

                <div className="d-flex flex-column gap-2">
                    <DragNDropInput
                        label="Upload Image"
                        id="thumbnail-upload"
                        detail="Program's Logo"
                        onchange={(file) => console.log('Uploaded file:', file)}
                    />
                    <span className="fs-caption primary-400">(png,jpeg,jpg)</span>

                    <DragNDropInput
                        label="Banner Image"
                        id="thumbnail-upload"
                        detail="Program's Cover Image"
                        onchange={(file) => console.log('Uploaded file:', file)}
                    />
                    <span className="fs-caption primary-400">Banner Image will be displayed across your program (png,jpeg,jpg)</span>

                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                        children="Complete Setup"
                        action={() => { }}
                        type="button"
                        fill={true}
                    />
                </div>
            </form>
        </>
    );
};

export default CustomizeProgram;
