
export default function getFileData (filePath : string, callBack : (data: any)=>void){
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            callBack(data);
        })
        .catch(error => {
            console.error(`Error fetching or parsing the JSON file: ${error.message}`);
        });
};