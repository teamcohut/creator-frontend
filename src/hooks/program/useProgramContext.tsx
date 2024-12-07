import { useContext } from "react";
import { ProgramContext } from "../../context/programs/ProgramContext";

export const useProgramContext = ()=> {
    const context = useContext(ProgramContext);
    if (!context) {
      throw new Error("useProgramContext must be used within an ProgramContextProvider");
    }    
    return context;
  };