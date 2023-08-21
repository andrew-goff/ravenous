const apiKey = 'VpeVD2_ZS6wsKAM9DM9YV5o2gr7-gXkOKiKcWgUW-XOxBYWoY9l1Qh45UTds4jBYwwiWg9tRTlSjGRaxoSTr2aZUUgltan980MCqUomL4eFoVLp_lTCJWN-m0EvjZHYx';
const apiBaseUrl = 'https://partner-api.yelp.com/v1/';
const Btn = document.getElementById('Btn');

const getBusinessList= async() => {
    const businessEndpoint = '/business';
    const requestParams = `?api_key=${apikey}`;
    const urlToFetch = apiBaseUrl + businessEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);

        if (response.ok === true){
            const jsonResponse = await response.json();
            console.log(json.response);

            const businessList = await jsonResponse.businessList;
            return businessList

        }
    } catch (error) {
        console.log(error);
    }
};

const showBusinessListings = async() => {
    const businessList = document.getElementById('businessList');
    const info = await getBusinessList();
    displayBusinessList(info);
}

Btn.onclick = showBusinessListings();