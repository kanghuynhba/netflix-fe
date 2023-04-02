import * as httpRequest from '~/utils/httpRequest';
const apiKey = process.env.REACT_APP_API_KEY;
export const billboard = async (api_key = apiKey, language = 'en-US', with_networks = '213') => {
    try {
        const res = await httpRequest.get('discover/tv', {
            params: {
                api_key,
                language,
                with_networks,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
