export const getDummy = async () => {
    console.log("dummy call")
    const result = await fetch("http://localhost:3000/v1/dummy")
        .then((res) => res.json());
    return result;
}
