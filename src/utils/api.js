import axios from 'axios';
const apiKey = 'VpeVD2_ZS6wsKAM9DM9YV5o2gr7-gXkOKiKcWgUW-XOxBYWoY9l1Qh45UTds4jBYwwiWg9tRTlSjGRaxoSTr2aZUUgltan980MCqUomL4eFoVLp_lTCJWN-m0EvjZHYx';
//apiBaseUrl: 'https://partner-api.yelp.com/v1/', 
const cors = 'https://cors-anywhere.herokuapp.com/corsdemo/';
const Btn = document.getElementById('Btn');

export default async function getBusiness(term, location, sortBy) {
    const requestParams = `?api_key=${apiKey}`;
    const url = `https://partner-api.yelp.com/v1//businesses/term=${term}&location=${location}&sort_by=${sortBy}`;
    
    //const urlToFetch = url + apiKey + requestParams;
    const api = await fetch(`${cors}${url}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    });

    try {
        const response = api.json();

        if (response.ok === true){
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            const business = await jsonResponse.business.map((business => {
                return {
                id: business.id,
                imageSrc: business.imageSrc,
                name: business.name,
                address: business.address,
                city: business.city,
                state: business.state,
                zipcode: business.zipcode,
                category: business.category,
                rating: business.rating,
                reviewcount: business.reviewcount,
                }
            }));
            return business;
        }
    } catch (error) {
        console.log(error);
    }
};

/*const getIndividualBusiness = async(business) => {
    const selectedBusiness = getBusiness();

    const url = `https://partner-api.yelp.com/v1//businesses/term=${term}&location=${location}&sort_by=${sortBy}`;
    const requestParams = `?api_key=${apiKey}`;

    //const urlToFetch = apiKey + url + requestParams;
    const apiBiz = await fetch(`${cors}, ${url}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    });

    try {
        selectedBusiness = await apiBiz.json();

        if (selectedBusiness.ok === true){
            const jsonResponse = await selectedBusiness.json();
            console.log(jsonResponse);

            const businessInfo = await jsonResponse.businessInfo.map((business => {
                return {
                    name: business.name,
                    address: business.address,
                    category: business.category,
                    rating: business.rating,
                }
            }
            ));
            return businessInfo;
        }
    } catch (error) {
        console.log(error);
    }
};*/

const createBusinessTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'businessTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};

const createBusinessOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'businessOverview');
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
    const info = await getBusiness();
    displayBusiness(info);
}

//Btn.onclick = getBusiness();