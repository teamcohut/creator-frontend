export { }

// import { FC, useContext, useState } from "react";
// import Button from "../../../atoms/Button";
// import ProgressBar from "../../../molecules/auth/PregressBar";
// import TextInput from "../../../atoms/inputs/TextInput";
// import "../../style.css";
// import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
// import api from "../../../../api/axios";
// import { ProgramContext } from "../../../../context/programs/ProgramContext";
// import { notification } from "antd";
// import { useMutation } from "@tanstack/react-query";
// import { FaFileCsv } from 'react-icons/fa';
// import { FiArrowLeft, FiX } from "react-icons/fi";
// const UploadParticipants: FC<IUploadParticipants> = ({
//   onSubmit,
//   hasTrack,
//   closeModal,
//   prevStep
// }) => {
//   const [track, setTrack] = useState("");
//   const { activeCohort } = useContext(ProgramContext);
//   const [progress, setProgress] = useState(0);
//   console.log("activeCohort", activeCohort);

//   const inviteParticipantsMutation = useMutation({
//     mutationFn: (payload: File) =>
//       api.participant.inviteGroupParticipant(activeCohort?._id, track, payload, {
//         onUploadProgress: (event: any) => {
//           const progress = Math.round((event.loaded / event.total) * 100);
//           setProgress(progress);
//         },
//       }),
//     onSuccess: () => {
//       notification.success({ message: "Participants invited successfully!" });
//     },
//     onError: (error: any) => {
//       notification.error({
//         message: "Failed to invite participants. Please try again.",
//       });
//     },
//   });

//   const handleFileInput = async (file: File) => {
//     if (file?.type !== "text/csv") {
//       notification.warning({
//         message: "File type not supported",
//         description: "Please upload a CSV file.",
//       });
//       return;
//     }

//     if (!activeCohort?._id) {
//       notification.warning({ message: "No active cohort detected." });
//     }

//     if (
//       (activeCohort.hasTrack && !track) ||
//       (activeCohort.hasTrack && track === "")
//     ) {
//       notification.warning({
//         message: "You are required to specify a track to add participants",
//       });
//       return;
//     }

//     // inviteParticipantsMutation.mutate(file);
//     setProgress(0);

//     // Simulate progress
//     inviteParticipantsMutation.mutate(file, {
//       onSuccess: () => {
//         setProgress(100); // Ensure progress completes on success
//       },
//       onError: () => {
//         notification.error({ message: "Upload failed. Please try again." });
//       },
//     });
//   };



//   return (
//     <>
//       <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
//         <ProgressBar
//           height={8}
//           length={2}
//           page={2}
//           absolute={true}
//           gap
//           rounded={false}
//         />
//         <div className="d-flex flex-row justify-content-between">
//           <p className="" onClick={prevStep}><FiArrowLeft /> Back</p>
//           <FiX className="fs-h3" onClick={closeModal} />
//         </div>
//         <div className="d-flex flex-column gap-2">
//           <h1 className="manrope-600 primary-950 fs-h2">
//             Upload Cohort Participants
//           </h1>
//           <span className="manrope-500 dark-700 fs-body">
//             Upload a list of your learners based on their respective tracks
//           </span>
//         </div>

//         <div className="d-flex flex-column gap-4">
//           {activeCohort.hasTrack && (
//             <div>
//               <TextInput
//                 id="track"
//                 label="Learning Tracks"
//                 placeHolder="Enter Learning Track"
//                 onchange={(e) => setTrack(e.target.value)}
//                 value={track}
//               />
//             </div>
//           )}

//           <div>
//             <DragNDropInput
//               label="Upload Participants List"
//               icon={<FaFileCsv className="fs-small-icon dark-300" />}
//               id="thumbnail-upload"
//               detail="Cohort's list of Participants"
//               onchange={(file: any) => handleFileInput(file)}
//               uploadProgress={progress}
//             />
//             {inviteParticipantsMutation.isPending ? (
//               <>Uploading file...</>
//             ) : (
//               <span className="fs-caption primary-400">
//                 A csv (Comma separated Values) File containing First names, Last
//                 names and Emails of Participants
//               </span>
//             )}
//           </div>
//         </div>

//         <div className="d-flex flex-column align-items-center gap-3">
//           <Button
//             children="Continue"
//             action={onSubmit}
//             type="button"
//             fill={true}
//             loading={inviteParticipantsMutation.isPending}
//           />
//         </div>
//       </form>
//     </>
//   );
// };

