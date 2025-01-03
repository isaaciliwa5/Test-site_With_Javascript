// Function to Pick, Calculate & Display Result to Lower Div
const calculatedNet = () => {
     
    //Pick Values from Input Fields
    const inputGross = parseFloat(document.getElementById("gross").value.
        toLocaleString (undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    const inputJobType = document.getElementById("jobType").value;

    // Calculating Function
    // For Government
    const governmentEmployee = (x) => (x * 0.75);

    // For Private
    const privateEmployee = (x) => (x * 0.7);

    // For Military
    const militaryEmployee = (x) => (x * 1.05);

    // Function to execute calculation
    const calculateNet = () => {
        if (inputJobType === "government") {
            return governmentEmployee(inputGross);
        } else if (inputJobType === "private") {
            return privateEmployee(inputGross);
        } else if (inputJobType === "military") {
            return militaryEmployee(inputGross);
        } else {
            return "Please select employment type";
        };
    };

    // Dipslay result in lower div
    document.getElementById("yourNet").innerHTML = 
        `Your Net Salary is: ${calculateNet().toLocaleString (undefined, 
            {maximumFractionDigits:2, minimumFractionDigits:2})}`;

};