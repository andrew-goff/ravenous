const apiKey = 'VpeVD2_ZS6wsKAM9DM9YV5o2gr7-gXkOKiKcWgUW-XOxBYWoY9l1Qh45UTds4jBYwwiWg9tRTlSjGRaxoSTr2aZUUgltan980MCqUomL4eFoVLp_lTCJWN-m0EvjZHYx';
const apiBaseUrl = 'https://partner-api.yelp.com/v1/';
const Btn = document.getElementById('Btn');

const getBusiness= async() => {
    const businessEndpoint = '/business';
    const requestParams = `?api_key=${apiKey}`;
    const urlToFetch = apiBaseUrl + businessEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);

        if (response.ok === true){
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            const business = await jsonResponse.business;
            return business

        }
    } catch (error) {
        console.log(error);
    }
};

const getIndividualBusiness = async(business) => {
    const selectedBusiness = getBusiness();

    const businessIdEndpoint = '/business/partner_business_id';
    const requestParams = `?api_key=${apiKey}`;

    const urlToFetch = apiBaseUrl + businessIdEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);

        if (response.ok === true){
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            const businessInfo = await jsonResponse.businessInfo;
            return businessInfo;
        }
    } catch (error) {
        console.log(error);
    }
};

const createBusinessTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('partner_business_id', 'businessTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};

const createBusinessOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('partner_business_id', 'businessOverview');
    overviewParagraph.innerHTML = overview;
  
    return overviewParagraph
};

const displayBusiness = (businessInfo) => {
    const businessTextDiv = document.getElementById('businessText');

    const titleHeader = createBusinessTitle(businessInfo.title);
    const overviewText = createBusinessOverview(businessInfo.overview);

    businessTextDiv.appendChild(titleHeader);
    businessTextDiv.appendChild(overviewText);

    //showBtns();
};

const showBusinessListings = async() => {
    const businessInfo = document.getElementById('businessInfo');
    const info = await getIndividualBusiness();
    displayBusiness(info);
}

Btn.onclick = showBusinessListings();