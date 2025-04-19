export const allServiceData = async () => {
    const allData = await fetch('http://localhost:3000/servicesData/api/getAll');
    const data = await allData.json();
    return data
};

