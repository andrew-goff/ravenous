const apiKey = 'VpeVD2_ZS6wsKAM9DM9YV5o2gr7-gXkOKiKcWgUW-XOxBYWoY9l1Qh45UTds4jBYwwiWg9tRTlSjGRaxoSTr2aZUUgltan980MCqUomL4eFoVLp_lTCJWN-m0EvjZHYx';
const apiBaseUrl = 'https://api.yelp.com/v3';

const businessListings = async() => {
    const businessEndpoint = '/business';
    const requestParams = `?api_key=${apikey}`;
    const urlToFetch = businessEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);
        
        if (response.ok === true){

        }
        
    } catch (error) {
        console.log(error);
    }
}
