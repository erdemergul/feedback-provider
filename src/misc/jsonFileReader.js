const getFileData = (filePath, callBack) => {
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            // Access the data
            callBack(data);
        })
        .catch(error => {
            console.error(`Error fetching or parsing the JSON file: ${error.message}`);
        });
}
export default getFileData;