export interface AttendanceRecord { id: string; employee: string; date: string; checkIn: string; checkOut: string; status: "Present" | "Late" | "Absent" }
