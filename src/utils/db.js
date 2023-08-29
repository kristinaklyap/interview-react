export const getData = async (cb) => {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/64eccc189d312622a397a4d8/', {
            headers: {
                "X-Master-Key": "$2b$10$XpNg8Dsy2mrDpteo.QJfrucOvxV3BIe82Zh5S4NfrtpYsgQCHlXW6"
            }
        })
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const postData = async (rootNode) => {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/64eccc189d312622a397a4d8/', {
            method: "PUT",
            headers: {
                "X-Master-Key": "$2b$10$XpNg8Dsy2mrDpteo.QJfrucOvxV3BIe82Zh5S4NfrtpYsgQCHlXW6",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rootNode)
        })
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}