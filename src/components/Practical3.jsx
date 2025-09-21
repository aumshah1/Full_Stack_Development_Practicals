import { useState, useEffect } from "react";

export default function Practical3(){
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=> {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div style={styles.container}>
            <h1>Welcome to CHARUSAT!!!</h1>
            <h2>Current Date and Time:</h2>
            <p>{dateTime.toLocaleString()}</p>
        </div>
    );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff0f0",   // soft red/pink background
    width: "500px",                // fixed width for square
    height: "500px",               // fixed height for square
    padding: "20px",               // reduce padding to fit content
    borderRadius: "20px",          // rounded edges
    color: "#222",                 // dark text for readability
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
};

