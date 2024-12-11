import { notification } from "antd";
import { FC, useState } from "react";
import Modal from "../../../templates/Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import AddSession from "../../forms/Session/AddSession";
import AdditionalSession from "../../forms/Session/AdditionalSession";
import InviteParticipants from "../../forms/Participants/InviteParticipants";




const ParticipantModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [api, contextHolder] = notification.useNotification();

    const nextStep = (data: any) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setCurrentStep(currentStep + 1);
    };

    const handleSuccess = () => {
        api.success({ message: "Participants successfully created!" });
        setModalOpen(false, "participantModal");
        setCurrentStep(1);
        setFormData({});
    };

    const handleError = (error: string) => {
        api.error({ message: "Error", description: error });
    };

    return (
        <>
            {contextHolder}
            <Modal open={modalOpen} setModalOpen={(open: boolean) => setModalOpen(open, "participantModal")}>
                {currentStep === 1 ? (
                    <InviteParticipants />
                ) : null}
                {/* currentStep === 2 ? (
                    <AdditionalSession
                        initialData={formData}
                        onSuccess={handleSuccess}
                    // onError={handleError}
                    />
                ) : null} */}
            </Modal>
        </>
    );
};

export default ParticipantModal;
