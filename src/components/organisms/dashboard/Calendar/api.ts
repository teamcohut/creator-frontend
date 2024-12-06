export const fetchSchedules = async () => {
    const response = await fetch("/api/schedules"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch schedules");
    }
    return response.json();
  };



  
  