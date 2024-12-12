// import React, { useState } from "react";
// import Button from "../../../atoms/Button";
// import ProgressBar from "../../../molecules/auth/PregressBar";
// import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
// type ProgramData = {
//     title: string;
//     description: string;
//     cover: File | null;
//     logo: File | null;
//     format: string;
//     communities: string[];
//     certificates: string[];
// };

// interface CustomizeProgramProps {
//     programData: ProgramData;
//     onSubmit: () => void;
//     updateProgramData: (data: Partial<ProgramData>) => void;
// }

// const CustomizeProgram: React.FC<CustomizeProgramProps> = ({
//     programData,
//     onSubmit,
//     updateProgramData,
// }) => {
//     const [thumbnail, setThumbnail] = useState<File | null>(programData.cover);
//     const [banner, setBanner] = useState<File | null>(programData.logo);

//     const handleCompleteSetup = () => {
//         updateProgramData({ cover: thumbnail, logo: banner });
//         onSubmit();
//     };

//     return (
//         <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
//             <ProgressBar height={8} length={2} page={2} absolute={true} gap rounded={false} />
//             <div className="d-flex flex-column gap-2">
//                 <h1 className="manrope-600 primary-950 fs-h2">Customize Program</h1>
//                 <span className="manrope-500 dark-700 fs-body">
//                     Customize your program's timing to fit your learner's needs.
//                 </span>
//             </div>
//             <div className="d-flex flex-column gap-2">
//                 <DragNDropInput
//                     label="Upload Logo"
//                     id="thumbnail-upload"
//                     detail="Program's Logo"
//                     onchange={(file) => setThumbnail(file)}
//                 />
//                 <DragNDropInput
//                     label="Banner Image"
//                     id="banner-upload"
//                     detail="Program's Cover Image"
//                     onchange={(file) => setBanner(file)}
//                 />
//             </div>
//             <div className="d-flex flex-column align-items-center gap-3">
//                 <Button children="Complete Setup" action={handleCompleteSetup} type="button" fill={true} />
//             </div>
//         </form>
//     );
// };

// export default CustomizeProgram;





import React, { useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import axiosAPI from "../../../../api/axios";

type ProgramData = {
    title: string;
    description: string;
    cover: any; // Updated to hold the image URL
    logo: any;  // Updated to hold the image URL
    format: string;
    communities: string[];
    certificates: string[];
};

interface CustomizeProgramProps {
    programData: ProgramData;
    onSubmit: () => void;
    updateProgramData: (data: Partial<ProgramData>) => void;
}

const CustomizeProgram: React.FC<CustomizeProgramProps> = ({
    programData,
    onSubmit,
    updateProgramData,
}) => {
    const [thumbnail, setThumbnail] = useState<string>(programData.cover);
    const [banner, setBanner] = useState<string>(programData.logo);
    const [uploading, setUploading] = useState(false);

    const uploadImage = async (file: File): Promise<string> => {
        // const formData = new FormData();
        // formData.append("file", file);
        setUploading(true);
        console.log("I am response file", file);

        try {
            const response = await axiosAPI.program.uploadProgramImage(file);

            setUploading(false);
            return response?.data.data.url;
        } catch (error) {
            console.error("Image upload failed:", error);
            setUploading(false);
            throw error;
        }
    };

    const handleThumbnailChange = async (file: any) => {
        try {
            const imageUrl = await uploadImage(file);
            setThumbnail(imageUrl);
        } catch {

            alert("Failed to upload thumbnail.");
        }
    };

    const handleBannerChange = async (file: any) => {
        try {
            const imageUrl = await uploadImage(file);
            setBanner(imageUrl);
        } catch {
            alert("Failed to upload banner.");
        }
    };

    const handleCompleteSetup = () => {
        console.log("tubu", thumbnail);
        console.log("logo", banner);


        updateProgramData({ cover: thumbnail, logo: banner });
        onSubmit();
    };

    return (
        <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
            <ProgressBar height={8} length={2} page={2} absolute={true} gap rounded={false} />
            <div className="d-flex flex-column gap-2">
                <h1 className="manrope-600 primary-950 fs-h2">Customize Program</h1>
                <span className="manrope-500 dark-700 fs-body">
                    Customize your program's timing to fit your learner's needs.
                </span>
            </div>
            <div className="d-flex flex-column gap-2">
                <DragNDropInput
                    label="Upload Logo"
                    id="thumbnail-upload"
                    detail="Program's Logo"
                    onchange={(file) => handleThumbnailChange(file)}
                />
                <DragNDropInput
                    label="Banner Image"
                    id="banner-upload"
                    detail="Program's Cover Image"
                    onchange={(file) => handleBannerChange(file)}
                />
            </div>
            {uploading && <p>Uploading image...</p>}
            <div className="d-flex flex-column align-items-center gap-3">
                <Button children="Complete Setup" action={handleCompleteSetup} type="button" fill={true} />
            </div>
        </form>
    );
};

export default CustomizeProgram;