// interface IUploadParticipants {
//   onSubmit: () => void;
//   hasTrack: boolean;
//   closeModal: any;
//   prevStep: any;
// }

// // interface ITracks {
// //   name: string;
// //   file: string;
// // }

// export default UploadParticipants;


























// import React, { FC, useContext, useState } from "react";
// import Button from "../../../atoms/Button";
// import ProgressBar from "../../../molecules/auth/PregressBar";
// import TextInput from "../../../atoms/inputs/TextInput";
// import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
// import api from "../../../../api/axios";
// import { ProgramContext } from "../../../../context/programs/ProgramContext";
// import { notification } from "antd";
// import { useMutation } from "@tanstack/react-query";
// import { FaFileCsv } from "react-icons/fa";
// import { FiArrowLeft, FiX } from "react-icons/fi";
// import Track from "../../../molecules/dashboard/Track";

// const UploadParticipants: FC<IUploadParticipants> = ({
//   onSubmit,
//   hasTrack,
//   closeModal,
//   prevStep,
// }) => {
//   const [tracks, setTracks] = useState<{ name: string; file?: File }[]>([]);
//   const [progress, setProgress] = useState<number[]>([]);
//   const { activeCohort } = useContext(ProgramContext);

//   const inviteParticipantsMutation = useMutation({
//     mutationFn: (payload: { track: string; file: File }) =>
//       api.participant.inviteGroupParticipant(
//         activeCohort?._id,
//         payload.track,
//         payload.file,
//       ),
//     onSuccess: () => {
//       notification.success({ message: "Participants invited successfully!" });
//     },
//     onError: (error: any) => {
//       notification.error({
//         message: "Failed to invite participants. Please try again.",
//       });
//     },
//   });

//   const addTrack = () => {
//     setTracks([...tracks, { name: "" }]);
//   };

//   const handleTrackChange = (index: number, name: string) => {
//     const updatedTracks = [...tracks];
//     updatedTracks[index].name = name;
//     setTracks(updatedTracks);
//   };

//   const handleFileChange = (index: number, file: File) => {
//     const updatedTracks = [...tracks];
//     updatedTracks[index].file = file;
//     setTracks(updatedTracks);
//   };

//   const removeTrack = (index: number) => {
//     const updatedTracks = tracks.filter((_, i) => i !== index);
//     setTracks(updatedTracks);
//   };

//   return (
//     <>
//       <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
//         <ProgressBar
//           height={8}
//           length={2}
//           page={2}
//           absolute={true}
//           gap
//           rounded={false}
//         />
//         <div className="d-flex flex-row justify-content-between">
//           <p onClick={prevStep}>
//             <FiArrowLeft /> Back
//           </p>
//           <FiX className="fs-h3" onClick={closeModal} />
//         </div>
//         <div className="d-flex flex-column gap-2">
//           <h1 className="manrope-600 primary-950 fs-h2">
//             Upload Cohort Participants
//           </h1>
//           <span className="manrope-500 dark-700 fs-body">
//             Upload a list of your learners based on their respective tracks
//           </span>
//         </div>

//         <div className="d-flex flex-column gap-4">
//           {tracks.map((track, index) => (
//             <div key={index} className="mb-4">
//               <TextInput
//                 id={`track-${index}`}
//                 label={`Track ${index + 1}`}
//                 placeHolder="Enter Learning Track"
//                 value={track.name}
//                 onchange={(e) => handleTrackChange(index, e.target.value)}
//               />
//               <DragNDropInput
//                 label={`Upload Participants List for Track ${index + 1}`}
//                 icon={<FaFileCsv className="fs-small-icon dark-300" />}
//                 id={`file-upload-${index}`}
//                 detail="Cohort's list of Participants"
//                 onchange={(file: any) => handleFileChange(index, file)}
//               />
//               <Track
//                 name={track.name}
//                 fileName={track.file?.name || ""}
//                 onRemove={() => removeTrack(index)}
//               />
//             </div>
//           ))}
//           <Button children="Add More Track" action={addTrack} type="button"
//             fill={true}
//             loading={inviteParticipantsMutation.isPending} />
//         </div>

//         <div className="d-flex flex-column align-items-center gap-3">
//           <Button
//             children="Continue"
//             action={onSubmit}
//             type="button"
//             fill={true}
//             loading={inviteParticipantsMutation.isPending}
//           />
//         </div>
//       </form>
//     </>
//   );
// };

// interface IUploadParticipants {
//   onSubmit: () => void;
//   hasTrack: boolean;
//   closeModal: any;
//   prevStep: any;
// }

// export default UploadParticipants;













