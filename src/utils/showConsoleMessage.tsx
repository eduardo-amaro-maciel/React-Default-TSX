type Status = "success" | "info" | "error" | "alert";

export default function showConsoleMessage(status: Status, message: string) {
    const configMessage: Record<Status, (message: string) => void> = {
        success: (message: string) => console.log(
            `%c %s ${message} %s`,
            `
            background: #22C55E; color: white; font-weight: bold; font-size: 14px; 
            padding: 5px 15px; border-radius: 10px; margin: 5px 0; width: 100px;
            `,
            '*', '*'
        ),
        info: (message: string) => console.log(
            `%c %s ${message} %s`,
            `
            background: #06B6D4; color: white; font-weight: bold; font-size: 14px; 
            padding: 5px 15px; border-radius: 10px; margin: 5px 0; width: 100px;
            `,
            '*', '*'
        ),
        error: (message: string) => console.log(
            `%c %s ${message} %s`,
            `
            background: #DC2626; color: white; font-weight: bold; font-size: 14px; 
            padding: 5px 15px; border-radius: 10px; margin: 5px 0; width: 100px;
            `,
            '*', '*'
        ),
        alert: (message: string) => console.log(
            `%c %s ${message} %s`,
            `
            background: #EA580C; color: white; font-weight: bold; font-size: 14px; 
            padding: 5px 15px; border-radius: 10px; margin: 5px 0; width: 100px;
            `,
            '*', '*'
        ),
    };

    configMessage[status](message);
}
